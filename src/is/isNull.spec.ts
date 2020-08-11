import { expect } from "chai";
import { isNull } from "./isNull";

describe("isNull 函数测试", () => {
	it("isNull('something') 结果为 false", function () {
		expect(isNull("sdf")).to.be.false;
	});
	it("isNull(123456) 结果为 false", function () {
		expect(isNull(123456)).to.be.false;
	});
	it("isNull([1,2,3]) 结果为 false", function () {
		expect(isNull([1, 2, 3])).to.be.false;
	});
	it("isNull(null) 结果为 true", function () {
		expect(isNull(null)).to.be.true;
	});
	it("isNull('null') 结果为 false", function () {
		expect(isNull("null")).to.be.false;
	});
	it("isNull({a:1}}) 结果为 false", function () {
		expect(isNull({ a: 1 })).to.be.false;
	});
	it("isNull(undefined) 结果为 false", function () {
		expect(isNull(undefined)).to.be.false;
	});
	it("isNull.all(undefined,null) 结果为 false", function () {
		expect(isNull.all(undefined, null)).to.be.false;
	});
	it("isNull.or(undefined,null) 结果为 true", function () {
		expect(isNull.or(undefined, null)).to.be.true;
	});
});
