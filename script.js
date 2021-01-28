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

  // change the text
  // $('h1').text('...?');

  const h1Text = $('h1').text();
  console.log('h1 Text is', h1Text);

  const louderText = h1Text.toUpperCase() + '!!!!';
  $('h1').text(louderText);

  $('#submitButton').on('click', whenIAddAHarmonica);
}

function whenIAddAHarmonica() {
  //stuff to do when we add harmonica
  console.log('clicked the button');

  //grab the data
  let brand = $('#brand').val();
  console.log('brand is', brand);

  //render data to DOM
  $('#harmonicas').append(`
  <li>
    Brand is: ${brand}
  </li>
  `);
}
