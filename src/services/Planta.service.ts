import { Planta, PlantaDTO } from "../model/Planta.model";
import { BaseService } from "./BaseService";

export class PlantaService extends BaseService<Planta> {
    create(model: Planta): number {
        throw new Error("Method not implemented.");
    }
    get(id: number): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    update(model: Planta): void {
        throw new Error("Method not implemented.");
    }
}