interface User {
  readonly dbId: number;
  userId: number;
  googleId?: string;
  email: string;
  // startTrial: () => string,
  startTrial(): string; // personal choice
  getCoupon(couponId: number): number;
}

// Q: Difference between type and interface:

// 1. We can reopen interface to add further more types
interface User {
  githubToken: string;
}

// 2. interfaces can be inherit (extends)
interface Admin extends User {
  role: "Admin" | "User" | "Manager" | "TA";
}

const user: Admin = {
  email: "a@a.com",
  userId: 123,
  dbId: 123,
  startTrial: () => {
    return "should be string";
  },
  getCoupon(couponId) {
    return 1234 + couponId;
  },
  githubToken: "githubtoken",
  role: "Admin",
};
