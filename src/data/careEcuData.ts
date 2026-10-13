import { ServiceItem, BeforeAfterProject, WorkshopStage, CustomerReview, GalleryProject, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Care ECU Solutions',
  legalName: 'Car ECU Solutions Ltd',
  companyNumber: '13689408',
  phone: '+44 755 453 5533',
  phoneDisplay: '07554 535533',
  internationalPhone: '+44 755 453 5533',
  email: 'CarEcuSolutions@mail.com',
  address: {
    line1: 'Unit C4, Seedbed Centre, Davison Way',
    locality: 'Romford',
    region: 'Essex',
    postalCode: 'RM7 0AZ',
    secondaryPremises: '164 Mawney Road, Romford, RM7 7BE'
  },
  openingHours: {
    weekdays: '09:00 - 18:00',
    saturday: '10:00 - 16:00',
    sunday: 'Closed',
    onlineSupport: '24/7 Online Enquiry Support'
  },
  metrics: {
    experienceYears: '10+',
    vehiclesResolved: '5,000+',
    satisfactionRate: '99.4%',
    warrantyMonths: '12 Months'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ecu-repairs',
    title: 'ECU Repair & Component Diagnostics',
    shortDescription: 'Component-level motherboard repair, micro-soldering, burned driver replacements and water damage restoration.',
    fullDescription: 'Instead of spending thousands on a new dealer replacement unit that requires complex coding, we diagnose and restore faulty Electronic Control Units directly on our dedicated test bench. Our team isolates defective transistors, microprocessors, capacitors, and PCB traces with microsoldering precision.',
    category: 'ecu',
    turnaroundTime: '24 - 48 Hours',
    warranty: '12 Months Guarantee',
    symptoms: [
      'Engine fails to start / intermittent crank-no-start',
      'Loss of communication on CAN-bus network',
      'Constant misfire on dedicated cylinder injector driver',
      'Check Engine light with internal hardware fault codes',
      'Water ingress from clogged scuttle drains or wash water'
    ],
    supportedProtocols: ['Bosch MED17 / EDC17', 'Continental / Siemens SIMOS', 'Marelli IAW', 'Delphi DCM', 'Denso Gen 2'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Cpu'
  },
  {
    id: 'ecu-remapping',
    title: 'ECU Remapping & Calibration',
    shortDescription: 'Custom Stage 1 & Stage 2 software calibration engineered for responsive power, torque delivery and fuel efficiency.',
    fullDescription: 'Safe, bespoke software calibrations tailored specifically to your vehicle make, engine condition, and transmission tolerances. We optimize boost pressure, ignition timing, and fuel rail parameters without pushing past factory safety limiters.',
    category: 'coding',
    turnaroundTime: '2 - 3 Hours',
    warranty: 'Lifetime Software Integrity',
    symptoms: [
      'Sluggish low-end throttle response and turbo lag',
      'Excessive fuel consumption on highway commutes',
      'Flat torque curve during overtaking maneuvers',
      'Heavy towing vehicle requiring reinforced low-RPM pulling power'
    ],
    supportedProtocols: ['OBD-II Direct Flash', 'Bench Boot Tricore', 'Autotuner', 'K-TAG', 'Flex Magic'],
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Gauge'
  },
  {
    id: 'vehicle-diagnostics',
    title: 'Dealer-Level Diagnostics',
    shortDescription: 'Advanced oscilloscopes, live CAN bus packet sniffers, and OEM diagnostic protocols for deep root-cause fault finding.',
    fullDescription: 'Where standard generic code readers fail to provide actionable data, our dealer-grade diagnostic platforms (ODIS, ISTA/D, Xentry, Autel MaxiSys Ultra) dive into vehicle network architectures, live sensor wave patterns, and live actuation tests to expose elusive intermittent faults.',
    category: 'diagnostics',
    turnaroundTime: 'Same Day Assessment',
    warranty: 'Report & Verification Included',
    symptoms: [
      'Limp home mode with zero fault codes on basic scanners',
      'Multiple conflicting warning lamps on dashboard cluster',
      'Intermittent electrical cutouts or battery drain faults',
      'CAN communication network bus timeouts'
    ],
    supportedProtocols: ['ISO 14229 UDS', 'CAN-FD', 'DoIP (Diagnostic over IP)', 'FlexRay', 'K-Line'],
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Activity'
  },
  {
    id: 'immobiliser-services',
    title: 'Immobiliser Repair & Synchronisation',
    shortDescription: 'Anti-theft system restoration, EWS/CAS/BDC synchronisation, and immobiliser defeat for motorsport/bench applications.',
    fullDescription: 'Solve stubborn immobiliser lockouts, rolling code desynchronisations between ECU and BCM/CAS modules, and damaged EEPROM security credentials. We restore vehicle starting authorisation without costly dealer module replacements.',
    category: 'ecu',
    turnaroundTime: 'Same Day to 24 Hours',
    warranty: '12 Months Guarantee',
    symptoms: [
      'Car cranks but immediately dies with key symbol on dash',
      'Key not recognized / "Immobilizer Active" cluster prompt',
      'Donor ECU installed without security matching',
      'Corrupted rolling code counter following low battery jump-start'
    ],
    supportedProtocols: ['BMW CAS1-4 / FEM / BDC', 'VAG Immo 4 / Immo 5 / MQB', 'Mercedes FBS3 / FBS4', 'Ford PATS'],
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop',
    iconName: 'ShieldCheck'
  },
  {
    id: 'car-key-programming',
    title: 'Key Programming & All Keys Lost',
    shortDescription: 'Precision transponder programming, smart proximity fob generation, and bench key calculation when all keys are lost.',
    fullDescription: 'Whether you require an additional OEM backup key or have suffered the misfortune of losing all vehicle keys, our bench programming capabilities generate new transponder chips and proximity remotes directly from ECU / EEPROM memory data.',
    category: 'keys',
    turnaroundTime: '1 - 2 Hours / Mobile Option',
    warranty: '12 Months Fob Hardware',
    symptoms: [
      'All vehicle keys lost or stolen with vehicle locked',
      'Spare smart fob needed for family or fleet usage',
      'Transponder coil damaged after key drop or water exposure',
      'Key blade cut but remote won\'t start the ignition'
    ],
    supportedProtocols: ['Hitag 2 / Hitag Pro', 'Megamos Crypto 48', 'PCF79xx', 'NXP Smart Transponders'],
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Key'
  },
  {
    id: 'ecu-data-recovery',
    title: 'ECU Data Recovery & Cloning',
    shortDescription: 'Full 1:1 bit-level data extraction, Flash and EEPROM transfer to donor hardware without dealer adaptation.',
    fullDescription: 'When an original engine ECU is physically broken or burnt beyond repair, we extract the internal Flash and EEPROM maps, vehicle VIN, injector calibration codes, and immobiliser authentication records to clone them identically into a clean replacement module.',
    category: 'ecu',
    turnaroundTime: '24 Hours',
    warranty: 'Plug-and-Play Guarantee',
    symptoms: [
      'Shattered or physically cracked ECU casing from collision',
      'Internal micro-controller unreadable via diagnostic port',
      'Replacement donor ECU purchased requiring plug-and-play setup',
      'Need complete binary backup before risky software procedures'
    ],
    supportedProtocols: ['BDM100', 'JTAG / Nexus', 'Bootmode Infineon Aurix & TriCore', 'Bench MPC55xx'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Database'
  },
  {
    id: 'module-coding',
    title: 'Online & Offline Coding / Retrofits',
    shortDescription: 'Dealer-level module initialization, component protection removal, retrofitting modern OEM features and software updates.',
    fullDescription: 'Using authorized manufacturer online portals and specialized engineering software, we carry out component protection removal, module adaptation, coding for retrofitted hardware (e.g. digital dashboards, reversing cameras, matrix headlights), and firmware updates.',
    category: 'coding',
    turnaroundTime: '1 - 4 Hours',
    warranty: 'Configuration Backed Up',
    symptoms: [
      'Used replacement module locked in "Component Protection"',
      'New ABS, steering angle or body control module needs commissioning',
      'Retrofitted OEM navigation, digital cluster or sport steering wheel',
      'Software updates to resolve known factory bug advisories'
    ],
    supportedProtocols: ['BMW ISTA/P & E-Sys', 'VAG ODIS Service & Engineering', 'Mercedes Vediamo & DTS Monaco'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    iconName: 'Code'
  },
  {
    id: 'airbag-module-repair',
    title: 'Airbag / SRS Module Crash Data Reset',
    shortDescription: 'Clear permanent crash history and pyrotechnic deployment flags from SRS modules without buying costly replacements.',
    fullDescription: 'After an impact, SRS modules lock permanently with stored crash data codes that standard scan tools cannot erase. We access the internal EEPROM or SPI memory, safely reset the collision records to virgin state, and restore normal diagnostic readiness.',
    category: 'ecu',
    turnaroundTime: 'Same Day to 24 Hours',
    warranty: '12 Months Guarantee',
    symptoms: [
      'Airbag warning light stays on continuously after collision repair',
      'Hard fault code "Crash Event Stored - Replace Module" (e.g., B1193:00)',
      'Dealership insists on buying a costly new unprogrammed SRS unit',
      'Seat belt pre-tensioners replaced but system remains offline'
    ],
    supportedProtocols: ['Bosch Airbag SPI', 'Autoliv', 'Continental', 'TRW', 'Takata'],
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
    iconName: 'LifeBuoy'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'project-water-damage',
    title: 'Bosch EDC17 Water Ingress Restoration',
    vehicle: 'Volkswagen Golf GTD 2.0 TDI',
    faultCode: 'DTC P0606 — Internal Processor Fault & No Comms',
    issueDescription: 'Severe moisture penetration through degraded silicone seal caused green copper oxidation across main power rails and BDM micro-via tracks. Vehicle failed to start.',
    resolutionDescription: 'Ultrasonic chemical deoxidation bath, precision micro-jumper wire reconstruction of 5 fractured traces, replacement of 2 shorted power decoupling caps, and UV conformal protective re-coating.',
    beforeImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    beforeLabel: 'Corroded PCB & Severed Traces',
    afterLabel: 'Restored & Conformal Sealed',
    category: 'Water Damage Restoration',
    savingsEstimate: 'Saved customer £1,450 vs VW dealer quote'
  },
  {
    id: 'project-injector-driver',
    title: 'Siemens Continental SID807 Injector Driver Mosfet',
    vehicle: 'Ford Transit Custom 2.2 TDCi',
    faultCode: 'DTC P0203 — Cylinder 3 Injector Circuit Malfunction',
    issueDescription: 'High-current injector switching MOSFET suffered thermal runaway and catastrophic silicon burn-through, killing power delivery to cylinder 3 and triggering immediate limp mode.',
    resolutionDescription: 'Desoldered burnt power MOSFET, cleaned carbonized FR4 substrate, applied new thermal dissipation compound, and micro-soldered genuine N-Channel automotive rated MOSFET.',
    beforeImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop',
    beforeLabel: 'Burnt Silicon Channel',
    afterLabel: 'Replaced & Thermal Verified',
    category: 'Power Stage Repair',
    savingsEstimate: 'Turnaround in 24 hours — Saved £920'
  },
  {
    id: 'project-connector-corrosion',
    title: 'BMW MEVD17.2 Multi-Pin Connector Pin Rebuild',
    vehicle: 'BMW 335i F30 N55',
    faultCode: 'DTC 1F2101 — Valvetronic Position Sensor Line Break',
    issueDescription: 'Coolant migration through harness wicking caused corrosion and shearing of 4 delicate gold-plated signal pins on the primary ECU connector block.',
    resolutionDescription: 'Extracted fractured header pins, reconstructed internal multi-layer PCB solder pads, installed new OEM gold-plated header pins, and sealed with automotive-grade moisture barrier.',
    beforeImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    beforeLabel: 'Sheared Corroded Terminals',
    afterLabel: 'Re-Pinned & Tested to 40A',
    category: 'Terminal Restoration',
    savingsEstimate: 'Avoided complete engine wiring harness swap'
  },
  {
    id: 'project-instrument-cluster',
    title: 'Mercedes-Benz W204 EIS / Instrument Cluster Display Repair',
    vehicle: 'Mercedes-Benz C220 CDI',
    faultCode: 'Blacked out center display & Key Recognition Intermittent',
    issueDescription: 'Failing surface-mount power inductor and fractured solder joints on the processor BGA caused erratic display flickering and intermittent electronic ignition switch (EIS) lockout.',
    resolutionDescription: 'Infrared BGA reflow of the main graphics processor, replacement of SMPS smoothing caps, and bench verification on simulated CAN bus cluster rig.',
    beforeImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    beforeLabel: 'Flickering / Dead Pixels',
    afterLabel: 'Crisp Display & Restored EIS',
    category: 'Instrument & EIS Repair',
    savingsEstimate: 'Fixed same-day — Saved £780'
  }
];

export const WORKSHOP_STAGES: WorkshopStage[] = [
  {
    step: '01',
    shortName: 'CONNECT',
    title: 'High-Level Connection & Network Health Scan',
    description: 'We connect your vehicle or isolated ECU module to our diagnostic harnesses and bench power units. We interrogate all on-board controllers, inspect CAN bus voltage levels, and record complete freeze-frame diagnostic trouble codes (DTCs).',
    technicalDetails: [
      'Dual-channel CAN bus voltage differential measurement (2.5V nominal)',
      'Interrogation of gateway communication tables and module status',
      'Extraction of live freeze-frame engine operating parameters',
      'Safe bench power supply with precision current-limiting'
    ],
    metrics: [
      { label: 'Sampling Rate', value: '500 kbit/s CAN' },
      { label: 'Network Scan Time', value: '< 90 Seconds' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop',
    badge: 'STAGE 01 — DIAGNOSTIC LINK'
  },
  {
    step: '02',
    shortName: 'DIAGNOSE',
    title: 'Component Inspection & Logic Waveform Analysis',
    description: 'The unit is mounted under high-magnification stereomicroscopes. We probe circuit rails, analyze quartz crystal oscillation, evaluate EEPROM data checksums, and check driver MOSFET response using mixed-signal oscilloscopes.',
    technicalDetails: [
      'Visual examination under 45x stereo optical magnification',
      'Logic analyzer verification of SPI / I2C EEPROM bus communication',
      'Thermal imaging inspection to locate parasitic shorts or overheating chips',
      'Checksum integrity analysis across Flash & EEPROM binary memory'
    ],
    metrics: [
      { label: 'Microscope Zoom', value: 'Up to 50x' },
      { label: 'Thermal Precision', value: '±0.5°C FLIR' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    badge: 'STAGE 02 — BOARD ROOT CAUSE'
  },
  {
    step: '03',
    shortName: 'REPAIR',
    title: 'Precision Micro-Soldering & Component Restoration',
    description: 'Faulty chips, burnt power transistors, corroded tracks, or failed flash memories are desoldered using temperature-regulated hot-air stations. We micro-solder certified automotive-grade replacements and rebuild fragile copper vias.',
    technicalDetails: [
      'JBC micro-soldering tools with micro-chisel and needle tips',
      'Lead-free / leaded alloy restoration tailored to substrate thermal expansion',
      'Trace jumper wiring with 0.05mm enameled copper bond wire',
      'Automotive polyurethane / silicone conformal coating for moisture sealing'
    ],
    metrics: [
      { label: 'Solder Precision', value: '0.05mm Traces' },
      { label: 'Replacement Parts', value: 'OEM Grade Only' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop',
    badge: 'STAGE 03 — SURGICAL REPAIR'
  },
  {
    step: '04',
    shortName: 'TEST',
    title: 'Dynamic Bench Simulation & 100% Verification',
    description: 'Before any repaired unit leaves our workshop, it is mounted on our dynamic bench simulator. We simulate engine crankshaft rotation, sensor inputs, injector trigger signals, and thermal cycling to guarantee flawless on-vehicle performance.',
    technicalDetails: [
      'Crankshaft / camshaft sensor 60-2 trigger wave simulation',
      'Injector and ignition coil firing confirmation under simulated engine load',
      'Thermal chamber soak testing (-10°C to +85°C) for intermittent fault exclusion',
      'Full diagnostic report and 12-month backed warranty seal'
    ],
    metrics: [
      { label: 'Simulation Range', value: '800 - 7,000 RPM' },
      { label: 'Final Test Pass', value: '100% Verified' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    badge: 'STAGE 04 — BENCH CERTIFIED'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Mark Henderson',
    vehicle: 'Volkswagen Transporter T6 Camper',
    rating: 5,
    reviewText: 'Huge thanks for the assistance with our camper van that had a complex wiring issue. The professionals from Car ECU Solutions re-wired it, diagnosed the CAN bus fault and explained everything clearly. Highly recommend their service!',
    source: 'Google Review',
    date: 'Verified Client',
    serviceType: 'Vehicle Diagnostics & CAN Rewiring'
  },
  {
    id: 'rev-2',
    author: 'David R.',
    vehicle: 'Classic Mercedes-Benz 500SL',
    rating: 5,
    reviewText: 'Brought in my classic car with persistent ignition and electronics gremlins that two local garages gave up on. Car ECU Solutions pinpointed the electronic control issue and improved its performance through precision wiring and ECU calibration. Truly skilled technicians.',
    source: 'Verified Client',
    date: 'Verified Client',
    serviceType: 'ECU Calibration & Electronics'
  },
  {
    id: 'rev-3',
    author: 'Sarah Jenkins',
    vehicle: 'Audi A4 2.0 TDI',
    rating: 5,
    reviewText: 'Swift action and skilled staff! My vehicle was in limp mode with an AdBlue and ECU communication failure. They had it diagnosed, repaired, and back on the road in minimum time. Truly top-tier auto electricians in Romford.',
    source: 'Google Review',
    date: 'Verified Client',
    serviceType: 'AdBlue / ECU System Repair'
  },
  {
    id: 'rev-4',
    author: 'James Thorpe',
    vehicle: 'BMW 435d xDrive',
    rating: 5,
    reviewText: 'Lost all keys for my BMW and the main dealer quoted me £1,800 and 3 weeks wait for a whole new CAS module and steering lock. Car ECU Solutions programmed a new OEM smart key directly on the bench and had me driving the next morning. Lifesavers!',
    source: 'Google Review',
    date: 'Verified Client',
    serviceType: 'Key Programming & All Keys Lost'
  },
  {
    id: 'rev-5',
    author: 'Tariq Al-Mansoor',
    vehicle: 'Range Rover Sport 3.0 SDV6',
    rating: 5,
    reviewText: 'Water ingress into the tailgate module caused complete battery drain overnight. The team tracked down the microscopic short on the PCB board, rebuilt the trace, and re-flashed the software. Saved me over £1,200 compared to Land Rover.',
    source: 'Verified Client',
    date: 'Verified Client',
    serviceType: 'ECU Repair & Data Recovery'
  },
  {
    id: 'rev-6',
    author: 'Craig Phillips',
    vehicle: 'Ford Focus RS Mk3',
    rating: 5,
    reviewText: 'Custom ECU remapping and offline adaptation done here. The throttle response is razor-sharp and power delivery is silky smooth across the whole rev range. Extremely knowledgeable team who truly understand automotive electronics.',
    source: 'Google Review',
    date: 'Verified Client',
    serviceType: 'ECU Remapping & Coding'
  },
  {
    id: 'rev-7',
    author: 'Dean Robinson',
    vehicle: 'Vauxhall Vivaro 1.6 CDTi',
    rating: 5,
    reviewText: 'Van wouldn\'t start and had intermittent injector circuit codes. Sent the ECU by courier on Tuesday, had it bench tested, repaired, and back in my hands by Thursday morning. Professional communication and honest pricing.',
    source: 'Google Review',
    date: 'Verified Client',
    serviceType: 'Postal ECU Bench Repair'
  },
  {
    id: 'rev-8',
    author: 'Elena Rostova',
    vehicle: 'Mercedes E-Class W213',
    rating: 5,
    reviewText: 'Airbag module crash data reset performed after repair work. Genuine dealer-level equipment, quick turnaround in under 2 hours, and all warning lights cleared cleanly. Highly impressed with the technical standard.',
    source: 'Verified Client',
    date: 'Verified Client',
    serviceType: 'Airbag Module Crash Reset'
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'gal-1',
    title: 'High-Density BGA Micro-Soldering',
    category: 'Micro-Soldering',
    description: 'Replacing damaged TriCore TC1797 processor on Bosch MED17 motherboard under stereo microscope.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'Audi S3 2.0 TFSI',
    equipmentUsed: 'JBC Precision Hot Air & Stereomicroscope'
  },
  {
    id: 'gal-2',
    title: 'CAN Bus Oscilloscope Waveform Capture',
    category: 'Diagnostics',
    description: 'Capturing high-speed CAN network differential signals to pinpoint physical bus termination fault.',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'Porsche Cayenne Turbo',
    equipmentUsed: 'PicoScope 4-Channel Automotive Scope'
  },
  {
    id: 'gal-3',
    title: 'Bench EEPROM Reading & Key Generation',
    category: 'Keys & Immo',
    description: 'Direct bench reading of 95640 EEPROM memory to extract ISN and crypto keys for immobiliser sync.',
    imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'BMW M4 F82',
    equipmentUsed: 'Autel IM608 Pro & XP400'
  },
  {
    id: 'gal-4',
    title: '1:1 Full Binary ECU Clone to Donor Unit',
    category: 'Bench Repair',
    description: 'Extracting entire internal flash and micro-code from water damaged unit to clean donor ECU.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'Mercedes C63 AMG',
    equipmentUsed: 'Autotuner Bench Mode'
  },
  {
    id: 'gal-5',
    title: 'Instrument Cluster Stepper & Screen Overhaul',
    category: 'Bench Repair',
    description: 'Renewed ribbon cables and recalibrated stepper motors on classic performance instrument cluster.',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'Classic BMW E46 M3',
    equipmentUsed: 'OEM Gauge Calibrator & Soldering Station'
  },
  {
    id: 'gal-6',
    title: 'Component Protection Removal & Online Coding',
    category: 'Diagnostics',
    description: 'Authorized OEM server commissioning of replacement radar cruise and digital cockpit modules.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    vehicle: 'Volkswagen Arteon R-Line',
    equipmentUsed: 'ODIS Official Diagnostic Server'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is an ECU and how do I know if mine has a fault?',
    answer: 'The Engine Control Unit (ECU) is the master computer of your vehicle, managing fuel injection, ignition timing, emissions, boost pressure, and communication between dozens of sub-systems. Common signs of a failing ECU include intermittent crank-no-start, sudden engine stalling, individual cylinder misfires despite good coils and injectors, permanent limp home mode, or complete loss of scan tool communication on the CAN bus network.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'Can my ECU genuinely be repaired instead of buying a new one?',
    answer: 'Yes! In over 85% of cases, ECU failures are caused by specific component breakdowns—such as burnt injector driver transistors (MOSFETs), fractured solder joints from engine heat/vibration, corroded traces from water ingress, or corrupted EEPROM memory. Rather than spending £1,500 - £3,000+ at a main dealer for a brand new unit (which often has weeks of backorder), our team repairs the physical circuit board at component level, saving you up to 75% while preserving your original vehicle coding and immobiliser keys.',
    category: 'Repair Process'
  },
  {
    id: 'faq-3',
    question: 'What is your standard turnaround time for bench repairs?',
    answer: 'Our standard bench diagnostic and repair turnaround is 24 to 48 hours from receipt of the unit at our Romford workshop. For urgent breakdown situations, we offer same-day testing and express repair upon prior booking. For customers using our UK-wide postal service, we test and report back on the day of delivery.',
    category: 'Repair Process'
  },
  {
    id: 'faq-4',
    question: 'How does your UK postal repair service work if I am outside Essex?',
    answer: 'It is straightforward and reliable: 1) Fill out our online enquiry form to receive a job reference number and packing instructions. 2) Securely wrap your ECU module in anti-static bubble wrap and package in a sturdy box. 3) Send it via Royal Mail Special Delivery Guaranteed or an insured courier. 4) Once it arrives at Unit C4 Seedbed Centre in Romford, our engineers bench test it and phone you with a full diagnostic breakdown and fixed quote before commencing work. Once repaired and verified, we ship it back fully tracked.',
    category: 'Postal Service'
  },
  {
    id: 'faq-5',
    question: 'Do I need to send my vehicle keys or immobiliser box with the ECU?',
    answer: 'For standard hardware repairs (such as injector drivers, power supplies, or water damage restoration), we usually only require the ECU itself. However, for key programming, "all keys lost" jobs, or certain immobiliser synchronisations (e.g. BMW CAS/FEM, VAG Immo, Mercedes EIS), we may require your key fob or related module so we can bench-test the full authentication handshake. We will advise you explicitly when you submit your enquiry.',
    category: 'Keys & Remapping'
  },
  {
    id: 'faq-6',
    question: 'What warranty do you provide on your repairs?',
    answer: 'All our hardware circuit board repairs, component replacements, and cloned donor units carry a comprehensive 12-Month Care ECU Solutions Guarantee. We test each unit extensively under simulated load before dispatch to ensure long-term durability.',
    category: 'Repair Process'
  },
  {
    id: 'faq-7',
    question: 'Can you reset an airbag module after crash deployment?',
    answer: 'Yes. When airbags or seatbelt tensioners deploy in an accident, modern SRS modules write permanent "hard crash data" into internal non-volatile EEPROM memory that ordinary scan tools cannot clear. Dealerships routinely demand you buy a brand new module. We extract and rewrite the memory on the bench, wiping the crash event flags and restoring the module to factory virgin state ready for your replacement safety hardware.',
    category: 'Repair Process'
  },
  {
    id: 'faq-8',
    question: 'Will ECU remapping affect my car’s reliability or MOT compliance?',
    answer: 'Our custom software calibrations are engineered within the safe thermal and mechanical tolerances established by the original vehicle manufacturer. We do not apply generic "file dumps." We tune fuel delivery, spark advance, and boost smoothly, retaining all factory limp-mode safeguards and MOT emissions compliance. Many customers also experience a 5-15% improvement in MPG during cruising.',
    category: 'Keys & Remapping'
  }
];
