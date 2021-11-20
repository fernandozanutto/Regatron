import { BaseController } from "./controller/BaseController";
import { HomeController } from "./controller/Home.controller";
import { PlantaController } from "./controller/Planta.controller";
import { TestController } from "./controller/Test.controller";
import { RegatronService } from "./services/BaseService";
import { VasoController } from "./controller/Vaso.controller";
import { HomeView } from "./view/HomeView";
import { PlantaView } from "./view/Planta.view";
import { TestView } from "./view/TestView";
import { VasoView } from "./view/Vaso.view";


export enum Pages {
    HOME,
    TEST,
    PLANTA,
    VASO
}
export class NavigatorController {
    private static currentPage: BaseController<any>

    private static pagesStack: BaseController<any>[] = []

    private static service = new RegatronService()

    private static pagesMap: { [key in Pages]: () => BaseController<any> } = {
        [Pages.HOME]: () => new HomeController(new HomeView(), this.service),
        [Pages.TEST]: () => new TestController(new TestView(), this.service),
        [Pages.PLANTA]: () => new PlantaController(new PlantaView(), this.service),
        [Pages.VASO]: () => new VasoController(new VasoView(), this.service)
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
