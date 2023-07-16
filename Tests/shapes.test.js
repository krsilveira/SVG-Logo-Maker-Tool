const Shapes = require('../lib/shapes.js');



//  Shape render TEST, to verify it will not Run script by a child class without polymorph

describe('Shapes', () => {
  it('Should throw error if render() is called', () => {
    // pass basic inputs for Shapes class, expecting to throw error on render()
    const shapeColor = 'black';
    const shapes = new Shapes(shapeColor);
    const err = new Error('Child class must implement a render() method.')

    expect(shapes.render).toThrow(err);
  });
});