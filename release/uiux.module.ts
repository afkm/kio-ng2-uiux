import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule } from '@angular/router'

import { KioNg2i18nModule } from 'kio-ng2-i18n'
import { InlineSVGModule } from 'ng-inline-svg'

import { UiButtonComponent } from './components/ui-button/ui-button.component'
import { UiSharingDropdown } from './components/ui-sharing-dropdown/ui-sharing-dropdown.component'
import { UiBackToTopComponent } from './components/ui-back-to-top/ui-back-to-top.component'
import { GColComponent } from './components/g-col/g-col.component'
import { GRowComponent } from './components/g-row/g-row.component'
import { UiDevicecheck } from './components/ui-devicecheck/ui-devicecheck.component'
import { SHARING_CONFIG, UIUX_CONFIG, UIUXConfig, defaultConfig, Sharings, SharingConfig } from './config'

import { SharingService } from './services/sharing.service'

export { SharingService } from './services/sharing.service'
export { SHARING_CONFIG, Sharings, SharingConfig } from './config'

import { Ng2PageScrollModule } from 'ng2-page-scroll'

export let UIUXComponents = [ UiButtonComponent, UiSharingDropdown, UiBackToTopComponent, GRowComponent, GColComponent, UiDevicecheck ]

@NgModule({
  imports:[
    InlineSVGModule,
    KioNg2i18nModule,
    Ng2PageScrollModule,
    RouterModule
  ],
  declarations: [
    ...UIUXComponents
  ],
  providers: [
    {
      provide: SHARING_CONFIG,
      useValue: Sharings
    },
    {
      provide: UIUX_CONFIG,
      useValue: defaultConfig
    },
    SharingService
  ],
  entryComponents: [
    ...UIUXComponents
  ],
  exports: [
    KioNg2i18nModule,
    ...UIUXComponents
  ]
})
export class KioNg2UIUXModule {

  static forRoot ( config:UIUXConfig ):ModuleWithProviders {
    return {
      ngModule: KioNg2UIUXModule,
      providers: [
        {
          provide: UIUX_CONFIG,
          useValue: config
        }
      ]
    }
  }

}
