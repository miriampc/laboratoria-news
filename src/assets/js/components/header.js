const Header = () => {
    const headerContainer = $(`<header class="header"></header>`);
    const nav = $(`<nav class="nav"></nav>`);
    const divMenu = $(`<div class="header__menuDesk hidden-xs">
                            <ul class="col-sm-10">
                                <li><img src="assets/img/menu.png" alt="">SECTIONS</li>
                                <li><img src="assets/img/search.png" alt="">SEARCH</li>
                              </ul>
                              <ul class="col-sm-2">
                                <li><img src="assets/img/fb.png" alt=""></li>
                                <li><img src="assets/img/tw.png" alt=""></li>
                                <li><img src="assets/img/in.png" alt=""></li>
                              </ul>
                       </div><hr class="hidden-xs">`);

    const logoHeader = $(`<div class="header__logo hidden-xs">
                            <img src="assets/img/logoicon.png" alt="">
                            <span>hora | <img src="assets/img/cloud.png" alt=""> 20°</span>
                          </div>`);

    nav.append(divMenu);
    nav.append(logoHeader);

    const menuMob= $(`<div class="header__menu-mobile show-xs">
                        <div class="logo col-xs-7"><img src="assets/img/logoicon.png" alt=""></div>
                        <div class="search col-xs-1"><img src="assets/img/menu.png" alt=""></div>
                      </div>`);
    headerContainer.append(nav);
    headerContainer.append(menuMob);
    return headerContainer;
}