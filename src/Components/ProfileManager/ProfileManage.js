import classes from "./ProfileManager.module.css";
import Navbar from "../Navbar/Navbar";
import NetflixAvatar1 from "../../Images/Netflix-avatar1.png";
import NetflixAvatar2 from "../../Images/Netflix-avatar2.png";
import { Typography, makeStyles } from "@material-ui/core";
import { RiAddCircleFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";

const ProfileManage = () => {
  const classesMUI = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Typography variant="h2" className={classesMUI.typo}>
          Manage Profiles:
        </Typography>
        <div className={classes.roote}>
          <div className={classes.container}>
            <div className={classes.subroot}>
              <img src={NetflixAvatar1} className={classes.logo} alt="Avatar" />
              <div className={classes.edit}>
                <MdEdit />
              </div>
            </div>
            <span>Leandro </span>
          </div>
          <div className={classes.container}>
            <div className={classes.subroot}>
              <img src={NetflixAvatar2} className={classes.logo} alt="Avatar" />
              <div className={classes.edit}>
                <MdEdit />
              </div>
            </div>
            <span>Benjamin</span>
          </div>
          <div className={classes.container}>
            <div className={classes.subroot}>
              <div className={classes.add}>
                <RiAddCircleFill />
              </div>
            </div>
            <span>Benjamin</span>
          </div>
        </div>
        <button className={classes.btn}>Done</button>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  typo: {
    color: "#fff",
    marginBottom: "3%",
    [theme.breakpoints.down("md")]: {
      marginTop: "150px",
      fontSize: "2rem",
    },
  },
}));

export default ProfileManage;
