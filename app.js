let list = [];

function displayArray(){
  let array = [];
  var i = 0;
  do{
    array.push(list[i].path);
    i++;
  }
  while(i < list.length);
  $( "#todo" ).html("<strong>To Do:</strong><br><br>");
  $( "#todo" ).append(array.join("<br>"));
}

function finishTask(task){
  let item = task + "<br>";
  $( "#done" ).append(item);
}

function removeTask(value) {
  finishTask(list[value].name);
  var i = value;
  var j = list.length;

  if (j > 1) {

    do {
      console.log(list[i].name + " was " + list[i].index);
      list[i].index--;
      list[i].path = "<a href='javascript:void(0)' onclick='removeTask(\"" +
        list[i].index + "\")'>" + list[i].name + "</a>"
      i++;
    }
    while (i < j);
    list.splice(value, 1);
    displayArray();
  } else {
    list = [];
    $( "#todo" ).html("<strong>To Do:</strong><br><br>All done!");
  }
}

function addTask(){
  let task = {index:0,name:""};
  let field = $( "#task" );
  task.name = field.val();
  task.index = list.length;
  task.path = "";
  list.push(task);

  task.path = "<a href='javascript:void(0)' onclick='removeTask(\"" + 
      task.index + "\")'>" + task.name + "</a>";
  console.log(task.path);
  
  field.val("");
  
  displayArray();
  
}

$( document ).ready(function(){
  console.log("Ready!");
  $( "#box" ).append("<button onclick='addTask()'>Add Task</button>");
});
