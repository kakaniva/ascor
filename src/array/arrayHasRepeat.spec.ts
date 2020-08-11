import { expect } from "chai";
import { arrayHasRepeat } from "./arrayHasRepeat";

describe("arrayHasRepeat 函数测试", () => {
	it("arrayHasRepeat([12,45,67,89,67,12]) 结果为 true", function () {
		expect(arrayHasRepeat([12, 45, 67, 89, 67, 12])).to.be.true;
	});
	it("arrayHasRepeat(['12',45,'67',89,67,12]) 结果为 false", function () {
		expect(arrayHasRepeat(["12", 45, "67", 89, 67, 12])).to.be.false;
	});
	it("arrayHasRepeat([{a:1},{a:2},{a:1}]) 结果为 true", function () {
		expect(arrayHasRepeat([{ a: 1 }, { a: 2 }, { a: 1 }])).to.be.true;
	});
	it("arrayHasRepeat([{a:1},{a:2},{a:'1'}]) 结果为 false", function () {
		expect(arrayHasRepeat([{ a: 1 }, { a: 2 }, { a: "1" }])).to.be.false;
	});
	it("arrayHasRepeat([{a:{c:1}},{a:2},{a:'1'},{a:{c:1}}]) 结果为 true", function () {
		expect(arrayHasRepeat([{ a: { c: 1 } }, { a: 2 }, { a: "1" }, { a: { c: 1 } }])).to.be.true;
	});
});
