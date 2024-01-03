import Button from "./button.vue";
Button.install = (app) => {
  app.component("myButton", Button);
};
export default Button;
