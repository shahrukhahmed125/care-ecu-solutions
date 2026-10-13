import express from 'express';
import net from 'net';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

function getAvailablePort(port: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        resolve(getAvailablePort(port + 1));
        return;
      }

      reject(error);
    });

    server.listen(port, '0.0.0.0', () => {
      const address = server.address();
      const actualPort = typeof address === 'object' && address ? address.port : port;

      server.close(() => resolve(actualPort));
    });
  });
}

app.use(express.json());

// In-memory enquiry store for diagnostic inquiries
const enquiriesStore: Array<{
  id: string;
  timestamp: string;
  data: any;
}> = [];

// Working API endpoint for contact & diagnostic quotes
app.post('/api/enquire', (req, res) => {
  const { name, email, phone, vehicleMake, vehicleModel, serviceRequired, faultDescription } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required contact fields' });
  }

  const referenceId = `CECU-${Date.now().toString().slice(-6)}`;
  const record = {
    id: referenceId,
    timestamp: new Date().toISOString(),
    data: req.body
  };

  enquiriesStore.push(record);
  console.log(`[Care ECU Solutions] New Enquiry Logged: ${referenceId}`, record);

  return res.status(200).json({
    success: true,
    referenceId,
    message: 'Enquiry received. An ECU diagnostic engineer will contact you shortly.',
    details: {
      workshop: 'Unit C4, Seedbed Centre, Davison Way, Romford RM7 0AZ',
      phone: '+44 755 453 5533',
      email: 'CarEcuSolutions@mail.com'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    workshop: 'Care ECU Solutions Romford',
    enquiriesReceived: enquiriesStore.length
  });
});

async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  const requestedPort = Number(process.env.PORT) || 3000;
  const port = await getAvailablePort(requestedPort);

  app.listen(port, '0.0.0.0', () => {
    console.log(`Care ECU Solutions server running on http://0.0.0.0:${port}`);
  });
}

startServer();
