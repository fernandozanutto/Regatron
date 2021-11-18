import { TestView } from "../view/TestView";
import { BaseController } from "./BaseController";
import {NavigatorController} from '../Main'
import { HomeController } from "./HomeController";
import { HomeView } from "../view/HomeView";
export class TestController extends BaseController {
    view: TestView | null = null

    configureView(): void {
        this.view = this._view as TestView

        this.view.onTesteButtonClick = () => {
            NavigatorController.setController(new HomeController(new HomeView()))
        }
    }
}