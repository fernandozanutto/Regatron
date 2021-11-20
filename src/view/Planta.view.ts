import { Planta } from "../model/Planta.model";
import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {

    private planta!: Planta

    onButtonClick = () => {}
    onSalvarButtonClick: (planta: Planta) => void = (planta: Planta) => {}

    cancelarButton: HTMLElement | null = null
    salvarButton: HTMLElement | null = null
    inputNomeCientifico: HTMLInputElement | null = null
    inputNomeUsual: HTMLInputElement | null = null
    inputTempMinima: HTMLInputElement | null = null

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
        <button id='button'>Cancelar</button>
        <button id='button-salvar'>Salvar</button>
        </center>
        `
    }

    private updatePlantaFromInputs() {
        this.planta.nomeCientifico = this.inputNomeCientifico?.value || ""
        this.planta.nomeUsual = this.inputNomeUsual?.value || ""
        this.planta.temperaturaMinimaPadrao = parseFloat(this.inputTempMinima?.value || "0.0")
    }

    bindViewEvents(): void {
        this.cancelarButton = document.getElementById('button')
        this.salvarButton = document.getElementById('button-salvar')

        if (this.cancelarButton) {
            this.cancelarButton.addEventListener('click', () => this.onButtonClick())
        }

        if (this.salvarButton) {
            this.salvarButton.addEventListener('click', () => {
                this.updatePlantaFromInputs()
                this.onSalvarButtonClick(this.planta)
            })
        }
    }

    bindViewData(planta: Planta) {
        this.planta = planta

        this.inputNomeCientifico = <HTMLInputElement> document.getElementById("nome_cientifico")
        this.inputNomeUsual = <HTMLInputElement> document.getElementById("nome_usual")
        this.inputTempMinima = <HTMLInputElement> document.getElementById("temp_minima")
        
        this.inputNomeCientifico.value = planta.nomeCientifico
        this.inputNomeUsual.value = planta.nomeUsual
        this.inputTempMinima.value = planta.temperaturaMinimaPadrao.toString()
    }

}
