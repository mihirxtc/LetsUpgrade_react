import Product from "./Product";
function Products_List() {

    let products = [
        {
            id: 1,
            name: "Iphone 14",
            price: 72000,
            url: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-230912_inline.jpg.large.jpg"
        },
        {
            id: 2,
            name: "Samsung s23 Ultra",
            price: 119000,
            url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529717cv14d.jpg"
        },
        {
            id: 3,
            name: "Google Pixel 7",
            price: 72000,
            url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51jahbKN6AL.jpg"
        },
        {
            id: 4,
            name: "One Plus 11R 5G",
            price: 39999,
            url: "https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg"
        }
    ]

    return (

        <div className="products">

            {
                products.map((product) => {
                    return (
                        <Product key={product.id} name={product.name} price={product.price} url={product.url}/>
                    )
                })
            }

        </div>
    );
}

export default Products_List;