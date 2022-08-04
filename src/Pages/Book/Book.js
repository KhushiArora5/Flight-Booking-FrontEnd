import BookBar from "../../Components/Navbar/BookBar";
import "./Book.css"

function Book() {
    return (
        <div>
            <BookBar />
            <div className="bg">
                <div className="p-2.5">
                    <div className="search">
                        <div className="searchbtn">
                            <button className="bbtn">Return</button>
                            <button className="bbtn">One-Way</button>
                            <button className="bbtn">Multi-City</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;