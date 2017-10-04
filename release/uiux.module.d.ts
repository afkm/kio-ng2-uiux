import { ModuleWithProviders } from '@angular/core';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { UiSharingDropdown } from './components/ui-sharing-dropdown/ui-sharing-dropdown.component';
import { UiDevicecheck } from './components/ui-devicecheck/ui-devicecheck.component';
import { UIUXConfig } from './config';
export { SharingService } from './services/sharing.service';
export { SHARING_CONFIG, Sharings, SharingConfig } from './config';
export declare let UIUXComponents: (typeof UiButtonComponent | typeof UiSharingDropdown | typeof UiDevicecheck)[];
export declare class KioNg2UIUXModule {
    static forRoot(config: UIUXConfig): ModuleWithProviders;
}
