import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/module/activity';
import { Event } from 'src/app/module/event';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity: Observable<Activity[]>;
  event: Observable<Event[]>;

  constructor(private activityService: ActivityService,
              private eventService: EventService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.eventreloadData();
  }
// pour les activités
  reloadData() {
    this.activity = this.activityService.getActivitiesList();
  }

  deleteActivity(id: number) {
    this.activityService.deleteActivity(id)
      .subscribe(
        data => {
          console.log(data);
          console.log(this.activityService);
          this.reloadData();
        },
        error => console.log(error));
  }

  AcitivtyDetails(id: number){
    this.router.navigate(['users/detail', id]);
  }



// pour les events
eventreloadData() {
  this.event = this.eventService.getEventList();
}

deleteEvent(id: number) {
  this.eventService.deleteEvent(id)
    .subscribe(
      data => {
        console.log(data);
        console.log(this.eventService);
        this.eventreloadData();
      },
      error => console.log(error));
}

EventDetails(id: number){
  this.router.navigate(['users/detail', id]);
}

}
