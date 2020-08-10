import Row from './row';
import Col from './col';
import Container from './container';
import Aside from './aside';
import Main from './main';
import Header from './header';
import Footer from './footer';
import Icon from './icon';
import Button from './button';
import ButtonGroup from './button-group';

const components = [Row, Col, Container, Aside, Main, Header, Footer, Icon, Button, ButtonGroup];

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
  Button,
  ButtonGroup,
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
  Button,
  ButtonGroup,
  install,
};
