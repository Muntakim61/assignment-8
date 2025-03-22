import { useParams } from "react-router-dom";
import ProductBanner from "../ProductBanner/ProductBanner";

const CardDetail = () => {
    const {product_id} = useParams();
    console.log(product_id);
    return (
        <div>
            <ProductBanner id={product_id}></ProductBanner>
        </div>
    );
};

export default CardDetail;