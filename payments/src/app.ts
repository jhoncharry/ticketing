import express from "express";

import "express-async-errors";

import cookieSession from "cookie-session";

import { currentUser, errorHandler, NotFoundError } from '@jhoncs325org/common';
import { createChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
    cookieSession({
        signed: false,
        // secure: process.env.NODE_ENV !== "test"  // ONLY FOR DEV ENVIRONMENT OR HTTPS CONNECTION (CHECK IF IT'S WORKING IN HTTPS CONNECTIONS)
        secure: false // IN ORDER TO DISABLE HTTPS checking, CASUE I HAVE ONLY HTTP AT THE MOMENT AND COOKIES WORKS WITH HTTPS
    })
);

app.use(currentUser);
app.use(createChargeRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
})

app.use(errorHandler);

export { app };