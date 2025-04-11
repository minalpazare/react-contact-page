

function Navbar() {
  return (
    <nav>
      <div className="navTop">
        <div className="navItems">
          <span style={{ fontSize: "40px" }}>.Miins</span>
        </div>

        <div className="navItem">
          <div className="search">
            <input
              type="text"
              placeholder="search..."
              className="searchInput"
            />
            <img
              style={{ background: "none" }}
              src="./Image/search.png"
              height="20px"
              width="20px"
              alt=""
              className="searchIcon"
            />
          </div>
        </div>

        <div className="navItem">
          <span className="limitedoffer">Limited Offer!</span>
        </div>
      </div>

      <div className="navBottom">
        <a href="#" className="menuItem">Home</a>
        <a href="#" className="menuItem">About</a>
        <a href="#" className="menuItem">Contact</a>
        <a href="#" className="menuItem">Services</a>
      </div>
    </nav>
  );
}

export default Navbar;
