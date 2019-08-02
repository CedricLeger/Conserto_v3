import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/module/activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activity: Observable<Activity[]>;
  event: Observable<Event[]>;


  constructor(activityService: ActivityService,
              eventService: EventService) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {

    this.activity = this.activityService.getActivitiesList();
    this.event = this.eventService.getEventList();
  }

}
