import { Time } from '@angular/common';

export class Event {

  id: number;
  name: string;
  localisation: string;
  content: string;
  condition: boolean;
  cover: string;
  date: Date;
  time: Time;
}
