import { Time } from '@angular/common';

export class Event{

  id: number;
  name: string;
  location: string;
  condition: boolean;
  cover: string;
  date: Date;
  time: Time;
}
