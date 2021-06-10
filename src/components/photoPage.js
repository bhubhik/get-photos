import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { GridList, GridListTile, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gridList: {
    width: 950,
  },
}));

const Album = ({ photos }) => {
  const classes = useStyles();
  const smallScreen = useMediaQuery('(max-width:480px)');
  const mediumScreen = useMediaQuery('(max-width; 768px)');
  const photoGrid = () => {
    if (photos.length >= 3) {
      photos.sort((a, b) =>
        a.width / a.height > b.width / b.height
          ? -1
          : b.width / b.height > a.width / b.height
          ? 1
          : 0
      );
      photos.push(photos.shift());
    }
    return (
      <GridList
        cellHeight={smallScreen ? 'auto' : 320}
        className={classes.gridList}
        cols={smallScreen ? 1 : mediumScreen ? 2 : 4}
      >
        {photos.map((photo, index) => (
          <GridListTile
            key={photo.id}
            cols={
              !smallScreen &&
              !mediumScreen &&
              (index === 0 || index === photos.length - 1)
                ? 2
                : 1
            }
          >
            <img src={photo.urls.small} alt={photo.alt_description} />
          </GridListTile>
        ))}
      </GridList>
    );
  };
  return <div className={classes.root}>{photoGrid()}</div>;
};

export default Album;
