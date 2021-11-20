import { NavigatorController, Pages } from "../Main";
import { Vaso } from "../model/Vaso.model";
import { VasoView } from "../view/Vaso.view";
import { BaseController } from "./BaseController";

export class VasoController extends BaseController<VasoView, Vaso> {
    configureView(): void {
        this.view.onButtonClick = () => {
            NavigatorController.goBack()
        }
    }
    
}