import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  useGlobalMaxTime: boolean;
  globalMaxTime: number;

  constructor(public settings: SettingsService) {
    
  }

  ngOnInit() {
    this.useGlobalMaxTime = this.settings.getUseGlobalMaxTime();
    this.globalMaxTime = this.settings.getGlobalMaxTime();
  }

  saveSettings() {
    this.settings.setGlobalMaxTime(this.globalMaxTime);
    this.settings.setUseGlobelMaxTime(this.useGlobalMaxTime);
    this.settings.saveSettings();
  }

}
