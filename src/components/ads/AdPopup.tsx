import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdPopupProps {
  showAfterGames?: number;
}

export function AdPopup({ showAfterGames = 3 }: AdPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [gameCount, setGameCount] = useState(0);

  useEffect(() => {
    const handleGameEnd = () => {
      setGameCount(prev => {
        const newCount = prev + 1;
        if (newCount >= showAfterGames) {
          setIsVisible(true);
          return 0;
        }
        return newCount;
      });
    };

    window.addEventListener('gameEnd', handleGameEnd);
    return () => window.removeEventListener('gameEnd', handleGameEnd);
  }, [showAfterGames]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card border-2 border-border rounded-2xl p-6 max-w-2xl mx-4 animate-scale-in">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="min-h-[250px] flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Advertisement Space</div>
        </div>
      </div>
    </div>
  );
}
