import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const images = this.props.images;
    return (
      <ul className={css.imageGallery}>
        {images.map(image => {
          return <ImageGalleryItem key={image.id} image={image} />;
        })}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
