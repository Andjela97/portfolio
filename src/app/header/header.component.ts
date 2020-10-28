import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  toHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }

  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  toProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  toContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
