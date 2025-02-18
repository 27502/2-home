import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">News</div>
        <span className="portal">Portal</span>
      </div>
      <div className="nav-right">
        <a href="#" className="active">News</a>
        <a href="#">Blog</a>
        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User" className="user-avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
