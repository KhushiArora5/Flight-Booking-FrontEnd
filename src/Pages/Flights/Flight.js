import Bar from "../../Components/Navbar/Bar";
import './Flight.css'
import lines from "./lines.gif"
import axios from "axios";
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
                const data = (await axios.get("https://flightbooking-ka.herokuapp.com/api/allflights", {})).data;
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
                <div className="fdata">
                    <div className="table">
                        <div>
                            <p className="tt underline decoration-double">Airlines</p>
                            {
                                flight.map((single) => {
                                    return (
                                        <div>
                                            <div className="py-0.5">
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
                            <p className="tt underline decoration-double">Flights Name</p>
                            {
                                flight.map((single) => {
                                    return (
                                        <div>
                                            <div className="py-0.5">
                                                {single.flightName}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="table">
                        <div>
                            <p className="tt underline decoration-double">Flight No.</p>
                            {
                                flight.map((single) => {
                                    return (
                                        <div>
                                            <div className="py-0.5">
                                                {single.flightNo}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="table">
                        <div>
                            <p className="tt underline decoration-double">Destination From</p>
                            {
                                flight.map((single) => {
                                    return (
                                        <div>
                                            <div className="py-0.5">
                                                {single.destinationFrom}
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="table">
                        <div>
                            <p className="tt underline decoration-double">Destination To</p>
                            {
                                flight.map((single) => {
                                    return (
                                        <div className="bookcol">
                                            <div className="bookrow">
                                                {single.destinationTo}
                                                
                                            <button className="bb" onClick={() => {
                                                window.location.href = "/flight/" + single._id;
                                            }}>Book This</button>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="finfo">To proceed with the process of choosing your flight,
                    please click on the <u>BOOK THIS</u> button.</p>
                    <hr/>
                <div>
                    <img src={lines} className="flines" />
                </div>
            </div>
        </div>
    );
}

export default Flight;