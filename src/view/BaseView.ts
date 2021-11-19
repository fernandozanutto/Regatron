export abstract class BaseView {
    body: string = ""

    abstract bindViewEvents(): void
}