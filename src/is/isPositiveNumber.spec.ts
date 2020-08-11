import { expect } from "chai";
import { isPositiveNumber } from "./isPositiveNumber";

describe("isPositiveNumber 函数测试", () => {
	it("isPositiveNumber(-2) 结果为 false", function () {
		expect(isPositiveNumber(-2)).to.be.false;
	});
	it("isPositiveNumber(0) 结果为 true", function () {
		expect(isPositiveNumber(0)).to.be.true;
	});
	it("isPositiveNumber(12) 结果为 true", function () {
		expect(isPositiveNumber(12)).to.be.true;
	});
	it("isPositiveNumber(12.12) 结果为 true", function () {
		expect(isPositiveNumber(12.12)).to.be.true;
	});
	it("isPositiveNumber('12') 结果为 true", function () {
		expect(isPositiveNumber("12")).to.be.true;
	});
	it("isPositiveNumber('12f') 结果为 false", function () {
		expect(isPositiveNumber("12f")).to.be.false;
	});
	it("isPositiveNumber('-12') 结果为 false", function () {
		expect(isPositiveNumber("-12")).to.be.false;
	});
	it("isPositiveNumber('-12.12') 结果为 false", function () {
		expect(isPositiveNumber("-12.12")).to.be.false;
	});
	it("isPositiveNumber.all('-12.12',12) 结果为 false", function () {
		expect(isPositiveNumber.all("-12.12", 12)).to.be.false;
	});
	it("isPositiveNumber.or('-12.12',12) 结果为 true", function () {
		expect(isPositiveNumber.or("-12.12", 12)).to.be.true;
	});
});
