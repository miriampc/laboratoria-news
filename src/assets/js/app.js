"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    section.append(Header());
    section.append(NewsLab());
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
});
