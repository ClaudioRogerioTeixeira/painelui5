sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("projectUI5.painelUI5.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "projectUI5.painelUI5",
          async: true,
          manifest: true
        }
      });
    }

  });
});
