import {useEffect , useState} from 'react';

const BasicEffect = () => {
   const [v, setV] = useState(null);


   useEffect(() => {
       setV(1)
   },[])
    return (

        <div>
           <h1>{v}</h1>
        </div>
    );
};

export default BasicEffect;