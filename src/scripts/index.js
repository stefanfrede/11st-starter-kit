// eslint-disable-next-line
import confetti from 'canvas-confetti';

// eslint-disable-next-line
import 'alpinejs';

const canvas = document.getElementById('canvas');

if (canvas) {
  confetti.create(canvas, {
    resize: true,
    useWorker: true,
  })({ particleCount: 100, spread: 160 });
}
