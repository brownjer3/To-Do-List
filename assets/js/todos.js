// Gray out items that have been clicked
$('ul').on('click', 'li', function() {
  $(this).toggleClass('done');
});

// Items are deleted when X icon is clicked
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function(){
  	$(this).remove();
  })
   event.stopPropagation();
});

// Take input value, add to list, and clear input
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
  	let newItem = $(this).val();
  	$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + newItem + "</li>");
  	$(this).val("");
  }
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
})