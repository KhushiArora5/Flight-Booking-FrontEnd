import Bar from "../../Components/Navbar/Bar";
import axios from "axios";
import './Flight.css'

function Flight() {
    // const [flight, setflight] = useState([]);
    // async function fetch(){
    // try 
    // {
    // const data = await axios.get("http://localhost:4000/api/findbyid");
    // setflight(data);
    // }
    // catch(error)
    // {
    // console.log(error);
    // }
    // };

    return (
        <div>
            <Bar />
            <div className="fbg">
            <h1 className="ftitle text-center">WELCOME TO THE COLLECTION OF FLIGHTS</h1>
            <p className="finfo">Following is the collection of airlines we provide sevices with :</p>
            <div className="table">
                <p className="finfo">Name of the Airlines</p>
            </div>
            {/* movies.map((flight) => { 
            Response.data.airline;
            }); */}
            </div>
        </div>
    );
}

export default Flight;