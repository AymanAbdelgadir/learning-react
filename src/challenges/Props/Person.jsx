const Person = () => {
    return (
        <User
        name = 'Ayman'
        age = {19}
        />
    );
};


const User = (props) => {
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <p>Age : {props.age}</p>
        </div>
    );
};

export default Person;