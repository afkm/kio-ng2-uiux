import { Component } from '@angular/core';
var UiBackToTopComponent = /** @class */ (function () {
    function UiBackToTopComponent() {
        var _this = this;
        this.hidden = true;
        setTimeout(function () {
            _this.hidden = false;
        }, 5000);
    }
    UiBackToTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-back-to-top',
                    templateUrl: './ui-back-to-top.component.html',
                    styleUrls: ['./ui-back-to-top.component.css']
                },] },
    ];
    /** @nocollapse */
    UiBackToTopComponent.ctorParameters = function () { return []; };
    return UiBackToTopComponent;
}());
export { UiBackToTopComponent };
//# sourceMappingURL=ui-back-to-top.component.js.map