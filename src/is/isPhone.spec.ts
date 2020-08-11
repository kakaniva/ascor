import { expect } from "chai";
import { isPhone } from "./isPhone";

describe("isPhone 函数测试", () => {
	it("isPhone('13413899999') 结果为 true", function () {
		expect(isPhone("13413899999")).to.be.true;
	});
	it("isPhone('1341899999') 结果为 false", function () {
		expect(isPhone("1341899999")).to.be.false;
	});
	it("isPhone('1234189999') 结果为 false", function () {
		expect(isPhone("1234189999")).to.be.false;
	});
	it("isPhone(13413899090) 结果为 true", function () {
		expect(isPhone(13413899090)).to.be.true;
	});
	it("isPhone.all(13413899090,123456) 结果为 false", function () {
		expect(isPhone.all(13413899090, 123456)).to.be.false;
	});
	it("isPhone.or(13413899090,123456) 结果为 true", function () {
		expect(isPhone.or(13413899090, 123456)).to.be.true;
	});
});
