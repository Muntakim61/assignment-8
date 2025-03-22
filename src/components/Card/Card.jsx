
import { Link } from 'react-router-dom';

const Card = ({ card, category }) => {
  const { product_id, product_image, product_title, price } = card;

  return (
    <div className="card bg-base-100 max-w-[350px] shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt={product_title}
          className="rounded-xl max-w-[250px] h-[250px] object-contain w-11/12"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{product_title}</h2>
        <p>Price: ${price}</p>
        <Link to={`/Card/${product_id}`}>
          <button className="btn bg-white text-[#9538E2] border-[#9538E2] rounded-3xl w-1/2">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
