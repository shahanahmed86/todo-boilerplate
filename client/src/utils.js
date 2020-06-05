export const utils = {
	get genId() {
		return { id: Math.random().toString(32).substr(7) };
	},
	getIndex(options, id) {
		return options.findIndex((v) => v.id === id);
	},
	getFocus(id) {
		const ele = document.getElementById(id);
		if (ele) return ele.focus();
	}
};
