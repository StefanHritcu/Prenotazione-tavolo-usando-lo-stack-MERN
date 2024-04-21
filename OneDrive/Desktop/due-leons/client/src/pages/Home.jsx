import { Link } from "react-router-dom"

function Home(){
    return(
        <>
        <h1 className="text-red-500">Home page</h1>

        <br />

        <Link to="/prenotazione">prenota un tavolo</Link>
        </>
    )
}
export default Home