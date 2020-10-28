import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public msg = {
    "name": null,
    "mail": null,
    "phone": null,
    "message": null
  };

  constructor(private http: HttpClient, private service: HttpService) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.service.sendEmail('http://localhost:8084/sender/send', this.msg).subscribe(
      (data) => {
        let res: any = data;
        console.log("Usao u servis......")
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("Completed.")
      }
    )
  }

}
