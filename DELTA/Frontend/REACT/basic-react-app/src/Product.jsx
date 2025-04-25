import "./Product.css";

function Product({ title, price = 1, features, features2 }) {
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Price: {price}</p>
            {price > 30000 ? <p>"Discount of 5%"</p> : null}
        </div>
    );
}

export default Product;