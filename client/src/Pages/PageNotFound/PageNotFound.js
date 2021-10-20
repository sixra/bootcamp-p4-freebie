import React, { useEffect, useState } from 'react'
import "./PageNotFound.scss"
import Snake from 'react-simple-snake'
import GlitchText from 'react-glitch-effect/core/GlitchText';
import { Link } from "react-router-dom"
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';
import SnakeGif from "./snake-completed.gif"

function PageNotFound() {
  const [isDisabled, setDisabled] = useState(false);

  const onKeyDown = (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown, false);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="pageNotFoundContainer">
      <div className="pageNotFoundTitleContainer">
      <div>
         <GlitchText className="pageNotFoundGlitchTitle" component='h1' disabled={isDisabled}>
            404
          <br/>
            PAGE NOT FOUND
            <br/>
            Go back to 
            <Link className="pageNotFoundGlitchLink" to="/"> Home </Link> 
             Page
             <br/>
         </GlitchText>
     </div>
     <br/>
      <p>or you can play this game (not suitable for devices with touch screen)</p>
      <p>To be able to move use the arrows <AiOutlineArrowUp /> <AiOutlineArrowLeft /> <AiOutlineArrowDown /> <AiOutlineArrowRight /> OR W(up) A(left) S(down) D(right) </p>
      </div>
      <div className="pageNotFoundGameContainer">
        <div>
        <Snake percentageWidth="80" snakeColor="#3b3b3b" appleColor="#e0156d"/>
      <div className="scoreContainer" >
      </div>
      </div>
      </div>
    </div>
  )
}

export default PageNotFound
