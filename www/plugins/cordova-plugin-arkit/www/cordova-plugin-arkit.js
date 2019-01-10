cordova.define("cordova-plugin-arkit.cordova-plugin-arkit", function(require, exports, module) {
    var exec = require('cordova/exec');

    exports.setListenerForArChanges = function (arg0, success, error) {
        exec(success, error, 'ArKitPlugin', 'coolMethod', [arg0]);
    };
    
    /// Add AR View below WebView and start AR session
    exports.addARView = function() {
        exec(undefined, undefined, 'ArKitPlugin', 'addARView');
    };
    
    /// Stop AR session and remove AR View the from veiw stack
    exports.removeARView = function() {
        exec(undefined, undefined, 'ArKitPlugin', 'removeARView');
    };
               
    exports.startARSessionWithQRRecognition = function(qrDataArr) {
        exec(undefined, undefined, 'ArKitPlugin', 'startARSessionWithQRRecognition', qrDataArr);
    };

    exports.startArSession = function() {
        exec(undefined, undefined, 'ArKitPlugin', 'startARSessionWithoutQRRecognition');
    };
});