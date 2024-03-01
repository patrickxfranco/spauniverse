export class Router {
  routes = {};

  add(route, path) {
    this.routes[route] = path;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname];

    fetch(route)
      .then((data) => {
        return data.text();
      })
      .then((html) => {
        document.querySelector("#content").innerHTML = html;
      });
  }
}
