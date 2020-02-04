const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const shakeButton = document.querySelector('shake');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const draw = ({ key }) => {
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y)
    switch(key) {
        case 'ArrowUp':
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
        case 'ArrowRight':
            x += 10;
            break;

    }
    ctx.lineTo(x, y);
    ctx.stroke();
};

const handleKeyDown = e => {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
};

window.addEventListener('keydown', handleKeyDown);
