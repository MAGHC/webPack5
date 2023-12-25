import Kiwi from './kiwi-photo.jpg';
import './kiwi-image.scss';

class KiwiImage {
  render() {
    const img = document.createElement('img');
    img.src = Kiwi;
    img.alt = 'kiwi';
    img.classList.add('kisi-image');

    const $body = document.querySelector('body');

    $body.append(img);
  }
}

export default KiwiImage;
