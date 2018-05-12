$("#navbar-sticky").hide();
$(".div-pesquisa").hide();
$(".div-biography").hide();
var color="";
var form ="";
const youtubeAPIKey ="AIzaSyAvt_YeiVfbMrGKdNFaMuMo760ViQemm0k";
$(document).ready(function(){

  // let data = new Date();
  // let hour = currentdate.getHours();
  //
  // if (hour > 8) {
  //   $("html").css("background-color", "white");
  // }else if( hour < 20 ){
  //   $("html").css("background-color", "grey");
  // }

//
// $("#custombtn").hover(function(){
//   $(this).css("background-color", "#000");
// });


    /*menu inicial*/

    $(".first-menu li a").hover(function(){

        /*Muda a cor do hover quando se muda o color scheme*/
        /*sunrise*/
        if(color =="miday"){
        $(this).css("border-bottom", "2px solid #0081C6");


        }else{


        $(this).css("border-bottom", "2px solid #fff");
        $(this).css("color", "#fff");
        }

        $(this).css("transition", "all .5s ease-in-out");
        }, function(){
          $(this).css("border-bottom", "2px solid transparent");
          $(this).css("color", "#fff");
    });




    /* HOVER DO STICKY MENU */

  $(".menu a").hover(function(){

      /*Muda a cor do hover quando se muda o color scheme*/
      if(color =="miday"){
      $(this).css("background-color", "#0081C6");
      $(this).css("color", "#fff");

      }else{


         $(this).css("background-color", "#74C8D2");
      $(this).css("color", "#fff");
      }

      $(this).css("transition", "all .5s ease-in-out");
      }, function(){
      $(this).css("background-color", "#fff");
      $(this).css("color", "#74C8D2");
  });

/* ------------------------------------------------------------ */





    /* HOVER DO SUBMENU */
    $(".menu li").hover(function(){
      $(this).find(".sub-menu").css("transition" , "all .5s ease-in-out");
      $(this).find(".sub-menu").css("z-index", "1");
      $(this).find(".sub-menu").css("opacity" , "1");
      $(this).find(".sub-menu").css("display", "block");
    }, function(){
      $(this).find(".sub-menu").css("z-index", "-1");
      $(this).find(".sub-menu").css("opacity" , "0");
      $(this).find(".sub-menu").css("display", "none");
    });


    /* ----------------------------------------------- */






    /* HOVER DO ARTISTS */

  $(".artist-photo").hover(function(){
      $(this).find("img").css("opacity", "1");
      $(this).find("img").css("-webkit-transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("transform", "scale(1.03) skewX(10deg)");
      $(this).find("img").css("filter", "contrast(90%)");
      $(this).find(".info-container").show();
      }, function(){
        $(this).find("img").css("opacity", "0.7");
        $(this).find("img").css("-webkit-transform", "scale(1.18) skewX(10deg);");
        $(this).find("img").css("transform", "skewX(10deg)");
        $(this).find("img").css("filter", "contrast(100%)");
          $(this).find(".info-container").hide();
  });


    /* ------------------------------------------------------------------ */





    /*send music*/

const realFileBtn = document.getElementById("realfile");
const customBtn = document.getElementById("custombtn");
const customTxt = document.getElementById("customtext");

    customBtn.addEventListener("click", function(){
        realFileBtn.click();
    })

    realFileBtn.addEventListener("change", function(){
        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value;
        } else {
            customTxt.innerHTML = "No files chosen, yet!";
        }
    });



    /* ------------------------------------------------------- */






/*MOBILE NAVIGATION*/
   $('.js--nav-icon, .menu-js a, .logo').click(function(element){
        var nav = $('.menu-js');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo')
            return;

        //Opens and closes the menu
        if ($(window).width() < 768){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.menu-js');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });





    /* -------------------------------------------------------- */

    /*Sticky nav*/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 50) {
    $('#navbar-sticky').fadeIn();
  } else {
    $('#navbar-sticky').fadeOut();
  }
});


 /*----------------------------------------------------*/




/*-------------------------------------------------------------*/
                        /* COLOR SCHEME */
/*--------------------------------------------------------------*/

/* sunrise */

    /* header hero img */
     $("#sunrise").click(function(){
         color="sunrise";
         $("header").css("background-image", "linear-gradient(rgba(116, 200, 210, 0.7), rgba(0, 0, 0, 0)), url(img/hero1.jpg");
         $("h2").css("color", "#74C8D2");
         $("h2:after").css("color", "#74C8D2");
         $(".steps div").css("background-color", "#74C8D2");
         $(".search-field").css("border", "2px solid #74C8D2");
         $(".contact-field").css("border", "2px solid #74C8D2");
         $(".send-field").css("border", "2px solid #74C8D2");
         //$(".btn").css("background-color", "#74C8D2");
         //$(".btn:hover").css("background-color", "#000");
         $(".social-links li a:link").css("color", "#74C8D2");


         /* FALTA FAZER OS HOVERS DOS BOTOES */


     });


    /*-------------------------------------------------*/







    /* midday */

    /* header hero img */
     $("#mday").click(function(){
         color="miday";
         $("header").css("background-image", "linear-gradient(rgba(0, 129, 198, 0.7), rgba(0, 0, 0, 0)), url(img/hero1.jpg)");
         $("h2").css("color", "#0081C6");
         $("h2:after").css("color", "#0081C6");
         $(".steps div").css("background-color", "#0081C6");
         $(".search-field").css("border", "2px solid #0081C6");
         $(".contact-field").css("border", "2px solid #0081C6");
         $(".send-field").css("border", "2px solid #0081C6");
         //$(".btn").css("background-color", "#0081C6");
         $(".social-links li a:link").css("color", "#0081C6");

         /* Custom btn (botao de enviar musica) hover   FALTA FAZER */

         //$("#custombtn:hover").css("background-color", "#0081C6");

     });








    /*-------------------------------------------------*/







    /* sunset */

    /* header hero img */
     $("#sunset").click(function(){
         color="sunset";
         $("header").css("background-image", "linear-gradient(rgba(229, 92, 58, 0.7), rgba(0, 0, 0, 0)), url(img/hero1.jpg)");


         /* Cor do titulo */
    $("#sunset").click(function(){
         color="sunrise";
         $("h2").css("color", "#E55C3A");
     });


    /* Cor do titulo */
    $("#sunset").click(function(){
         color="sunrise";
         $("h2:after").css("color", "#E55C3A");
     });



    /* Steps container number */
    $("#sunset").click(function(){
         color="sunrise";
         $(".steps div").css("background-color", "#E55C3A");
     });



     /* Search field border */
    $("#sunset").click(function(){
         color="sunrise";
         $(".search-field").css("border", "2px solid #E55C3A");
     });




         /* Contact field border */
    $("#sunset").click(function(){
         color="sunrise";
         $(".contact-field").css("border", "2px solid #E55C3A");
     });



         /* Send field border */
    $("#sunset").click(function(){
         color="sunrise";
         $(".send-field").css("border", "2px solid #E55C3A");
     });



         /* Custom btn */
    $("#sunset").click(function(){
         color="sunrise";
         $("#custombtn").css("background-color", "#E55C3A");
     });





         /* Custom btn (botao de enviar musica) hover   FALTA FAZER */
    $("#sunset").click(function(){
         color="sunrise";
         $("#custombtn:hover").css("background-color", "#E55C3A");
     });




         /* footer links */
    $("#sunset").click(function(){
         color="sunrise";
         $(".social-links li a:link").css("color", "#E55C3A");
     });


         /* FALTA FAZER OS HOVERS DOS BOTOES */


     });





    /*-----------------------------------------------------------*/




    /* night */

    /* header hero img */
     $("#night").click(function(){
         color="sunrise";
         $("header").css("background-image", "linear-gradient(rgba(21, 35, 66, 0.7), rgba(0, 0, 0, 0)), url(../img/hero1.jpg)");


         /* Cor do bg */
         $("body").css("background-color", "#131721");

         $("section").css("background-color", "#131721");





         /* Cor do titulo */
         $("h2").css("color", "#fff");



    /* Cor do titulo */
         $("h2:after").css("color", "#fff");




    /* Steps container number */
         $(".steps div").css("background-color", "#fff");




     /* Search field border */
         $(".search-field").css("border", "2px solid #fff");





         /* Contact field border */
         $(".contact-field").css("border", "2px solid #fff");




         /* Send field border */
         $(".send-field").css("border", "2px solid #fff");




         /* Custom btn */
         $("#custombtn").css("background-color", "#fff");






         /* Custom btn (botao de enviar musica) hover   FALTA FAZER */





         /* footer links */
    $("#night").click(function(){
         color="sunrise";
         $(".social-links li a:link").css("color", "#fff");
     });


         /* FALTA FAZER OS HOVERS DOS BOTOES */


     });



/*-------------------------------------------------------------*/
                    /* END OF COLOR SCHEME */
/*--------------------------------------------------------------*/







    /* Smooth scroll */



    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});





/*-------------------------------------------------------------*/






/*pesquisa*/

  $("#submeter").click(function(){
    if ($("#artist").val()!="") {

      let query = $("#artist").val()

      let url ="http://musicbrainz.org/ws/2/artist/?query=artist:"+ query +"&fmt=json";
      url=encodeURI(url);

      $.get(url,function(response,status){
        if (status=='success') {
          //alert(response.works)
          //alert(query);
          $(".form").hide();
          $(".div-pesquisa").show();
          $(".div-pesquisa h3").html("You searched for \" " + $("#artist").val() +  " \" ");

          url="http://musicbrainz.org/ws/2/artist/"+ response.artists[0].id +"?inc=releases&fmt=json";
          url=encodeURI(url);
          //alert(url);
          $.get(url,function(response,status){
            if (status=='success') {
              url="http://musicbrainz.org/ws/2/release/"+ response.releases[0].id +"?inc=recordings&fmt=json";
              url=encodeURI(url);
              $.get(url,function(response,status){
                if (status=='success') {
                  for (var i = 0; i < 3; i++){

                    url ="https://www.googleapis.com/youtube/v3/search?q="+response.media[0].tracks[i].title+"&maxResults=1&part=snippet&key="+youtubeAPIKey;
                    url=encodeURI(url);
                    //alert(url);
                    alert(i);
                      $.get(url,function(response,status){
                        if (status=='success') {
                          $("#topmusic"+ i + " figure img").attr("src", response.items[0].snippet.thumbnails.default.url).css('height', "300px");
                        }
                      });
                  }
                }
              });

            //query = response.artists[0].id;

          }
        });


          $("#top-albums").click(function(){
            $(".div-pesquisa").hide();
            //alert(response.artists[0].id);
            url="http://musicbrainz.org/ws/2/artist/"+ response.artists[0].id +"?inc=releases&fmt=json";
            url=encodeURI(url);
            //alert(url);
            $.get(url,function(response,status){
              if (status=='success') {
            for (result of response.releases) {
              //alert(result.id);
              url ="http://coverartarchive.org/release/" + result.id;
              url=encodeURI(url);
              $.get(url,function(response,status){
                if (status=='success') {
                  //alert(response.images[0].thumbnails.small);
                  $("#search").append($("<img>").attr("src", response.images[0].thumbnails.small));
                }else {
                  $("#search").append($("<img>").attr("src", "nope"));
                }
              });

            }

              //query = response.artists[0].id;

            }
          });
        });


          // let url ="https://www.googleapis.com/youtube/v3/search?q="+query+" "+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
          // url=encodeURI(url);
          //
          // $.get(url,function(response,status){
          //   if (status=='success') {
          //
          //     $(".form").hide();
          //     $(".div-pesquisa").show();
          //     $(".div-pesquisa h3").html("You searched for \" " + query +  " \" ");
          //
          //   }
          // });

        }else {
          alert('não foram encontrados resultados para este artista');
        }
      });

      //form = $('#search').html();
      //$('#search').empty();
      //alert('aqui');



    } else if ($("#song").val()!="") {
      let query = $('#song').val();

      let url ="http://musicbrainz.org/ws/2/work/?query=work:"+ query +"&fmt=json";
      url=encodeURI(url);

      $.get(url,function(response,status){
        if (status=='success' && (typeof response.works[0] !== 'undefined')) {
          //alert(response.works)
          let url ="https://www.googleapis.com/youtube/v3/search?q="+query+" "+"song&maxResults=1&part=snippet&key="+youtubeAPIKey;
          url=encodeURI(url);

          $.get(url,function(response,status){
            if (status=='success') {
              form = $('#search').html();
              //alert(form);
              $('#search').empty();
              $('#search').append($("<button></button>").html("GO BACK TO THE SEARCH").css("height", "70px").css("width", "100%").css("background-color", "#74C8D2").css("color", "#fff").css("border", "2px solid transparent").attr("onclick", "backForm()"));
              //$('#search').append($("<div>").html("<p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p><p>ola</p>"));
              $("#search").append($("<iframe>").attr('src', "https://www.youtube.com/embed/"+response.items[0].id.videoId).css("border", "0").css("width", "100%").css("height", "100%"));

            }
          });

        }else {
          alert('não foram encontrados resultados para esta musica');
        }
      });
    }
  });

  $("#back-form").click(function(){
    $(".div-pesquisa").hide();
    $(".form").show();
  });



/*--------------------------------------------------------*/


$("#biography").click(function(){
  $(".div-pesquisa").hide();
  $(".div-biography").show();
});

});

/* voltar ao form*/
function backForm(){
  //alert (form);
  $('#search').empty();
  //alert(form)
  $('#search').html(form);
}
