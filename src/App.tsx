import { useEffect, useState } from "react";
import MediaCard from "./components/media-card";
import { IData } from "./types";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./components/base/footer";

function App() {
  const [data, setData] = useState<IData[] | null>(null);

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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="flex flex-col pl-52 min-h-screen bg-dark">
      <Navigation />

      <div className="flex-1 mb-12 bg-dark text-white">
        {data && <Hero data={data[0]} />}

        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

          <div className="grid grid-cols-4 gap-8">
            {data &&
              data.map((item) => <MediaCard key={item.id} data={item} />)}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default App;
