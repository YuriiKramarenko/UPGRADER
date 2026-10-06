import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        UPGRADER
      </div>

      <div className="navbar-links">
        <a href="/">Upgrade</a>
        <a href="/shop">Shop</a>
        <a href="/skins">My Skins</a>
      </div>

      <button className="navbar-login">
        Login with Steam
      </button>
    </nav>
  );
}

export default Navbar;
