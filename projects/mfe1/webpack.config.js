const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Module": "./projects/mfe1/src/app/schedule/schedule.module.ts",
    "./Component": "./projects/mfe1/src/app/schedule/schedule-integration/schedule-integration.component.ts"
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
