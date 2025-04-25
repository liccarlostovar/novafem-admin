"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();
const Clients = () => {
    const [clients, setClients] = useState<Array<Schema["Client"]["type"]>>([]);
    const listClients = () => {
        client.models.Client.observeQuery().subscribe({
            next: (data) => setClients([...data.items]),
        });
    };
    useEffect(() => {
        listClients();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div>Clients</div>
            <div>{JSON.stringify(clients)}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}>
                <Button variant="contained">Button</Button>
                <Button variant="outlined">Button</Button>
                <Button variant="text">Button</Button>
            </div>
        </div>
    );
};
export default Clients;
