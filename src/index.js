//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function(fn){ fn() }
global.clearTimeout = function(){};

const React = require("react");
const ReactDOM = require("react-dom");

const Modal = require("./components/Modal");

let dialog;
function getDialog(selection) {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<Modal dialog={dialog} selection={selection}/>, dialog);
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: function (selection) {
            document.body.appendChild(getDialog(selection)).showModal();
        }
    }
};