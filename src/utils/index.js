import { project, device, user } from "../assets";
import { ProjectItem } from "../models/project-item";

export const getListItems = () => {
  return project.map(({ id, title, beginDate, expirationDate }) => {
    const users = user
      .filter(({ projectId }) => projectId === id)
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
    const devices = device
      .filter(({ projectId }) => projectId === id)
      .map(({ serialNumber }) => serialNumber);
    return new ProjectItem(
      id,
      title,
      [formatDate(beginDate), formatDate(expirationDate)],
      devices,
      users
    );
  });
};

const formatDate = (date) => {
  if (date) {
    return new Date(date).toISOString().slice(0, 10);
  }
  return new Date().toISOString().slice(0, 10);
};
