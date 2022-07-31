import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="header">
        <p className="name">SWIFT</p>
      <div>
        <a className="link" href="/login">LOGIN</a>
        <a className="link" href="/products">PRODUCTS</a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;