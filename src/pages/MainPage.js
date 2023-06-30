import React from "react";
import StartHeader from "../components/StartHeader";

const style = {
    fontSize: 24,
}

export default function MainPage() {
    return (
        <div>
            <StartHeader />

            <p style={style}>
            메 인 페 이 지
            </p>
        </div>

    )
}