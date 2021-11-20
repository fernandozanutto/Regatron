import { BaseView } from "./BaseView";

/**
 * Mostra a lista de Vasos do usuário e link para editar/cadastrar novo Vaso.
 * Mostra a lista de Plantas cadastradas e link para editar/cadastrar nova Planta.
 */
export class HomeView extends BaseView {

    onTesteButtonClick = () => {}
    onPlantaButtonClick = () => {}
    onVasoButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
        <h1> Aqui é a Home, tranquilo ai? </h1>
        <button id='button-teste'>Ir para Test View</button>
        <button id='button-planta'>Ir para Planta View</button>
        <button id='button-Vaso'> Ir para Vaso View</button>
        </center>
        `
    }

    bindViewEvents(): void {
        const buttonTeste = document.getElementById('button-teste')
        const buttonPlanta = document.getElementById('button-planta')
        const buttonVaso = document.getElementById('button-vaso')

        if (buttonTeste) {
            buttonTeste.addEventListener('click', () => this.onTesteButtonClick())
        }

        if (buttonPlanta) {
            buttonPlanta.addEventListener('click', () => {this.onPlantaButtonClick()})
        }

        if (buttonVaso){
            buttonVaso.addEventListener('click', () => {this.onVasoButtonClick()})
        }
    }

}
