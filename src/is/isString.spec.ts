import { expect } from "chai";
import { isString } from "./isString";

describe("isString 函数测试", () => {
	it("isString('test') 结果为 true", function () {
		expect(isString("test")).to.be.true;
	});
	it("isString(123) 结果为 false", function () {
		expect(isString(123)).to.be.false;
	});
	it("isString('123') 结果为 true", function () {
		expect(isString("123")).to.be.true;
	});
	it("isString('') 结果为 true", function () {
		expect(isString("")).to.be.true;
	});
	it("isString([]) 结果为 false", function () {
		expect(isString([])).to.be.false;
	});
	it("isString({}) 结果为 false", function () {
		expect(isString({})).to.be.false;
	});
	it("isString(null) 结果为 false", function () {
		expect(isString(null)).to.be.false;
	});
	it("isString.all(null,'str') 结果为 false", function () {
		expect(isString.all(null, "str")).to.be.false;
	});
	it("isString.or(null,'str') 结果为 true", function () {
		expect(isString.or(null, "str")).to.be.true;
	});
});
