import { expect } from "chai";
import { trimL } from "./trimL";

describe("trimL 函数测试", () => {
	it("trimL('   something      ') 结果为 'something      '", function () {
		expect(trimL("   something      ")).to.be.equal("something      ");
	});
	it("trimL('   some   thing      ') 结果为 'some   thing      '", function () {
		expect(trimL("   some   thing      ")).to.be.equal("some   thing      ");
	});
});
