import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.scss']
})
export class MemosComponent implements OnInit{

  selectedMemoType: string = '';
  selectedName: string = '';
  message: string = '';
  selectedCard: any;
  cards: any = [];
  cardCount: number = 0
  constructor(private messageService: MessageService) { }


  ngOnInit() {
    this.cards = this.messageService.getMessages()
    this.cardCount = this.cards.length
  }

  selectCard(card: any): void {
    this.selectedCard = this.selectedCard === card ? null : card;

    if(card.read === false) {
      card.read = true;
    }
  }

  deleteMessage(message: any) {
    const index = this.messageService.getMessages().indexOf(message);
  
    if (index !== -1) {
      this.messageService.getMessages().splice(index, 1);
    }
    this.selectedCard = ''
    this.cardCount = this.cardCount - 1
  }
}
