import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SharingService } from '../../services/sharing.service';
export declare class UiSharingDropdown {
    private DigitSharing;
    private sanitizer;
    isOpen: boolean;
    sharings: Array<any>;
    constructor(DigitSharing: SharingService, sanitizer: DomSanitizer);
    sanitize(url: string): SafeUrl;
    toggle(): void;
}
