self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './vs/language/json/jsonWorker.js';
		}
		return './vs/editor/editor.main.js';
	}
};
