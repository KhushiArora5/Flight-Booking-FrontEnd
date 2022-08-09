import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Bar from "../../Components/Navbar/Bar";
import './detail.css';

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
                const data = (await axios.get(`https://flightbooking-ka.herokuapp.com/api/findbyid/${id}`, {})).data;
                setFlight(data);
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    async function handleBook() {
        const userID = { id: localStorage.getItem("userid") };
        await axios.post(`https://flightbooking-ka.herokuapp.com/api/bookflight/${id}`, userID).then(function (response) {
            if (response.data) {
                window.location.href = "/book";
                alert("Booking has been Confirmed");
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="bg h-screen">
                <Bar />
                <h1 className="ftitle text-center underline decoration-double">DETAILS OF THE FLIGHT</h1>
                <div className="info">
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
                    <hr />
                    <button className="db" onClick={() => {
                        handleBook();
                    }}>Confirm</button>
                </div>
            </div>
        </div>
    );
}
