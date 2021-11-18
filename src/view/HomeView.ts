import { BaseView } from "./BaseView";

export class HomeView extends BaseView {

    onTesteButtonClick = () => {}

    constructor() {
        super()
        this.body = `
        <h1> Aqui é a Home, tranquilo ai? </h1>
        <button id='button'>Home View</button>
        `
    }

    onCreateView(): void {
        const button = document.getElementById('button')
        console.log(button)
        if (button) {
            button.addEventListener('click', () => this.onTesteButtonClick())
        }
    }

}