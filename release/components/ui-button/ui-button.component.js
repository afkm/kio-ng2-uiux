import { Component, Inject, Input, ViewEncapsulation } from '@angular/core';
import { UIUX_CONFIG } from '../../config';
var UiButtonComponent = /** @class */ (function () {
    function UiButtonComponent(config) {
        this.config = config;
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
    UiButtonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [UIUX_CONFIG,] },] },
    ]; };
    UiButtonComponent.propDecorators = {
        'icon': [{ type: Input },],
    };
    return UiButtonComponent;
}());
export { UiButtonComponent };
//# sourceMappingURL=ui-button.component.js.map