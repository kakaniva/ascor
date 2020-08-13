import { expect } from "chai";
import { diskSize } from "./diskSize";

describe("diskSize 函数测试", () => {
	it("diskSize(1024) 结果为 '1.00 KB'", function () {
		expect(diskSize(1024)).to.be.equal("1.00 KB");
	});
	it("diskSize(12456465) 结果为 '11.88 MB'", function () {
		expect(diskSize(12456465)).to.be.equal("11.88 MB");
	});
	it("diskSize(42965465) 结果为 '40.98 MB'", function () {
		expect(diskSize(42965465)).to.be.equal("40.98 MB");
	});
});
