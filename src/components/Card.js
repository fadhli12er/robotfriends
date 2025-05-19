import { useState } from "react";
import MyButton from "./MyButton";


const truncate = (string, maxLength) => {
    if (string.length > maxLength) {
        return string.slice(0, maxLength) + "...";
    }
    return string
}

const Card = ({ username, email, id }) => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" >
            <img alt="Robots" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 className="f4">{truncate(username, 18)}</h2>
                <p className="f6">{email}</p>
                {counter === 100 ? <p>🎉 You clicked 100 times!</p> : <MyButton counter={counter} handleClick={handleClick} />}
            </div>
        </div>
    )
}


export default Card;

