import { BaseView } from "./BaseView";

export class TestView extends BaseView {

    onTesteButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <h1> Estamos na TestView, olá tudo bem? </h1>
        <button id='button'>Test View</button>
        `
    }

    onCreateView(): void {
        const button = document.getElementById('button')
        console.log(button)
        if (button) {
            button.addEventListener('click', () => this.onTesteButtonClick())
        }
    }

}