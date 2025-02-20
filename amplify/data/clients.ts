import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
    Client: a
        .model({
            identification: a.string().required(),
            firstName: a.string().required(),
            lastName: a.string().required(),
            email: a.email().required(),
            phoneNumber: a.phone(),
            address: a.string(),
            description: a.string(),
        })
        .authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "userPool",
        apiKeyAuthorizationMode: {
            expiresInDays: 30,
        },
    },
});
