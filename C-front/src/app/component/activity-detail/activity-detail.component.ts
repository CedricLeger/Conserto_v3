import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/module/activity';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  id: number;
activity: Activity;


  constructor(private route: ActivatedRoute, private router: Router, private activityService: ActivityService) {}

  ngOnInit() {
    this.activity = new Activity();
    this.id = this.route.snapshot.params['id'];
    this.activityService.getActivity(this.id).subscribe(data=>{
      console.log(data)
      this.activity = data;}, error=> console.log(error));
    }
//Ajouter un bouton "accepter la participation Conserto et publier l'activité"

}
