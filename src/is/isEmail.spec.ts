import { expect } from "chai";
import { isEmail } from "./isEmail";

describe("isEmail 函数测试", () => {
	it("isEmail('123@qq.com') 结果为 true", function () {
		expect(isEmail("123@qq.com")).to.be.true;
	});
	it("isEmail('123@some.com.cn') 结果为 true", function () {
		expect(isEmail("123@some.com.cn")).to.be.true;
	});
	it("isEmail('中文@some.com.cn') 结果为 true", function () {
		expect(isEmail("中文@some.com.cn")).to.be.true;
	});
	it("isEmail('123.some.com.cn') 结果为 false", function () {
		expect(isEmail("123.some.com.cn")).to.be.false;
	});
	it("isEmail('123@中文.cn') 结果为 false", function () {
		expect(isEmail("123@中文.cn")).to.be.false;
	});
	it("isEmail('123@cn') 结果为 false", function () {
		expect(isEmail("123@cn")).to.be.false;
	});
	it("isEmail('123@mm?1.cn') 结果为 false", function () {
		expect(isEmail("123@mm?1.cn")).to.be.false;
	});
	it("isEmail('123@mm-1.cn') 结果为 true", function () {
		expect(isEmail("123@mm-1.cn")).to.be.true;
	});
	it("isEmail('123-t@mm-1.cn') 结果为 true", function () {
		expect(isEmail("123-t@mm-1.cn")).to.be.true;
	});
	it("isEmail('123_t@mm-1.cn') 结果为 true", function () {
		expect(isEmail("123_t@mm-1.cn")).to.be.true;
	});
	it("isEmail('test.123.t@mm-1.cn') 结果为 true", function () {
		expect(isEmail("test.123.t@mm-1.cn")).to.be.true;
	});
	it("isEmail.all('test.123.t@mm-1.cn','123') 结果为 false", function () {
		expect(isEmail.all("test.123.t@mm-1.cn", "123")).to.be.false;
	});
	it("isEmail.or('test.123.t@mm-1.cn','123') 结果为 true", function () {
		expect(isEmail.or("test.123.t@mm-1.cn", "123")).to.be.true;
	});
});
