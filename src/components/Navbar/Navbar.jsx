import "./Navbar.css";

function Navbar() {
  return (
<header>
  <div className="navbar-left">
    <div className="navbar-logo">
      UPGRADER
    </div>

    <div className="navbar-info">
      <div className="navbar-stat">
        <span>Online</span>
        <strong>12345</strong>
      </div>

      <div className="navbar-stat">
        <span>Upgrades</span>
        <strong>12345</strong>
      </div>
    </div>
  </div>

  <nav className="navbar-menu">
    <a href="/">BATTLE</a>
    <a href="/shop" className="upgrade">UPGRADE</a>
    <a href="/skins">VIP</a>
  </nav>

  <div className="navbar-right">
    <div className="navbar-socials">
      <a href="ig">
        <img src="/logo/logo-ig.png" alt="Instagram" />
      </a>

      <a href="x">
        <img src="/logo/logo-x.png" alt="X" />
      </a>
    </div>

    <button className="navbar-login">
      Login with Steam
    </button>
  </div>
</header>

  );
}

export default Navbar;
