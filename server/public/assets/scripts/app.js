/**
 * Created by manadab on 1/5/16.
 */
//client side app.js

$(document).ready(function(){
    //look for a submit event
    $('#catform').on('submit', submitCats);
    //if you call the function right away when you use (),
    //you don't want to do () or it runs immediately
    //extracted function
});

function submitCats(event){
    //captures the event its self especially for repeated events
    //what caused the event? the submit action at this point
    event.preventDefault();

    var catObject = {};
    catObject.username = $('#username').val();
    //pull data out of form
    //since you prevented default you need to pull the data

    $.ajax({
        type: "POST",
        data: catObject,
        url: "/cat",
        //matches get route on node one for one
        success: function (data){
        //data is whatever comes down from the server
            fetchCats();

    //call here after the most recent data

    //this just gets data not ness goes to a location
        }
    });

}


function fetchCats(){
    $.ajax({
        type:"GET",
        url: "/cat",
        //matches get route on node one for one
        success : function(data){
            //data is whatever comes down from the server
            appendDom(data);
        }
        //this just gets data not ness goes to a location
    });

}

function appendDom(data){
    $('#container').empty();
    for(var i= 0; i < data.length; i++) {
        $('#container').append('<div></div>');
        var $el = $("#container").children().last();
        //targeting element through jQuery always after the last one
        $el.append("<p>" + data[i].username + "</p>");
        //grab first index of the data array and append it
    }
}

//we would need bodyparser to actually read this data in an easier way


