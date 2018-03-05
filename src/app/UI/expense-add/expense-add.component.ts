import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent implements OnInit {

  thisPage = true;

  constructor(private router: Router) { }

  doGoBack() {
    this.thisPage = false;
    this.router.navigateByUrl('');
  }

  ngOnInit() {
  }

}