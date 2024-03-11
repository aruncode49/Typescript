"use strict";
const user = {
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
