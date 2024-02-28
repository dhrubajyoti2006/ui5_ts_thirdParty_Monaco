import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import "../vs/editor/editor.main";
// import "../vs/language/json/jsonWorker";
// import "monaco-editor-webpack-plugin";
import * as monaco from "monaco-editor";
import "../vs/editor/editor.main";
// import "./UserWorker";

window.MonacoEnvironment = {
	getWorkerUrl: function () {
		return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
              self.MonacoEnvironment = { baseUrl: '${window.location.origin}/' };
              importScripts('${window.location.origin}/vs/base/worker/workerMain.js');
          `)}`;
	}
};

/**
 * @namespace com.myorg.myapp.control
 */
export default class WDEditor extends Control {

	init(): void {

	}


	public onAfterRendering() {
		if (typeof monaco !== "undefined") {
			const modelUri = monaco.Uri.parse("json://grid/settings.json");
			const jsonModel = monaco.editor.createModel(JSON.stringify({ name: 'Hello' }, null, '\t'), "json", modelUri);

			monaco.editor.create(this.getDomRef() as HTMLElement, {
				// value: "{ name: 'Hello' }",
				language: 'json',
				model: jsonModel
			});
		}
	}

	renderer = {
		apiVersion: 4,
		render: (rm: RenderManager, control: WDEditor) => {
			rm.openStart("div", control);
			rm.style("width", "800px");
			rm.style("height", "800px");
			rm.style("border", "1px solid grey");
			rm.class("sapCEd");
			rm.openEnd();
			rm.close("div");
		}
	}
};
