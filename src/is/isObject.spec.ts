import { expect } from "chai";
import { isObject } from "./isObject";

describe("isObject 函数测试", () => {
	it("isObject('something') 结果为 false", function () {
		expect(isObject("sdf")).to.be.false;
	});
	it("isObject(123456) 结果为 false", function () {
		expect(isObject(123456)).to.be.false;
	});
	it("isObject([1,2,3]) 结果为 false", function () {
		expect(isObject([1, 2, 3])).to.be.false;
	});
	it("isObject(null) 结果为 false", function () {
		expect(isObject(null)).to.be.false;
	});
	it("isObject([]) 结果为 false", function () {
		expect(isObject([])).to.be.false;
	});
	it("isObject([{a:1},{a:2}]) 结果为 false", function () {
		expect(isObject([{ a: 1 }, { a: 2 }])).to.be.false;
	});
	it("isObject({a:1}}) 结果为 true", function () {
		expect(isObject({ a: 1 })).to.be.true;
	});
	it("isObject(undefined) 结果为 false", function () {
		expect(isObject(undefined)).to.be.false;
	});
	it("isObject.all(undefined,{}) 结果为 false", function () {
		expect(isObject.all(undefined, {})).to.be.false;
	});
	it("isObject.or(undefined,{}) 结果为 true", function () {
		expect(isObject.or(undefined, {})).to.be.true;
	});
});
