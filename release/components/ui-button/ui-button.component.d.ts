import { OnInit } from '@angular/core';
import { UIUXConfig } from '../../config';
export declare class UiButtonComponent implements OnInit {
    config: UIUXConfig;
    icon: string;
    constructor(config: UIUXConfig);
    ngOnInit(): void;
}
