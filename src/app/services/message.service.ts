import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  cards = [
    {
      initials: 'P',
      header: 'Successful Tender',
      description: 'Your tender was successful - next steps',
      date: '2023-05-30',
      fullMessage: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis risus eget elit imperdiet blandit ut a odio. Duis diam eros, dictum sed mattis ac, semper vitae diam. Cras consectetur imperdiet velit, a tempor eros lacinia et. Proin iaculis, sem ac rutrum accumsan, </p> <p>libero nibh imperdiet sapien, in mattis augue turpis non felis. Nulla facilisi. Curabitur elit nisl, dictum quis urna vehicula, tincidunt venenatis tellus. Aliquam ut ipsum eu ante dapibus volutpat ut nec nisl. Proin tincidunt nisi sit amet elementum rhoncus. Curabitur et justo ultricies, bibendum erat in, tristique justo. Nunc ut luctus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla tellus ut felis varius, eget congue neque ultrices. Nullam ligula libero, feugiat non dolor eget, sodales vehicula neque. Duis ipsum urna, fermentum quis malesuada et, rutrum sed enim. Integer mollis convallis mi, et scelerisque arcu condimentum sed. Donec non pulvinar diam. Donec sem nisi, consectetur id turpis non, mattis tempus arcu. Donec blandit ac eros nec dapibus. Donec elit felis, porttitor nec metus a, tempus rhoncus libero. Morbi vestibulum ligula vitae pulvinar vestibulum. Vestibulum aliquet volutpat fermentum. Nam lectus felis, tristique et euismod volutpat, accumsan id sapien. Duis mollis cursus diam sed dictum. Curabitur magna ligula, varius id turpis sit amet, suscipit faucibus magna.</bp',
      read: true
    },
    {
      initials: 'L',
      header: 'Card 2',
      description: 'This is the description for Card 2',
      date: '2023-05-31',
      read: false
    },
  ]

  getMessages() {
    return this.cards
  }
}
