const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;
const shakeButton = document.querySelector('button');

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const draw = ({ key }) => {
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
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
        default:
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

const clearCanvas = () => {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    }, { once: true })
}

shakeButton.addEventListener('click', clearCanvas);
window.addEventListener('keydown', handleKeyDown);
