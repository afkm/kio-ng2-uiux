import { Component, Input } from '@angular/core';
var GColComponent = /** @class */ (function () {
    function GColComponent() {
        this._cols = [];
        this._offsets = [];
        this.default = 12;
        this.medium = 4;
    }
    Object.defineProperty(GColComponent.prototype, "cols", {
        get: function () {
            return this._cols.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GColComponent.prototype, "offsets", {
        get: function () {
            return this._offsets.slice();
        },
        enumerable: true,
        configurable: true
    });
    GColComponent.prototype.ngOnInit = function () {
        this._cols = [
            'g-col-' + this.default,
            'g-col-m-' + this.medium
        ];
        if (this.small) {
            this._cols.push('g-col-s-' + this.small);
        }
        if (this.offset) {
            this._offsets.push('g-offset-' + this.offset);
        }
        if (this.smallOffset) {
            this._offsets.push('g-offset-s-' + this.smallOffset);
        }
        if (this.mediumOffset) {
            this._offsets.push('g-offset-m-' + this.mediumOffset);
        }
    };
    GColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g-col',
                    templateUrl: './g-col.component.html',
                    styleUrls: ['./g-col.component.css']
                },] },
    ];
    /** @nocollapse */
    GColComponent.ctorParameters = function () { return []; };
    GColComponent.propDecorators = {
        'default': [{ type: Input },],
        'small': [{ type: Input },],
        'medium': [{ type: Input },],
        'offset': [{ type: Input },],
        'smallOffset': [{ type: Input },],
        'mediumOffset': [{ type: Input },],
    };
    return GColComponent;
}());
export { GColComponent };
//# sourceMappingURL=g-col.component.js.map