import { expect } from "chai";
import { arraySort } from "./arraySort";

describe("arraySort 函数测试", () => {
	it(`arraySort(["a", "c", "g", 5, 12, 97, 66],{mode:'desc'}) 结果为 [ 'g', 'c', 'a', 97, 66, 12, 5 ]`, function () {
		expect(arraySort(["a", "c", "g", 5, 12, 97, 66], { mode: "desc" })).to.be.deep.equal(["g", "c", "a", 97, 66, 12, 5]);
	});
	it(`arraySort(["a", "c", "g", 5, 12, 97, 66],{mode:'asc'}) 结果为 [5, 12, 66, 97, "a", "c", "g"]`, function () {
		expect(arraySort(["a", "c", "g", 5, 12, 97, 66], { mode: "asc" })).to.be.deep.equal([5, 12, 66, 97, "a", "c", "g"]);
	});
	it(`arraySort(["a", "c", "g", 5, 12, 97, 66, "ac"],{mode:'asc'}) 结果为 [5, 12, 66, 97, "a", "ac", "c", "g"]`, function () {
		expect(arraySort(["a", "c", "g", 5, 12, 97, 66, "ac"], { mode: "asc" })).to.be.deep.equal([5, 12, 66, 97, "a", "ac", "c", "g"]);
	});
	it(`arraySort([{ id: 456 }, { id: 12 }, { id: "asdf" }, { id: 9 }],{mode:'asc',key:'id'}) 结果为 [{ id: 9 }, { id: 12 }, { id: 456 }, { id: "asdf" }]`, function () {
		expect(arraySort([{ id: 456 }, { id: 12 }, { id: "asdf" }, { id: 9 }], { mode: "asc", key: "id" })).to.be.deep.equal([{ id: 9 }, { id: 12 }, { id: 456 }, { id: "asdf" }]);
	});
	it(`arraySort(["2020-1-1", "2019-5-6", "2020-5-5", "2019-3-2"],{mode:'asc'}) 结果为 ["2019-3-2", "2019-5-6", "2020-1-1", "2020-5-5"]`, function () {
		expect(arraySort(["2020-1-1", "2019-5-6", "2020-5-5", "2019-3-2"], { mode: "asc" })).to.be.deep.equal(["2019-3-2", "2019-5-6", "2020-1-1", "2020-5-5"]);
	});
	it(`arraySort(["bd", "cs", "bc", 5, "aa", "fg", "as", "gg", 23],{mode:'asc'}) 结果为 [5, 23, "aa", "as", "bc", "bd", "cs", "fg", "gg"]`, function () {
		expect(arraySort(["bd", "cs", "bc", 5, "aa", "fg", "as", "gg", 23], { mode: "asc" })).to.be.deep.equal([5, 23, "aa", "as", "bc", "bd", "cs", "fg", "gg"]);
	});
	it(`arraySort(["bd", "cs", "bc", 5, "aa", "张三", "fg", "张四", "as", "gg", "陈大", 23],{mode:'asc'}) 结果为 [5, 23, "aa", "as", "bc", "bd", "cs", "fg", "gg"]`, function () {
		expect(arraySort(["bd", "cs", "bc", 5, "aa", "张三", "fg", "张四", "as", "gg", "陈大", 23], { mode: "asc" })).to.be.deep.equal([5, 23, "陈大", "张三", "张四", "aa", "as", "bc", "bd", "cs", "fg", "gg"]);
	});
	it(`arraySort(["bd", "cs", "bc", 5, "aa", "张三", "fg", "张四", "as", "gg", "陈大", 23],{mode:'desc'}) 结果为 ["gg", "fg", "cs", "bd", "bc", "as", "aa", "张四", "张三", "陈大", 23, 5]`, function () {
		expect(arraySort(["bd", "cs", "bc", 5, "aa", "张三", "fg", "张四", "as", "gg", "陈大", 23], { mode: "desc" })).to.be.deep.equal(["gg", "fg", "cs", "bd", "bc", "as", "aa", "张四", "张三", "陈大", 23, 5]);
	});
	it(`arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69],{mode:'desc'}) 结果为 [ 89, 69, 66, 37, 9, 5, 5, 3, 2, 1 ]`, function () {
		expect(arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "desc" })).to.be.deep.equal([89, 69, 66, 37, 9, 5, 5, 3, 2, 1]);
	});
	it(`arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69],{mode:'asc'}) 结果为  [ 1, 2, 3, 5, 5, 9, 37, 66, 69, 89 ]`, function () {
		expect(arraySort([1, 2, 3, 5, 9, 89, 66, 37, 5, 69], { mode: "asc" })).to.be.deep.equal([1, 2, 3, 5, 5, 9, 37, 66, 69, 89]);
	});
	it(`arraySort(["dfa", "sd", "bt", "aa", "ebe", "sg"],{mode:'asc'}) 结果为  ["aa", "bt", "dfa", "ebe", "sd", "sg"]`, function () {
		expect(arraySort(["dfa", "sd", "bt", "aa", "ebe", "sg"], { mode: "asc" })).to.be.deep.equal(["aa", "bt", "dfa", "ebe", "sd", "sg"]);
	});
	it(`arraySort(["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"],{mode:'asc'}) 结果为  ["李四", "孙七", "王五", "吴九", "张三", "赵六", "郑十", "周八"]`, function () {
		expect(arraySort(["张三", "李四", "王五", "赵六", "孙七", "周八", "吴九", "郑十"], { mode: "asc" })).to.be.deep.equal(["李四", "孙七", "王五", "吴九", "张三", "赵六", "郑十", "周八"]);
	});
});
