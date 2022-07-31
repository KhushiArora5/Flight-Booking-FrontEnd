import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import box from './box1.jpg';
import './Home.css';

function Home() {
  return (
    <div>
    <div>
    <Navbar/>
    <img className="pic" src={box} />
    </div>
    <div className="bg">
      <div className="wel">WELCOME TRAVELERS</div>
      <div className="info">
         <p>
            To start your adventure, firstly you have to create
            an account by clicking on signup button.So that, you can get updates on new flights
            and if you are already a member, do login.
        </p><br/>     
        <h1 className="font-black">LETS THE ADVENTURE START</h1>
      </div>
    </div>
        <Footer />
    </div>
  );
}

export default Home;
