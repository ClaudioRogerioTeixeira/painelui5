sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel'
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("painel.ui5.controller.Covid19", {

		// dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
		dataPath: "./model/covid19Btos.json",

		/**
		 * @override
		 */
		onInit: function() {
			var dataModel = new JSONModel(this.dataPath);
			this.getView().setModel(dataModel, "Latest")
		},

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
		
	});

});