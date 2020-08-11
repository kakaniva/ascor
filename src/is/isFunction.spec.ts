import { expect } from "chai";
import { isFunction } from "./isFunction";

describe("isFunction 函数测试", () => {
	it("isFunction('something') 结果为 false", function () {
		expect(isFunction("sdf")).to.be.false;
	});
	it("isFunction(123456) 结果为 false", function () {
		expect(isFunction(123456)).to.be.false;
	});
	it("isFunction([1,2,3]) 结果为 false", function () {
		expect(isFunction([1, 2, 3])).to.be.false;
	});
	it("isFunction(null) 结果为 false", function () {
		expect(isFunction(null)).to.be.false;
	});
	it("isFunction([]) 结果为 false", function () {
		expect(isFunction([])).to.be.false;
	});
	it("isFunction(function(){}) 结果为 true", function () {
		expect(isFunction(function () {})).to.be.true;
	});
	it("isFunction(function m(){}) 结果为 true", function () {
		expect(isFunction(function m() {})).to.be.true;
	});
	it("isFunction(()=>{}) 结果为 true", function () {
		expect(isFunction(() => {})).to.be.true;
	});
	it("isFunction((()=>{return ()=>{}})()) 结果为 true", function () {
		expect(
			isFunction(
				(() => {
					return () => {};
				})()
			)
		).to.be.true;
	});
	it("isFunction({a:1}}) 结果为 false", function () {
		expect(isFunction({ a: 1 })).to.be.false;
	});
	it("isFunction(undefined) 结果为 false", function () {
		expect(isFunction(undefined)).to.be.false;
	});
	it("isFunction.all(undefined,()=>{}) 结果为 false", function () {
		expect(isFunction.all(undefined, () => {})).to.be.false;
	});
	it("isFunction.or(undefined,()=>{}) 结果为 true", function () {
		expect(isFunction.or(undefined, () => {})).to.be.true;
	});
});
