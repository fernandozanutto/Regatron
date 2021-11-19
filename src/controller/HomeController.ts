import { NavigatorController, Pages } from "../Main";
import { HomeView } from "../view/HomeView";
import { BaseController } from "./BaseController";

export class HomeController extends BaseController {
    view: HomeView | null = null

    configureView(): void {
        this.view = this._view as HomeView

        this.view.onTesteButtonClick = () => {
            NavigatorController.navigate(Pages.TEST)
        }
    }
}