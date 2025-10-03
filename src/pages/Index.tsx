import TicTacToe from '@/components/TicTacToe';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/ui/footer-section';
import { AdBanner } from '@/components/ads/AdBanner';
import { AdPopup } from '@/components/ads/AdPopup';
import { AdSlider } from '@/components/ads/AdSlider';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Top Ad Banner - Leaderboard */}
      <div className="w-full bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto min-h-[90px] flex items-center justify-center py-2">
          <AdBanner id="ad-top-banner" className="w-full max-w-[728px] min-h-[90px]" />
        </div>
      </div>

      <div className="flex">
        {/* Left Ad Sidebar - Skyscraper */}
        <aside className="hidden lg:block w-48 xl:w-64 bg-muted/20 border-r border-border min-h-screen sticky top-0">
          <div className="p-3 h-full flex flex-col items-center pt-8 gap-6">
            <AdBanner id="ad-left-1" className="w-full max-w-[160px] min-h-[600px] bg-muted/10 rounded" format="vertical" />
            <AdBanner id="ad-left-2" className="w-full max-w-[160px] min-h-[250px] bg-muted/10 rounded" format="vertical" />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen flex flex-col">
          <div className="flex-1 px-4 py-8 max-w-7xl mx-auto w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Tic-Tac-Go
              </h1>
              <p className="text-xl text-muted-foreground">
                Challenge the Unbeatable AI
              </p>
            </div>

            {/* Mid-content Ad */}
            <div className="mb-8 flex justify-center">
              <AdBanner id="ad-mid-content" className="w-full max-w-[728px] min-h-[90px] bg-muted/10 rounded" />
            </div>

            <TicTacToe />

            {/* Bottom content Ad */}
            <div className="mt-8 flex justify-center">
              <AdBanner id="ad-bottom-content" className="w-full max-w-[728px] min-h-[90px] bg-muted/10 rounded" />
            </div>
          </div>

          <Footer />
        </main>

        {/* Right Ad Sidebar */}
        <aside className="hidden lg:block w-48 xl:w-64 bg-muted/20 border-l border-border min-h-screen sticky top-0">
          <div className="p-3 h-full flex flex-col items-center pt-8 gap-6">
            <AdBanner id="ad-right-1" className="w-full max-w-[160px] min-h-[600px] bg-muted/10 rounded" format="vertical" />
            <AdBanner id="ad-right-2" className="w-full max-w-[160px] min-h-[250px] bg-muted/10 rounded" format="vertical" />
          </div>
        </aside>
      </div>

      {/* Popup Ad (shows after 3 games) */}
      <AdPopup showAfterGames={3} />

      {/* Sliding Ad (bottom-right corner) */}
      <AdSlider />
    </div>
  );
};

export default Index;
