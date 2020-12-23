import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default',
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  getSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applySettings(this.settings.theme);
    } else {
      console.log('no hay tema en localstorage');
      this.applySettings(this.settings.theme);
    }
  }

  applySettings(theme: string) {
    let url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme-link').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }
}
interface Settings {
  themeUrl: string;
  theme: string;
}
