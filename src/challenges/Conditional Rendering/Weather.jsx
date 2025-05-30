const cold = <h2>It is cold outside</h2>
const nice = <h2>It is nice outside</h2>
const hot = <h2>It is hot outside</h2>

const temp = (temp) => {

        if (temp < 15) {
            return cold
        } else if (temp > 15 && temp < 25) {
            return nice
        } else if (temp > 25) {
            return hot
        } else {
            return null
        }


};

const Weather = () => {
    return (
        <div>
            <h1>WEATHER CONDITION</h1>
            {temp(23)}
        </div>
    );
};

export default Weather;