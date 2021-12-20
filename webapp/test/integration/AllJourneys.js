sap.ui.define([
  "sap/ui/test/Opa5",
  "projectUI5/painelUI5/test/integration/arrangements/Startup",
  "projectUI5/painelUI5/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});
