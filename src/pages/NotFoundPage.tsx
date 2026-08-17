import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Billion Themes';
  }, []);

  return (
    <main className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl md:text-9xl font-display text-gold opacity-80 mb-6">404</h1>
      <h2 className="heading-md font-display text-cream mb-4">Page Not Found</h2>
      <p className="text-muted mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </main>
  );
}
