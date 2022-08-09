import './Slideshow.css';
import delhi from "./delhi.jpg";
import chennai from "./chennai.jpg";
import hyderabad from "./hyderbad.jpg";
import jaipur from "./jaipur.jpg";
import jk from "./jk.jpg";
import kolkata from "./kolkata.jpg";
import lucknow from "./lucknow.jpg";
import mumbai from "./mumbai.jpg";
import pune from "./pune.jpg";

function Show() {
    var Image = document.getElementById("image");
    const arr = [
        "https://tourismnewslive.com/wp-content/uploads/2019/03/Jammu-and-Kashmir.jpg",
        "https://cdn.britannica.com/75/121075-050-CBF79FB6/Victoria-Statue-front-Memorial-Hall-Kolkata-West.jpg",
        "https://static.toiimg.com/photo/75012798/mumbai-live.jpg?width=748&resize=4",
        "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Hyderabad.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg",
        "https://cdn.britannica.com/69/146869-050-676DD6B7/Aga-Khan-Palace-Pune-India.jpg",
    ];

    var count = 0;

    function handlePrev() {
        count = count - 1;

        if (count < 0) {
            count = arr.length - 1;
        }

        Image.src = arr[count];
    }

    function handleNext() {
        count = count + 1;

        if (count > arr.length - 1) {
            count = 0;
        }

        Image.src = arr[count];
    }

    return (
        <div>
            <div>
                <img id="image" src="https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Akshardham-Temple.jpg" alt=".." />
            </div>
            <div className="b">
                <button className="sbtn" onClick={() => { handlePrev(); }}>Prev</button>
                <button className="sbtn" onClick={() => { handleNext(); }}>Next</button>
            </div>
        </div>
    );
};

export default Show;