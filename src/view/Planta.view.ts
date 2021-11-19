import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <p>PLANTAAAAAAAA</p>
        <button id='button'>Voltar</button>
        `
    }
    onCreateView(): void {
        const button = document.getElementById('button')
        if (button) {
            button.addEventListener('click', () => this.onButtonClick())
        }
    }

}