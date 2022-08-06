import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';
// import Carousel from '../../Components/Carousel/Carousel';
// import Show from '../../Components/Carousel/Slide';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <div>
          <h1 class="title">Most Cost-Effective</h1>
          <h1 class="t2">Flights.</h1>
          <div class="btn">View Plans</div>
        </div>
      </div>
      <div className="bg">
        <div className="wel underline decoration-double">WELCOME TRAVELERS</div>
        <div className="info">
          <p>
            To start your adventure, firstly you have to create
            an account by clicking on signup button.So that, you can get updates on new flights
            and if you are already a member, do remeber to login.
          </p><br />
          <h1 className="font-black underline decoration-double">LETS THE ADVENTURE START</h1>
        </div>
        <hr />
        <div>
          <div className="wel underline decoration-double">YATRI.COM</div>
          <div className="info">
            <p>
              On Yatri.com, you'll find cheap flights for domestic and international travel.
              Since airlines change flight prices constantly, sign up for Fare Alerts and
              let Yatri.com's travel search engine monitor airline ticket prices of all major airlines,
              so you'll be first in line to get the cheapest tickets.
            </p>
          </div>
          <hr />
          <div className="t">
            <div className="topregion">
              <h3 className="font-extrabold ml-16">Top Regional Destinations</h3>
              <ul>
                <li>Mumbai</li>
                <li>Delhi</li>
                <li>TamilNadu</li>
                <li>Jammu and Kashmir</li>
                <li>Rajasthan</li>
                <li>Uttar Pradesh</li>
                <li>Goa</li>
                <li>Chennai</li>
                <li>Bengaluru</li>
                <li>Punjab</li>
              </ul>
            </div>
            <div className="topregion">
              <h3 className="font-extrabold ml-16">Top World Destinations</h3>
              <ul>
                <li>Asia</li>
                <li>Australia</li>
                <li>Canada</li>
                <li>Central America</li>
                <li>Europe</li>
                <li>Middle East</li>
                <li>United States</li>
                <li>United Kingdom</li>
                <li>India</li>
                <li>South Korea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel />
      <Show /> */}
      <Footer />
    </div>
  );
}

export default Home;
