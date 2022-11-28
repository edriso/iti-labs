//// Class
// class Person {
//   constructor(fullName, money, sleepHours, meals) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepHours = sleepHours;
//     this.meals = meals;
//   }

//   sleep() {
//     if (this.sleepHours > 7) {
//       return "Lazy";
//     } else if (this.sleepHours < 7) {
//       return "Tired";
//     } else {
//       return "Happy";
//     }
//   }

//   eat() {
//     if (this.meals === 3) {
//       return "Health rate is 100";
//     } else if (this.meals === 2) {
//       return "Health rate is 75";
//     } else if (this.meals === 1) {
//       return "Health rate is 50";
//     }
//   }

//   buy(itemNumber) {
//     return `Decrease ${itemNumber * 10} L.E`;
//   }
// }

// const ahmed = new Person("Ahmed Doe", 50, 8, 2);
// console.log(ahmed);

//// Constructor function
function Person(fullName, money, sleepHours, meals) {
  this.fullName = fullName;
  this.money = money;
  this.sleepHours = sleepHours;
  this.meals = meals;

  //   this.sleep = function () {
  //     if (this.sleepHours > 7) {
  //       return "Lazy";
  //     } else if (this.sleepHours < 7) {
  //       return "Tired";
  //     } else {
  //       return "Happy";
  //     }
  //   };

  //   this.eat = function () {
  //     if (this.meals === 3) {
  //       return "Health rate is 100";
  //     } else if (this.meals === 2) {
  //       return "Health rate is 75";
  //     } else if (this.meals === 1) {
  //       return "Health rate is 50";
  //     }
  //   };
}

Person.prototype.buy = function (itemNumber) {
  return `Decrease ${itemNumber * 10} L.E`;
};

//// TEMPORARY
Object.assign(Person.prototype, {
  sleep() {
    if (this.sleepHours > 7) {
      return "Lazy";
    } else if (this.sleepHours < 7) {
      return "Tired";
    } else {
      return "Happy";
    }
  },

  eat() {
    if (this.meals === 3) {
      return "Health rate is 100";
    } else if (this.meals === 2) {
      return "Health rate is 75";
    } else if (this.meals === 1) {
      return "Health rate is 50";
    }
  },
});

const ahmed = new Person("Ahmed Doe", 50, 8, 2);
console.log(ahmed);
console.log(ahmed.sleep());

//// OLOO "Object Linking to anOther Object"
// const Person = {
//   init(fullName, money, sleepHours, meals) {
//     this.fullName = fullName;
//     this.money = money;
//     this.sleepHours = sleepHours;
//     this.meals = meals;

//     this.sleep = function () {
//       if (this.sleepHours > 7) {
//         return "Lazy";
//       } else if (this.sleepHours < 7) {
//         return "Tired";
//       } else {
//         return "Happy";
//       }
//     };

//     this.eat = function () {
//       if (this.meals === 3) {
//         return "Health rate is 100";
//       } else if (this.meals === 2) {
//         return "Health rate is 75";
//       } else if (this.meals === 1) {
//         return "Health rate is 50";
//       }
//     };

//     this.buy = function (itemNumber) {
//       return `Decrease ${itemNumber * 10} L.E`;
//     };

//     return this;
//   },
// };

// const ahmed = Person.init("Ahmed Doe", 50, 8, 2);
// console.log(ahmed.buy(1));

//// Factory Function
// function Person(fullName, money, sleepHours, meals) {
//   return {
//     fullName,
//     money,
//     sleepHours,
//     meals,

//     sleep() {
//       if (this.sleepHours > 7) {
//         return "Lazy";
//       } else if (this.sleepHours < 7) {
//         return "Tired";
//       } else {
//         return "Happy";
//       }
//     },

//     eat() {
//       if (this.meals === 3) {
//         return "Health rate is 100";
//       } else if (this.meals === 2) {
//         return "Health rate is 75";
//       } else if (this.meals === 1) {
//         return "Health rate is 50";
//       }
//     },

//     buy(itemNumber) {
//       return `Decrease ${itemNumber * 10} L.E`;
//     },
//   };
// }

// const ahmed = Person("Ahmed Doe", 50, 8, 2);
// console.log(ahmed);
// console.log(ahmed.buy(1));
