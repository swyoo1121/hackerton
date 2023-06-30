import React from "react";
import StartHeader from "../components/StartHeader";
import './MyPage.css';

const style = {
    fontSize: 24,
}

export default function MyPage() {
    return (
        <div>
            <StartHeader />

            <p style={style}>
            메 인 페 이 지
            </p>
        </div>

    )
}