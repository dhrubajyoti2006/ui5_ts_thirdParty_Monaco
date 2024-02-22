import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
    sayHello() {
        MessageBox.show("Hello World!");
    }
}
