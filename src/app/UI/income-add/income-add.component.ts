import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.css']
})
export class IncomeAddComponent implements OnInit {

  thisPage = true;

  constructor(private router: Router) { }

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}
