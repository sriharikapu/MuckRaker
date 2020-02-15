import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Title from './Title';

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
        padding: 100,
        background: 'linear-gradient(to right, rgb(250,250,250), rgb(220,220,220))'
    },
    rightPaper: {
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
    },
    primaryBtn: {
        width: '100%',
        fontFamily: 'Raleway',
        fontSize: 20,
        fontWeight: 500,
        background: 'black'
    }
}));



export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid
                item
                direction="column"
                alignItems="center"
                justify="center"
                key={1}
            >
                <Paper className={classes.leftPaper}>
                    <Title top='Muck' bottom="Rakers" fontSize={100} />
                    <br />
                    <br />
                    <span style={{ fontFamily: 'Raleway', fontSize: 20 }}>
                        Enabling journalists to report without fear
                    </span>
                </Paper>
                <div style={{ height: 20 }} />
                <Button variant="contained" color="primary" className={classes.primaryBtn} >
                    Get Started
            </Button>
            </Grid>
            <Grid
                item
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                key={2}
            >
                <img src="/images/press_freedom_fists.png" style={{
                    borderRadius: 10,
                    WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                }} />
            </Grid>
        </Grid >
    );
}