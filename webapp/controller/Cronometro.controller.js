sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("painel.ui5.controller.Cronometro", {
		/**
		 * @override
		 */
		onInit: function() {
			this.timer = {
				"days":0,
				"hours":0,
				"minutes":0,
				"seconds":0
			}
			let tilesModel = new JSONModel(this.timer);
			this.getView().setModel(tilesModel, "timer")
			setInterval(this.calculateTime.bind(this), 1000);
			// this.calculateTime();
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

		calculateTime: function() {
			let nextChristmas = new Date("Dec 25 2022");
			let currentDate = new Date();
			let diff = nextChristmas.getTime() - currentDate.getTime();
			this.timer.days = Math.floor(diff / (1000 * 60 * 60 * 24));
			this.timer.hours = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
			this.timer.minutes = Math.floor(diff % (1000 * 60 * 60)) / (1000 * 60);
			this.timer.seconds = Math.floor(diff % (1000 * 60)) / (1000);
			this.getView().getModel("timer").setData(this.timer);
		}
		
	});

});