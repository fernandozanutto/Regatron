import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { BaseView } from "./BaseView";
import { GerenciadorAgua } from "../regatron-service/dispositivos/RegadorInteligente/GerenciadorAgua";
import { GerenciadorLuminosidade } from "../regatron-service/dispositivos/LuzInteligente/GerenciadorLuminosidade";
import { GerenciadorTemperatura } from "../regatron-service/dispositivos/ACInteligente/GerenciadorTemperatura";
export class VasoView extends BaseView {

    private vaso!: Vaso
    private plantas!: Planta[]

    cancelarButton: HTMLElement | null = null;
    salvarButton: HTMLElement | null = null;
    inputDescricao: HTMLInputElement | null = null;
    selectPlanta: HTMLSelectElement | null = null;

    onVoltarButtonClick = () => {}
    onSalvarButtonClick: (vaso: Vaso) => void = (vaso: Vaso) => {}
    selectLuminosidade: HTMLSelectElement | null = null;
    selectAgua: HTMLSelectElement | null = null;
    selectTemperatura: HTMLSelectElement | null = null;

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
            Luminosidade: <select name="luminosidade"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>
            Água: <select name="agua"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>
            Temperatura: <selectname="temperatura"><option value="1">Ativar</option><option value="0">Desativar</option></select>
            <br>

            <button id='button'>Cancelar</button>
            <button id='button-salvar'>Salvar</button>

            <div id="log"></div>
        </center>
        `
    }

    private updateVasoFromInputs() {
        this.vaso.descricao = this.inputDescricao?.value || ""
        this.vaso.planta = this.plantas.find(planta => planta.id === parseInt(this.selectPlanta?.value || "0"))

        const aguaHabilitada = this.selectAgua?.value ==="1"
        const luminosidadeHabilitada = this.selectLuminosidade?.value ==="1"
        const temperaturaHabilitada = this.selectTemperatura?.value ==="1"
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
        this.selectPlanta = <HTMLSelectElement> document.getElementById("planta")

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

    }
}
