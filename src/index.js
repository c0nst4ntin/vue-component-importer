const importComponents = (_, Vue) => {
  const components = require.context('@/components', true, /[a-zA-Z]\w+\.(vue)$/);
  _.forEach(components.keys(), (fileName) => {
    const componentConfig = components(fileName);
    const componentName = fileName.split('/').pop().split('.')[0];
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

export default importComponents;
