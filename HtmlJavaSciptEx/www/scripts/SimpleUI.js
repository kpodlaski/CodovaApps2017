var data

function showContent(s, sub) {
    if (sub == -1) $('sub_container').hide();
    else $('sub_container').show();
    if (s == 1){
        $('#main_container').html(data.Sekcja1.main);
        if (sub='a')
            $('#sub_container').html(data.Sekcja1.subsec.a.content);
        if (sub = 'b')
            $('#sub_container').html(data.Sekcja1.subsec.b.content);
    }
    else if (s==2) {
        $('#main_container').html( data.Sekcja2.main);
    }
}


$(document).ready(function () {
    $.getJSON("data/data.json", function (_data) {
        data = _data;
        alert(data.Sekcja1.main);
    });

    
});

