const Square = require('../lib/square.js');

// SVG string TEST

describe('Square', () => {
  it('should return expected string for square svg', () => {
    const shapeColor = 'blue';
    const square = new Square(shapeColor);


    // square characteristics

    let shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";
    const svgContent = `<${shape} fill="${shapeColor}"/>`;

    expect(square.render()).toEqual(svgContent);
  });
});