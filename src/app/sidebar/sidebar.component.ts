import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';
import { MatBadge } from '@angular/material/badge'
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 
  unreadMessages: number = 0

  constructor(private darkModeService: DarkModeService, private messageService: MessageService) {}

ngOnInit(): void {
this.unreadMessages = this.messageService.getMessages().filter(x => x.read === false).length;

}

  isDarkModeEnabled(): boolean {
    return this.darkModeService.isDarkModeEnabled();
  }
}


