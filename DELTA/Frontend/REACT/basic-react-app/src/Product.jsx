import "./Product.css";

function Product({title, price=1}) {
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Price: {price}</p>
        </div>
    );
}

export default Product;