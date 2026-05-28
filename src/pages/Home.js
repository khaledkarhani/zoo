import '../styles/Home.css';
import Zoo from '../images/zoo.jpg'
import { Link } from "react-router-dom";

const Home = () => {
    const display = () =>
    {
        alert("Khaled Karhani - 92430249")
    }
    return(
        <div class="home">

            <h1>Welcome to Happy Zoo 🐾</h1>

            
                <img src={Zoo} className= "homeImg" alt='zoo'/>
           


            <br/>

        <div class="homeBtns">

            <Link to = "/an"><button>View Animals</button></Link>
            <button class="infoBtn" onClick={display}>Display Your Name and ID</button>
            <Link to = "/emp"><button>View Employees</button></Link>

        </div>

        </div>
    );
}           

export default Home;