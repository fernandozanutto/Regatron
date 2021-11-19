import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <p>PLANTAAAAAAAA</p>
        Teste de input: <input type="text" name="teste" id="teste">
        <button id='button'>Voltar</button>
        `
    }
    bindViewEvents(): void {
        const button = document.getElementById('button')
        if (button) {
            button.addEventListener('click', () => this.onButtonClick())
        }
    }

}