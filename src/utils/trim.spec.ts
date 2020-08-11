import { expect } from "chai";
import { trim } from "./trim";

describe("trim 函数测试", () => {
	it("trim('   something      ') 结果为 'something'", function () {
		expect(trim("   something      ")).to.be.equal("something");
	});
	it("trim('   some   thing      ') 结果为 'some   thing'", function () {
		expect(trim("   some   thing      ")).to.be.equal("some   thing");
	});
});
