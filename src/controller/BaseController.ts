import { BaseView } from "../view/BaseView";

export abstract class BaseController {
    _view: BaseView
    constructor(view: BaseView){
        this._view = view
    }

    abstract configureView(): void

    init(): void {
        const body = document.getElementById("body")
        if (body != null) {
            body.innerHTML = this._view.body
        }
        this._view.onCreateView()

        this.configureView()
    }

    finish(): void {

    }
}