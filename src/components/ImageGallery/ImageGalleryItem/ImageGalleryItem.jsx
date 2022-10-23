import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  hendleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <>
        <li onClick={this.hendleModal} className={css.imageGalleryItem}>
          <img
            className={css.imageGalleryItem_image}
            src={webformatURL}
            alt={tags}
            loading="lazy"
          />
        </li>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            description={tags}
            onClose={this.hendleModal}
          />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
