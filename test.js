// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
///////////////////////////////////////////////////////////////////////////////
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07;


    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One USD should be 156.5 JPY", function () {

    const { fromDollarToYen } = require('./app.js');

    const JPY = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;


    expect(fromDollarToYen(3.5)).toBe(547.75);
});

test("One Yen should be 0.87 GBP", function () {

    const { fromYenToPound } = require('./app.js');

    const JPY = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;


    expect(fromYenToPound(3.5)).toBe(3.045);
}); 