import ListItems from "../list-items";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: "#b7b7b7",
    padding: "16px",
  },
}));

const App = () => {
  const { root } = useStyles();
  return (
    <div className={root}>
      <ListItems />
    </div>
  );
};

export default App;
