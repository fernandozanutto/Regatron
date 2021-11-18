import { NavigatorController } from "../Main";
import { HomeView } from "../view/HomeView";
import { TestView } from "../view/TestView";
import { BaseController } from "./BaseController";
import { TestController } from "./TestController";

export class HomeController extends BaseController {
    view: HomeView | null = null

    configureView(): void {
        this.view = this._view as HomeView

        this.view.onTesteButtonClick = () => {
            NavigatorController.setController(new TestController(new TestView()))
        }
    }
}