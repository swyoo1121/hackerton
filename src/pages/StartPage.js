import React from "react";
import styled from '@emotion/styled';
import StartButton from "./StartButton";
import "./StartPage.css";

const style = {
    fontSize: 24,
    textAlign: "center",
    borderRadius: 20,
    margin: 0,
    padding: 40,
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
    color: "white",
    background: "rgba(0,101,123, 0.44)",
}

const ContentDiv = styled.div`
  height: 200px;
  font-size: 36px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-name: opacity;
  animation-duration: 3000ms;

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
        <div className="Start-page">
            <ContentDiv>
                <p style={style}>
                    <p style={{fontSize: 32, fontWeight: 'bold'}}>모임: 노인을 위한 나라는 있다 </p>
                    <br style={{height: 20}}></br>
                    <p style={{fontSize: 24, lineHeight: 2}}>
                    모임은 어르신들의 고독을 덜기 위한 사이트입니다. <br></br>
                    다른 어르신들과 쓰레기를 주우며 커뮤니티를 형성해 보아요.
                    </p>
                </p>
            </ContentDiv>
            <br style={{border:20}}></br>
            <ContentDiv>
                <StartButton />
            </ContentDiv>
        </div>
    )
}