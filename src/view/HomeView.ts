import { BaseView } from "./BaseView";

export class HomeView extends BaseView {

    onTesteButtonClick = () => {}
    onPlantaButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <h1> Aqui é a Home, tranquilo ai? </h1>
        <button id='button-teste'>Ir para Test View</button>
        <button id='button-planta'>Ir para Planta View</button>
        `
    }

    onCreateView(): void {
        const buttonTeste = document.getElementById('button-teste')
        const buttonPlanta = document.getElementById('button-planta')
        if (buttonTeste) {
            buttonTeste.addEventListener('click', () => this.onTesteButtonClick())
        }

        if (buttonPlanta) {
            buttonPlanta.addEventListener('click', () => {this.onPlantaButtonClick()})
        }
    }

}