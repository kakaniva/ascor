import { expect } from "chai";
import { isNumber } from "./isNumber";

describe("isNumber 相关测试", () => {
	it(`isNumber(45) 结果为 true`, () => {
		expect(isNumber(45)).to.be.true;
	});
});



