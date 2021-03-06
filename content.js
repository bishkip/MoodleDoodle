function collapseContent(){
    var content = $( ".content" );

    content.each((i, Element)=>{
        var id = "collapse-"+i;

        var sectionname = Element.querySelector(".sectionname");
        $(sectionname).attr("data-toggle", "collapse");
        $(sectionname).attr('href', '#'+id);
        $(sectionname).attr("style", "cursor: pointer");
        
        $(sectionname).attr("onmouseover", "this.style.color='green'");
        $(sectionname).attr("onmouseout", "this.style.color='black'");

        var section = Element.querySelector(".section");
        $(section).addClass('collapse');
        $(section).attr('id', id);
    });
}

collapseContent();