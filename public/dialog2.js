class DialogElement extends HTMLElement {
  constructor(props) {
    super();
    this.props = props;
    this.dialog = document.createElement('input');
    this.appendChild(this.dialog);
  }

  connectedCallback() {
   
    if(this.props.style){
      Object.entries(this.props.style).forEach(([key, value]) => {
        this.dialog.style[key] = value;
      });
    }
    if(this.props.event){
      Object.entries(this.props.event).forEach(([key, fx]) => {
        this.dialog.addEventListener(key, fx, false);
      });
    }
  }
  addToBody(){
    document.body.appendChild(this);
  }
  getConfirmation(){
    var retVal = confirm("Do you want t continue ?");
    this.value = 'click me';
    if( retVal == true ) {
       document.write ("User wants to continue!");
       return true;
    } else {
       document.write ("User does not want to continue!");
       return false;
    }
  }
  get value(){
    return this.dialog.value;
  }

  set value(val){
    this.dialog.value = val;
  }
};
customElements.define("dialog-element", DialogElement);