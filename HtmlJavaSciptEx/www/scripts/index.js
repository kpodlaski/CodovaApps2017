$(document).ready(function () {
    $('#content').html("Ala ma kota");
    var htmlek = $('#content').html();
    $('#content').html(htmlek + " <b> AAA</b>");
    var size = 15;

    for (i = 0; i < size; i++) {
        var act = $('#buttony').html();
        $('#buttony').html(act +
            "<button id='button"
            + i +
            "' onclick='kliknieto()' >"
            + i +
            "</button>");
    }

    $("#my-btn").click(post);
});

function kliknieto() {
    //SOLVE FOR FIREFOX ??
    alert(event.srcElement.id);
    $("#" + event.srcElement.id).hide();
}

var toppos = 30;

function klik2() {
    //przesuń $("#my-btn") do góry/dołu o 20 px;
    toppos -= 30;
    $("#my-btn").css({'position' : 'absolute', 'top': toppos+'px' });
}

function post() {
    $.ajax({
        url: 'http://kprestap.azurewebsites.net/api/Authors/',
        type: 'GET', //POST,PUT,DELETE
        //data: 'twitterUsername=jquery4u',
        success: function (_data) {
            //called when successful
            alert("udało się");
        },
        error: function (e) {
            //called when there is an error
            alert(e.message);
        }
    });
}