import { expect } from "chai";
import { arrayUnique } from "./arrayUnique";

describe("arrayUnique 函数测试", () => {
	it("arrayUnique([1,2,3,4,2,5,6,8,'2']) 结果为 [1,2,3,4,5,6,8,'2']", function () {
		expect(arrayUnique([1, 2, 3, 4, 2, 5, 6, 8, "2"])).to.have.members([1, 2, 4, 3, 5, 6, 8, "2"]);
	});
	it("arrayUnique([{a:1},{a:2},{a:1}]) 结果为 [{a:1},{a:2},{a:1}]", function () {
		expect(arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }])).to.have.deep.members([{ a: 2 }, { a: 1 }, { a: 1 }]);
	});
	it("arrayUnique([{a:1},{a:2},{a:1}],'a') 结果为 [{a:1},{a:2}]", function () {
		expect(arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }], "a")).to.have.deep.members([{ a: 1 }, { a: 2 }]);
	});
	it("arrayUnique([{a:1},{a:2},{a:1},{a:3},{a:'3'}],'a') 结果为 [{a:1},{a:2},{a:3},{a:'3'}]", function () {
		expect(arrayUnique([{ a: 1 }, { a: 2 }, { a: 1 }, { a: 3 }, { a: "3" }], "a")).to.have.deep.members([{ a: 1 }, { a: 2 }, { a: 3 }, { a: "3" }]);
	});
	it("arrayUnique([null,undefined,'a','',null,null,undefined,'',2]) 结果为 [null,undefined,'a','',2]", function () {
		expect(arrayUnique([null, undefined, "a", "", null, null, undefined, "", 2])).to.have.deep.members([null, undefined, "a", "", 2]);
	});
});
