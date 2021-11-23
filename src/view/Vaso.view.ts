import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { BaseView } from "./BaseView";
export class VasoView extends BaseView {

    private vaso!: Vaso
    private plantas!: Planta[]

    cancelarButton?: HTMLElement;
    salvarButton?: HTMLElement;
    inputDescricao?: HTMLInputElement;
    selectPlanta?: HTMLSelectElement;

    onVoltarButtonClick = () => {}
    onSalvarButtonClick: (vaso: Vaso) => void = (vaso: Vaso) => {}
    selectLuminosidade?: HTMLSelectElement;
    selectAgua?: HTMLSelectElement;
    selectTemperatura?: HTMLSelectElement;

    divLogLuminosidade?: HTMLElement;
    divLogAgua?: HTMLElement;
    divLogTemperatura?: HTMLElement;

    constructor() {
        super()
        this.body = `
        <center>
        <p>Vaso</p>
            Descrição: <input type="text" name="descricao" id="descricao">
            <br>
            Planta: <select name="planta" id="planta"></select>
            <br>
            Dispositivos:
            <br>
            Luminosidade: <select name="luminosidade" id="luminosidade"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>
            Água: <select name="agua" id="agua"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>
            Temperatura: <select name="temperatura" id="temperatura"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>

            <button id='button'>Cancelar</button>
            <button id='button-salvar'>Salvar</button>


            <div class="logs">
                <div><h3>Logs Luminosidade</h3> <div class="log-item" id="log-luminosidade"></div></div>
                <div><h3>Logs Água</h3> <div class="log-item" id="log-agua"></div></div>
                <div><h3>Logs Temperatura</h3> <div class="log-item" id="log-temperatura"></div></div>
            </div>
        </center>
        `
    }

    private updateVasoFromInputs() {
        this.vaso.descricao = this.inputDescricao?.value || ""
        this.vaso.planta = this.plantas.find(planta => planta.id === parseInt(this.selectPlanta?.value || "0"))

        const aguaHabilitada = this.selectAgua?.value === "1"
        const luminosidadeHabilitada = this.selectLuminosidade?.value === "1"
        const temperaturaHabilitada = this.selectTemperatura?.value === "1"

        if (!this.vaso.gerenciadorAgua && aguaHabilitada) {
            this.vaso.adicionarGerenciadorAgua()
        } else if (this.vaso.gerenciadorAgua && !aguaHabilitada) {
            this.vaso.gerenciadorAgua = undefined
        }

        if (!this.vaso.gerenciadorLum && luminosidadeHabilitada) {
            this.vaso.adicionarGerenciadorLum()
        } else if (this.vaso.gerenciadorLum && !luminosidadeHabilitada) {
            this.vaso.gerenciadorLum = undefined
        }

        if (!this.vaso.gerenciadorTemp && temperaturaHabilitada) {
            this.vaso.adicionarGerenciadorTemp()
        } else if (this.vaso.gerenciadorTemp && !temperaturaHabilitada) {
            this.vaso.gerenciadorTemp = undefined
        }
    }
    
    bindViewEvents(): void {
        this.cancelarButton = document.getElementById('button') || undefined
        this.salvarButton = document.getElementById('button-salvar') || undefined

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
        this.selectPlanta = <HTMLSelectElement> document.getElementById("planta")

        this.divLogAgua = <HTMLElement> document.getElementById("log-agua")
        this.divLogLuminosidade = <HTMLElement> document.getElementById("log-luminosidade")
        this.divLogTemperatura = <HTMLElement> document.getElementById("log-temperatura")

        this.inputDescricao.value = vaso.descricao
        this.plantas.forEach(planta => {
            const optionPlanta = document.createElement("option")
            optionPlanta.value = planta.id.toString()
            optionPlanta.text = planta.nomeUsual
            this.selectPlanta?.appendChild(optionPlanta)
        })

        this.selectPlanta.value = vaso.planta?.id.toString() || "0"

        this.selectLuminosidade = <HTMLSelectElement> document.getElementById("luminosidade")
        this.selectAgua = <HTMLSelectElement> document.getElementById("agua")
        this.selectTemperatura = <HTMLSelectElement> document.getElementById("temperatura")

        this.selectLuminosidade.value = (!!this.vaso.gerenciadorLum) ? "1" : "0"
        this.selectAgua.value = (!!this.vaso.gerenciadorAgua) ? "1" : "0"
        this.selectTemperatura.value = (!!this.vaso.gerenciadorTemp) ? "1" : "0"
    }

    addLogLuminosidade(log: string) {
        const text = document.createElement("p")
        text.innerHTML = log
        this.divLogLuminosidade?.appendChild(text)
    }

    addLogAgua(log: string) {
        const text = document.createElement("p")
        text.innerHTML = log
        this.divLogAgua?.appendChild(text)
    }

    addLogTemperatura(log: string) {
        const text = document.createElement("p")
        text.innerHTML = log
        this.divLogTemperatura?.appendChild(text)
    }
}
