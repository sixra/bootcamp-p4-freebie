import React, { useEffect, useState } from "react";
import HeroImage from "../../Components/Header/HeroImage"
import SearchBar from '../../Components/Header/SearchBar'
import { HiOutlineViewGrid } from "react-icons/hi"
import { HiViewList } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../Redux/Actions/AdsAction";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./Categories.scss"
import LoginModal from '../LoginLogout/LoginModal.js'
import RegisterModal from '../LoginLogout/RegisterModal.js'
import SingleAd from "./SingleAd";
import { showGridView, hideGridView } from "../../Redux/Actions/ListGridView"
import {
  FaMobile,
  FaTshirt,
  FaBriefcase,
  FaBabyCarriage,
  FaConciergeBell,
  FaHeart,
} from "react-icons/fa";
import { GiSofa, GiCarWheel, GiBookshelf, GiWatch } from "react-icons/gi";
import { IoPawSharp, IoTvSharp, IoSearchOutline } from "react-icons/io5";
import ReactPaginate from "react-paginate";

const Categories = () => {

  const loginModal = useSelector((state) => state.LoginModalState)

  const registerModal = useSelector((state) => state.RegisterModalState)

  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  const gridView = useSelector((state) => state.ListGridViewState)

  const showGrid = () => {
    dispatch(showGridView());
  };

  const hideGrid = () => {
    dispatch(hideGridView());
  };

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  const [pageNumber, setPageNumber] = useState(0)
  const postsPerPage = 4;
  const visitedPages = pageNumber * postsPerPage;

  const pageCount = Math.ceil(ads.length / postsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>
      <HeroImage height="30" minHeight="25" maxHeight="25" />
      <SearchBar />
      {loginModal && <LoginModal />}
      {registerModal && <RegisterModal />}
      <section className="categoriesPageContainer">
        <div className="categoriesAndSearchContainer">
          <div className="searchBarContainer">
            <input type="search" placeholder="Search..." />
            <IoSearchOutline size={20} />
          </div>
          <div className="categoriesContainer">
            <div>
              <span>all categories</span>
            </div>
            <div className="categoriesListsContainer">
              <ul>
                <li><GiCarWheel /> <span>vehicle Parts</span></li>
                <li><GiSofa /> <span>furnitures</span></li>
                <li><IoTvSharp /><span>electronics</span></li>
              </ul>
              <ul>
                <li><FaMobile /> <span>mobiles</span></li>
                <li><FaTshirt /> <span>clothing</span></li>
                <li><GiWatch /> <span>accessories</span></li>
              </ul>
              <ul>
                <li><FaBriefcase /> <span>jobs</span></li>
                <li><FaConciergeBell /> <span>services</span></li>
                <li><IoPawSharp /> <span>animals</span></li>
              </ul>
              <ul>
                <li><GiBookshelf /> <span>books</span></li>
                <li><FaBabyCarriage /> <span>baby products</span></li>
                <li><FaHeart /> <span>matrimony</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="infoTabAndproductsList">
          <div className="infoTabContainer">
            <span className="infoTabText">You are seeing total of {ads.length} ads.</span>
            <div className="gridListIconsContainer">
              <div>
                <HiOutlineViewGrid onClick={showGrid} size={30} />
              </div>
              <div>
                <HiViewList onClick={hideGrid} size={30} />
              </div>
            </div>
          </div>
          <div className="productsListContainer">
            {!ads.length ? (
              <LoadingSpinner />
            ) : (
              <div className={gridView ? "latestAdsContain" : null}>
                {ads.slice(visitedPages, visitedPages + postsPerPage).map((adInfo) => (
                  <SingleAd key={adInfo._id} adInfo={adInfo} />
                ))}
              </div>
            )}
            <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCount} onPageChange={changePage} containerClassName={"paginationBtn"} previousClassName={"previousPageBtn"} nextClassName={"nextPageBtn"} disabledClassName={"paginationDisabled"} activeClassName={"paginationActivePage"} />
          </div>
        </div>
      </section >


    </div >
  )
}

export default Categories
