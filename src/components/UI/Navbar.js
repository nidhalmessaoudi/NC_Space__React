import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes["navbar-brand"]}>
        <Link to="">NC Space</Link>
      </div>
      <ul className={classes["navbar-items"]}>
        <NavLink to="articles">
          <li>Articles</li>
        </NavLink>
        <NavLink to="newArticle">
          <li>New Article</li>
        </NavLink>
        <NavLink to="signup">
          <li>Sign Up</li>
        </NavLink>
        <NavLink to="login">
          <li>Log In</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
