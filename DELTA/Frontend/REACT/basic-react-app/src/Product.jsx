import "./Product.css";

function Product({title, price=1, features, features2}) {
    if(price > 30000) {
        return (
            <div className="product">
                <h1>{title}</h1>
                <p>Price: {price}</p>
                <p>Discount of 5%</p>
            </div>
        );
    }
    else{
        return (
            <div className="product">
                <h1>{title}</h1>
                <p>Price: {price}</p>
            </div>
        );
    }
}

export default Product;