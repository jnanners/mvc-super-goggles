const {User} = require("../models");

const userData = [
    {
        username: "Bloggerboy",
        email: "email1@fake.com",
        password: "password"
    },
    {
        username: "Bloggergirl",
        email: "email2@fake.com",
        password: "password"
    },
    {
        username: "Bloggermom",
        email: "email3@fake.com",
        password: "password"
    },
    {
        username: "Bloggerdad",
        email: "email4@fake.com",
        password: "password"
    },
    {
        username: "Bloggerson",
        email: "email5@fake.com",
        password: "password"
    },
    {
        username: "Bloggerdaughter",
        email: "email6@fake.com",
        password: "password"
    },
    {
        username: "Bloggeraunt",
        email: "email7@fake.com",
        password: "password"
    },
    {
        username: "Bloggeruncle",
        email: "email8@fake.com",
        password: "password"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;