import { Component, Input, ViewEncapsulation } from '@angular/core';
var UiButtonComponent = /** @class */ (function () {
    function UiButtonComponent() {
        this.icon = "default";
    }
    UiButtonComponent.prototype.ngOnInit = function () {
    };
    UiButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-button',
                    templateUrl: './ui-button.component.html',
                    styleUrls: ['./ui-button.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    UiButtonComponent.ctorParameters = function () { return []; };
    UiButtonComponent.propDecorators = {
        'icon': [{ type: Input },],
    };
    return UiButtonComponent;
}());
export { UiButtonComponent };
//# sourceMappingURL=ui-button.component.js.map