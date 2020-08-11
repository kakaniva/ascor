import { expect } from "chai";
import { isDeepEqual } from "./isDeepEqual";

describe("isDeepEqual 函数测试", () => {
	it("isDeepEqual(1,1) 结果为 true", function () {
		expect(isDeepEqual(1, 1)).to.be.true;
	});
	it("isDeepEqual(1,'1') 结果为 false", function () {
		expect(isDeepEqual(1, "1")).to.be.false;
	});
	it("isDeepEqual(0,false) 结果为 false", function () {
		expect(isDeepEqual(0, false)).to.be.false;
	});
	it("isDeepEqual(function(){},function(){}) 结果为 false", function () {
		expect(
			isDeepEqual(
				function () {},
				function () {}
			)
		).to.be.false;
	});
	it("isDeepEqual([null],[null]) 结果为 true", function () {
		expect(isDeepEqual([null], [null])).to.be.true;
	});
	it("isDeepEqual([NaN],[NaN]) 结果为 true", function () {
		expect(isDeepEqual([NaN], [NaN])).to.be.true;
	});
	it("isDeepEqual([NaN,null],[NaN,NaN]) 结果为 false", function () {
		expect(isDeepEqual([NaN, null], [NaN, NaN])).to.be.false;
	});
	it("isDeepEqual([NaN,NaN],[NaN,null]) 结果为 false", function () {
		expect(isDeepEqual([NaN, NaN], [NaN, null])).to.be.false;
	});
	it("isDeepEqual(null,null) 结果为 true", function () {
		expect(isDeepEqual(null, null)).to.be.true;
	});
	it("isDeepEqual(NaN,NaN) 结果为 true", function () {
		expect(isDeepEqual(NaN, NaN)).to.be.true;
	});
	it("isDeepEqual({a:NaN},{a:NaN}) 结果为 true", function () {
		expect(isDeepEqual({ a: NaN }, { a: NaN })).to.be.true;
	});
	it("isDeepEqual(undefined,undefined) 结果为 true", function () {
		expect(isDeepEqual(undefined, undefined)).to.be.true;
	});
	it("isDeepEqual({a:1},{a:1}) 结果为 true", function () {
		expect(isDeepEqual({ a: 1 }, { a: 1 })).to.be.true;
	});
	it("isDeepEqual({a:1,b:1},{a:1}) 结果为 false", function () {
		expect(isDeepEqual({ a: 1, b: 1 }, { a: 1 })).to.be.false;
	});
	it("isDeepEqual({a:{c:1},b:1},{a:{c:1},b:1}) 结果为 true", function () {
		expect(isDeepEqual({ a: { c: 1 }, b: 1 }, { a: { c: 1 }, b: 1 })).to.be.true;
	});
	it("isDeepEqual([{a:{b:{c:2}}},{a:3}],[{a:{b:{c:2}}},{a:3}]) 结果为 true", function () {
		expect(isDeepEqual([{ a: { b: { c: 2 } } }, { a: 3 }], [{ a: { b: { c: 2 } } }, { a: 3 }])).to.be.true;
	});
	it("isDeepEqual([{a:{b:{c:2}}},{a:3}],[{a:{b:{c:2}}},{a:3},2]) 结果为 false", function () {
		expect(isDeepEqual([{ a: { b: { c: 2 } } }, { a: 3 }], [{ a: { b: { c: 2 } } }, { a: 3 }, 2])).to.be.false;
	});
	it("isDeepEqual([{a:{b:{c:2}}},{a:3},2],[{a:{b:{c:2}}},{a:3}]) 结果为 false", function () {
		expect(isDeepEqual([{ a: { b: { c: 2 } } }, { a: 3 }, 2], [{ a: { b: { c: 2 } } }, { a: 3 }])).to.be.false;
	});
});
