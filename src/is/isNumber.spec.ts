import { expect } from "chai";
import { isNumber } from "./isNumber";

describe("isNumber 函数测试", () => {
	it("isNumber('sdf') 结果为 false", function () {
		expect(isNumber("sdf")).to.be.false;
	});
	it("isNumber(456) 结果为 true", function () {
		expect(isNumber(456)).to.be.true;
	});
	it("isNumber('456') 结果为 false", function () {
		expect(isNumber("456")).to.be.false;
	});
	it("isNumber(null) 结果为 false", function () {
		expect(isNumber(null)).to.be.false;
	});
	it("isNumber([]) 结果为 false", function () {
		expect(isNumber([])).to.be.false;
	});
	it("isNumber({a:1}) 结果为 false", function () {
		expect(isNumber({ a: 1 })).to.be.false;
	});
	it("isNumber(undefined) 结果为 false", function () {
		expect(isNumber(undefined)).to.be.false;
	});
	it("isNumber.all(undefined,23) 结果为 false", function () {
		expect(isNumber.all(undefined, 23)).to.be.false;
	});
	it("isNumber.or(undefined,23) 结果为 true", function () {
		expect(isNumber.or(undefined, 23)).to.be.true;
	});
});
