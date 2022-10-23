import React, { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { fetchImages } from 'components/SeviceApi/Api';

import css from 'components/App/App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageQuery: '',
    page: null,
    error: '',
    images: [],
    isLoading: false,
    isLoadMoreShown: false,
  };

  hendleFormSubmit = imageQuery => {
    this.setState({ imageQuery, images: [], page: 1, isLoading: true });
  };

  componentDidMount() {
    if (!this.state.isLoading) {
      this.fetchImages();
    }
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const searchQuery = this.state.imageQuery;
    const searchPage = this.state.page;
    try {
      const fetchedImages = await fetchImages(searchQuery, searchPage);
      const images = [...this.state.images, ...fetchedImages.hits];
      this.setState({
        images: images,
        isLoadMoreShown: images.length < fetchedImages.totalHits,
        error:
          images.length === 0
            ? 'Sorry, there are no images you were looking for.'
            : '',
      });
    } catch {
      this.setState({
        error: 'Sorry, failed to download. Please try again.',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  hendelLoadMor = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendleFormSubmit} />
        {this.state.isLoading ? (
          <Loader isLoading={this.state.isLoading} />
        ) : (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.error && <h1>{this.state.error}</h1>}

        {this.state.images.length !== 0 && this.state.isLoading === false && (
          <Button onClick={this.hendelLoadMor} />
        )}
      </div>
    );
  }
}

export default App;
