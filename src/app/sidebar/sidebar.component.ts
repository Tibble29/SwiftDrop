import { Component } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { MatBadge } from '@angular/material/badge'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private darkModeService: DarkModeService) {}


  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}


