import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  toggle() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.toggle('active');
    sideBar.classList.toggle('active');
  }


  toHome() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.remove('active');
    sideBar.classList.remove('active');
  }


  toAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.remove('active');
    sideBar.classList.remove('active');
  }

  toProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.remove('active');
    sideBar.classList.remove('active');
  }

  toContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    const toggleBtn = document.getElementById('toggleBtn');
    const sideBar = document.getElementById('sidebar');

    toggleBtn.classList.remove('active');
    sideBar.classList.remove('active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
