const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const { width, height } = canvas;

const shakeButton = document.querySelector('shake');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
