import { Planta } from "../model/Planta.model";
import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {

    onButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
        <p>Planta</p>
        Nome científico: <input type="text" name="nome_cientifico" id="nome_cientifico">
        <br>
        Nome usual: <input type="text" name="nome_usual" id="nome_usual">
        <br>
        Temperatura mínima padrão: <input type="number" name="temp_minima" id="temp_minima">
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

    bindViewData(planta: Planta) {
        const nomeCientifico = <HTMLInputElement> document.getElementById("nome_cientifico")
        const nomeUsual = <HTMLInputElement> document.getElementById("nome_usual")
        const tempMinima = <HTMLInputElement> document.getElementById("temp_minima")
        nomeCientifico.value = planta.nomeCientifico
        nomeUsual.value = planta.nomeUsual
        tempMinima.value = planta.temperaturaMinimaPadrao.toString()
    }

}
