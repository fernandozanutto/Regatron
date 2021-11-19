import { TestView } from "../view/TestView";
import { BaseController } from "./BaseController";
import {NavigatorController, Pages} from '../Main'
export class TestController extends BaseController<TestView, null> {
    configureView(): void {
        this.view.onTesteButtonClick = () => {
            NavigatorController.goBack()
        }
    }
}