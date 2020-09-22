// eslint-disable-next-line
import confetti from 'canvas-confetti';

// eslint-disable-next-line
import alpinejs from 'alpinejs';

// Quick & dirty way to prevent webpack from tree shaking Alpine.js
const body = document.querySelector('body');
body.setAttribute('data-alpinejs', alpinejs.version);

const canvas = document.getElementById('canvas');

if (canvas) {
  confetti.create(canvas, {
    resize: true,
    useWorker: true,
  })({ particleCount: 100, spread: 160 });
}
