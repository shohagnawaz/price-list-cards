import React, { useEffect } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useEffect([]);

  useEffect(() => {
    fetch("prices.json")
      .then(res => res.json())
      .then(data => setPrices(data))
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center text-purple-900 bg-purple-300 p-4">
        Awesome Affordable Prices
      </h2>
        {
            prices.map(price => 
                <PriceCard 
                    key={price.id} 
                    price={price}
                ></PriceCard>
        )}
    </div>
  );
};

export default PriceList;
