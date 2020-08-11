import { expect } from "chai";
import { isArray } from "./isArray";

describe("isArray 函数测试", () => {
	it("isArray('something') 结果为 false", function () {
		expect(isArray("sdf")).to.be.false;
	});
	it("isArray(123456) 结果为 false", function () {
		expect(isArray(123456)).to.be.false;
	});
	it("isArray([1,2,3]) 结果为 true", function () {
		expect(isArray([1, 2, 3])).to.be.true;
	});
	it("isArray(null) 结果为 false", function () {
		expect(isArray(null)).to.be.false;
	});
	it("isArray([]) 结果为 true", function () {
		expect(isArray([])).to.be.true;
	});
	it("isArray([{a:1},{a:2}]) 结果为 true", function () {
		expect(isArray([{ a: 1 }, { a: 2 }])).to.be.true;
	});
	it("isArray({a:1}}) 结果为 false", function () {
		expect(isArray({ a: 1 })).to.be.false;
	});
	it("isArray(undefined) 结果为 false", function () {
		expect(isArray(undefined)).to.be.false;
	});
	it("isArray.all(undefined,[]) 结果为 false", function () {
		expect(isArray.all(undefined, [])).to.be.false;
	});
	it("isArray.or(undefined,[]) 结果为 true", function () {
		expect(isArray.or(undefined, [])).to.be.true;
	});
});
