import "./Product.css";

function Product({title, price=1, features, features2}) {
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Price: {price}</p>
            <p>Features:{features}</p>
            <p>Feature from object: {features2?.b}</p>
        </div>
    );
}

export default Product;