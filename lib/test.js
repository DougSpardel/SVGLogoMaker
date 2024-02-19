import { Triangle, Circle, Square } from './shapes';

describe('Shape classes', () => {
    test('Triangle should render correct SVG', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    // Add tests for Circle and Square
});

// Remember to run your tests with `npm test`
