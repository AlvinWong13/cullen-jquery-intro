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
  //$('.removeButton').on('click', removeMe); //does not work

  //event delegation
  $(document).on('click', '.removeButton', removeMe);
  console.log('removeButton', $('.removeButton'));
}

function removeMe() {
  let thisThing = $(this);
  //console.log('what is this?!', thisThing);

  $(this).parent().remove();

  // console.log('remove me!');
  // $('.harmonica-item').remove();
}

function whenIAddAHarmonica() {
  //stuff to do when we add harmonica
  console.log('clicked the button');

  //grab the data
  let brand = $('#brand').val();
  console.log('brand is', brand);

  //render data to DOM
  $('#harmonicas').append(`
  <li class="harmonica-item">
    Brand is: ${brand}
    <button class="removeButton">Remove</button>
  </li>
  `);
}
