"use client"
import React from "react";
import './page.css';
import LoginForm from "../../components/login-form/LoginForm";

export default function Login(){
    return (
        <div className="login-container">
            <div className="form-container">
                <LoginForm />
            </div>
            <div className="login-content">

            </div>
        </div>

    );
}