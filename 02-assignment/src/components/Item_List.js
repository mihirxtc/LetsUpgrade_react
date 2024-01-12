import Item from "./Item";

function Item_List() {

    let items = [
        {
            id:1, name:"Air Conditioner", price:39000 , url:"https://m.media-amazon.com/images/I/61nF5ekaaPL._SX679_.jpg"
        },
        {
            id:1, name:"Refgigerator", price:29000 , url:"https://rukminim2.flixcart.com/image/850/1000/xif0q/refrigerator-new/r/e/l/-original-imaggs9nhrntdpex.jpeg?q=90"
        },
        {
            id:1, name:"Television", price:19000 , url:"https://m.media-amazon.com/images/I/41jc8zrtz3L._SY300_SX300_QL70_FMwebp_.jpg"
        }
    ]

    return (
        <div className="items">
            {
                items.map((item) => {
                    return (
                        <Item key={item.id} name={item.name} price={item.price} url={item.url} />
                    );
                })
            }
        </div>
    )

}

export default Item_List;