import React, { useState, useEffect } from "react";

const main1 = {
    color: "white",
    fontSize: 128,
    fontWeight: 'bold',
    margin: 1,
  }
  
  const main2 = {
    color: "white",
    fontSize: 48,
    fontWeight: 'bold',
  }
  
export default function StartHeader() {
    return (
        <div className="App-header">
            <p style={main1}>
                MOIM
            </p>
            <p style={main2}>
                모임: 노인을 위한 나라는 있다
            </p>
        </div>
    )
}