class Account {
  constructor(public accNo: number, public balance: number) {}

  debitAmount() {}
  creditAmount() {}
  getBalance() {
    return this.balance;
  }
}

interface IAccount {
  openingDate: string;
  addCustomer(): string | boolean;
  removeCustomer(): string | boolean;
}

class CurrentAccount extends Account implements IAccount {
  openingDate: string = new Date().toLocaleString();
  addCustomer() {
    return "customer added!";
  }
  removeCustomer() {
    return "customer removed!";
  }
  constructor(accNo: number, balance = 0, interestRate: number) {
    super(accNo, balance);
  }
}

class SavingAccount extends Account implements IAccount {
  openingDate: string = new Date().toLocaleString();
  addCustomer() {
    return "customer added!";
  }
  removeCustomer() {
    return "customer removed!";
  }
  constructor(accNo: number, balance = 0, minBalance: number) {
    super(accNo, balance);
  }
}
