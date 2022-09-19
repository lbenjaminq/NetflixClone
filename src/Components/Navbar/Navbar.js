import classes from "./Navbar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NetflixAvatar from "../../Images/Netflix-avatar.png";
import NetflixLogo from "../../Images/NetflixLogo.png";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdNotifications, MdEdit, MdOutlineHelp } from "react-icons/md";
import { auth } from "../../firebase";

function CollapsibleExample({ active }) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  const hideHeader = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleSignUp = () => {
    auth.signOut();
    history.push("/login");
    window.localStorage.removeItem("user")
  };

  console.log("ACTIVEEEEEEE",active)

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className={`${classes.root} ${show && classes.transparent}`}
      fixed="top"
    >
      <a href="/home" style={{ marginLeft: "2.80%" }}>
        <img src={NetflixLogo} style={{ width: "115px" }} alt="Logo" />
      </a>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">
            <span className={classes.link} style={{ marginLeft: "20px" }}>
              Home
            </span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className={classes.link}>TV Shows</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className={classes.link}>Movies</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className={classes.link}>New & Popular</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className={classes.link}>My List</span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span className={classes.link}>Browse by Languages</span>
          </Nav.Link>
        </Nav>
        <Nav style={{ margin: "0px 3%", color: "##e5e5e5" }}>
          <Nav.Link
            href="#pricing"
            style={{ margin: "0px 3%", color: "#e5e5e5", fontSize: "1.3rem" }}
          >
            <FaSearch />
          </Nav.Link>
          <Nav.Link href="#memes">
            <span className={classes.link}>Kids</span>
          </Nav.Link>
          <Nav.Link
            href="#pricing"
            style={{ margin: "0px 3%", color: "#e5e5e5" }}
          >
            <MdNotifications />
          </Nav.Link>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title={
              <img
                src={NetflixAvatar}
                alt="User"
                style={{
                  borderRadius: "5px",
                  width: "30px",
                  height: "30px",
                }}
              />
            }
            menuVariant="dark"
            align="end"
          >
            <NavDropdown.Item href="/profile">
              <div>
                <img
                alt="Avatar"
                  src={NetflixAvatar}
                  style={{
                    borderRadius: "5px",
                    width: "24px",
                    height: "24px",
                    marginRight: "5%",
                  }}
                />
                <span>{active.user?.email ? active.user?.email : "user" }</span>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/manage">
              <div>
                <MdEdit
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <span className={classes.links}>Manage profiles</span>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/profile">
              <div>
                <BsFillPersonFill
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <span className={classes.links}>Account</span>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="https://help.netflix.com/es" target="blank">
              <div>
                <MdOutlineHelp
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <span className={classes.links}>Help Center</span>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <span onClick={handleSignUp} className={classes.links}>
                Sign out of Netflix
              </span>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
