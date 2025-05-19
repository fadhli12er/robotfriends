import { useEffect, useState } from "react"
import SearchBox from "../components/SearchBox"
import CardList from "../components/CardList"
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry"

const App = () => {
    const [searchField, setSearch] = useState('');
    const [robot, setRobots] = useState([]);

    useEffect(() => {
        const fetchRobots = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setRobots(data)
            } catch (error) {
                console.log("Failed to fetch data ", error)
            }
        }
        fetchRobots()
    }, [])

    const filteredRobo = robot.filter(item => (
        item.username.toLowerCase().includes(searchField.toLowerCase())
    ))

    // TENARY OPERATOR
    return !robot.length ?
        <h1 className="tc f1 vh-100 flex items-center justify-center">Loading...</h1> :
        (
            <>
                <div className="tc pa2 ma2">
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox searchField={searchField} setSearch={setSearch} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList filteredRobo={filteredRobo} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            </>
        )
}
export default App