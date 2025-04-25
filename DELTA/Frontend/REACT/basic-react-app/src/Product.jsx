import "./Product.css";

function Product({title}) {
    return (
        <div className="product">
            <h1>{title}</h1>
            <p>Product details will be here</p>
        </div>
    );
}

export default Product;