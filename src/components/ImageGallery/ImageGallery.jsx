import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.imageGallery}>
        <ImageGalleryItem />
      </ul>
    );
  }
}

export default ImageGallery;
