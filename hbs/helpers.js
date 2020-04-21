const hbs = require('hbs');

// Todos los helpers

//Helper del año actual
hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear();

});

//Helper que cambia la primera letra de una palabra a mayuscula 
hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});