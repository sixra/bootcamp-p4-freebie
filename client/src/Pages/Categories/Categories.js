import React, { useState, useEffect } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { HiViewList } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import "./Categories.scss";
import SingleAd from "./SingleAd";
import ReactPaginate from "react-paginate";
import { Filter } from "./Filter";
import SearchInput from "./SearchInput";
import { RiArrowDropDownFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
//import { getAds } from "../../Redux/Actions/AdsAction";
import PathBanner from "../../Components/PathBanner/PathBanner";

const Categories = () => {
  const ads = useSelector((state) => state.allAds.filteredAds);
 // const dispatch = useDispatch();

  const [gridToggle, setGridToggle] = useState(true);
  const buttonHandler = () => {
    setGridToggle((current) => !current);
  };

  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const dropdownHandler = () => {
    setCategoriesDropdown((current) => !current);
  };

    //  useEffect(() => {
    //   dispatch(getAds());
    // }, [dispatch]); 

  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 4;
  const visitedPages = pageNumber * postsPerPage;

  const pageCount = Math.ceil(ads.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <PathBanner />
      <section className="categoriesPageContainer">
        <div className="categoriesAndSearchContainer">
          <SearchInput
            placeholder="Search..."
            data={ads}
            searchBarStyle="searchBarContainer"
          />
          <div className="categoriesContainer">
            <div className="titleAndDropdownContainer">
              <span>search by category</span>
              <div onClick={dropdownHandler} className="categoryDropdownArrow">
                {categoriesDropdown ? (
                  <RiArrowDropUpFill size={40} />
                ) : (
                  <RiArrowDropDownFill size={40} />
                )}
              </div>
            </div>
            <div
              className="categoriesListsContainer"
              id={
                categoriesDropdown
                  ? "showCategoryDropdown"
                  : "hideCategoryDropdown"
              }
            >
              <Filter />
            </div>
          </div>
        </div>
        <div className="infoTabAndproductsList">
          <div className="infoTabContainer">
            <span className="infoTabText">
              You are seeing total of {ads.length} ads.
            </span>
            <div className="gridListIconsContainer">
              <div>
                {gridToggle ? (
                  <HiViewList onClick={buttonHandler} size={30} />
                ) : (
                  <HiOutlineViewGrid onClick={buttonHandler} size={30} />
                )}
              </div>
            </div>
          </div>
          <div className="productsListContainer">
            {!ads.length ? (
              <LoadingSpinner />
            ) : (
              <div className={gridToggle ? "latestAdsContain" : null}>
                {ads
                  .slice(visitedPages, visitedPages + postsPerPage)
                  .map((adInfo) => (
                    <SingleAd
                      key={adInfo._id}
                      adInfo={adInfo}
                      gridToggle={gridToggle}
                    />
                  ))}
              </div>
            )}
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtn"}
              activeClassName={"paginationActivePage"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
