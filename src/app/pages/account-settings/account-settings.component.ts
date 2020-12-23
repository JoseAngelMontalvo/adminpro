import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) {}

  ngOnInit(): void {
    this.initialCheckSelectorTheme();
  }

  changeTheme(theme: string, link: any) {
    this._settings.applySettings(theme);
    this.checkSelectorTheme(link);
  }

  checkSelectorTheme(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  initialCheckSelectorTheme() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
