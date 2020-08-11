import { expect } from "chai";
import { arrayHasValue } from "./arrayHasValue";

describe("arrayHasValue 函数测试", () => {
	it("arrayHasValue([12,45,67,89,67,12],12) 结果为 0", function () {
		expect(arrayHasValue([12, 45, 67, 89, 67, 12], 12)).to.be.equal(0);
	});
	it("arrayHasValue([12,45,67,89,67,12],89) 结果为 3", function () {
		expect(arrayHasValue([12, 45, 67, 89, 67, 12], 89)).to.be.equal(3);
	});
	it("arrayHasValue([{a:1},{a:2}],{a:1}) 结果为 0", function () {
		expect(arrayHasValue([{ a: 1 }, { a: 2 }], { a: 1 })).to.be.equal(0);
	});
	it("arrayHasValue([{a:1},{a:2}],{a:3}) 结果为 -1", function () {
		expect(arrayHasValue([{ a: 1 }, { a: 2 }], { a: 3 })).to.be.equal(-1);
	});
});
