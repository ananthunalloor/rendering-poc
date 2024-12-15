import { useEffect, useState } from "react";

export type CardData = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

const App = () => {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api.sampleapis.com/coffee/hot");
      const data = await response.json();
      setData(data);
    };

    getData();
  }, [setData]);

  return (
    <div className="p-6 flex flex-col w-full h-full">
      <h1 className="py-2">Client-Side Rendering (CSR)</h1>
      {data.length === 0 ? (
        <div>loading..</div>
      ) : (
        <div className="flex flex-row flex-grow flex-wrap gap-4">
          {data.map((coffee) => (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              key={coffee.id}
            >
              <img className="w-full" src={coffee.image} alt={coffee.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{coffee.title}</div>
                <p className="text-gray-700 text-base">{coffee.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {coffee.ingredients.map((ing) => (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    key={ing}
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
