import { HomeController } from "./controller/HomeController";
import { HomeView } from "./view/HomeView";


const currentController = new HomeController(new HomeView())

const body = document.getElementById("body")
if (body != null) {
    body.innerHTML = currentController.view.UI
}
