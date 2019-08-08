module.exports = function(plop) {
  plop.addHelper("upperCase", text => text.toUpperCase());

  plop.setGenerator("basics", {
    description: "",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "What is the module name that you want to create?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/modules/{{moduleName}}/actions.js",
        templateFile: "plopfiles-templates/actions.js.hbs"
      },
      {
        type: "add",
        path: "src/modules/{{moduleName}}/constants.js",
        templateFile: "plopfiles-templates/constants.js.hbs"
      },
      {
        type: "add",
        path: "src/modules/{{moduleName}}/endpoints.js",
        templateFile: "plopfiles-templates/endpoints.js.hbs"
      },
      {
        type: "add",
        path: "src/modules/{{moduleName}}/reducer.js",
        templateFile: "plopfiles-templates/reducer.js.hbs"
      },
      {
        type: "add",
        path: "src/modules/{{moduleName}}/sagas.js",
        templateFile: "plopfiles-templates/sagas.js.hbs"
      }
    ]
  });
};
