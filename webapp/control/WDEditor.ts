import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import * as monaco from "monaco-editor";

/**
 * @namespace com.myorg.myapp.control
 */
export default class WDEditor extends Control {

	init(): void {

	}

	public onAfterRendering() {
		if (typeof monaco !== "undefined") {
			monaco.editor.create(this.getDomRef() as HTMLElement, {
				value: "{ name: Hello }",
				language: 'json',
			});
		}
	}

	renderer = {
		apiVersion: 4,
		render: (rm: RenderManager, control: WDEditor) => {
			rm.openStart("div", control);
			rm.style("width", "400px");
			rm.style("height", "400px");
			rm.style("border", "1px solid grey");
			rm.class("sapCEd");
			rm.openEnd();
			rm.close("div");
		}
	}
};
