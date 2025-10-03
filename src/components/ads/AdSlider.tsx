import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AdSlider() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 animate-slide-up">
      <div className="relative bg-card border-2 border-primary/50 rounded-xl p-4 shadow-lg max-w-sm">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-1 right-1 h-6 w-6"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>
        <div className="min-h-[100px] flex items-center justify-center pr-6">
          <div className="text-muted-foreground text-xs">Advertisement</div>
        </div>
      </div>
    </div>
  );
}
