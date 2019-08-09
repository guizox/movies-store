import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import StarMovie from 'components/StarMovie';
import PropTypes from 'prop-types';
import { history } from 'store';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    cursor: 'pointer',
  },
  media: {
    height: 0,
    paddingTop: '500px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  loading: {
    animationDuration: '1s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'placeHolderShimmer',
    animationTimingFunction: 'linear',
    background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
    backgroundSize: '100%',
    width: '100%',
  },
}));

export default function CardMovie({
  movie: { title, release_date, poster_path, overview, isLoading, vote_average, id },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card} onClick={() => history.push(`/detail/${id}`)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={!isLoading ? classes.avatar : classes.loading}>
            {!isLoading && title && title.substr(0, 1).toUpperCase()}
          </Avatar>
        }
        title={!isLoading && title}
        subheader={
          !isLoading ? (
            `Release Date : ${moment(release_date).format('DD/MM/YYYY')}`
          ) : (
            <div className={classes.loading} style={{ height: '30px' }} />
          )
        }
        action={<StarMovie rate={vote_average} />}
      />
      {!isLoading ? (
        <CardMedia
          className={classes.media}
          image={
            poster_path
              ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`
              : 'https://cdn.dribbble.com/users/24885/screenshots/1797793/events-empty-data-set.png'
          }
          title="movie banner"
        />
      ) : (
        <div className={classes.loading} style={{ height: '400px' }} />
      )}

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand)}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Read about the movie
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    vote_average: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
