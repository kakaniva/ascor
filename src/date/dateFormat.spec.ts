import { expect } from "chai";
import { dateFormat } from "./dateFormat";

describe("dateFormat 函数测试", () => {
	it("dateFormat(new Date(1597131200000),'YYYY-mm-dd HH:MM') 结果为 2020-08-11 15:33", () => {
		expect(dateFormat(new Date(1597131200000),'YYYY-mm-dd HH:MM')).to.be.equal("2020-08-11 15:33");
	});
	it("dateFormat(new Date(1597131200000),'YYYY-mm-dd') 结果为 2020-08-11", () => {
		expect(dateFormat(new Date(1597131200000),'YYYY-mm-dd')).to.be.equal("2020-08-11");
	});
});
