// const newsGet = $.get('/api/news',(error, data)=>{
//     if(!data){
//         return alert("error");
//     }
//     state.news = data;
//     console.log(data);
// });
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
    console.log(state.news);

    const divHome =$(`<div class="news__img col-sm-12">
                              <img src="assets/img/news/${state.news[0].img} " alt="">
                              <h1>${state.news[0].title}</h1>
                              <h3>${state.news[0].brief}</h3>
                          </div>`);
    newsContainer.append(divHome);
    const rowImg = $(`<div class="row"></div>`);
    const divHome1 = $(`<div class="news__img col-sm-6">
                              <img src="assets/img/news/${state.news[1].img} " alt="">
                              <h1>${state.news[1].title}</h1>
                          </div>`);
    rowImg.append(divHome1);

    const divHome2 =$(`<div class="news__img col-sm-3">
                              <img src="assets/img/news/${state.news[2].img} " alt="">
                              <h1>${state.news[2].title}</h1>
                          </div>`);
    rowImg.append(divHome2);
    newsContainer.append(rowImg);

    return newsContainer;
}