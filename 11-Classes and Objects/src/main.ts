/************** Classes in Typescript **********************/

// class User {
//   public email: string;
//   private name: string; // only accessible with in the class (# in js for private eg: #name)
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// other way
class User {
  private _courseCount = 1; // default value, can't access and manipulate outside the class, we need getter and setter for that!

  readonly city: string = "";
  constructor(
    public email: string,
    public name: string // public userId: string
  ) {}

  get getGoogleEmail(): string {
    return `google${this.email},`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    this._courseCount = courseNum;
  }
}

const arun = new User("arun@aj.com", "arun");
const city = arun.city; // we can access it but can't modify it

// getter
const courseCount = arun.courseCount;

// setter
arun.courseCount = 5;

// NOTE :: no open parenthesis required for using getter and setter
