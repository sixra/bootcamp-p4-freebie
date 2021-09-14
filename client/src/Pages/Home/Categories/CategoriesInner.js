import React from "react";
import "./CategoriesInner.scss";
import {
    FaMobile,
    FaTshirt,
    FaBriefcase,
    FaBabyCarriage,
    FaConciergeBell,
    FaHeart,
} from "react-icons/fa";
import { GiSofa, GiCarWheel, GiBookshelf, GiWatch } from "react-icons/gi";
import { IoPawSharp, IoTvSharp } from "react-icons/io5";

const CategoriesInner = () => {
    return (
        <section className="categoriesInnerContainer">
            <h2>Categories</h2>
            <span>Explore amazing freebies in your city</span>
            <div className="categoriesInnerListsContainer">
                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <GiCarWheel size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Vehicle Parts</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <GiSofa size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Furnitures</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <IoTvSharp size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Electronics</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaMobile size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Mobiles</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaTshirt size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Clothing</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <GiWatch size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Accessories</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaBriefcase size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Jobs</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaConciergeBell size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Services</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <IoPawSharp size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Animals</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <GiBookshelf size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Books</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaBabyCarriage size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Baby Products</button>
                    </div>
                </div>

                <div className="categoriesInnerEachListContainer">
                    <div className="categoriesInnerListIcon">
                        <FaHeart size={56} />
                    </div>
                    <div className="categoriesInnerListTitle">
                        <button>Matrimony</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesInner;
