sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(
	Controller, History
) {
	"use strict";

	return Controller.extend("painel.ui5.controller.Covid19", {
		
		/**
		 * @override
		 */
		onInit: function() {
			// debugger;				
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
			
		}
		
	});

});