import Bar from "../../Components/Navbar/Bar";
import axios from "axios";
import './Flight.css'
import { useEffect, useState } from "react";

function Flight() {

    const [flight, setflight] = useState([]);

    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        // console.log(localStorage.getItem("token"));
        async function fetchData() {
            try {
                const data = (await axios.get("http://localhost:4000/api/allflights", {})).data;
                setflight(data);
                // console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Bar />
            <div className="fbg">
                <h1 className="ftitle text-center underline decoration-double">WELCOME TO THE COLLECTION OF FLIGHTS</h1>
                <p className="finfo">Following is the collection of airlines we provide sevices with :</p>
            <div className="grid">
                <div className="table">
                    <div>
                    <p className="finfo">Name of the Airlines</p>
                    {
                        flight.map((single) => {
                            return (
                                <div>
                                    <div>
                                        {single.airline}
                                    </div>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
                <div className="table">
                    <div>
                    <p className="finfo">Name of the Flights</p>
                    {
                        flight.map((single) => {
                            return (
                                <div>
                                    <div>
                                        {single.flightName}
                                    </div>
                                </div>
                            );
                        })
                    }  
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Flight;