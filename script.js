$(function() {

    /*API URI*/
    var url = 'https://restcountries.eu/rest/v2/region/';

    $('.btn').click(function () {
        // Now the div itself as an object is $(this)
        $text = $(this).text().toLowerCase();

        console.log($text);

        getCountries($text);
    });



   function getCountries(path) {
       /*Remove data*/
       $('.data').empty();

        $.get(url + path, function(data, status){

            /*Num of countries*/
            $('.data').append("<div class='col-12'>"+ data.length + "tari</div>");


            /*Iterate over countries*/
            for(let i = 0; i < data.length; i++) {
                console.log(data[i])

                $('.data').append("<div class=\"card text-white bg-primary mb-3 col-4\" style=\"max-width: 18rem;\">\n" +
                    "  <div class=\"card-header\">"+ data[i].name +"</div>\n" +
                    "  <div class=\"card-body\">\n" +
                    "    <p class=\"card-title\">Capitala: "+data[i].capital+"</p>\n" +
                    "    <img  style='height: 50px' src='"+ data[i].flag + "' \n" +
                    "  </div>\n" +
                    "</div>");
            }


        });
    }





});