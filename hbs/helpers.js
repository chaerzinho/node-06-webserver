const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

  console.log('capitalizando');

  let palabras = texto.split(' ');
  console.log(palabras);
  palabras.forEach((palabra, idx) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  })
  console.log(palabras);

  return palabras.join(' ');

});
