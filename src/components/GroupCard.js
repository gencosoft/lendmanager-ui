import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  custom: {
    boxShadow: "none"
  }
});

const Group = () => {
  
  const classes = useStyles();

  return (
      <Card className={classes.custom}>
      
      </Card>
  )
}

export default Group
