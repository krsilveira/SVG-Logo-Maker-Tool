const Circle = require('../lib/circle.js');


// SVG STRING TEST

describe('Circle', () => {
  it('should return expected string for circle svg', () => {
    const shapeColor = 'red';
    const circle = new Circle(shapeColor);

    //  circle characteristics

    const shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";
    const svgContent = `<${shape} fill="${shapeColor}"/>`;
    
    expect(circle.render()).toEqual(svgContent);
  });
});