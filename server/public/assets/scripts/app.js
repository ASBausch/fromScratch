/**
 * Created by manadab on 1/5/16.
 */
//client side app.js

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "/cat",
        //matches get route on node one for one
        success : function(data){
            //data is whatever comes down from the server
            console.log(data);
        }
        //this just gets data not ness goes to a location
    });
});
