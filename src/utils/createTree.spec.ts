import { expect } from "chai";
import { createTree } from "./createTree";

describe("createTree 函数测试", () => {
	it(`createTree(
        [
            { pid: 1, id: "1-2" },
            { pid: "1-2", id: "1-2-3" },
            { pid: 1, id: "1-3" },
            { pid: "1-3", id: "1-3-2" },
            { pid: "2", id: "2-3" },
        ],
        { parentKey: "pid", ownKey: "id" }
    ) 结果为 [
        {
            children: [
                {
                    children: [],
                    id: "1-2-3",
                    isLeaf: true,
                    pid: "1-2",
                },
            ],
            id: "1-2",
            isLeaf: false,
            pid: 1,
        },
        {
            children: [
                {
                    children: [],
                    id: "1-3-2",
                    isLeaf: true,
                    pid: "1-3",
                },
            ],
            id: "1-3",
            isLeaf: false,
            pid: 1,
        },
        {
            children: [],
            id: "2-3",
            isLeaf: true,
            pid: "2",
        },
    ]`, function () {
		expect(
			createTree(
				[
					{ pid: 1, id: "1-2" },
					{ pid: "1-2", id: "1-2-3" },
					{ pid: 1, id: "1-3" },
					{ pid: "1-3", id: "1-3-2" },
					{ pid: "2", id: "2-3" },
				],
				{ parentKey: "pid", ownKey: "id" }
			)
		).to.be.deep.equal([
			{
				children: [
					{
						children: [],
						id: "1-2-3",
						isLeaf: true,
						pid: "1-2",
					},
				],
				id: "1-2",
				isLeaf: false,
				pid: 1,
			},
			{
				children: [
					{
						children: [],
						id: "1-3-2",
						isLeaf: true,
						pid: "1-3",
					},
				],
				id: "1-3",
				isLeaf: false,
				pid: 1,
			},
			{
				children: [],
				id: "2-3",
				isLeaf: true,
				pid: "2",
			},
		]);
	});
});
