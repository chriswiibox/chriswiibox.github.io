$('#gombhozzaad').click(() => {
    
    $('#tennivalolista').append('<li class="todoelem"><div>'+$('#ujtennivalo').val()+'</div><div> <img src="ok.svg" alt="" class="okgomb"><img src="delete.svg" alt="" class="delgomb"></div></li>')
})

$('#tennivalolista').on("click", ".todoelem  .okgomb", function(event) {
    $(event.target).parent().parent().css('text-decoration', 'line-through')
    $(event.target).parent().parent().css('color', 'gray')
    $(event.target).attr("src","okgrey.svg")
  });

  $('#tennivalolista').on("click", ".todoelem .delgomb", function(event) {
    $(event.target).parent().parent().remove()    
  });