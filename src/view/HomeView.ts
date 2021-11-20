import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
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
        <button id='button-vaso'> Ir para Vaso View</button>

        <div id="plantas"></div>
        <div id="vasos"></div>
        </center>
        `
    }

    populatePlantaComponents(plantas: Planta[]) {
        const plantasDiv = document.getElementById("plantas")

        if (!plantasDiv) throw "Div das plantas não encontrada."

        plantas.forEach(planta => {
            const el = document.createElement("div")

            el.innerHTML = `
            <p>Nome científico: ${planta.nomeCientifico}</p>
            <p>Nome usual: ${planta.nomeUsual}</p>
            `

            plantasDiv.appendChild(el)
        })
    }

    populateVasoComponents(vasos: Vaso[]) {
        const vasosDiv = document.getElementById("vasos")

        if (!vasosDiv) throw "Div das plantas não encontrada."

        vasos.forEach(vaso => {
            const el = document.createElement("div")

            el.innerHTML = `UMA PLANTAAAAAAAA ${vaso.descricao}`

            vasosDiv.appendChild(el)
        })

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
