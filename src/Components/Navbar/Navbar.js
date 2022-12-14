import firebase from "firebase";
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

function CollapsibleExample() {
  const [show, setShow] = useState(true);
  const [userActive, setUserActive] = useState("");
  const history = useHistory();
  const user = firebase.auth().currentUser;

  useEffect(() => {
    if (user !== null) {
      user.providerData.forEach((profile) => {
        setUserActive(profile.email);
      });
    }
  }, []);

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
  };

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
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: "#787D81", border: "none" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <div className={classes.container_mobile}>
            <MdEdit />
            <a href="/manage" className={classes.mobile}>
              Manage profiles
            </a>
          </div>
          <div className={classes.container_mobile}>
            <BsFillPersonFill />
            <a href="/profile" className={classes.mobile}>
              Account
            </a>
          </div>
          <div className={classes.container_mobile}>
            <MdOutlineHelp />
            <a
              href="https://help.netflix.com/es"
              target="blank"
              className={classes.mobile}
            >
              Help Center
            </a>
          </div>
          <hr/>
          <Nav.Link href="#features">
            <span className={classes.home}>Home</span>
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
          <hr/>
          <a onClick={handleSignUp} className={classes.signOut}>
            Sign out of Netflix
          </a>
        </Nav>

        <Nav style={{ margin: "0px 3%", color: "##e5e5e5" }}>
          <div className={classes.responsive}>
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
              style={{ margin: "0px 3%", color: "#e5e5e5", fontSize: "1.3rem" }}
            >
              <MdNotifications />
            </Nav.Link>
          </div>

          <div className={classes.hidden}>
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
                  <span>{userActive}</span>
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
              <NavDropdown.Item
                href="https://help.netflix.com/es"
                target="blank"
              >
                <div>
                  <MdOutlineHelp
                    style={{ width: "20px", height: "20px", marginRight: "4%" }}
                  />
                  <span className={classes.links}>Help Center</span>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleSignUp}>
                <span className={classes.links}>Sign out of Netflix</span>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
