class EditElement extends HTMLElement {
  constructor(props) {
    super();
    this.props = props;
    this.edit = document.createElement('input');
    this.appendChild(this.edit);
  }

  connectedCallback() {
   
    if(this.props.style){
      Object.entries(this.props.style).forEach(([key, value]) => {
        this.edit.style[key] = value;
      });
    }
    if(this.props.event){
      Object.entries(this.props.event).forEach(([key, fx]) => {
        this.edit.addEventListener(key, fx, false);
      });
    }
  }
  addToBody(){
    document.body.appendChild(this);
  }
  clear(){
    this.value = '';
  }
  get value(){
    return this.edit.value;
  }

  set value(val){
    this.edit.value = val;
  }
};
customElements.define("edit-element", EditElement);
