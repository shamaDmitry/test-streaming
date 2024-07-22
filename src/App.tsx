import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="bg-[#141414] text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src="https://picsum.photos/200/300?random=3"
                    alt="Movie Thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Stranger Things</h3>
                  <p className="text-sm text-[#a5a5a5] line-clamp-2">
                    When a young boy vanishes, a small town uncovers a mystery
                    involving secret experiments, terrifying supernatural
                    forces, and one strange little girl.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-[#a5a5a5]">
                    <span>2016</span>
                    <span className="mx-2">•</span>
                    <span>Drama, Sci-Fi, Horror</span>
                    <span className="mx-2">•</span>
                    <span>TV-14</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">The Queen's Gambit</h3>
                  <p className="text-sm text-[#a5a5a5] line-clamp-2">
                    In a post-World War II era, a young chess prodigy rises from
                    an orphanage to challenge the male-dominated world of
                    competitive chess.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-[#a5a5a5]">
                    <span>2020</span>
                    <span className="mx-2">•</span>
                    <span>Drama, Period</span>
                    <span className="mx-2">•</span>
                    <span>TV-MA</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Squid Game</h3>
                  <p className="text-sm text-[#a5a5a5] line-clamp-2">
                    A mysterious invitation to join the game is sent to people
                    at risk who are in dire need of money. 456 participants from
                    all walks of life are locked into a secret location where
                    they compete in a series of children's games, with the
                    winner receiving a ₩45.6 billion prize.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-[#a5a5a5]">
                    <span>2021</span>
                    <span className="mx-2">•</span>
                    <span>Drama, Thriller</span>
                    <span className="mx-2">•</span>
                    <span>TV-MA</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Movie Thumbnail"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">Money Heist</h3>
                  <p className="text-sm text-[#a5a5a5] line-clamp-2">
                    A criminal mastermind who goes by "The Professor" has a plan
                    to pull off the biggest heist in recorded history -- to
                    print billions of euros in the Royal Mint of Spain.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-[#a5a5a5]">
                    <span>2017</span>
                    <span className="mx-2">•</span>
                    <span>Crime, Drama</span>
                    <span className="mx-2">•</span>
                    <span>TV-MA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl text-red-500 font-bold underline">
          Hello world!
        </h1>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
