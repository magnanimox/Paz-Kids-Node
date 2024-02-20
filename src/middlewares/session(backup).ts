import session from "express-session";

var hour = 3600000;

export const sessionConfigs = session({
    name: "pazkids-session",
    cookie: {
        path: "/",
        maxAge: hour * 48,
    },
    secret: "$2y$10$EyRoSbN1wRqLrEQV9TzR0uk8w/TZX1DdyO7wGYW2eWhSVuW2DbmEG",
});
