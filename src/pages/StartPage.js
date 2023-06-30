import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import StartButton from "./StartButton";

const style = {
    fontSize: 24,
}

const ContentDiv = styled.div`
  height: 200px;
  font-size: 36px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-name: opacity;
  animation-duration: 7000ms;

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default function StartPage() {
    return (
        <p>
            <ContentDiv>
                <p style={style}>
                    모임은 어르신들의 고독을 덜기 위한 사이트입니다. <br></br>
                    다른 어르신들과 쓰레기를 주우며 커뮤니티를 형성해 보아요.
                </p>
            </ContentDiv>
            <ContentDiv>
                <StartButton />
            </ContentDiv>
        </p>
    )
}