import { expect } from "chai";
import { isEmpty } from "./isEmpty";

describe("isEmpty 函数测试", () => {
	it("isEmpty('some') 结果为 false", function () {
		expect(isEmpty("some")).to.be.false;
	});
	it("isEmpty(123) 结果为 false", function () {
		expect(isEmpty(123)).to.be.false;
	});
	it("isEmpty([]) 结果为 false", function () {
		expect(isEmpty([])).to.be.false;
	});
	it("isEmpty({}) 结果为 false", function () {
		expect(isEmpty({})).to.be.false;
	});
	it("isEmpty(null) 结果为 true", function () {
		expect(isEmpty(null)).to.be.true;
	});
	it("isEmpty(undefined) 结果为 true", function () {
		expect(isEmpty(undefined)).to.be.true;
	});
	it("isEmpty('') 结果为 true", function () {
		expect(isEmpty("")).to.be.true;
	});
	it("isEmpty(0) 结果为 false", function () {
		expect(isEmpty(0)).to.be.false;
	});
	it("isEmpty(NaN) 结果为 false", function () {
		expect(isEmpty(NaN)).to.be.false;
	});
	it("isEmpty.all(NaN,11) 结果为 false", function () {
		expect(isEmpty.all(NaN, 11)).to.be.false;
	});
	it("isEmpty.or(null,11) 结果为 true", function () {
		expect(isEmpty.or(null, 11)).to.be.true;
	});
});
