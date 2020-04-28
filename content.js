function collapseContent(){
    $( ".content" ).each((i, Element)=>{
        var id = "collapse-"+i;

        var sectionname = Element.querySelector(".sectionname");
        $(sectionname).attr("data-toggle", "collapse");
        $(sectionname).attr('href', '#'+id);

        var section = Element.querySelector(".section");
        $(section).addClass('collapse');
        $(section).attr('id', id);
    });
}

collapseContent();