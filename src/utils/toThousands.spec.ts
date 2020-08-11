import { expect } from "chai";
import { toThousands } from "./toThousands";

describe("toThousands 函数测试", () => {
	it("toThousands(4567894651) 结果为 '4,567,894,651'", function () {
		expect(toThousands(4567894651)).to.be.equal("4,567,894,651");
	});
	it("toThousands(46548) 结果为 '46,548'", function () {
		expect(toThousands(46548)).to.be.equal("46,548");
	});
});
