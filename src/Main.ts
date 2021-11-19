import { BaseController } from "./controller/BaseController";
import { HomeController } from "./controller/HomeController";
import { TestController } from "./controller/TestController";
import { HomeView } from "./view/HomeView";
import { TestView } from "./view/TestView";


export enum Pages {
    HOME,
    TEST
}
export class NavigatorController {
    private static currentController: BaseController | null = null

    static temp: {[key in Pages]: BaseController} = {
        [Pages.HOME]: new HomeController(new HomeView()),
        [Pages.TEST]: new TestController(new TestView())
    }
    
    static navigate(page: Pages) : void {
        NavigatorController.currentController?.finish()
        NavigatorController.currentController = NavigatorController.temp[page]
        NavigatorController.currentController.init()
    }
}

NavigatorController.navigate(Pages.HOME)