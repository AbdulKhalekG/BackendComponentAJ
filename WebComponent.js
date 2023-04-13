class WebComponent {
    constructor() {
      this.id = WebComponent.nextId();
      this.button = document.createElement('button');
      this.button.innerText = `Button ${this.id}`;
  
      this.button.addEventListener('click',this.handleClick.bind(this));
  
      document.body.appendChild(this.button);
    }
  
    handleClick(){
  
      myFramework.controller.handleClick(this);
    }
  
    static nextId(){
      if (!this.counter){
        this.counter = 0;
      }
      return ++this.counter;
    }
  }