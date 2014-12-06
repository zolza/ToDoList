var list = {
  tasks: [],

  add: function(task_name) {
    var item = $("<li></li>");
    item.text(task_name);
    $('#list').prepend(item);

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
