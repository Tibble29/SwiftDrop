import { Component } from '@angular/core';

@Component({
  selector: 'app-live-deliveries',
  templateUrl: './live-deliveries.component.html',
  styleUrls: ['./live-deliveries.component.scss']
})
export class LiveDeliveriesComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 51.509865, lng: -0.118092 },
    zoom : 12
 }

  marker1 = { position: { lat: 51.5055, lng: -0.0197 } };
  marker2 = { position: { lat: 51.49942, lng: -0.041091 } };
  marker3 = { position: { lat: 51.537901, lng: -0.034889} };

  
  markers = [this.marker1, this.marker2, this.marker3];


  cards = [
    {
      title: '30kg Parcel',
      from: 'Canary Warf',
      to: 'Shepherds Bush',
      time: 'Deliver by: 14:00'
    },
    {
      title: '30kg Parcel',
      from: 'Canary Warf',
      to: 'Shepherds Bush',
      time: 'Deliver by: 14:00'
    },
    {
      title: '30kg Parcel',
      from: 'Canary Warf',
      to: 'Shepherds Bush',
      time: 'Deliver by: 14:00'
    }
  ];
  
}
