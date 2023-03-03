sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ztodolist.controller.View1", {
            onInit: function () {
                debugger;
                // var oPage =  this.getView().byId("page");
                // oPage.addStyleClass("myBackgroundStyle");
                // this.getView().byId("vbox").addStyleClass("vBoxClass");
                // this.getView().byId("form").addStyleClass("");

            },
            onSubmit: function (oEvent) {
                var model = this.getView().getModel();
                var value = this.getView().byId("inpValue").getValue();
                if (value) {
                    var aData = model.getProperty("/ItemSet");
                    var value = this.getView().byId("inpValue").getValue();
                    aData.push({
                        task: value
                    });
                    model.setProperty("/ItemSet", aData);
                    this.getView().byId("List").setModel(model);
                    this.getView().byId("List").getModel().refresh();
                    this.getView().byId("inpValue").setValue("");
                }
                else {
                    this.getView().byId("inpValue").setValueStateText(txt + " must not be empty.");
                    this.getView().byId("inpValue").setValueState("Error");
                }

            },
            onDelete: function (oEvent) {
                this.oModel = this.getView().getModel();
                var index = Number(oEvent.getSource().getBindingContext().sPath.substring(9, oEvent.getSource().getBindingContext().sPath.length));
                var aData = this.oModel.getProperty("/ItemSet");
                aData.splice(index, 1);
                this.oModel.setProperty("/ItemSet", aData);
            },
            onChecked:function(oEvent){
                var index = Number(oEvent.getSource().getBindingContext().sPath.substring(9, oEvent.getSource().getBindingContext().sPath.length));
                var sPath =oEvent.getSource().getBindingContext().sPath;
                var oList =this.getView().byId("List");
                var selectedRow = oList.getModel().getProperty(sPath);
                var selectedValue = selectedRow.task;
               // selectedValue.addStyleClass("CustomStyleClass");
               
            }
        });
    });
