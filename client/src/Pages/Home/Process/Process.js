import React from "react";
import "./Process.scss";
import { IoPeopleOutline } from "react-icons/io5";
import { FiCheckSquare } from "react-icons/fi";
import { GoThumbsup } from "react-icons/go";
import { Link } from "react-router-dom";

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
            <FiCheckSquare size={45} />
          </div>
          <div className="processInnerEachTitle">
            <span>Post Free Ad!</span>
          </div>
        </div>

        <div className="processInnerEachContainer">
          <div className="processInnerEachIcon">
            <GoThumbsup size={45} />
          </div>
          <div className="processInnerEachTitle">
            <span>Deal Done!</span>
          </div>
        </div>
      </div>
      <Link to="/auth">
        <button>Start Registration</button>
      </Link>
    </section>
  );
};

export default Process;
