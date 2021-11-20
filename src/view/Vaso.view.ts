import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { BaseView } from "./BaseView";

export class VasoView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
        <p>Vaso</p>
            Descrição do vaso: <input type="text" name="descricao" id="descricao">
            <br>
            Temperatura mínima: <input type="number" name="temp_minima" id="temp_minima">
            <br>

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

    bindViewData(vaso: Vaso, plantasDisponiveis: Planta[]) : void {
        const descricao = <HTMLInputElement> document.getElementById("descricao")
        const tempMinima = <HTMLInputElement> document.getElementById("temp_minima")
        descricao.value = vaso.descricao
        tempMinima.value = vaso.temperaturaMinima.toString()
    }

}
