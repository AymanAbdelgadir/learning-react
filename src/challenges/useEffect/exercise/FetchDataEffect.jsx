import { useEffect, useState } from 'react';

const FetchDataEffect = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json); // Logs the posts
                if (json.length > 0) {
                    setTitle(json[0].title); // Sets the title of the first post
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default FetchDataEffect;
