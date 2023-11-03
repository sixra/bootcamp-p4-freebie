import React, { useEffect, useState } from "react";
import { HiOutlineViewGrid, HiViewList } from "react-icons/hi";
import { RiArrowDropDownFill, RiArrowDropUpFill } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { Filter } from "./Filter";
import "./Freebies.scss";
import SearchInput from "./SearchInput";
import SingleAd from "./SingleAd";

const Freebies = () => {
 const ads = useSelector((state) => state.allAds.filteredAds);
  const [gridToggle, setGridToggle] = useState(true);
  const [categoriesDropdown, setCategoriesDropdown] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const postsPerPage = 4;
  const visitedPages = pageNumber * postsPerPage;

  const pageCount = Math.ceil(ads.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const buttonHandler = () => {
    setGridToggle((current) => !current);
  };

  const dropdownHandler = () => {
    setCategoriesDropdown((current) => !current);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [ads]);

  return (
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
            <div className={gridToggle ? "latestAdsGrid" : "latestAdsColumn"}>
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
  );
};

export default Freebies;
