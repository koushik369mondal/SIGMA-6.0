import "./Product.css";

function Product({ title, price = 1, features, features2 }) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor: isDiscount ? "yellow" : ""};
    return (
        <div className="product" style={styles}>
            <h1>{title}</h1>
            <p>Price: {price}</p>
            {isDiscount && <p>Discount of 5%</p> }
        </div>
    );
}

export default Product;