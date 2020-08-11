import { expect } from "chai";
import { isTypeEqual } from "./isTypeEqual";

describe("isTypeEqual 函数测试", () => {
	it("isTypeEqual(456,'456') 结果为 false", function () {
		expect(isTypeEqual(456, "456")).to.be.false;
	});
	it("isTypeEqual(456,123) 结果为 true", function () {
		expect(isTypeEqual(456, 123)).to.be.true;
	});
	it("isTypeEqual(456,null) 结果为 false", function () {
		expect(isTypeEqual(456, null)).to.be.false;
	});
	it("isTypeEqual(undefined,null) 结果为 false", function () {
		expect(isTypeEqual(undefined, null)).to.be.false;
	});
	it("isTypeEqual({},'{}') 结果为 false", function () {
		expect(isTypeEqual({}, "{}")).to.be.false;
	});
});
