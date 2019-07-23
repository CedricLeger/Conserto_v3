import { Time } from '@angular/common';

export class Activity{

  id: number;
  name: string;
  content: string;
  localisation: string;
  condition: boolean;
  cover: boolean;
  date: Date;
  time: Time;
}
