import { useEffect, useState } from "react";
import { IData } from "./types";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./components/base/footer";
import MediaCarousel from "./components/media-carousel";
import { Headline } from "./components/headline";
import { shuffleArray } from "./lib/utils";
import Modal from "./components/modal";

function App() {
  const [data, setData] = useState<IData[] | null>(null);
  const [shuffleData, setShuffleData] = useState<IData[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        const dataRes = await res.json();

        setData(dataRes);
        setShuffleData(() => shuffleArray(dataRes));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <main className="flex flex-col pl-0 md:pl-52 min-h-screen bg-dark transition-all">
      <Navigation />

      <div className="flex-1 mb-12 bg-dark text-white">
        {shuffleData && <Hero data={shuffleData[0]} />}

        <Modal />

        <div className="container">
          <section className="mb-12">
            <Headline tag="h2">Top 10</Headline>

            {data && (
              <MediaCarousel
                data={data.slice(0, 10)}
                option={{
                  autoplay: { delay: 3500 },
                  breakpoints: {
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    580: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1100: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  },
                }}
              />
            )}
          </section>

          <section className="mb-12">
            <Headline tag="h2">Trending now</Headline>

            {shuffleData && (
              <MediaCarousel
                data={shuffleData}
                option={{
                  autoplay: { delay: 3000 },
                  breakpoints: {
                    300: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    580: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1100: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  },
                }}
              />
            )}
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default App;
