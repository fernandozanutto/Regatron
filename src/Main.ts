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
    private static currentPage: BaseController<any, any>

    private static pagesStack: BaseController<any, any>[] = []

    private static pagesMap: { [key in Pages]: () => BaseController<any, any> } = {
        [Pages.HOME]: () => new HomeController(new HomeView()),
        [Pages.TEST]: () => new TestController(new TestView()),
        [Pages.PLANTA]: () => new PlantaController(new PlantaView(), new PlantaService())
    }
    
    static navigate(page: Pages) : void {
        if (this.currentPage !== undefined) {
            this.currentPage.pause()
            this.pagesStack.push(this.currentPage)
        }

        this.currentPage = this.pagesMap[page]()
        this.currentPage.init()
    }

    static goBack(): void {
        const lastPage = this.pagesStack.pop()
        
        if (lastPage !== undefined) {
            this.currentPage.finish()
            this.currentPage = lastPage
            this.currentPage.resume()
        }
    }
}

NavigatorController.navigate(Pages.HOME)
