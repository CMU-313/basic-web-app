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
        expect(response).toBe("jgraciav"); // Replace with your actual Andrew ID
    });
});
