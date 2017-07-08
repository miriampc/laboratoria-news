"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    section.append(Header());
    section.append(NewsLab());
    section.append(Footer());
    root.append(section);
};
const state = {
    news : null,
    header: null,
    newSelected : null
};

$( _ => {
        $.get('/api/news/', (data) => {
            if (!data) {
                return alert("error");
            }
            state.news = data;
            console.log(state.news);
            const root = $('#root');
            render(root);
        });
        const categories = () =>{
            return $.get('/api/categories/', (data) => {
                if (!data) {
                    return alert("error");
                }
                state.categories = data;
                console.log(state.categories);
            });
        }
});
