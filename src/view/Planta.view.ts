import { Luminosidade } from "../model/Luminosidade";
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
    inputTempMaxima: HTMLInputElement | null = null
    inputQuantidadeAgua: HTMLInputElement | null = null
    selectLuminosidade: HTMLSelectElement | null = null

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
            Temperatura máxima padrão: <input type="number" name="temp_maxima" id="temp_maxima">
            <br>
            Quantidade água padrão: <input type="number" name="quantidade_agua" id="quantidade_agua">
            <br>
            Luminosidade: <select name="luminosidade" id="luminosidade"><item value="1">TESTE</item></select>
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
        this.planta.temperaturaMaximaPadrao = parseFloat(this.inputTempMaxima?.value || "0.0")
        this.planta.luminosidade = parseInt(this.selectLuminosidade?.value || "0")
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
        this.inputTempMaxima = <HTMLInputElement> document.getElementById("temp_maxima")
        this.inputQuantidadeAgua = <HTMLInputElement> document.getElementById("quantidade_agua")
        this.selectLuminosidade = <HTMLSelectElement> document.getElementById("luminosidade")
        
        this.inputNomeCientifico.value = planta.nomeCientifico
        this.inputNomeUsual.value = planta.nomeUsual
        this.inputTempMinima.value = planta.temperaturaMinimaPadrao.toString()
        this.inputTempMaxima.value = planta.temperaturaMaximaPadrao.toString()
        this.inputQuantidadeAgua.value = planta.quantidadeAguaPadrao.toString()
        this.selectLuminosidade.value = planta.luminosidade.toString()
    }

}
