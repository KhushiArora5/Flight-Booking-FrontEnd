import BookBar from "../../Components/Navbar/BookBar";
import "./Book.css"

function Book() {
    return (
        <div>
            <div className="bg h-screen">
                <BookBar />
                <h1 className="btitle text-center underline decoration-double">BOOKING</h1>
                <hr/>
                <p className="binfo">
                    Your booking has been confirmed.<br/>
                </p>
            </div>
        </div>
    );
}

export default Book;