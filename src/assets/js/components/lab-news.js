function createElements(colContainer,colImg,colTitle,numImg) {
    const divImg = $(`<div class="news__img col-sm-${colContainer}">
                              <div class="col-sm-${colImg}"><img src="assets/img/news/${state.news[numImg].img} " alt=""></div>                              
                              <div class="col-sm-${colTitle}"><h4>${state.news[numImg].title}</h4></div>                              
                      </div>`);
    return divImg;
}

const NewsLab = () => {
    const newsContainer = $('<section class="news"></section>');

    const divMenu = $(`<div class="news__menu col-sm-12">
                            <ul>
                                <li>Lo último</li>
                                <li>Opinión</li>
                                <li>Cultura</li>
                                <li>Perú</li>
                                <li>Tecnología</li>
                                <li>Mundo</li>
                                <li>Economía</li>
                                <li>LifeStyle</li>
                                <li>Deporte</li>
                              </ul>
                       </div>`);
    newsContainer.append(divMenu);

    const divHome = $(`<div class="news__img col-sm-12">
                              <img src="assets/img/news/${state.news[0].img} " alt="">
                              <div class="col-sm-12">
                                  <h1>${state.news[0].title}</h1>
                                  <h3>${state.news[0].brief}</h3>
                              </div>
                          </div>`);
    newsContainer.append(divHome);


    const row1 = $(`<div class="row col-sm-12"></div>`);
    row1.append(createElements(6,12,12,1));
    row1.append(createElements(3,12,12,2));
    row1.append(createElements(3,12,12,3));

    newsContainer.append(row1);

    const world = $(`<h2 class="col-sm-12">Mundo</h2>`);
    newsContainer.append(world);

    const row2 = $(`<div class="row col-sm-12"></div>`);
    const row2Item = $(`<div class="col-sm-6"></div>`);
    row2.append(createElements(3,12,12,4));
    row2Item.append(createElements(6,12,12,5));
    row2Item.append(createElements(6,12,12,6));
    row2Item.append(createElements(12,5,7,8));
    row2Item.append(createElements(12,5,7,9));
    row2.append(row2Item);
    row2.append(createElements(3,12,12,7));
    newsContainer.append(row2);

    const row3 = $(`<div class="row col-sm-12"></div>`);
    for(let i=10;i<14;i++){
        row3.append(createElements(3,12,12,i));
    }
    newsContainer.append(row3);

    const tech = $(`<h2 class="col-sm-12">TECNOLOGÍA</h2>`);
    newsContainer.append(tech);

    const row4 = $(`<div class="row col-sm-12"></div>`);
    row4.append(createElements(6,12,12,14));

    const row4Item = $(`<div class="col-sm-6"></div>`);
    row4Item.append(createElements(6,12,12,15));
    row4Item.append(createElements(6,12,12,16));
    row4Item.append(createElements(12,5,7,17));
    row4Item.append(createElements(12,5,7,18));
    row4.append(row4Item);

    newsContainer.append(row4);

    const education = $(`<h2 class="col-sm-12">EDUCACIÓN</h2>`);
    newsContainer.append(education);

    const row5 = $(`<div class="row col-sm-12"></div>`);
    const row5Item1 = $(`<div class="col-sm-6"></div>`);
    const row5Item2 = $(`<div class="col-sm-6"></div>`);
    row5Item1.append(createElements(6,12,12,19));
    row5Item1.append(createElements(6,12,12,20));
    row5Item1.append(createElements(12,5,7,23));
    row5Item2.append(createElements(6,12,12,21));
    row5Item2.append(createElements(6,12,12,22));
    row5Item2.append(createElements(12,5,7,23));
    row5.append(row5Item1);
    row5.append(row5Item2);
    newsContainer.append(row5);

    const opinion= $(`<h2 class="col-sm-12">OPINIÓN</h2>`);
    newsContainer.append(opinion);


    const row6 = $(`<div class="row col-sm-12"></div>`);
    for(let i=24;i<28;i++){
        row6.append(createElements(3,12,12,i));
    }
    newsContainer.append(row6);

    const row7 = $(`<div class="row col-sm-12"></div>`);
    for(let i=28;i<32;i++){
        row7.append(createElements(3,12,12,i));
    }
    newsContainer.append(row7);

    return newsContainer;
};