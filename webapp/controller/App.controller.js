import BaseController from "./BaseController";
/**
 * @namespace com.myorg.myapp.controller
 */
export default class App extends BaseController {
    onInit() {
        // apply content density mode to root view
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }
}
