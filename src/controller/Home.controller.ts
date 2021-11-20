import { NavigatorController, Pages } from "../Main";
import { HomeView } from "../view/HomeView";
import { BaseController } from "./BaseController";

export class HomeController extends BaseController<HomeView> {

    configureView(): void {
        this.view.onTesteButtonClick = () => {
            NavigatorController.navigate(Pages.TEST)
        }

        this.view.onPlantaButtonClick = () => {
            NavigatorController.navigate(Pages.PLANTA)
        }
    }
}