const importComponents = (Vue, components) => {
  components.keys().forEach((fileName) => {
    const componentConfig = components(fileName);
    const componentName = fileName.split('/').pop().split('.')[0];
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

export default importComponents;
