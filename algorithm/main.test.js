// import {findStringsLengthMost} from './StringsLengthMost';
const expect = chai.expect;

describe('function that returns sum of top two greatest numbers', () => {
    it('should return 9', () => {
        const result = sumOfTopTwo([1, 4, 2, 3, 5]);
        expect(result).to.eql(9);
    });

    it('should return 21', () => {
        const result = sumOfTopTwo([1, 4, 2, 3, 10, 11, 5]);
        expect(result).to.eql(21);
    });
});

describe('test function that find strings\'length that most appear in array', () => {
    it('should return [\'a\', \'c\', \'d\']', () => {
        const result = findStringsLengthMost(['a', 'ab', 'bc', 'c', 'd', 'abc']);
        expect(result).to.eql(['a', 'c', 'd']);
    });

    it('should return [\'ab\', \'cd\', \'gh\']', () => {
        const result = findStringsLengthMost(['a', 'ab', 'cd', 'gh', 'abc', 'def']);
        expect(result).to.eql(['ab', 'cd', 'gh']);
    });
});