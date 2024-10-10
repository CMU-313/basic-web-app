import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom';

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return Shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    test('Query for Andrew ID', () => {
        const response = QueryProcessor("What is your Andrew ID?");
        expect(response).toBe("jgraciav");
    });

    test('Query for your name', () => {
        const response = QueryProcessor("What is your name?");
        expect(response).toBe("Jorge G");
    });

    test('should return the largest of four numbers', () => {
        const query = "Which of the following numbers is the largest: 12, 45, 23, 78?";
        const response = QueryProcessor(query);
        expect(response).toBe("78");
    });

    test('should return the sum of two numbers', () => {
        const query = "What is 72 plus 31?";
        const response = QueryProcessor(query);
        expect(response).toBe("103");
    });
});
