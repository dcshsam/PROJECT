sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function (Controller,Filter) {
	"use strict";

	return Controller.extend("SAM.SAPUI5A.controller.main", {
		onInit: function () {

		},
		
		onSearch: function(oEvent){
			var aFilter = [];
			var sQuery = oEvent.getSource().getValue();
			if(sQuery && sQuery.length > 0){
				var oFilter = new Filter("topic",sap.ui.model.FilterOperator.Contains,sQuery);
	       
			}else{
				var oFilter = {};
			}
			aFilter.push(oFilter);
			
			var list = this.byId("mainList");
			var binding = list.getBinding("items");
			binding.filter(aFilter,"Application");
		}
	});
});