import Product from "./Product";

function ProductTab() {
    let options = [<li>hi-tech</li>, <li>lightweight</li> , <li>durable</li>];
    // let options2 = {a: "hi-tech", b: "lightweight", c: "durable"};
    return (
        <>
            <Product title="phone"price={40000 / 2} features={options} />
            {/* <Product title="laptop" price={60000} />
            <Product title="pen"price={10}/>
            <Product title="toffee"/> */}
        </>
    );
}

export default ProductTab;