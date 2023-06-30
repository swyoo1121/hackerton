import React from "react";
import "./StartHeader.css";    

const main1 = {
    color: "white",
    marginTop: 10,
    marginBottom: 100,
    fontSize: 108,
    fontWeight: 'bold',
    textShadow: '1px 2px 9px #000000',
}

export default function StartHeader() {
    return (
        <div class = "Start-header">
            <p style={main1}>
                MOIM
            </p>
        </div>
    )
}