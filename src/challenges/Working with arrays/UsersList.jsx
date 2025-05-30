// Working with Arrays

const UsersList = () => {
    const users = [
        {id: 1, name: 'Ayman' , age : 16},
        {id: 2, name: 'John' , age : 20},
        {id: 3, name: 'Max' , age : 9},
    ]

    return (
        <div>
            {users.map(({id, name, age}) => (
                <ul key={id}>
                    <li>Name : {name} - Age : {age}</li>
                </ul>
            ))
            }        </div>
    );
};

export default UsersList;