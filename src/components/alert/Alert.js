import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 350,
    minHeight: 60,
    background: "#2e970c",
    borderRadius: 5,
    color: "#FFFF",
  },
}));

const Alert = ({ open }) => {
  const { root } = useStyles();

  return (
    <Snackbar open={open} autoHideDuration={6000} className={root}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Item has been successfully updated
          </Typography>
        </Grid>
      </Grid>
    </Snackbar>
  );
};

export default Alert;
