import './style.css'
import lsp from './lsp.png'

function component(){
  var element = document.createElement('div');
  element.innerHTML = 'Hi~Webpack~bundle.js';
  element.classList.add('color_green');// 添加类名

  var img = new Image(100,100); // 使用图片
  img.src = lsp;
  element.appendChild(img);
  return element;
}

document.body.appendChild(component());