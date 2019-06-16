import React from "react";

const wideNavigation = () => {
    return <header id="mainHeader">
    <nav id="navigationWrapper">
        <div id="logoWrapper">
            <a className="logo" href="#">
                Knight
            </a>
        </div>
        <div id="navWrapper">
            <ul id="mainNavigation">
                <li className="mainLi">
                    <a className="mainLinks" href="#">Home</a>
                </li>
                <li className="mainLi dropDownParent">
                    <a className="mainLinks" href="#">Watches</a>
                    <div id="subMenuWrapper">
                        <h2 id="subMenuTitle">Our Series</h2>
                        <ul id="subMenu">
                            <div id="rowWatchContainerWrapper">
                                <div className="rowWatchContainer">
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Midnight</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Eclipse</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Raven</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Crusader</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />King</a></li>
                                </div>
                                <div className="rowWatchContainer">
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Midnight</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Eclipse</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Raven</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />Crusader</a></li>
                                    <li className="subLis"><a className="subLinks" href="#"><img
                                                src="watch3.png" />King</a></li>
                                </div>
                            </div>

                            <div className="categorySection">
                                <a className="categoryImageLink mens" href="#">
                                    <div className="categoryImage mens">Mens</div>
                                </a>
                                <a className="categoryImageLink womens" href="#">
                                    <div className="categoryImage womens">Womens</div>
                                </a>
                            </div>
                        </ul>
                    </div>

                </li>
                <li className="mainLi">
                    <a className="mainLinks" href="#">About</a>
                </li>
                <li className="mainLi">
                    <a className="mainLinks" href="#">Contact</a>
                </li>
                <li className="searchBarItem">
                    <i id="mainSearchLink" className="fas fa-search"></i>
                </li>

                <li className="searchBarItem">
                    <i id="shoppingCart" className="fas fa-shopping-cart"></i>
                </li>
                <div id="searchContainer">
                    <form id="searchForm" action="https://dylansieren.com" method="get">
                            <input id="searchBar" placeholder="Search" type="text" />
                            <div id="clearSearchBarButton" alt="CLEAR"><i className="far fa-times-circle"></i></div>
                            <button id="searchButton" type="submit"><i id="searchIcon" className="fas fa-search"></i></button>
                    </form>
                </div>
            </ul>
        </div>
    </nav>
</header>
}
export default wideNavigation;