export const FALLBACK_CAR_IMAGE = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== FALLBACK_CAR_IMAGE) {
    target.src = FALLBACK_CAR_IMAGE;
  }
};
