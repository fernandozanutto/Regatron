import { RegatronService } from "../services/BaseService";
import { BaseView } from "../view/BaseView";

export abstract class BaseController<VT extends BaseView> {
    
    constructor(protected view: VT, protected service: RegatronService) {}

    abstract configureView(): void

    protected parameters: {[key: string]: any} = {}

    protected onCreate(): void {}

    init(parameters: {[key: string]: any} = {}): void {
        this.parameters = parameters

        const body = document.getElementById("app")
        if (body != null) {
            body.innerHTML = this.view.body
        }

        this.onCreate()
        
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