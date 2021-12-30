sap.ui.define([
	"sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("painel.ui5.controller.CodigoBarras", {

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

		iniciarScaner: function(oEvent) {
			ScanditSDK.configure("AdHgkR18PGPeHZ5YWSNSSFcYByoPAj8O80YN0IVFPjqoe9JOGlI+8iphxR9YSFx2zEWgKIRdsRxZUeFNd1+C05xAiUwlS4J+QztcfhhrTZd3VP2E5DntOopAL0fSRDhB02fE1pp0S8sfbrIbvELl5JRA4O3zSbbGJUpNYuhba+GAQnO80UcSQyNQQR2JeMscZkTRCNpxNSH1YbQ0q3+XNyZVSxTQWjT96E5/Tw1Er9/+boKstF2wuYcSF1+MW7k8n2LxF7F/9EbET8iMh3CViadd8MoOUTGx5Wcq5zNf1OiOR0T1A0OufYRFunA1YvVXVG1mgM1hXzKhWP2EcXrcen9saagAZuvlflr2AMV5or0QeQCuj1exjLNRwt8fYTRhIk04yt9pQzMXYXr68Vvl48hHj9ywQgnmYlI0AmV3dqVxclSTulcwNcQksM8lepiUaWNfZkEsip6gL8kedj2QMV5xQh5vVpLYqVNdmzNbeQ7WIGvb6nR+i6F6UQkbKA6ahBv0bkcxh5V5HqjCESnhM1bQZC766dAftAZrp/tvIhEsVLF7Db7+oBub6/SgsxQveBAyhP+BmOFOqe0BzgkB/JWKjtwqrRDMO/J8GFya5dYpDt5BgxXS+jroEkwDgZJUTDXP7hovmibITGKKS1nJVGWOrd6XwR0Jiw5dOVTnyYGu0jySX8uu8Eu5M9a2eI6TEZCpiao8+wqIcp2rn8E+QX7ZfIoIAQcREp9KgBq6svNgGZi4J/qRuUqbKk0SsYCPeAKbYLxVoQOhKAewnIIXTHyeuM6D9HllGhLxCxabpzVSybQ2aV2wOT9N+5iPO2f3ehXi7x5Bw7KhqV9JX2j6Js2khQf/5sDe23WIzUGpnh+EFP+yndUaJ8COAODbN4HzYHqhMWO2+O/pRtnKFN31d7canCZkv9t/k2IKWHHySZbDSJFSObJLSEQpVtioJSNUQoLFkzWHxChenTMRAOH9fzd2Nuck7Ih82Yr/kB6xLAZfLGeINLhtMMSpeHacB9KLyWxb79xw3TTCsI90TWsTeutQR0VXQwZbE0cFvu4DJeLRztUOz0DWuwQsa8acZmSn73ldErIsUwhQFAfSWnsnfBDiH1p55fbZ6O3H8kFMDOf10KeBRV/usZqt6jw38Qnmhf67tW43AsqmBfFiTTtrLSiQLkLmOPdu1LG3oN8Ggnk1DI8di+XBXpL8IJs83JmT", {
				engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
			})
				.then(() => {
					return ScanditSDK.BarcodePicker.create(document.getElementById(this.getView().createId("scandit-barcode-picker")), {
						// enable some common symbologies
						scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),
					});
				})
				.then((barcodePicker) => {
					// barcodePicker is ready here, show a message every time a barcode is scanned
					barcodePicker.on("scan", (scanResult) => {
						alert(scanResult.barcodes[0].data);
					});
				});			
		},

		pararScaner: function(oEvent) {
			this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(false);
			MessageToast.show("Scaner interrompido")
		},

    onInit : function() {

    }


	});
});