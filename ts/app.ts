export class App {
  private isDev = false;
  private queryString = new URLSearchParams(window.location.search);
  private static _singleton: App = new App();

  static get app() {
    return this._singleton;
  }

  configureDev() {
    if (this.queryString.get('dev')) {
      this.isDev = true;
    }
  }

  configureEventListeners() {

  }

  init() {
    const message: HTMLHeadingElement = document.createElement('h1');
    message.textContent = 'Ahoy!';
    document.body.appendChild(message);

    this.configureDev();
    this.configureEventListeners();
  }
}
