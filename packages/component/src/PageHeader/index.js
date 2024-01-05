import PageHeader from "./PageHeader.vue";
PageHeader.install = (app) => {
  app.component(PageHeader.name, PageHeader);
};
export default PageHeader;
