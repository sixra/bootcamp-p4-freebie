import React from "react";
import "./Process.scss";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoMdThumbsUp } from "react-icons/io";

const Process = () => {
    return (
        <section className="processContainer">
            <h2>How It Works?</h2>
            <div className="processInnerContainer">
                <div className="processInnerEachContainer">
                    <div className="processInnerEachIcon">
                        <FaUsers size={48} />
                    </div>
                    <div className="processInnerEachTitle">
                        <span>Register!</span>
                    </div>
                </div>

                <div className="processInnerEachContainer">
                    <div className="processInnerEachIcon">
                        <RiAdvertisementFill size={48} />
                    </div>
                    <div className="processInnerEachTitle">
                        <span>Post Free Ad!</span>
                    </div>
                </div>

                <div className="processInnerEachContainer">
                    <div className="processInnerEachIcon">
                        <IoMdThumbsUp size={48} />
                    </div>
                    <div className="processInnerEachTitle">
                        <span>Deal Done!</span>
                    </div>
                </div>
            </div>
            <button>
              Start Registration
            </button>
        </section>
    );
};

export default Process;
