

function init(){
   
    getMoviesListAndDrawList();
    
}
 getMoviesListAndDrawList();

function getMovieAndDrawDetail(){
    
     var request = $.ajax({
          url: "https://api.themoviedb.org/3/movie/550?api_key=51e12ec89ce75f7b67f01e5ab38b959e",
          method: "GET"
        });

        request.done(function( result ) {
            //return result;
            
          //alert(result.original_title);
        });

        request.fail(function( jqXHR, textStatus ) {
          alert( "Request failed: " + textStatus );
    });
}



function getMoviesListAndDrawList(){
    var theList = $("#mylist");
    
     var request = $.ajax({
          url: "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=51e12ec89ce75f7b67f01e5ab38b959e",
          method: "GET"
        });

        request.done(function( moviesList ) {
            
            for (i=0;i<moviesList.results.length;i++){
                  theList.append( "<li><a onClick='javascript:getMovieDetails(" + moviesList.results[i].id + ");'>" + moviesList.results[i].original_title + "<img src= https://image.tmdb.org/t/p/w92/" + moviesList.results[i].poster_path + "></a></li>");
                }
            
            theList.listview("refresh");
            
            });
    
        request.fail(function( jqXHR, textStatus ) {
          alert( "Request failed: " + textStatus );
    });
}


function getMovieDetails(movie){
    var theList = $("#mylist");
    
    theList.empty();
    
    var request = $.ajax({
          url: "https://api.themoviedb.org/3/movie/" + movie + "?api_key=51e12ec89ce75f7b67f01e5ab38b959e",
          method: "GET"
        });
    
    request.done(function( moviesList ) {
        
                  theList.append( "<div style='padding-left:40px;'><h2>" + moviesList.original_title + "</h2><img src= https://image.tmdb.org/t/p/w154/" + moviesList.poster_path + "></div>");
             
        theList.listview("refresh");
            
            });
    
        request.fail(function( jqXHR, textStatus ) {
          alert( "Request failed: " + textStatus );
    });
}