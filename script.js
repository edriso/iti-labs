class Account {
    accNo;
    balance;
    constructor(accNo, balance) {
        this.accNo = accNo;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() {
        return this.balance;
    }
}
class CurrentAccount extends Account {
    openingDate = new Date().toLocaleString();
    addCustomer() {
        return "customer added!";
    }
    removeCustomer() {
        return "customer removed!";
    }
    constructor(accNo, balance = 0, interestRate) {
        super(accNo, balance);
    }
}
class SavingAccount extends Account {
    openingDate = new Date().toLocaleString();
    addCustomer() {
        return "customer added!";
    }
    removeCustomer() {
        return "customer removed!";
    }
    constructor(accNo, balance = 0, minBalance) {
        super(accNo, balance);
    }
}
