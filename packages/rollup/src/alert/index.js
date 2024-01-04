import Alert from "./Alert.vue";
Alert.install = (app) => {
  app.component(Alert.name, Alert);
};
export default Alert;
