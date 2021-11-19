import { TestView } from "../view/TestView";
import { BaseController } from "./BaseController";
import {NavigatorController, Pages} from '../Main'
export class TestController extends BaseController {
    view: TestView | null = null

    configureView(): void {
        this.view = this._view as TestView

        this.view.onTesteButtonClick = () => {
            NavigatorController.navigate(Pages.HOME)
        }
    }
}