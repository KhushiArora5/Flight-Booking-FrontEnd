import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Bar from "../../Components/Navbar/Bar";

export default function Detail() {

    const [flight, setFlight] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.defaults.headers = {
            auth: localStorage.getItem("token"),
        };
        // console.log(localStorage.getItem("token"));
        async function fetchData() {
            try {
                const data = (await axios.get(`http://localhost:4000/api/findbyid/${id}`, {})).data;
                setFlight(data);
                console.log(data);
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
            <div>
                <h1 className="ftitle text-center underline decoration-double">DETAILS OF THE FLIGHT</h1>
                <div>
                    <div>
                        Airline Name: {flight.airline}
                    </div>
                    <div>
                        Flight Name: {flight.flightName}
                    </div>
                    <div>
                        Flight No.: {flight.flightNo}
                    </div>
                    <div>
                        Destination From: {flight.destinationFrom}
                    </div>
                    <div>
                        Destination To: {flight.destinationTo}
                    </div>
                </div>
            </div>
        </div>
    );
}
