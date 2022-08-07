import { useState } from "react";
import PBar from "../../Components/Navbar/PBar";
import './Pay.css';

function Pay() {
    const [holder,setHolder] = useState(" ");
    const [no,setNo] = useState(" ");
    const [sc,setSC] = useState(" ");

    function handleChange(){
        if(holder && no && sc === " ")
        {
            alert("Please fill all the details");
        }
        else
        {
            alert("Payment is Successfully Done");
        }
    }

    return (
        <div>
            <div className="bg h-screen">
                <PBar />
                <div>
                    <div className="m-4">
                        <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
                            <header className="flex flex-col justify-center items-center">
                                <ul className="flex p-5">
                                    <li className="mx-2">
                                        <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
                                    </li>
                                    <li className="mx-2">
                                        <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
                                    </li>
                                    <li className="ml-5">
                                        <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
                                    </li>
                                </ul>
                            </header>
                            <main className="mt-1 p-2">
                                <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
                                <div className="">
                                    <div className="my-3">
                                        <input
                                            type="text"
                                            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                            placeholder="Card holder"
                                            maxlength="22"
                                            x-model="cardholder"
                                            onChange={(e) =>{
                                                setHolder(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="my-3">
                                        <input
                                            type="text"
                                            className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                            placeholder="Card number"
                                            x-model="cardNumber"
                                            onChange={(e) =>{
                                                setNo(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="my-3 flex flex-col">
                                        <div className="mb-2">
                                            <label for="" className="text-gray-700">Expired</label>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            <select
                                                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                x-model="expired.month"
                                            >
                                                <option value="" selected disabled>MM</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                                <option value="04">04</option>
                                                <option value="05">05</option>
                                                <option value="06">06</option>
                                                <option value="07">07</option>
                                                <option value="08">08</option>
                                                <option value="09">09</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <select
                                                name=""
                                                id=""
                                                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                x-model="expired.year"
                                            >
                                                <option value="" selected disabled>YY</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                                                placeholder="Security code"
                                                maxlength="3"
                                                x-model="securityCode"
                                                onChange={(e) =>{
                                                    setSC(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="mt-6 p-4">
                                <button
                                    onClick={()=>{
                                        handleChange();  
                                    }}
                                    className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                                    Pay now
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;