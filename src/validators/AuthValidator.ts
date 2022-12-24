import { checkSchema } from "express-validator";

export const AuthValidator = {
    signup: checkSchema({
        name: {
            trim: true,
            isLength: {
                options: { min: 2 },
            },
            errorMessage: "Nome precisa ter pelo menos 2 caracteres",
        },
        lastname: {
            trim: true,
            isLength: {
                options: { min: 2 },
            },
            errorMessage: "Sobrenome precisa ter pelo menos 2 caracteres",
        },
        cellphone: {
            isString: true,
        },
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "E-mail inválido",
        },
        password: {
            isLength: {
                options: { min: 2 },
            },
            errorMessage: "Senha precisa ter pelo menos 2 caracteres",
        },
        isPazChurch: {
            isInt: true,
        },
        nameCity: {
            isString: true,
        },
        nameChurch: {
            isString: true,
        },
        id_state: {
            isInt: true,
        },
        id_city: {
            isInt: true,
        },
        id_church: {
            isInt: true,
        },
    }),
    signin: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "E-mail inválido",
        },
        password: {
            isLength: {
                options: {
                    min: 2,
                },
            },
            errorMessage: "Senha precisa ter pelo menos 2 caracteres",
        },
    }),
    forgot: checkSchema({
        email: {
            isEmail: true,
            normalizeEmail: true,
            errorMessage: "E-mail inválido",
        },
    }),
};
