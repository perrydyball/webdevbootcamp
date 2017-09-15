//Change todo
//Use click listeners on the whole <ul> but use "on" so that new <li> items also get a click listener
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

//Delete todo (by clicking the X that is in a <span>
//Again use "on" so that new <span> items in the parent <ul> also get a click listener
//Use the "event" handle to stop event bubbling - i.e. stop event on parent objects (ul/#container/body) from firing
$("ul").on("click", "span", function(event){
  // as the span has a parent li that is the element we want to fade and remove we refer to .parent()
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  })
  event.stopPropagation();
})

//Add todo
$("input[type='text']").keypress(function(event){
  //When user presses enter add a todo
  if (event.which === 13){
    //Grab input
    var todoText = $(this).val();
    //Clear the input field
    $(this).val("");
    //Create a new li using append
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
})

