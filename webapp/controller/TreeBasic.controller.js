sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  'sap/ui/model/json/JSONModel'
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("painel.ui5.controller.TreeBasic", {

		onNavBack: function(oEvent) {
      var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash != undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteApp", true)
			}
		},

    onInit : function () {
			var oModel = new JSONModel("./model/Tree.json");
			this.getView().setModel(oModel);
		}

	});
});