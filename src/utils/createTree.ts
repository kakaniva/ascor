import { isArray, isObject } from "../is";

interface createTreeConfigMode {
	parentKey: string; //父级的id的key
	ownKey: string; //自身的id的key
}

/**
 * 根据返回的数组创建树接口
 * @param  arr
 * @param  config，例：{ parentKey: "pid", ownKey: "id" } ，parentKey为父节点唯一标识的字段名，例如pid，ownKey为自己的唯一表示，如id
 * @return 返回创建好的树
 */

export const createTree = (arr: any[], config: createTreeConfigMode = { parentKey: "pid", ownKey: "id" }) => {
	if (!isArray(arr)) {
		return arr;
	}
	let _config = {
		parentKey: "pid",
		ownKey: "id",
		...(isObject(config) ? config : {}),
	};
	let index: number = 0;
	let tmp = arr.map((m) => {
			return {
				...m,
				children: [],
				get isLeaf() {
					if (isArray(this.children) && this.children.length > 0) {
						return false;
					} else {
						return true;
					}
				},
			};
		}),
		f = (data: any) => {
			if (isArray(data)) {
				for (let k = 0; k < data.length; k++) {
					if (tmp[index][_config.parentKey] == data[k][_config.ownKey]) {
						if (
							!data[k].children
								.map((m: any) => {
									return m[_config.ownKey];
								})
								.includes(tmp[index][_config.ownKey])
						) {
							data[k].children.push(tmp.splice(index, 1)[0]);
							index--;
						}
						break;
					} else {
						f(data[k].children);
					}
				}
			}
		};

	for (index = 0; index < tmp.length; index++) {
		f(tmp);
	}
	return tmp;
};
