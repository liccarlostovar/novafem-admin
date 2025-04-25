"use client";

import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

const App = () => {
    const { user, signOut } = useAuthenticator();
    const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

    const listTodos = () => {
        // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items]),
        });
    };

    useEffect(() => {
        listTodos();
    }, []);

    const createTodo = () => {
        client.models.Todo.create({
            content: window.prompt("Todo content"),
            isDone: false,
        });
    };
    const deleteTodo = (id: string) => {
        client.models.Todo.delete({ id });
    };
    const updateTodo = (id: string, content: string) => {
        client.models.Todo.update({ id, content: window.prompt("Todo content", content) });
    };

    return (
        <main>
            <h1>{user?.signInDetails?.loginId}'s todos</h1>
            <button onClick={createTodo}>+ new</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div
                            style={{
                                display: "flex",
                                gap: 5,
                            }}>
                            <div style={{ flex: 1 }}>{todo.content}</div>
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() => updateTodo(todo.id, todo.content ?? "")}>
                                Edit
                            </div>
                            <div
                                style={{ cursor: "pointer" }}
                                onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                🥳 App successfully hosted. Try creating a new todo.
                <br />
                <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">Review next steps of this tutorial.</a>
            </div>
            <button onClick={signOut}>Sign out</button>
        </main>
    );
};

export default function Main() {
    return (
        <React.StrictMode>
            <Authenticator>
                <App />
            </Authenticator>
        </React.StrictMode>
    );
}
