const logo = document.querySelectorAll("#logo path");

for(let i=0;i< logo.length;i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}



// const svgText = anime({
//   targets: logo,
//   loop: false,
//   direction: 'alternate',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutQuad',
//   //animation: fill 0.5s ease forwad 4.5s,
//   duration: 800,
//   delay: (el, i) => {return i * 90;} });

// const box= anime({
//   targets: '.specific-unit-values-demo .el',
//   width: '100%', // -> from '28px' to '100%',
//   easing: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true
// });