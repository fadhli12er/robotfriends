

const SearchBox = ({ searchField, setSearch }) => {
    return (
        <>
            <div className="pa2">
                <input
                    className="pa3 ba b--green bg-lightest-blue"
                    placeholder="Search Robo"
                    type="search"
                    onChange={(event) => setSearch(event.target.value)}
                    value={searchField} />
            </div>
        </>
    )
}


export default SearchBox;
