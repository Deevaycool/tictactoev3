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
                World's Best Tic Tac Toe Game
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the ultimate <strong>tic tac toe online</strong> game with our unbeatable AI. Play the classic <strong>xo game</strong> with advanced strategy, multiple difficulty levels, and <strong>tic tac toe 2 player</strong> mode for endless entertainment and challenge.
              </p>
            </div>

            <TicTacToe />

            {/* Introduction Section */}
            <Card className="mt-12 mb-12 p-6 md:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">About This Tic Tac Toe Game</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to the most advanced <strong>tic tac toe game online</strong>! Whether you're looking for a quick <strong>tic tac toe 2 player</strong> match with friends or want to challenge yourself against our sophisticated AI, this platform offers the perfect gaming experience. Our <strong>tic tac toe game</strong> features multiple difficulty levels, from beginner-friendly to nearly impossible, making it suitable for players of all skill levels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This isn't just another <strong>tac toe tic</strong> game – it's a comprehensive platform designed to help you master one of the world's most beloved strategy games. <strong>Play tic tac toe online</strong> anytime, anywhere, with no downloads required. Our responsive design ensures smooth gameplay on desktop, tablet, and mobile devices.
              </p>
            </Card>

            {/* History Section */}
            <Card className="mt-12 p-6 md:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">The Fascinating History of Tic Tac Toe</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Ancient Origins</h3>
                  <p className="leading-relaxed">
                    The <strong>tic tac toe game</strong>, also known as noughts and crosses or <strong>xo game</strong>, has roots dating back to ancient Egypt around 1300 BCE. Archaeological discoveries revealed game boards carved into temple roofing that resemble the modern <strong>tic tac toe</strong> grid. The ancient Romans played a similar game called "Terni Lapilli" (three pebbles at a time), which followed the same basic principles as today's <strong>tic tac toe</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Evolution Through the Ages</h3>
                  <p className="leading-relaxed mb-3">
                    Throughout history, variations of this game appeared across different cultures and civilizations. The game we recognize as modern <strong>tic tac toe</strong> emerged in Britain during the 19th century, where it was called "noughts and crosses." The name "<strong>tic tac toe</strong>" became popular in the United States in the 20th century, though its exact origin remains a subject of debate among historians.
                  </p>
                  <p className="leading-relaxed">
                    The game gained massive popularity as a simple yet strategic pastime that required no equipment beyond paper and pencil. Some players called it "tick tack toe" or variations like "<strong>tack tack toe</strong>" and "<strong>tic tac toc</strong>," but the core gameplay remained consistent across all versions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Digital Revolution</h3>
                  <p className="leading-relaxed">
                    The advent of computers brought <strong>tic tac toe</strong> into the digital age. In 1952, OXO (or Noughts and Crosses) became one of the first video games ever created, running on the EDSAC computer at Cambridge University. This marked the beginning of <strong>tic tac toe</strong>'s journey into the digital realm. Today, you can <strong>play tic tac toe 2 player</strong> online, challenge AI opponents, or even enjoy <strong>google tic tac toe</strong> with a simple search.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Modern Era and Online Gaming</h3>
                  <p className="leading-relaxed">
                    The internet revolutionized how we play the <strong>tic tac toe game</strong>. Online platforms made it possible to <strong>play tic toe</strong> against opponents worldwide, access <strong>tic tac toe game online</strong> services 24/7, and learn advanced strategies from expert players. The game's simple rules combined with its strategic depth made it perfect for both casual gaming and serious competitive play.
                  </p>
                </div>
              </div>
            </Card>

            {/* Game Rules and Strategy Section */}
            <Card className="mt-12 p-6 md:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">How to Play Tic Tac Toe: Complete Guide</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Basic Rules</h3>
                  <p className="leading-relaxed mb-3">
                    The <strong>tic tac toe game</strong> is played on a 3x3 grid. Two players take turns marking spaces, with one player using X and the other using O. The objective is simple: be the first to get three of your marks in a row – horizontally, vertically, or diagonally. Whether you're playing a <strong>tic tac toe 2 player</strong> game with a friend or challenging our AI, these fundamental rules remain the same.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The game starts with an empty 3x3 grid</li>
                    <li>Players alternate turns, with X traditionally going first</li>
                    <li>Each player marks one empty square per turn</li>
                    <li>The first player to align three marks wins</li>
                    <li>If all squares are filled without a winner, the game is a draw</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Winning Strategies</h3>
                  <p className="leading-relaxed mb-3">
                    Mastering the <strong>tic tac toe game</strong> requires understanding key strategic concepts. While the game may seem simple, optimal play involves careful planning and anticipation of your opponent's moves. Here are essential strategies to improve your gameplay:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Center Control:</strong> The center square is the most valuable position, offering four potential winning lines</li>
                    <li><strong>Corner Strategy:</strong> Corners provide three winning opportunities and are strong second choices</li>
                    <li><strong>Fork Creation:</strong> Create situations where you have two ways to win on your next turn</li>
                    <li><strong>Defensive Play:</strong> Always block your opponent's winning moves immediately</li>
                    <li><strong>Think Ahead:</strong> Plan at least two moves in advance to set up winning combinations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Game Variations</h3>
                  <p className="leading-relaxed">
                    While the classic <strong>tic tac toe game</strong> remains most popular, numerous variations exist. Some players enjoy larger grids (4x4 or 5x5), while others explore 3D versions or quantum <strong>tic tac toe</strong> with unique rule modifications. Our platform focuses on the traditional format, allowing you to <strong>play tic tac toe online</strong> in its purest form, whether in <strong>tic tac toe 2 player</strong> mode or against our AI.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Perfect Play and Game Theory</h3>
                  <p className="leading-relaxed">
                    Mathematically, <strong>tic tac toe</strong> is a solved game. With perfect play from both players, every game will end in a draw. This means that if both players make optimal moves, neither can force a win. Our hard difficulty AI implements this perfect strategy using the minimax algorithm, making it theoretically unbeatable. However, this doesn't diminish the game's educational value or entertainment factor, especially when playing the <strong>tac toe tic</strong> game at easier difficulty levels or in <strong>tic tac toe 2 player</strong> mode with friends.
                  </p>
                </div>
              </div>
            </Card>

            {/* Why Play Section */}
            <Card className="mt-12 p-6 md:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Why Play Tic Tac Toe Online?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">🧠 Cognitive Benefits</h3>
                  <p className="leading-relaxed">
                    Playing <strong>tic tac toe game</strong> regularly helps develop strategic thinking, pattern recognition, and decision-making skills. It's an excellent tool for teaching children logic and planning while remaining engaging for adults.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">⚡ Quick Entertainment</h3>
                  <p className="leading-relaxed">
                    Each game takes only minutes to complete, making it perfect for short breaks. <strong>Play tic tac toe online</strong> whenever you have a few spare moments, with no lengthy commitment required.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">👥 Social Connection</h3>
                  <p className="leading-relaxed">
                    The <strong>tic tac toe 2 player</strong> mode makes it easy to connect with friends and family. Share the link and enjoy friendly competition in this timeless <strong>tac toe tic</strong> game.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">🎯 Skill Development</h3>
                  <p className="leading-relaxed">
                    Progress from beginner to expert by challenging our AI at different difficulty levels. Learn advanced strategies and improve your gameplay with each match in this engaging <strong>tic tac toe game online</strong>.
                  </p>
                </div>
              </div>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-12 p-6 md:p-8 bg-card/50 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Can I play this tic tac toe game for free?</h3>
                  <p className="leading-relaxed">
                    Yes! Our <strong>tic tac toe online</strong> platform is completely free to use. You can play unlimited games in both single-player against AI and <strong>tic tac toe 2 player</strong> mode without any cost or registration.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Is it possible to beat the hard AI?</h3>
                  <p className="leading-relaxed">
                    The hard difficulty AI uses perfect play strategy (minimax algorithm), making it theoretically unbeatable with optimal play. However, it's still possible to force a draw or capitalize on creative play patterns. Start with easy or medium difficulty to build your skills before attempting the ultimate challenge.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between this and Google Tic Tac Toe?</h3>
                  <p className="leading-relaxed">
                    While <strong>google tic tac toe</strong> offers a simple implementation, our platform provides advanced features including multiple difficulty levels, detailed statistics, strategic tips, and both human vs human and human vs computer modes. We focus on providing the most comprehensive <strong>tic tac toe game online</strong> experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Can I play this game on mobile devices?</h3>
                  <p className="leading-relaxed">
                    Absolutely! Our <strong>tic tac toe game</strong> is fully responsive and works seamlessly on smartphones, tablets, and desktop computers. <strong>Play tic toe</strong> wherever you are, on any device with a web browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">What are other names for this game?</h3>
                  <p className="leading-relaxed">
                    This classic game goes by many names worldwide. It's commonly called "noughts and crosses" in the UK, "<strong>xo game</strong>" or "<strong>ox game</strong>" in many countries, and sometimes referred to with variations like "tick tack toe," "<strong>tic tac toc</strong>," or "<strong>tack tack toe</strong>." Regardless of what you call it – whether <strong>tic and toe</strong>, <strong>tac toe tic</strong>, or <strong>tic tac toe toe</strong> – the beloved gameplay remains the same across all versions of this timeless <strong>tic tac toe</strong>.
                  </p>
                </div>
              </div>
            </Card>

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
