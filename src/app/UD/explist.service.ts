import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { ExpenseModel } from './expense-model';

@Injectable()
export class ExplistService {

  private basePath = '/UD';

  explist: AngularFireList<ExpenseModel[]> = null; //  list of objects
  exp: AngularFireObject<ExpenseModel> = null;


  constructor(private db: AngularFireDatabase) { }

  getExpenseModelsList(query = {}): AngularFireList<ExpenseModel[]> {
    this.explist = this.db.list(this.basePath, ref => ref.orderByChild('date'));
    return this.explist;
  }

  // Return a single observable exp
  getExpenseModel(key: string): AngularFireObject<ExpenseModel> {
    const itemPath =  `${this.basePath}/${key}`;
    this.exp = this.db.object(itemPath);
    return this.exp;
  }

  createExpenseModel(exp: ExpenseModel): void  {
    this.explist.push(exp)
      .catch(error => this.handleError(error));
  }


  // Update an existing exp
  updateExpenseModel(key: string, value: any): void {
    this.explist.update(key, value)
      .catch(error => this.handleError(error));
  }

  // Deletes a single exp
  deleteExpenseModel(key: string): void {
      this.explist.remove(key)
        .catch(error => this.handleError(error));
  }

  // Deletes the entire list of explist
  deleteAll(): void {
      this.explist.remove()
        .catch(error => this.handleError(error));
  }

  // Default error handling for all actions
  private handleError(error) {
    console.log(error);
  }



}
