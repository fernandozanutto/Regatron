import { NavigatorController, Pages } from "../Main";
import { Planta } from "../model/Planta.model";
import { PlantaView } from "../view/Planta.view";
import { BaseController } from "./BaseController";

export class PlantaController extends BaseController<PlantaView> {
    configureView(): void {
        this.view.onButtonClick = () => {
            NavigatorController.goBack()
        }
    }
    
}