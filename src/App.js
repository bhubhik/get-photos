import React, { useState } from 'react';
import {
  Container,
  Grid,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Album from './components/photoPage';
import SearchBar from './components/searchBar';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));
function App() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const clientId = 'u-lTcsDUUDp4aeJaE6KWv__XdOWmqGBdO0WDNJBYhPc';

  const handleSearch = async (userInput) => {
    setErrorMessage('');
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${userInput}&client_id=${clientId}`
      );
      const results = response.data.results;
      setPhotos(results);
      if (results.length < 1) {
        setErrorMessage(
          `Could not find photos for ${userInput}. Please try another search.`
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        `${error}. Please contact the developer if this error continues.`
      );
    }
  };

  return (
    <main>
      <div className={classes.content}>
        <h1 className='titleDisplay'>Look for the magic in every moment.</h1>
        <Container maxWidth='sm'>
          <Grid container spacing={2}>
            <Grid item xs={12} align='center'>
              <SearchBar onSubmit={handleSearch} disabled={loading} />
            </Grid>
            {loading && (
              <Grid item xs={12} align='center'>
                <CircularProgress color='secondary' />
              </Grid>
            )}
            {errorMessage && (
              <Grid item xs={12} align='center'>
                <Typography variant='body1' color='error' align='center'>
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
      </div>
      <Album photos={photos} />
    </main>
  );
}

export default App;
