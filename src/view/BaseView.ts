export abstract class BaseView {
    body: string = ""

    abstract onCreateView(): void
}