/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"z_todo_list/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
