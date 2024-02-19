import { Triangle, Circle, Square } from './shapes';

describe('Shape classes', () => {
    test('Triangle should render correct SVG', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('Circle should render correct SVG', () => {
        const radius = 50; // Assuming radius for the example
        const shape = new Circle('red', radius);
        // Assuming the Circle's render method takes the color and radius to render the SVG
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="${radius}" fill="red" />`);
    });

    test('Square should render correct SVG', () => {
        const sideLength = 100; // Assuming side length for the example
        const shape = new Square('green', sideLength);
        // Assuming the Square's render method takes the color and side length to render the SVG
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="${sideLength}" height="${sideLength}" fill="green" />`);
    });
});
