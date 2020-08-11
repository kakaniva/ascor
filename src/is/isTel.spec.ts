import { expect } from "chai";
import { isTel } from "./isTel";

describe("isTel 函数测试", () => {
	it("isTel('13413899999') 结果为 false", function () {
		expect(isTel("13413899999")).to.be.false;
	});
	it("isTel('0758-88888888') 结果为 true", function () {
		expect(isTel("0758-88888888")).to.be.true;
	});
	it("isTel('0758-7777777') 结果为 true", function () {
		expect(isTel("0758-7777777")).to.be.true;
	});
	it("isTel('0758-7777777-1234') 结果为 true", function () {
		expect(isTel("0758-7777777-1234")).to.be.true;
	});
	it("isTel('07587777777-1234') 结果为 false", function () {
		expect(isTel("07587777777-1234")).to.be.false;
	});
	it("isTel.all('0758-7777777-1234','123456') 结果为 false", function () {
		expect(isTel.all("0758-7777777-1234", "123456")).to.be.false;
	});
	it("isTel.or('0758-7777777-1234','123456') 结果为 true", function () {
		expect(isTel.or("0758-7777777-1234", "123456")).to.be.true;
	});
});
