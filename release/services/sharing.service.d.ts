import { TranslateService } from '@ngx-translate/core';
import { SharingConfig } from '../config';
export declare class SharingService {
    private _sharings;
    translate: TranslateService;
    constructor(translate: TranslateService, _sharings: SharingConfig[]);
    setupSharings: () => void;
    readonly sharings: SharingConfig[];
}
