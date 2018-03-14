
$(document).ready(function() {
  
  var $scrollContainer = $("#sidebar");
  if($scrollContainer == null) 
    return;
  var $navContainer = $("#navigation");
  if($navContainer == null) 
    return;
  
  $scrollContainer.find('a').click(function (e) {
      var $href = $(e.currentTarget).attr("href");
      if($href == null)
        return;
      localStorage.setItem("href", $href);
  });

  $navContainer.find('a').click(function (e) {
      var $href = $(e.currentTarget).attr("href");
      if($href == null)
        return;
      localStorage.setItem("href", $href);
  });
  
  
  var $href = localStorage.getItem("href");
  if($href == null) 
    return;
  var ele = document.getElementById($href);
  if(ele == null) 
    return;
  var $li = $(ele);
  if($li == null) 
    return;
  
  $scrollContainer.animate({
    scrollTop: $li.position().top - 68
  }, 68);
  
  
});

