import { Component, Input, ViewEncapsulation } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'

import { SharingService } from '../../services/sharing.service'

@Component({
  selector: 'ui-sharing-dropdown',
  templateUrl: './ui-sharing-dropdown.component.html',
  styleUrls: ['./ui-sharing-dropdown.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UiSharingDropdown {


  isOpen:boolean = false

  sharings: Array<any> = []


  constructor(private DigitSharing: SharingService, private sanitizer:DomSanitizer) {
    this.sharings = DigitSharing.sharings;
  }


  sanitize(url:string):SafeUrl{
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  toggle() {
    this.isOpen = !this.isOpen
  }

}
