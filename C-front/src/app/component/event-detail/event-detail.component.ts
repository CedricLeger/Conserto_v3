import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/module/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  id: number;
event: Event;


  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) {}

  ngOnInit() {
  this.event = new Event();
  this.id = this.route.snapshot.params['id'];
  this.eventService.getEvent(this.id).subscribe(data=>{
      console.log(data)
      this.event = data;}, error=> console.log(error));
    }

}
