import { expect } from "chai";
import { deepMergeObject } from "./deepMergeObject";

describe("deepMergeObject 函数测试", () => {
	it("deepMergeObject({ a: { b: 3 } }, { a: { b: 4 } }) 结果为 { a: { b: 4 } }", function () {
		expect(deepMergeObject({ a: { b: 3 } }, { a: { b: 4 } })).to.be.deep.equal({ a: { b: 4 } });
	});
	it("deepMergeObject({ a: { b: 3, c: '12' } }, { a: { b: 4 } }) 结果为 { a: { b: 4, c: '12' } }", function () {
		expect(deepMergeObject({ a: { b: 3, c: "12" } }, { a: { b: 4 } })).to.be.deep.equal({ a: { b: 4, c: "12" } });
	});
});
