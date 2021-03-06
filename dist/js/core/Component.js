export default class Component {
  $target;
  state;
  props;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.init();
  }
  init() {
    this.setup();
    this.render();
    this.setEvent();
  }
  setup() {}
  mounted() {}
  getTemplate() {}
  render() {
    this.$target.innerHTML = this.getTemplate();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.state = {...this.state, ...newState};
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) => {
      return children.includes(target) || target.closest(selector);
    };
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
