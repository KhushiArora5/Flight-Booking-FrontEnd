import delhi from "./delhi.jpg";
import chennai from "./chennai.jpg";
import hyderabad from "./hyderbad.jpg";
import jaipur from "./jaipur.jpg";
import jk from "./jk.jpg";
import kolkata from "./kolkata.jpg";
import lucknow from "./lucknow.jpg";
import mumbai from "./mumbai.jpg";
import pune from "./pune.jpg";

function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="8"
                    aria-label="Slide 9"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={delhi}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Delhi</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={kolkata}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Kolkata</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={mumbai}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Mumbai</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={jk}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Jammu and Kashmir</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={hyderabad}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Hyderabad</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={chennai}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Chennai</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={pune}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Pune</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={jaipur}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Jaipur</h5>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={lucknow}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Lucknow</h5>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;