const fs = require("fs");
const delDir = (path) => {
	let files = [];
	if (fs.existsSync(path)) {
		files = fs.readdirSync(path);
		files.forEach((file) => {
			let curPath = path + "/" + file;
			if (fs.statSync(curPath).isDirectory()) {
				delDir(curPath); //递归删除文件夹
			} else {
				fs.unlinkSync(curPath); //删除文件
			}
		});
		fs.rmdirSync(path);
	}
};
//删除typescript编译输出的目录
delDir("./lib");
