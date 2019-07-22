import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/module/activity';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activity: Observable<Activity[]>;

  constructor(private activityService: ActivityService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

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
}
