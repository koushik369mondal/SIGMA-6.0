import Product from "./Product";

function ProductTab() {
    // let options = ["hi-tech", "lightweight", "durable"];
    // let options2 = {a: "hi-tech", b: "lightweight", c: "durable"};
    return (
        <>
            <Product title="phone"price={40000 / 2} features={["hi-tech", "durable"]} />
            <Product title="laptop" price={60000} />
            <Product title="pen"price={10}/>
            <Product title="toffee"/>
        </>
    );
}

export default ProductTab;