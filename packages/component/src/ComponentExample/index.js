import ComponentExample from "./ComponentExample.vue";
ComponentExample.install = (app) => {
  app.component(ComponentExample.name, ComponentExample);
};
export default ComponentExample;
