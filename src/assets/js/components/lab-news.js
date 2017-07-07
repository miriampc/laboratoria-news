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
    getNews(1);
    const divHome =$(`<div class="news__img1 col-sm-12">
                              <img src="assets/img/news/${state.news.img} " alt="">
                              <h1>${state.news.title}</h1>
                              <h3>${state.news.brief}</h3>
                          </div>`);
    newsContainer.append(divHome);

    getNews(2);
    const divHome =$(`<div class="news__img2 col-sm-12">
                              <img src="assets/img/news/${state.news.img} " alt="">
                              <h1>${state.news.title}</h1>
                              <h3>${state.news.brief}</h3>
                          </div>`);
    newsContainer.append(divHome);

    return newsContainer;
}