/************** Class in Typescript **********************/

class User {
  email: string;
  name: string;
  readonly city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const arun = new User("arun@aj.com", "arun");
// arun.city = "Rohtak";  => not allowed
