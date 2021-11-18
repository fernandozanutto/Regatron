import { BaseController } from "./controller/BaseController";
import { HomeController } from "./controller/HomeController";
import { HomeView } from "./view/HomeView";
export class NavigatorController {
    private static currentController: BaseController | null = null
    
    static setController(newController: BaseController) : void {
        NavigatorController.currentController?.finish()
        NavigatorController.currentController = newController
        NavigatorController.currentController.init()
    }
}

NavigatorController.setController(new HomeController(new HomeView()))