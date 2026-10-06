import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        UPGRADER
      </div>

      <div className="navbar-links">
        <a href="/">BATTLE</a>
        <a href="/shop" className="upgrade">UPGRADE</a>
        <a href="/skins">VIP</a>
      </div>

      <div className="navbar-links-social-networks">
        <a href="ig"><img src="/logo/logo-ig.png" alt="ig" /></a>
        <a href="x"><img src="/logo/logo-x.png" alt="x" /></a>
      </div>

      <button className="navbar-login">
        Login with Steam
      </button>
    </nav>
  );
}

export default Navbar;
