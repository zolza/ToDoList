var list = {
  tasks: [],

  add: function(task_name) {
    var item = $("<li></li>");
    var checkbox = $("<input type='checkbox'>");
    item.append(checkbox);
    item.append(task_name);
    $('#list').prepend(item);

    $("#list li").on('click', 'input', function(){
      var checked = $(this).prop('checked');
      if (checked) {
        $(this).parent().css('text-decoration', 'line-through');
      } else {
        $(this).parent().css('text-decoration', 'none');
      }

    });

    var task = {
      name: task_name,
      completed: false
    };

    this.tasks.push(task);
  }
};


$(document).ready(function() {
  $('input').on('keydown', function(event) {
    if (event.keyCode == 13) {
      var task_name = $('input').val();
      list.add(task_name);
      $('input').val("");
    }
  });
});
