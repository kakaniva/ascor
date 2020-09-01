import { expect } from "chai";
import { getRanStr } from "./getRanStr";

describe("getRanStr 函数测试", () => {
	it("getRanStr(12).length 结果为 12", function () {
		expect(getRanStr(12).length).to.be.equal(12);
	});
	it("getRanStr(42).length 结果为 42", function () {
		expect(getRanStr(42).length).to.be.equal(42);
	});
	it("getRanStr(20,'helloworld').length 结果为 20", function () {
		expect(getRanStr(20, "helloworld").length).to.be.equal(20);
	});
});
