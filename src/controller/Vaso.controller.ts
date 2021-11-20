import { NavigatorController, Pages } from "../Main";
import { VasoView } from "../view/Vaso.view";
import { BaseController } from "./BaseController";

export class VasoController extends BaseController<VasoView> {
    configureView(): void {
        this.view.onButtonClick = () => {
            NavigatorController.goBack()
        }
    }
    
}