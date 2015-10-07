$(function(){
    $.ajax({
        type:"GET",
        url: "/assignment/getAssignment",
        success: function(data){
            console.log(data);
            for(var i = 0; i < data.length; i++) {
                if(data[i].assignment_number == 1){
                $(".assignmentOne").append(" " + data[i].student_name + " ");
                }
            }

                //$(".showAssignments").append("<p>This is assignment #" + data[i].assignment_number + " </p> <p> Assignment was completed by " + data[i].student_name + " on " + data[i].date_completed + "</p><p>If you must know their score is..." + data[i].score + "</p><br>");
                //}
            }
    });
    $("#inputForm").submit(function(event){
        event.preventDefault();
        var formData = $("#inputForm").serialize();
        $.ajax({
            type:"POST",
            url: "/assignment/addAssignment",
            data: formData,
            success: function(response){
                console.log('Success!');
                getData();
            }
        });
    });

    function getData(){
        $.ajax({
            type:"GET",
            url: "/assignment/getAssignment",
            success: function(data){
                console.log(data);
            }
        })
    }
});


