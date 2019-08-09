import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/module/activity';
import { Event } from 'src/app/module/event';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';
import { DataSource } from '@angular/cdk/table';

import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material';
import { EditActivityComponent } from '../edit-activity/edit-activity.component';
import { EditEventComponent } from '../edit-event/edit-event.component';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity: Observable<Activity[]>;
  event: Observable<Event[]>;
  editActivity :Activity = new Activity();
  editEvent :Event = new Event();

  constructor(private activityService: ActivityService,
              private eventService: EventService,
              private router: Router,
              private dialog: MatDialog) {}

              dataSource1 = new ActivityDataSource(this.activityService);
              displayedColumns1 = ['id', 'name','content' , "localisation",'condition', "cover",'date','time','action'];

              dataSource2 = new EventDataSource(this.eventService);
              displayedColumns2 = ['id', 'name', "content" , "localisation", "date",'time', "action"];





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

startEdit(id:number,name:string,localisation:string,content:string,cover:boolean,date:Date){
  this.editActivity.id = id;
  const dialogRef = this.dialog.open(EditActivityComponent, {
    data:{id:id,name:name ,localisation :localisation,content:content,cover:cover,date:date}
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      const foundIndex = this.activityService.dataChange.value.findIndex(x => x.id === this.editActivity.id);
      // for delete we use splice in order to remove single object from DataService
      this.activityService.dataChange.value[foundIndex] = this.activityService.getDialogData();
      // this.refreshTable();

  }
  });
  }
  startEditEvent(id:number,name:string,localisation:string,content:string,date:Date){
    this.editEvent.id = id;
    const dialogRef = this.dialog.open(EditEventComponent, {
      data:{id:id,name:name ,localisation :localisation,content:content,date:date}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.eventService.dataChange.value.findIndex(x => x.id === this.editEvent.id);
        // for delete we use splice in order to remove single object from DataService
        this.eventService.dataChange.value[foundIndex] = this.eventService.getDialogData();
        // this.refreshTable();

    }
    });
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
