import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = ({ category }) => {
  const [cards, setCards] = useState([]);
  // console.log(category);

  useEffect(() => {
    fetch('/cardData.json')
      .then(res => res.json())
      .then(data => {
        if (category == "All Products") {
          setCards(data);
        } else {
          // console.log(cards.category);
          // console.log(category);
          const categorisedData = data.filter(cards  => cards.category.toLowerCase() === category.toLowerCase());
          setCards(categorisedData);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [category]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <Card key={card.product_id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
