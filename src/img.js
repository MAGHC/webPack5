import Stock from './stockImg.jpg';

function addImg() {
  const img = document.createElement('img');
  img.alt = '스톡이미지';
  img.width = 300;
  img.src = Stock;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImg;
