

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid #ccc', height: '70vh', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="scroll-container">
            {props.children}
        </div>
    )
}


export default Scroll
