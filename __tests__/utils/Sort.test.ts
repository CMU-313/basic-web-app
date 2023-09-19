import { BubbleSort, MergeSort } from "../../utils/Sort";
import '@testing-library/jest-dom'
import fc from "fast-check";

describe("Sort", () => {
	test('bubble sort should sort numbers', () => {
        expect(BubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
    });

	test('merge sort should sort numbers', () => {
        expect(MergeSort([3, 2, 1])).toEqual([1, 2, 3]);
    });


	// test('merge sort should behave the same as bubble sort', () => {
	// 	// Differential testing
    //     expect(MergeSort([1, 2, 3])).toEqual(BubbleSort([1, 2, 3]));

    //     // Property-based testing
	// 	fc.assert(
	// 		fc.property(fc.integer({min:0}), fc.integer({min:0}), fc.integer({min:0}), 
	// 			(a, b, c) => {
	// 		  expect(BubbleSort([a, b, c])).toEqual(MergeSort([a, b, c]));
	// 		})
	// 	);
    // });



})