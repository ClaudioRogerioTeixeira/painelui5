/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "projectUI5/painelUI5/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
