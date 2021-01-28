console.log('I have JS!');

$(document).ready(onReady);

function onReady() {
  console.log('Ready!');

  const h1 = $('h1');
  console.log('h1', h1);

  const h2 = 'h2';
  // make it blue
  //$(h2).css('background-color', 'blue');

  // same as
  // $(h2).css('background-color', 'blue');

  $('h2').addClass('froggy');
}
