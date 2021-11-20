import { RegatronService } from "../services/BaseService";
import { BaseView } from "../view/BaseView";

export abstract class BaseController<VT extends BaseView> {
    
    constructor(protected view: VT, protected service: RegatronService) {}

    abstract configureView(): void

    init(): void {
        const body = document.getElementById("app")
        if (body != null) {
            body.innerHTML = this.view.body
        }
        this.view.bindViewEvents()

        this.configureView()
    }

    resume(): void {
        const body = document.getElementById("app")
        if (body != null) {
            body.innerHTML = this.view.body
        }

        this.view.bindViewEvents()
    }

    pause(): void {
        const body = document.getElementById("app")?.innerHTML
        if (body) {
            this.view.body = body
        }
    }

    finish(): void {}
}