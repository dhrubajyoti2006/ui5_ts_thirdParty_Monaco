import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import "../vs/editor/editor.main";
// import "../vs/language/json/jsonWorker";
// import "monaco-editor-webpack-plugin";
import * as monaco from "monaco-editor";
// import "./UserWorker";

	self.MonacoEnvironment = {
		getWorkerUrl: function (moduleId, label) {
			if (label === 'json') {
				return './vs/language/json/jsonWorker.js';
			}
			return './vs/editor/editor.main.js';
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
			monaco.editor.create(this.getDomRef() as HTMLElement, {
				value: "{ name: 'Hello' }",
				language: 'json',
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
