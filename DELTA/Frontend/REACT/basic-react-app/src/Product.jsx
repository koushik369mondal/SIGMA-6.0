import "./Product.css";
import Price from "./Price";

function Product({ title, price = 1, features, features2 }) {
    return (
        <div className="product" >
            <p>Title</p>
            <p>Description</p>
            <Price/>
        </div>
    );
}

export default Product;