import Card from "./Card";


const CardList = ({ filteredRobo }) => {
    return (
        <>
            {filteredRobo.map(user => (
                <Card
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    username={user.username} />
            ))}
        </>
    )
}


export default CardList