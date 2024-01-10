import Template from "./template.vue";
Template.install = (app) => {
  app.component(Template.name, Template);
};
export default Template;
