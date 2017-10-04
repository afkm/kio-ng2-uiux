import { InjectionToken } from '@angular/core'
import { UIUXConfig, SharingConfig } from './interfaces'

export let SHARING_CONFIG = new InjectionToken<SharingConfig[]>('sharing_config')

export let UIUX_CONFIG = new InjectionToken<UIUXConfig>('uiux_config')
