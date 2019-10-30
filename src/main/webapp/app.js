
function addEmployee(event){
	//event.preventDefault();
	var $form = $("#employee-form");
	var json = toJson($form);

	alert("adding employee");


	return false;

	$.ajax({
	   url: './api',
	   type: 'POST',
	   data: json,
	   success: function(response) {
	   		alert("Employee created");	     //...
	   },
	   error: function(){
	   		alert("En error has occurred");
	   }
	});

	return false;
}


function toJson($form){
    var serialized = $form.serializeArray();
    console.log(serialized);
    var s = '';
    var data = {};
    for(s in serialized){
        data[serialized[s]['name']] = serialized[s]['value']
    }
    var json = JSON.stringify(data);
    console.log(json);
    return json;
}

function init(){
	$('#add-employee').click(addEmployee);
}


$(document).ready(init);
