import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    );
}