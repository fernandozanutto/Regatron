import { HomeController } from "./controller/HomeController";
import { HomeView } from "./view/HomeView";


const currentController = new HomeController()
const currentView = new HomeView()

document.getElementById("body").innerHTML = currentView.UI