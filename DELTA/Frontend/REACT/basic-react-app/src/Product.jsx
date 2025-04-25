import "./Product.css";

function Product(props) {
    console.log(props.title);
    return (
        <div className="product">
            <h1>{props.title}</h1>
            <p>Product details will be here</p>
        </div>
    );
}

export default Product;