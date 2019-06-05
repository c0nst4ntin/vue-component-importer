const importComponents = (_, Vue, components) => {
  _.forEach(components.keys(), (fileName) => {
    const componentConfig = components(fileName);
    const componentName = fileName.split('/').pop().split('.')[0];
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

export default importComponents;
