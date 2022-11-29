class Employee {
  #salary;
  constructor(id, email, workMood, salary, isManager) {
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.isManager = isManager;
    this.#salary = salary >= 1000 ? salary : 1000;
  }

  get salary() {
    return this.#salary;
  }

  set salary(val) {
    this.#salary = val < 1000 ? 1000 : val;
  }

  #healthRate = 50;

  get healthRate() {
    return this.#healthRate;
  }

  set healthRate(rate) {
    this.#healthRate = rate < 0 || rate > 100 ? 50 : rate;
  }

  work(h) {
    if (h === 8) {
      return "Happy";
    } else if (h > 8) {
      return "Tired";
    } else if (h < 8) {
      return "Lucky";
    }
  }

  sleep(h) {
    if (h === 7) {
      return "Happy";
    } else if (h > 7) {
      return "Lazy";
    } else if (h < 7) {
      return "Tired";
    }
  }

  eat(meals) {
    if (meals === 3) {
      return "100 health rate";
    } else if (meals === 2) {
      return "75 health rate";
    } else if (meals === 1) {
      return "50 health rate";
    }
  }
}

const newbie = new Employee(1, "hello@gmail.com", "Happy", 5000, false);
// newbie.salary = 300;
// console.log(newbie.salary); // 1000

class OfficeEmployees extends Employee {
  getAllEmployees() {
    console.log("test");
  }
}

const office1 = new OfficeEmployees(2, "manager@gmail.com", "meh", 8000, true);
console.log(office1.salary);
