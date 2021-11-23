import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { BaseView } from "./BaseView";

export class PlantaView extends BaseView {
    private planta!: Planta;

    onBackButtonClick = () => {};
    onSalvarButtonClick: (planta: Planta) => void = (planta: Planta) => {};

    cancelarButton: HTMLElement | null = null;
    salvarButton: HTMLElement | null = null;
    inputNomeCientifico: HTMLInputElement | null = null;
    inputNomeUsual: HTMLInputElement | null = null;
    inputTempMinima: HTMLInputElement | null = null;
    inputTempMaxima: HTMLInputElement | null = null;
    inputQuantidadeAgua: HTMLInputElement | null = null;
    selectLuminosidade: HTMLSelectElement | null = null;

    constructor() {
        super();
        this.body = `
        <center>
            <div class="container">
                <h2>Planta</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Nome científico:</td>
                            <td><input type="text" name="nome_cientifico" id="nome_cientifico"></td>
                        </tr>
                        <tr>
                            <td>Nome usual: </td>
                            <td><input type="text" name="nome_usual" id="nome_usual"></td>
                        </tr>
                        <tr>
                            <td>Temperatura mínima padrão: </td>
                            <td><input type="number" name="temp_minima" id="temp_minima"></td>
                        </tr>
                        <tr>
                            <td>Temperatura máxima padrão: </td>
                            <td><input type="number" name="temp_maxima" id="temp_maxima"></td>
                        </tr>
                            <td>Quantidade água padrão: </td>
                            <td><input type="number" name="quantidade_agua" id="quantidade_agua"></td>
                        <tr>
                            <td>Luminosidade: </td>
                            <td>
                                <select class="u-full-width" name="luminosidade" id="luminosidade">
                                <option value="0">Sol Pleno</option>
                                <option value="1">Sombra</option>
                                <option value="2">Meia luz</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <button id='button'>Cancelar</button>
                <button id='button-salvar'>Salvar</button>
            </div> 
        </center>
        `;
    }

    private updatePlantaFromInputs() {
        this.planta.nomeCientifico = this.inputNomeCientifico?.value || "";
        this.planta.nomeUsual = this.inputNomeUsual?.value || "";
        this.planta.temperaturaMinimaPadrao = parseFloat(
            this.inputTempMinima?.value || "0.0"
        );
        this.planta.temperaturaMaximaPadrao = parseFloat(
            this.inputTempMaxima?.value || "0.0"
        );
        this.planta.quantidadeAguaPadrao = parseFloat(
            this.inputQuantidadeAgua?.value || "0"
        );
        this.planta.luminosidade = parseInt(
            this.selectLuminosidade?.value || "0"
        );
    }

    bindViewEvents(): void {
        this.cancelarButton = document.getElementById("button");
        this.salvarButton = document.getElementById("button-salvar");

        if (this.cancelarButton) {
            this.cancelarButton.addEventListener("click", () =>
                this.onBackButtonClick()
            );
        }

        if (this.salvarButton) {
            this.salvarButton.addEventListener("click", () => {
                this.updatePlantaFromInputs();
                this.onSalvarButtonClick(this.planta);
            });
        }
    }

    bindViewData(planta: Planta) {
        this.planta = planta;

        this.inputNomeCientifico = <HTMLInputElement>(
            document.getElementById("nome_cientifico")
        );
        this.inputNomeUsual = <HTMLInputElement>(
            document.getElementById("nome_usual")
        );
        this.inputTempMinima = <HTMLInputElement>(
            document.getElementById("temp_minima")
        );
        this.inputTempMaxima = <HTMLInputElement>(
            document.getElementById("temp_maxima")
        );
        this.inputQuantidadeAgua = <HTMLInputElement>(
            document.getElementById("quantidade_agua")
        );
        this.selectLuminosidade = <HTMLSelectElement>(
            document.getElementById("luminosidade")
        );

        this.inputNomeCientifico.value = planta.nomeCientifico;
        this.inputNomeUsual.value = planta.nomeUsual;
        this.inputTempMinima.value = planta.temperaturaMinimaPadrao.toString();
        this.inputTempMaxima.value = planta.temperaturaMaximaPadrao.toString();
        this.inputQuantidadeAgua.value = planta.quantidadeAguaPadrao.toString();
        this.selectLuminosidade.value = planta.luminosidade.toString();
    }
}
