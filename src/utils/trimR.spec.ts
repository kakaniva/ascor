import { expect } from "chai";
import { trimR } from "./trimR";

describe("trimR 函数测试", () => {
	it("trimR('   something      ') 结果为 '   something'", function () {
		expect(trimR("   something      ")).to.be.equal("   something");
	});
	it("trimR('   some   thing      ') 结果为 '   some   thing'", function () {
		expect(trimR("   some   thing      ")).to.be.equal("   some   thing");
	});
});
