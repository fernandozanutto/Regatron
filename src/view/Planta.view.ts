import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
        <p>Planta</p>
        Teste de input: <input type="text" name="teste" id="teste">
        <button id='button'>Voltar</button>
        </center>
        `
    }
    bindViewEvents(): void {
        const button = document.getElementById('button')
        if (button) {
            button.addEventListener('click', () => this.onButtonClick())
        }
    }

}
