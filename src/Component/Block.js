import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        background: "white",
        textAlign: 'center',
        height: 150,
        color: theme.palette.text.secondary,
        borderTop: '35px   solid #003865 ',
        borderRight: '3px  solid #003865',
        borderLeft: '3px   solid #003865',
        borderBottom: '3px   solid #003865'
    },
}));
const Block = () => {
    const classes = useStyles();
    return (
            <div style={{ display: "flex", justifyContent: "space-between" }} className={classes.root}>
                <Grid item xs={4} container spacing={5}>
                    <Grid item xs={12}>
                        <Paper style={{ height: "1045px", textAlign: 'borderTop' }} className={classes.paper}>xs=5</Paper>
                       
                    </Grid>
                </Grid>
                <Grid item xs={8} container spacing={6}>
                    <Grid item xs={12}>
                        <Paper style={{ height: "430px" }} className={classes.paper}>xs=8</Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper style={{ height: "500px", marginBottom: "100px" }} className={classes.paper}>xs=4</Paper>
                    </Grid>
                    {/*<Grid item xs={4}>
                        <Paper style={{ height: "500px", marginBottom: "100px" }} className={classes.paper}>xs=4</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper style={{ height: "500px", marginBottom: "100px" }} className={classes.paper}>xs=4</Paper>
    </Grid> */}
                </Grid>
            </div >
    );
}
export default Block; 