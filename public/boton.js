
class BotonElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    handleEvent(event) {
      if (event.type === "click")
        this.sendMessage();
    }

    sendMessage() {
      alert("Soy un dialogo");
    }

    connectedCallback() {
      this.shadowRoot.innerHTML = "<button>Click</button>";
      this.button = this.shadowRoot.querySelector("button");
      this.button.addEventListener("click", this);
    }
  };
  customElements.define("boton-element", BotonElement);
