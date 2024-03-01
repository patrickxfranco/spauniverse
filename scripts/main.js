import { Router } from "./router.js";

const route = new Router();

route.add("/", "/pages/home.html");
route.add("/home", "/pages/home.html");
route.add("/universe", "/pages/universe.html");
route.add("/exploration", "/pages/exploration.html");

route.handle();
window.route = () => Router.route();
