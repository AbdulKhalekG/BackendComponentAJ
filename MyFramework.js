class MyFramework {
  constructor(){
    this.controller = new Controller();
    this.components = new Map();
  }

  createComponent (){
    const component = new WebComponent();

    this.components.set(component.id,component);

    this.controller.registerComponent(component);
    return component;
  }
}