import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { BaseView } from "./BaseView";
import { GerenciadorAgua } from "../regatron-service/dispositivos/RegadorInteligente/GerenciadorAgua";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
import { Dispositivo, DispositivoEnum } from "../regatron-service/dispositivos/Dispositivo";
export class VasoView extends BaseView {

    private vaso!: Vaso
    private plantas!: Planta[]

    cancelarButton: HTMLElement | null = null
    salvarButton: HTMLElement | null = null
    inputDescricao: HTMLInputElement | null = null
    inputNomeUsual: HTMLInputElement | null = null
    inputTempMinima: HTMLInputElement | null = null
    inputTempMaxima: HTMLInputElement | null = null
    inputQuantidadeAgua: HTMLInputElement | null = null
    selectLuminosidade: HTMLSelectElement | null = null
    selectPlanta: HTMLSelectElement | null = null

    onVoltarButtonClick = () => {}
    onSalvarButtonClick: (vaso: Vaso) => void = (vaso: Vaso) => {}

    constructor() {
        super()
        this.body = `
        <center>
        <p>Vaso</p>
            Descrição: <input type="text" name="descricao" id="descricao">
            <br>
            Temperatura mínima: <input type="number" name="temp_minima" id="temp_minima">
            <br>
            Temperatura máxima: <input type="number" name="temp_maxima" id="temp_maxima">
            <br>
            Quantidade água: <input type="number" name="quantidade_agua" id="quantidade_agua">
            <br>
            Planta: <select name="planta" id="planta"></select>
            <br>
            Luminosidade: <select name="luminosidade" id="luminosidade"><option value="0">Sol Pleno</option><option value="1">Sombra</option><option value="2">Meia luz</option></select>
            <br>
            Dispositivos: (aqui vai ter uma lista dos dispositivos do vaso)
            <table id="dispositivos"><thead><tr><th>Tipo</th></tr></thead></table>
            <br>
            
            <button id='button'>Cancelar</button>
            <button id='button-salvar'>Salvar</button>


            <div id="log"></div>
        </center>
        `
    }

    private updateVasoFromInputs() {
        this.vaso.descricao = this.inputDescricao?.value || ""
        this.vaso.temperaturaMinima = parseFloat(this.inputTempMinima?.value || "0.0")
        this.vaso.temperaturaMaxima = parseFloat(this.inputTempMaxima?.value || "0.0")
        this.vaso.luminosidade = parseInt(this.selectLuminosidade?.value || "0")
        this.vaso.quantidadeAgua = parseFloat(this.inputQuantidadeAgua?.value || "0")
        this.vaso.planta = this.plantas.find(planta => planta.id === parseInt(this.selectPlanta?.value || "0"))
        // TODO: dispositivos
    }
    
    bindViewEvents(): void {
        this.cancelarButton = document.getElementById('button')
        this.salvarButton = document.getElementById('button-salvar')

        if (this.cancelarButton) {
            this.cancelarButton.addEventListener('click', () => this.onVoltarButtonClick())
        }

        if (this.salvarButton) {
            this.salvarButton.addEventListener('click', () => {
                this.updateVasoFromInputs()
                this.onSalvarButtonClick(this.vaso)
            })
        }
    }

    bindViewData(vaso: Vaso, plantasDisponiveis: Planta[]) : void {
        this.vaso = vaso
        this.plantas = plantasDisponiveis

        this.inputDescricao = <HTMLInputElement> document.getElementById("descricao")
        this.inputTempMinima = <HTMLInputElement> document.getElementById("temp_minima")
        this.inputTempMaxima = <HTMLInputElement> document.getElementById("temp_maxima")
        this.inputQuantidadeAgua = <HTMLInputElement> document.getElementById("quantidade_agua")
        this.selectLuminosidade = <HTMLSelectElement> document.getElementById("luminosidade")
        this.selectPlanta = <HTMLSelectElement> document.getElementById("planta")

        this.inputDescricao.value = vaso.descricao
        this.inputTempMinima.value = vaso.temperaturaMinima.toString()
        this.inputTempMaxima.value = vaso.temperaturaMaxima.toString()
        this.inputQuantidadeAgua.value = vaso.quantidadeAgua.toString()
        this.selectLuminosidade.value = vaso.luminosidade.toString()

        this.plantas.forEach(planta => {
            const optionPlanta = document.createElement("option")
            optionPlanta.value = planta.id.toString()
            optionPlanta.text = planta.nomeUsual
            this.selectPlanta?.appendChild(optionPlanta)
        })

        this.selectPlanta.value = vaso.planta?.id.toString() || "0"

        const tabelaDispositivos = document.getElementById("dispositivos")
        const tbody = document.createElement("tbody")

        this.vaso.dispositivos.forEach(dispositivo => {
            const tr = document.createElement("tr")
            const tdTipo = document.createElement("td")

            let tipoDispositivo = "fallback"
            if(dispositivo instanceof GerenciadorTemperatura) {
                tipoDispositivo = "Temperatura"
            } else if (dispositivo instanceof GerenciadorAgua) {
                tipoDispositivo = "Água"
            } else if (dispositivo instanceof GerenciadorLuminosidade) {
                tipoDispositivo = "Luminosidade"
            }

            tdTipo.innerHTML = tipoDispositivo

            tr.appendChild(tdTipo)
            tbody.appendChild(tr)
        })
        tabelaDispositivos?.appendChild(tbody)
    }
}
