import "./Product.css";

function Product({ title, price = 1, features, features2 }) {
    let isDiscount = price > 30000 ? "5%" : "";

    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Price: {price}</p>
            <p>Discount: {isDiscount}</p>
        </div>
    );
}

export default Product;