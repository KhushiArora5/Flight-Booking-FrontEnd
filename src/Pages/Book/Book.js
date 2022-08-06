import BookBar from "../../Components/Navbar/BookBar";
import "./Book.css"

function Book() {
    return (
        <div>
            <div className="bg h-screen">
                <BookBar />
                <h1 className="btitle text-center underline decoration-double">THIS FLIGHT HAS BEEN BOOKED FOR YOU.</h1>
                <p className="binfo">Click on Payment Button to proceed with it.</p>
            </div>
        </div>
    );
}

export default Book;