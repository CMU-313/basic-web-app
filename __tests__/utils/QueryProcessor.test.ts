import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'
import fc from "fast-check";

describe("QueryProcessor", () => {

    test('should add specific numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should sort numbers', () => {
        expect(QueryProcessor("Sort the numbers: 1, 2, 3")).toEqual("1, 2, 3");
    });

});