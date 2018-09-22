import anime from 'animejs'
export default function () {
  anime({
    targets: '.svg-slider g path',
    duration: 1000,
    delay: 1000,
    opacity: [1, 0.5],
    scale: 1.01,
    direction: 'alternate',
    loop: true
  })
  anime({
    targets: '.svg-slider path',
    duration: 1000,
    delay: 1000,
    opacity: [1, 0.7],
    scale: 1.01,
    direction: 'alternate',
    loop: true
  })
}
