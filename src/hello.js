import './assets/css/style.css'
import './assets/css/style.scss'
import './assets/css/style.module.scss'

import Icon from './assets/images/1.png'

console.log('hello webpack')

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack'
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
