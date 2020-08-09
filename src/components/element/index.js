import Row from './row';
import Col from './col';
import Container from './container';
import Aside from './aside';
import Main from './main';
import Header from './header';
import Footer from './footer';
import Icon from './icon';

const components = [Row, Col, Container, Aside, Main, Header, Footer, Icon];

function install(Vue) {
  components.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
}
export default {
  Row,
  Col,
  Container,
  Aside,
  Main,
  Header,
  Footer,
  Icon,
  install,
};
export {
  Row,
  Col,
  Container,
  Aside,
  Main,
  Header,
  Footer,
  Icon,
  install,
};
