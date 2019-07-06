/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAM/SAPUI5A/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});