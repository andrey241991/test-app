import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Button, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxidth: 600,
  },
  submitBtn: {
    marginTop: 16,
  },
}));

const Item = ({ item, onDelete, onEdit }) => {
  const { id, name, dateRange, devices, users } = item;
  const { paper, submitBtn } = useStyles();
  const { register, handleSubmit } = useForm();

  return (
    <Grid item>
      <Paper className={paper}>
        <Grid container>
          <Grid item xs container direction="column" spacing={6}>
            <Grid item xs>
              <form onSubmit={handleSubmit((data) => onEdit({ id, ...data }))}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Name"
                  name="name"
                  defaultValue={name}
                />
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Begin Date"
                  type="date"
                  name="beginDate"
                  defaultValue={dateRange[0]}
                />
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Expiration Date"
                  name="expirationDate"
                  type="date"
                  defaultValue={dateRange[1]}
                />
                <TextField
                  fullWidth
                  multiline
                  label="Users"
                  inputRef={register}
                  name="users"
                  defaultValue={users}
                />
                <TextField
                  fullWidth
                  multiline
                  label="Devices"
                  inputRef={register}
                  name="devices"
                  defaultValue={devices}
                />
                <Button
                  className={submitBtn}
                  color="primary"
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                onDelete(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Item;
