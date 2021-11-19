import { BaseView } from "./BaseView";

export class TestView extends BaseView {

    onTesteButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <h1> Estamos na TestView, olá tudo bem? </h1>
        <button id='button'>Voltar</button>
        `
    }

    bindViewEvents(): void {
        const button = document.getElementById('button')
        if (button) {
            button.addEventListener('click', () => this.onTesteButtonClick())
        }
    }

}