import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 500,
//   },
// });

export default function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.contactnumbers.in/wp-content/uploads/2015/04/capgemini-logo-wallpaper-500x304-600x330.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Capgemini
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Capgemini SE is a French multinational information technology services and consulting company. 
          It is headquartered in Paris, France. Capgemini has over 270,000 employees in over 50 countries,
          of whom nearly 125,000 are in India
          </Typography>
        </CardContent>
      </>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://en.wikipedia.org/wiki/Capgemini">About</a>
        </Button>
        <Button size="small" color="primary">
          <a href="https://www.capgemini.com/in-en/resources/aiman-ezzat-becomes-ceo-of-capgemini/">CEO</a> 
        </Button>
        {/* <ExpandMoreIcon /> */}
        <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          {/* <PhotoCamera /> */}
        </IconButton>
      </label>
    </div>
      </CardActions>
    </Card>
  );
}
