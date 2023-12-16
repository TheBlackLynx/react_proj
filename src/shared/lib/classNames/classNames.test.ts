import { classNames } from './classNames';

describe('classNames', () => {
    test('test with first param', () => {
        expect(classNames('someclass')).toBe('someclass ');
    });
    test('test with first and second params', () => {
        const expected = 'someclass class1';
        expect(
            classNames('someclass', { class1: true, class2: false }, []),
        ).toBe(expected);
    });
    test('test with first and last params', () => {
        const expected = 'someclass class1 class2 ';
        expect(classNames('someclass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('test with all params', () => {
        const expected = 'someclass class3 class4 class1';
        expect(
            classNames('someclass', { class1: true, class2: false }, [
                'class3',
                'class4',
            ]),
        ).toBe(expected);
    });
});
