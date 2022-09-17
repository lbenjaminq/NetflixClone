import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NetflixLogo from "../Images/NetflixLogo.png";
import { FaSearch } from "react-icons/fa";
import { MdNotifications, MdEdit, MdOutlineHelp } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
import NetflixAvatar from "../Images/Netflix-avatar.png";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function CollapsibleExample() {
  const [show, setShow] = useState(true);
  const history = useHistory()
  const hideHeader = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleSignUp = () => {
    auth.signOut()
    history.push("/login")
  }

  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className={`${classes.root} ${show && classes.transparent}`}
      fixed="top"
    >
      <a href="/" style={{marginLeft: "2.80%" }}>
        <img src={NetflixLogo} style={{ width: "115px"}}  />
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
                  src={NetflixAvatar}
                  style={{
                    borderRadius: "5px",
                    width: "24px",
                    height: "24px",
                    marginRight: "5%",
                  }}
                />
                Leandro
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/manage">
              <div>
                <MdEdit
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <a href="/manage" className={classes.links}>
                  Manage profiles
                </a>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/profile">
              <div>
                <BsFillPersonFill
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <a href="/profile" className={classes.links}>
                  Account
                </a>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="/memberships">
              <div>
                <MdOutlineHelp
                  style={{ width: "20px", height: "20px", marginRight: "4%" }}
                />
                <a href="/profile" className={classes.links}>
                  Help Center
                </a>
              </div>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <a  onClick={handleSignUp} className={classes.links}>
                Sign out of Netflix
              </a>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
