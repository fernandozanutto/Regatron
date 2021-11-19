import { BaseController } from "./controller/BaseController";
import { HomeController } from "./controller/Home.controller";
import { PlantaController } from "./controller/Planta.controller";
import { TestController } from "./controller/Test.controller";
import { PlantaService } from "./services/Planta.service";
import { HomeView } from "./view/HomeView";
import { PlantaView } from "./view/Planta.view";
import { TestView } from "./view/TestView";


export enum Pages {
    HOME,
    TEST,
    PLANTA
}
export class NavigatorController {
    private static currentController: BaseController<any, any> | null = null

    static temp: {[key in Pages]: BaseController<any, any>} = {
        [Pages.HOME]: new HomeController(new HomeView()),
        [Pages.TEST]: new TestController(new TestView()),
        [Pages.PLANTA]: new PlantaController(new PlantaView(), new PlantaService())
    }
    
    static navigate(page: Pages) : void {
        NavigatorController.currentController?.finish()
        NavigatorController.currentController = NavigatorController.temp[page]
        NavigatorController.currentController.init()
    }
}

NavigatorController.navigate(Pages.HOME)