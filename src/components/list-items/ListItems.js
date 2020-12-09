import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Item from "../item";
import Alert from "../alert";
import { getListItems } from "../../utils";
import { ProjectItem } from "../../models/project-item";

const ListItems = () => {
  const [listItems, setListItems] = useState(getListItems());
  const [open, setOpen] = useState(false);

  const onDelete = (id) => {
    const itemIndex = listItems.findIndex((item) => item.id === id);
    setListItems([
      ...listItems.slice(0, itemIndex),
      ...listItems.slice(itemIndex + 1),
    ]);
  };

  const onEdit = ({ id, name, users, devices, beginDate, expirationDate }) => {
    const newItem = new ProjectItem(
      id,
      name,
      [beginDate, expirationDate],
      devices.split(","),
      users.split(",")
    );
    const itemIndex = listItems.findIndex((item) => item.id === id);
    setListItems([
      ...listItems.slice(0, itemIndex),
      newItem,
      ...listItems.slice(itemIndex + 1),
    ]);
    showAlert();
  };

  const showAlert = () => {
    setOpen(true);
    const timeoutId = setTimeout(() => {
      setOpen(false);
      clearTimeout(timeoutId);
    }, 2000);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Alert open={open} />
      {listItems.map((item) => {
        return (
          <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
        );
      })}
    </Grid>
  );
};

export default ListItems;
