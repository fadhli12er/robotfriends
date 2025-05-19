

const MyButton = ({ counter, handleClick }) => {
    return (
        <button className="ma2 bg-dark-blue pa2 white" onClick={handleClick}>
            Clicked {counter} times
        </button>
    )
}


export default MyButton;