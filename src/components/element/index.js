import Row from './row';
import Col from './col';

const components = [Row, Col];
function install(Vue) {
  components.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
export default {
  Row,
  Col,
  install,
};
export {
  Row,
  Col,
  install,
};
