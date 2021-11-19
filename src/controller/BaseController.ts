import { BaseService } from "../services/BaseService";
import { BaseView } from "../view/BaseView";

export abstract class BaseController<VT extends BaseView, ST> {
    
    constructor(protected view: VT, protected service: BaseService<ST> | null = null) {}

    abstract configureView(): void

    init(): void {
        const body = document.getElementById("app")
        if (body != null) {
            body.innerHTML = this.view.body
        }
        this.view.onCreateView()

        this.configureView()
    }

    finish(): void {}
}