import { Component, Inject, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { UIUX_CONFIG, UIUXConfig } from '../../config'


@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiButtonComponent implements OnInit {

  @Input() icon: string = "default"

  constructor(
      @Inject(UIUX_CONFIG) public config:UIUXConfig
    ) { }

  ngOnInit() {
  }

}
