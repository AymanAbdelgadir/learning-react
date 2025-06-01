import {useState , useEffect} from 'react';


const CounterEffect = () => {
    const [count, setCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        if (isClicked) {
                setCount(count + 1)
            setIsClicked(false)
        }
    },[isClicked])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setIsClicked(true)}>+</button>
        </div>
    );
};

export default CounterEffect;