import { Component, OnInit } from "@angular/core";
import { User } from "src/app/module/user";
import { UserService } from "src/app/service/user.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role } from "src/app/module/role";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"]
})
export class CreateUserComponent implements OnInit {
  public createUserFormGroup: FormGroup;

  public user: User = new User();

  public submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createUserFormGroup = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService
      .createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));

    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;

    Object.keys(this.createUserFormGroup.controls).forEach(key => {
      this.user[key] = this.createUserFormGroup.get(key).value;
    });
    this.save();
    this.gotoList();
    this.refresh();
  }

  gotoList() {
    this.router.navigate(["/users"]);
  }
  refresh(): void {
    window.location.reload();
  }
}
