const container = document.getElementById('container');
const input = document.getElementById('amount');

const drawFigure = (type) => {
  const numberOfFig = input.value;
  for(let i = 0; i < numberOfFig; ++i) {
    switch(type) {
      case 'rectangle':
        drawRectangle();
        break;

      case 'circle':
        drawCircle();
        break;

      case 'triangle':
        drawTriangle();
        break;
    }
  }
};

const drawRectangle = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const randMult = Math.random();
  const size = Math.floor(500 * randMult);

  canvas.height = size;
  canvas.width = size;

  ctx.globalAlpha = 0.5;
  ctx.rect(0, 0, size, size);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.strokeRect(0, 0, size, size);

  extracted(canvas, container);
};

const drawCircle = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const randMult = Math.random();
  const size = Math.floor(500 * randMult);

  canvas.height = size;
  canvas.width = size;

  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.stroke();

  extracted(canvas, container);
};

const drawTriangle = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const randMult = Math.random();
  const size = Math.floor(500 * randMult);

  canvas.height = size * 3 / Math.sqrt(3);
  canvas.width = size;
  ctx.globalAlpha = 0.5;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size / 2, size * 3 / Math.sqrt(3));
  ctx.lineTo(size, 0);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.stroke();

  extracted(canvas, container);
};

const extracted = (canvas, container) => {
  const top = Math.floor(100 * Math.random());
  const left = Math.floor(100 * Math.random());

  canvas.style.top = `${top}%`;
  canvas.style.left = `${left}%`;

  container.appendChild(canvas);

  addListener();
};

const addListener = () =>{
  const canvasDOM = document.querySelector('#container > canvas:last-child');

  canvasDOM.addEventListener('click', ()=>{
    const ctx = canvasDOM.getContext('2d');
    ctx.fillStyle = 'yellow';
    ctx.fill();
  });

  canvasDOM.addEventListener('dblclick', ()=>{
    canvasDOM.remove();
  })
}