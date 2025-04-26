import "./Product.css";
import Price from "./Price";

function Product({ title, idx}) {
    let oldPrices = ["12,499", "9,999", "1,499", "2,499"];
    let newPrices = ["10,499", "8,999", "1,199", "1,999"];
    let description = [
        ["Logitech MX Master ", "Wireless Mouse"],
        ["Apple Pencil 2nd gen ", "Stylus Pen"],
        ["Zebronics Zeb-Rush  ", "Headphones"],
        ["Petronix Toad 23  ", "Earbuds"],
    ]
    return (
        <div className="product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;