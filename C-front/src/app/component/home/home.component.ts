import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/service/activity.service';
import { EventService } from 'src/app/service/event.service';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/module/activity';
import { Event } from 'src/app/module/event';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activities: Observable<Activity[]>;
  events: Observable<Event[]>;
  activity: Activity = new Activity();


  constructor(private activityService: ActivityService,
              private eventService: EventService,
              private router: Router) { }


              dataSource = new ActivityDataSource(this.activityService);
              displayedColumns = ['id', 'name','content' , "localisation",'condition', "cover",'date','time','action'];


              ngOnInit() {
                this.reloadData();
                this.eventreloadData();
                console.log(this.activity);
              }
            // pour les activités
              reloadData() {

                this.activities = this.activityService.getActivitiesList();
                console.log(this.activity);
              }
              eventreloadData() {
                this.events = this.eventService.getEventList();
              }
              activityDetails(id:number){
                this.router.navigate(['/activitydetail',id]);
              }
              eventDetails(id:number){
                this.router.navigate(['/eventdetail',id]);
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
