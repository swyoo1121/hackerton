import React from "react";
import StartHeader from "../components/StartHeader";

const style = {
    fontSize: 24,
}

export default function LoginPage() {
    return (
        <div>
            <StartHeader />

            <p style={style}>
                로그인!
            </p>
        </div>

    )
}