class Controller {
    constructor(){
        this.components = new Set();
    }

    registerComponent(component) {

        this.components.add(component);
    }

    handleClick(component) {
        console.log(`Button ${component.id} was clicked!`);
    }
} 