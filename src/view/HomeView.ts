import { Planta } from "../model/Planta.model";
import { Vaso } from "../model/Vaso.model";
import { BaseView } from "./BaseView";

/**
 * Mostra a lista de Vasos do usuário e link para editar/cadastrar novo Vaso.
 * Mostra a lista de Plantas cadastradas e link para editar/cadastrar nova Planta.
 */
export class HomeView extends BaseView {

    private plantas: Planta[] = []
    private vasos: Vaso[] = []

    onVasoItemButtonClick = (id: number) => {}
    onPlantaItemButtonClick = (id: number) => {}

    onPlantaButtonClick = () => {}
    onVasoButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <center>
            <div class="container">
                <div class="row">
                    <h2>Plantas</h2>
                    <div id="plantas"></div>
                    <button id='button-planta'>Cadastrar nova Planta</button>
                </div>
                <div class="row">
                    <h2>Vasos</h2>
                    <div id="vasos"></div>
                    <button id='button-vaso'>Cadastrar novo Vaso</button>
                </div>
            </div>
        </center>
        `
    }

    populatePlantaComponents(plantas: Planta[]) {
        this.plantas = plantas
        const plantasDiv = document.getElementById("plantas")
        if (!plantasDiv) throw "Div das plantas não encontrada."
        
        plantasDiv.textContent = ""

        const table = document.createElement("table")
        const thead = document.createElement("thead") 
        thead.innerHTML = `
            <tr>
                <th>Nome científico</th>
                <th>Nome usual</th>
                <th></th>
            </tr>
        `
        const tbody = document.createElement("tbody")
        this.plantas.forEach(planta => {
            var tr = document.createElement("tr")
            tr.innerHTML = `
                <tr>
                    <td>${planta.nomeCientifico}</td>
                    <td>${planta.nomeUsual}</td>
                    <td><button id='button-verplanta-${planta.id}'>Ver</button></td>
                </tr>
            `
            tbody.appendChild(tr)
        })
        table.appendChild(thead)
        table.appendChild(tbody)
        table.style.width = "70%"
        plantasDiv.appendChild(table)
    }

    populateVasoComponents(vasos: Vaso[]) {
        this.vasos = vasos
        const vasosDiv = document.getElementById("vasos")
        if (!vasosDiv) throw "Div dos vasos não encontrada."

        vasosDiv.textContent = ""
        const table = document.createElement("table")
        const thead = document.createElement("thead") 
        thead.innerHTML = `
            <tr>
                <th>Número</th>
                <th>Descrição</th>
                <th></th>
            </tr>
        `
        const tbody = document.createElement("tbody")
        this.vasos.forEach(vaso => {
            var tr = document.createElement("tr")
            tr.innerHTML = `
                <tr>
                    <td>${vaso.id}</td>
                    <td>${vaso.descricao}</td>
                    <td><button id='button-vervaso-${vaso.id}'>Ver</button></td>
                </tr>
            `
            tbody.appendChild(tr)
        })
        table.appendChild(thead)
        table.appendChild(tbody)
        table.style.width = "70%"
        vasosDiv.appendChild(table)
    }

    bindViewEvents(): void {
        const buttonPlanta = document.getElementById('button-planta')
        const buttonVaso = document.getElementById('button-vaso')

        if (buttonPlanta) {
            buttonPlanta.addEventListener('click', () => {this.onPlantaButtonClick()})
        }

        if (buttonVaso){
            buttonVaso.addEventListener('click', () => {this.onVasoButtonClick()})
        }


        this.plantas.forEach(planta => {
            const buttonPlanta = document.getElementById(`button-verplanta-${planta.id}`)
            if (buttonPlanta) {
                buttonPlanta.addEventListener('click', () => {
                    this.onPlantaItemButtonClick(planta.id)
                })
            }
        })


        this.vasos.forEach(vaso => {
            const buttonPlanta = document.getElementById(`button-vervaso-${vaso.id}`)
            if (buttonPlanta) {
                buttonPlanta.addEventListener('click', () => {
                    this.onVasoItemButtonClick(vaso.id)
                })
            }
        })
    }

}
