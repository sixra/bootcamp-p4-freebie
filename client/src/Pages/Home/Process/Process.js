import React from "react";
import "./Process.scss";
import { IoPeopleOutline } from "react-icons/io5";
import { BsFolderCheck } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import {Link} from "react-router-dom";

const Process = () => {

  return (
    <section className="processContainer">
      <h2>How It Works?</h2>
      <div className="processInnerContainer">
        <div className="processInnerEachContainer">
          <div className="processInnerEachIcon">
            <IoPeopleOutline size={48} />
          </div>
          <div className="processInnerEachTitle">
            <span>Register!</span>
          </div>
        </div>

        <div className="processInnerEachContainer">
          <div className="processInnerEachIcon">
            <BsFolderCheck size={47}/>
          </div>
          <div className="processInnerEachTitle">
            <span>Post Free Ad!</span>
          </div>
        </div>

        <div className="processInnerEachContainer">
          <div className="processInnerEachIcon">
            <GoThumbsup size={47} />
          </div>
          <div className="processInnerEachTitle">
            <span>Deal Done!</span>
          </div>
        </div>
      </div>
      <Link to="/auth"><button>Start Registration</button></Link>
    </section>
  );
};

export default Process;
