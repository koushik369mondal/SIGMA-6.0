import "./Product.css";

function Product({title, price=1, features, features2}) {
    // const list = features.map((feature) => <li>{feature}</li>)
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Price: {price}</p>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <p></p>
        </div>
    );
}

export default Product;