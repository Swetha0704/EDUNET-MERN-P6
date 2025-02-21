import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">Luca</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Link className="link-light bg-success p-2" to="/login">Login</Link> / 
          <Link className="link-light bg-info p-2" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
