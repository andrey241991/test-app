import { project, device, user } from "../assets";
import { Item } from "../models/item";

export const getListItems = () => {
  return project.map(({ id, title, beginDate, expirationDate }) => {
    const users = user
      .filter(({ projectId }) => projectId === id)
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    const devices = device
      .filter(({ projectId }) => projectId === id)
      .map(({ serialNumber }) => serialNumber);
    return new Item(id, title, [beginDate, expirationDate], devices, users);
  });
};
