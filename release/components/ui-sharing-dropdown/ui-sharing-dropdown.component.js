import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharingService } from '../../services/sharing.service';
var UiSharingDropdown = /** @class */ (function () {
    function UiSharingDropdown(DigitSharing, sanitizer) {
        this.DigitSharing = DigitSharing;
        this.sanitizer = sanitizer;
        this.isOpen = false;
        this.sharings = [];
        this.sharings = DigitSharing.sharings;
    }
    UiSharingDropdown.prototype.sanitize = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    UiSharingDropdown.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    UiSharingDropdown.decorators = [
        { type: Component, args: [{
                    selector: 'ui-sharing-dropdown',
                    templateUrl: './ui-sharing-dropdown.component.html',
                    styleUrls: ['./ui-sharing-dropdown.component.css'],
                    encapsulation: ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    UiSharingDropdown.ctorParameters = function () { return [
        { type: SharingService, },
        { type: DomSanitizer, },
    ]; };
    return UiSharingDropdown;
}());
export { UiSharingDropdown };
//# sourceMappingURL=ui-sharing-dropdown.component.js.map