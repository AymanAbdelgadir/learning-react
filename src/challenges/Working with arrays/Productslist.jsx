
const Products = () => {
    const prodinfo  = [
        {id: 1, name: 'Phone' , price : 699},
        {id: 2, name: 'Laptop' , price : 999},
        {id: 3, name: 'Headphones' , price : 99},
    ]
    return (
        <div>
            {prodinfo.map(( {id , name , price}) => (
                <ul key = {id}>
                    <li>Name : {name} - Price : $ {price}</li>
                </ul>
            ))}

        </div>
    );
};

export default Products;