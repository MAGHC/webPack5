import './btn.scss';

class Btn {
  render() {
    const btn = document.createElement('button');
    btn.innerHTML = '버튼!';
    btn.classList.add('btn');
    btn.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = '눌렀다';
      body.appendChild(p);
    };
    const body = document.querySelector('body');
    body.appendChild(btn);
  }
}

export default Btn;
