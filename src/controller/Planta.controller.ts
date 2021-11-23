import { NavigatorController } from "../Main";
import { Luminosidade } from "../model/Luminosidade";
import { Planta } from "../model/Planta.model";
import { PlantaView } from "../view/Planta.view";
import { BaseController } from "./BaseController";

export class PlantaController extends BaseController<PlantaView> {
    private planta!: Planta;

    override onCreate() {
        if (this.parameters.id) {
            const dbPlanta = this.service.getPlanta(this.parameters.id);
            if (dbPlanta) {
                this.planta = dbPlanta;
            } else {
                this.planta = new Planta({
                    id: 0,
                    luminosidade: Luminosidade.Meia_Luz,
                    nomeCientifico: "",
                    nomeUsual: "",
                    quantidadeAguaPadrao: 0,
                    temperaturaMaximaPadrao: 0,
                    temperaturaMinimaPadrao: 0,
                });
            }
        } else {
            this.planta = new Planta({
                id: 0,
                luminosidade: Luminosidade.Meia_Luz,
                nomeCientifico: "",
                nomeUsual: "",
                quantidadeAguaPadrao: 0,
                temperaturaMaximaPadrao: 0,
                temperaturaMinimaPadrao: 0,
            });
        }
    }

    configureView(): void {
        this.view.onBackButtonClick = () => {
            NavigatorController.goBack();
        };

        this.view.onSalvarButtonClick = (planta: Planta) => {
            const isNotValid = this.validarInput(planta);
            if (isNotValid) {
                switch (isNotValid) {
                    case 1:
                        alert("Todos os campos são obrigatórios");
                        break;
                    case 2:
                        alert("Temperaturas deve estar entre 0 e 35 graus");
                        break;
                    case 3:
                        alert(
                            "A temperatura mínima não deve ser maior que a temperatura máxima"
                        );
                        break;
                    case 4:
                        alert("O nome da planta deve possuir apenas letras");
                        break;
                    case 5:
                        alert(
                            "Quantidade de água diária deve estar entre 100 e 2000ml"
                        );
                        break;
                }
            } else {
                this.service.salvarPlanta(planta);
                NavigatorController.goBack();
            }
        };

        this.view.bindViewData(this.planta);
    }

    validarInput(planta: Planta): number {
        //returns 0 if input is valid, or the first business rule it violates, in case its invalid
        const onlyLettersRegex = new RegExp(/^[A-Za-z\s]*$/);

        if (!planta.nomeCientifico || !planta.nomeUsual) {
            return 1;
        } else if (
            planta.temperaturaMinimaPadrao < 0 ||
            planta.temperaturaMinimaPadrao > 35
        ) {
            return 2;
        } else if (
            planta.temperaturaMaximaPadrao < 0 ||
            planta.temperaturaMaximaPadrao > 35
        ) {
            return 2;
        } else if (
            planta.temperaturaMaximaPadrao < planta.temperaturaMinimaPadrao
        ) {
            return 3;
        } else if (!onlyLettersRegex.test(planta.nomeCientifico)) {
            return 4;
        } else if (!onlyLettersRegex.test(planta.nomeUsual)) {
            return 4;
        } else if (
            planta.quantidadeAguaPadrao < 100 ||
            planta.quantidadeAguaPadrao > 2000
        ) {
            return 5;
        } else {
            return 0;
        }
    }
}
