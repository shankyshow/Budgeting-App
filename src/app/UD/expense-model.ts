export class ExpenseModel {
    expId: number;
    uid: string;
    date: number;
    expenseType: string;
    desc: string;
    amount: number;
    shares: number;
    payType: string;
    cardType: string;
}

export class ExpenseType {
    expenseTypeId: number;
    uid: string;
    expenseType: string;
}

export class PayType {
    cash: boolean;
    debitCard: boolean;
    creditCard: boolean;
}

export class CardType {
    cardTypeId: number;
    uid: string;
    cardType: string;
}

export const expenses: ExpenseModel[] = [];
