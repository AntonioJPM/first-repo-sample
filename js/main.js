$(document).ready(function(){

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false
      });

      //Posts

      var posts = [
          {
              title: 'Title test 1',
              date: 'Posted ' + moment().format("MMMM Do YYYY"),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dictum odio nec tincidunt. Nam lobortis leo eget pharetra fringilla. In velit erat, aliquet vitae vehicula sed, vestibulum et libero. Duis ac egestas arcu. Praesent felis tellus, ornare non nulla ut, sagittis aliquet sem. Quisque nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, leo in posuere tempor, sem sapien vulputate massa, sed auctor mi metus sed urna. Nulla finibus semper lorem sed malesuada. Donec sed accumsan nibh, quis venenatis tortor. Donec condimentum dolor non tempus fringilla. Ut ultrices vitae nunc id vestibulum.'
          },
          {
            title: 'Title test 2',
            date: 'Posted ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dictum odio nec tincidunt. Nam lobortis leo eget pharetra fringilla. In velit erat, aliquet vitae vehicula sed, vestibulum et libero. Duis ac egestas arcu. Praesent felis tellus, ornare non nulla ut, sagittis aliquet sem. Quisque nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, leo in posuere tempor, sem sapien vulputate massa, sed auctor mi metus sed urna. Nulla finibus semper lorem sed malesuada. Donec sed accumsan nibh, quis venenatis tortor. Donec condimentum dolor non tempus fringilla. Ut ultrices vitae nunc id vestibulum.'
          },
          {
            title: 'Title test 3',
            date: 'Posted: ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dictum odio nec tincidunt. Nam lobortis leo eget pharetra fringilla. In velit erat, aliquet vitae vehicula sed, vestibulum et libero. Duis ac egestas arcu. Praesent felis tellus, ornare non nulla ut, sagittis aliquet sem. Quisque nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, leo in posuere tempor, sem sapien vulputate massa, sed auctor mi metus sed urna. Nulla finibus semper lorem sed malesuada. Donec sed accumsan nibh, quis venenatis tortor. Donec condimentum dolor non tempus fringilla. Ut ultrices vitae nunc id vestibulum.'
          },
          {
            title: 'Title test 4',
            date: 'Posted ' + moment().format("MMMM Do YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales dictum odio nec tincidunt. Nam lobortis leo eget pharetra fringilla. In velit erat, aliquet vitae vehicula sed, vestibulum et libero. Duis ac egestas arcu. Praesent felis tellus, ornare non nulla ut, sagittis aliquet sem. Quisque nec nunc enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, leo in posuere tempor, sem sapien vulputate massa, sed auctor mi metus sed urna. Nulla finibus semper lorem sed malesuada. Donec sed accumsan nibh, quis venenatis tortor. Donec condimentum dolor non tempus fringilla. Ut ultrices vitae nunc id vestibulum.'
          }
      ];

      posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2> <span>${item.title}</span></h2>
            <span class="date">${item.date}</span>
            <p>
                ${item.content}
            </p>

            <a href="#" class="button-more">More</a>
        </article>
        `;
        $("#post").append(post);
      });

      //Theme Selector
      var theme = $("#theme");

      $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
      });

      $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
      });

      $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
      });

      //Scroll to top
      $(".up-to-top").click(function(e){
          e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
      });

      //Login
      $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
      });

      var form_name = localStorage.getItem("form_name");

      if(form_name != null && form_name != undefined){

        var about_paraph = $("#about p");
        
        about_paraph.html("Welcome, " + form_name );
        about_paraph.append("<a href='#' id='logout'>Close session</a>");


        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
      }


      //login

      $("#login form").submit(function(){
        var form_name = $("#form_name").val();;
        localStorage.setItem("form_name", form_name)
      });

      var form_name = localStorage.getItem("form_name")  

      console.log("First github commit");
      
})