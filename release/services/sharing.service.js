import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SHARING_CONFIG } from '../config';
var SharingService = /** @class */ (function () {
    //private _sharings = Sharings
    function SharingService(translate, _sharings) {
        var _this = this;
        this._sharings = _sharings;
        this.setupSharings = function () {
            var _loop_1 = function (share) {
                var url = "";
                var text = "";
                var subject = "";
                var shareUrl = "";
                var image = "";
                this_1.translate.get('sharing_url').subscribe(function (res) {
                    url = encodeURIComponent(res);
                });
                this_1.translate.get('opengraph_image').subscribe(function (res) {
                    image = encodeURIComponent(res);
                });
                if (share.textKey) {
                    this_1.translate.get(share.textKey).subscribe(function (res) {
                        text = encodeURIComponent(res);
                    });
                }
                if (share.subjectKey) {
                    this_1.translate.get(share.subjectKey).subscribe(function (res) {
                        subject = encodeURIComponent(res);
                    });
                }
                shareUrl = share.url;
                shareUrl = shareUrl.replace('{{url}}', url);
                shareUrl = shareUrl.replace('{{text}}', text);
                shareUrl = shareUrl.replace('{{subject}}', subject);
                shareUrl = shareUrl.replace('{{image}}', image);
                share.composedUrl = shareUrl;
            };
            var this_1 = this;
            for (var _i = 0, _a = this._sharings; _i < _a.length; _i++) {
                var share = _a[_i];
                _loop_1(share);
            }
        };
        this.translate = translate;
        this.setupSharings();
        translate.onLangChange.subscribe(function () {
            _this.setupSharings();
        });
    }
    Object.defineProperty(SharingService.prototype, "sharings", {
        get: function () {
            return this._sharings;
        },
        enumerable: true,
        configurable: true
    });
    SharingService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SharingService.ctorParameters = function () { return [
        { type: TranslateService, },
        { type: Array, decorators: [{ type: Inject, args: [SHARING_CONFIG,] },] },
    ]; };
    return SharingService;
}());
export { SharingService };
//# sourceMappingURL=sharing.service.js.map