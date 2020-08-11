import { expect } from "chai";
import { isUndefined } from "./isUndefined";

describe("isUndefined 函数测试", () => {
	it("isUndefined(456) 结果为 false", function () {
		expect(isUndefined(456)).to.be.false;
	});
	it("isUndefined('456') 结果为 false", function () {
		expect(isUndefined("456")).to.be.false;
	});
	it("isUndefined(null) 结果为 false", function () {
		expect(isUndefined(null)).to.be.false;
	});
	it("isUndefined([]) 结果为 false", function () {
		expect(isUndefined([])).to.be.false;
	});
	it("isUndefined({a:1}}) 结果为 false", function () {
		expect(isUndefined({ a: 1 })).to.be.false;
	});
	it("isUndefined(undefined}) 结果为 true", function () {
		expect(isUndefined(undefined)).to.be.true;
	});
	it("isUndefined() 结果为 true", function () {
		expect(isUndefined()).to.be.true;
	});
	it("isUndefined.all(12,undefined) 结果为 false", function () {
		expect(isUndefined.all(12, undefined)).to.be.false;
	});
	it("isUndefined.or(12,undefined) 结果为 true", function () {
		expect(isUndefined.or(12, undefined)).to.be.true;
	});
});
