import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-card',
  templateUrl: './rounded-card.component.html',
  styleUrls: ['./rounded-card.component.scss']
})
export class RoundedCardComponent {
@Input() card: any;
}
