import { BaseView } from "../view/BaseView";

export abstract class BaseController {
    view: BaseView
    constructor(view: BaseView){
        this.view = view
    }
}