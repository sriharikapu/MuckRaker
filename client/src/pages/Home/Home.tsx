import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        minHeight: '100vh'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Raleway',
        fontSize: 30,
        fontWeight: 800
    },
    leftPaper: {
        minHeight: '100vh',
    },
    rightPaper: {
        minHeight: '100vh',
    },
    control: {
        padding: theme.spacing(2),
    },
    loginBtn: {
        fontFamily: 'Raleway',
    },
    grid:
    {
        height: '100%'
    },
    appBar: {
        backgroudColor: 'black'
    }
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Muck Raker
                    </Typography>
                    <Button color="inherit" className={classes.loginBtn}>
                        Login
                        </Button>
                </Toolbar>
            </AppBar>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid key={1} xs item>
                    <Paper className={classes.leftPaper}>xs</Paper>
                </Grid>
                <Grid key={2} xs item>
                    <Paper className={classes.rightPaper}>xs</Paper>
                </Grid>

            </Grid>
        </div>
    );
}