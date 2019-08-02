import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/module/activity';
import { Event } from 'src/app/module/event';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';
import { DataSource } from '@angular/cdk/table';

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

              dataSource1 = new ActivityDataSource(this.activityService);
              displayedColumns1 = ['id', 'name','content' , "localisation",'condition', "cover",'date','time','action'];

              dataSource2 = new EventDataSource(this.eventService);
              displayedColumns2 = ['id', 'name', "content" , "localisation",'date', "date",'time', "action"];





  ngOnInit() {
    this.reloadData();
    this.eventreloadData();
  }
// pour les activités
  reloadData() {
    this.dataSource1 = new ActivityDataSource(this.activityService);
    this.activity = this.activityService.getActivitiesList();
  }

  deleteActivity(id: number) {
    console.log(id);
    this.activityService.deleteActivity(id)
      .subscribe(
        data => {
          this.dataSource1 = new ActivityDataSource(this.activityService);
          console.log(data);
          console.log(this.activityService);
          this.reloadData();
        },
        error => console.log(error));
  }

  AcitivtyDetails(id: number) {
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
        this.dataSource2 = new EventDataSource(this.eventService);
        console.log(data);
        console.log(this.eventService);
        this.eventreloadData();
      },
      error => console.log(error));
}

EventDetails(id: number) {
  this.router.navigate(['users/detail', id]);
}

}

export class ActivityDataSource extends DataSource<any> {
  constructor(private activityService: ActivityService, ) {
    super();
  }
  connect(): Observable<Activity[] >{
    return this.activityService.getActivitiesList();
  }
  disconnect() {}
}
export class EventDataSource extends DataSource<any> {
  constructor(private eventService: EventService, ) {
    super();
  }
  connect(): Observable<Event[]> {
    return this.eventService.getEventList();
  }
  disconnect() {}
}
