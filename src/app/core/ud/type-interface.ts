export interface UserInterface {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    firstName?: string;
    lastName?: string;
    defTab?: number;
    currency?: string;
    dasboardSummaryOrder?: string;
    daily?: {day: number, dayBal: number};
    weekly?: {week: number, weekBal: number};
    biweekly?: {biweek: number, biweekBal: number};
    monthly?: {month: number, monthBal: number};
    yearly?: {year: number, yearBal: number};
}

export interface NewUserInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserDefaultsInterface {
    defTab: number;
    currency: string;
    dashboardSummaryOrder: string;
}

export interface UserBalInterface {
    uid: string;
    daily?: {day: number, dayBal: number};
    weekly?: {week: number, weekBal: number};
    biweekly?: {biweek: number, biweekBal: number};
    monthly?: {month: number, monthBal: number};
    yearly?: {year: number, yearBal: number};
}

export interface TimeBalance {
    period: number;
    balance: number;
}

export interface ExpenseInterface {
    id: string;
    date: Date;
    expenseType: string;
    description: string;
    amount: number;
    shares: number;
    payType: string;
    cardType: string;
}

export interface AddExpenseInterface {
    date: Date;
    expenseType: string;
    description: string;
    amount: number;
    shares: number;
    payType: string;
    cardType: string;
}

export interface ExpenseType {
    expenseTypeId: number;
    uid: string;
    expenseType: string;
}

export interface PayType {
    cash: boolean;
    debitCard: boolean;
    creditCard: boolean;
}

export interface CardType {
    cardTypeId: number;
    uid: string;
    cardType: string;
}
