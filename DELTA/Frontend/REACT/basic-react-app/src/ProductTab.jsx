import Product from "./Product";

function ProductTab() {
    return (
        <>
            <Product title="phone"price={40000 / 2} />
            <Product title="laptop" price={60000}/>
            <Product title="pen"price={10}/>
            <Product title="toffee"/>
        </>
    );
}

export default ProductTab;