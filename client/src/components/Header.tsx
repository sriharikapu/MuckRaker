import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})
const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <p>Muck Raker</p>
            <a>Menu Item A</a>
            <a>Menu Item B</a>
            <a>Menu Item C</a>
            <a>Log In</a>
        </div>)
}

export default Header;