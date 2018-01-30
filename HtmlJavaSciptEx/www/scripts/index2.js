function get() {
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

var nobiekt = {
    "Name": "Adam",
    "Surname": "Mickiewicz",
    "Sname": "A. Mickiewicz"};
function post() {
    $.ajax({
        url: 'http://kprestap.azurewebsites.net/api/Authors/',
        type: 'POST',
        data: JSON.stringify(nobiekt),
        dataType: "json",
		contentType: "application/json; charset=utf-8",
        success: function (_data) {
            //called when successful
            alert(JSON.stringify(_data));
        },
        error: function (e) {
            //called when there is an error
            alert(JSON.stringify(e));
        }
    });
	

}