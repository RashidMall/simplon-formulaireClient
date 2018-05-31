$(document).ready(function(){
    var myjson;

    //Get JSON and fill select form with clients' names
    $.getJSON("https://api.myjson.com/bins/ojvoe", function(data){
        myjson = data; //Save json 
        $.each(data, function(index){
            $('#clients-list').append('<option value="' + index + '">' + data[index].nom + '</option>');
        });
    });

    //When one of the clients in the list is selected set his information on the page
    $('#clients-list').on('change', function(){
        let index = this.value;

        $('#client').html('<h2>Formulaire Client.</h2>' +
                        '<p id="client__' + myjson[index].nom + '">Nom : ' + myjson[index].nom + '</p>' +
                        '<p id="client__' + myjson[index].prenom + '">Prénom : ' + myjson[index].prenom + '</p>' +
                        '<p id="client__' + myjson[index].age + '">Age : ' + myjson[index].age + '</p>' +
                        '<p id="client__' + myjson[index].profession + '">Profession : ' + myjson[index].profession + '</p>' +
                        '<p id="client__' + myjson[index].email + '">@email : ' + myjson[index].email + '</p>' +
                        '<p id="client__' + myjson[index].telephone + '">Téléphone : ' + myjson[index].telephone + '</p>');
    });
});