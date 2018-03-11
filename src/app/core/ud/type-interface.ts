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

export interface ExpenseInterface {
    id: string;
    uid: string;
    date: string;
    expenseType: string;
    description: string;
    amount: number;
    shares: number;
    payType: string;
    cardType: string;
}

export interface AddExpenseInterface {
    date: string;
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
