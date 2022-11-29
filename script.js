class Employee {
  #salary;
  constructor(id, name, email, workMood, salary, isManager) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.workMood = workMood;
    this.#salary = salary >= 1000 ? salary : 1000;
    this.isManager = isManager;
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
    } else {
      return this.workMood;
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

  buy(itemNumber) {
    this.salary = this.salary - itemNumber * 10;
    return `Salary has decreased ${itemNumber * 10}L.E. Remaining ${
      this.salary
    }L.E.`;
  }

  allEmployees = [];

  setEmployee(person) {
    this.allEmployees.push(person);
  }
}

// const newbie = new Employee(1, "doe", "hello@gmail.com", "Happy", 5000, false);
// newbie.salary = 300;
// console.log(newbie.salary); // 1000

class OfficeEmployee extends Employee {
  constructor(id, name, email, workMood, salary, isManager) {
    super(id, name, email, workMood, salary, isManager);
    this.allEmployees.push(this);
  }

  getAllEmployees() {
    return this.allEmployees;
  }

  get(id) {
    let selected = this.allEmployees.find((elm) => elm.id == id);

    if (selected.isManager) {
      selected = { ...selected, salary: null };
    }

    return selected;
  }

  fire(empId) {
    this.allEmployees = this.allEmployees.filter((elm) => elm.id != empId);

    return this.allEmployees;
  }

  hire(emplo) {
    this.allEmployees.push(emplo);
    console.log(this.allEmployees);
  }
}

const ceo = new OfficeEmployee(
  2,
  "doe",
  "manager@gmail.com",
  "meh",
  8000,
  true
);
// console.log(ceo.salary);
// console.log(ceo.fire(2));

const app = () => {
  const operation = prompt(
    "Type an operation from the following:\n'add' to add new employee,\n'get' to get employee's data,\n'fire' to fire an employee,\nor 'q' to quit the app."
  );

  if (operation === null || operation === "q") {
    return;
  }

  switch (operation.toLowerCase()) {
    case "add":
      const type = prompt(
        "Type 'mngr' in case you are a manager, and 'nrml' in case a normal employee"
      );

      if (type.toLowerCase() !== "mngr" || type.toLowerCase() !== "nrml") {
        alert("Wrong input!");
        app();
      } else {
        let name = prompt("What's your name?");
        let email = prompt(" What's your email?");

        new OfficeEmployee(
          new Date().valueOf(),
          name,
          email,
          "frustrated",
          "",
          type.toLowerCase() === "mngr" ? true : false
        );

        // let newEmployee = {
        //   id: new Date().valueOf(),
        //   name,
        //   email,
        //   workMood: "frustrated",
        //   salary: "",
        //   isManager: type === "mngr" ? true : false,
        // };

        // ceo.hire(newEmployee);

        alert("Welcome on board, " + name + "!");
      }

      break;
    case "get":
      let empId = prompt("Type employee's id");
      console.log(ceo.get(empId));
      break;
    case "fire":
      let id = prompt("Type employee's id");
      console.log(ceo.fire(id));
      break;
    default:
      app();
  }
};

app();
