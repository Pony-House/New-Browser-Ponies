jQuery("body").append(jQuery("<div>", {id: "scrollup", class: "glyphicon glyphicon-arrow-up"}).click(
function(){ jQuery("html, body").animate({ scrollTop: 0 }, "slow");}).affix({offset:{top: 575}}));