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
  btnText = 'Send message';

  constructor(private http: HttpClient, private service: HttpService) { }

  ngOnInit(): void {
  }

  sendMail() {
    this.btnText = 'Sending message...'
    this.service.sendEmail('https://andjela-portfolio-mail.herokuapp.com/send', this.msg).subscribe(
      (data) => {
        let res: any = data;
        console.log("Usao u servis......");
        console.log("response: " + res);
      },
      (err) => {
        console.log(err);
        this.btnText = 'Something went wrong.';
      },
      () => {
        this.btnText = 'Message sent.';
        console.log("Completed.")
      }
    )
  }

}
