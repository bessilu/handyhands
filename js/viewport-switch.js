  $(document).ready(function () {
      $("#viewport_box").load("/pages/ability.html");

  });


  jQuery(document).ajaxComplete(function () {

      $("#ability_button").click(function () {
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/ability.html");
          $(".menu_button").removeClass("active");
          $("#ability_button").addClass("active");
          document.title = 'Handy Hands';
      });


      $("#project_button").click(function () {
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/project.html");
          $(".menu_button").removeClass("active");
          $("#project_button").addClass("active");
          document.title = 'Handy Hands / Progetto';
      });

      $("#story_button").click(function () {
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/story.html");
          $(".menu_button").removeClass("active");
          $("#story_button").addClass("active");
          document.title = 'Handy Hands / Storia';
      });

      $("#subscribe_button").click(function () {
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/subscribe.html");
          $(".menu_button").removeClass("active");
          $("#subscribe_button").addClass("active");
          document.title = 'Handy Hands / Iscriviti';
      });


      $("#contacts_button").click(function () {
          $(".menu_button").removeClass("active");
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/contacts.html");
          document.title = 'Handy Hands / Contatti';
      });

      $("#disclaimer_button").click(function () {
          $(".menu_button").removeClass("active");
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/disclaimer.html");
          document.title = 'Handy Hands / Disclaimer';
      });

      $("#supporters_button").click(function () {
          $(".menu_button").removeClass("active");
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/supporters.html");
          document.title = 'Handy Hands / Sostenitori';
      });

      $("#credits_button").click(function () {
          $(".menu_button").removeClass("active");
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/credits.html");
          document.title = 'Handy Hands / Credits';
      });






      $(".id_img").click(function () {
          $("#viewport_box").html("");
          $(".menu_button").removeClass("active");
          $("#ability_button").addClass("active");
          var classStr = $(this).attr('class'),
              lastClass = classStr.substr(classStr.lastIndexOf(' ') + 1);
          $("#viewport_box").load("/pages/" + lastClass + ".html");
      });

      $(".cover_card").click(function () {
          $("#viewport_box").html("");
          $(".menu_button").removeClass("active");
          $("#ability_button").addClass("active");
          var classStr = $(this).attr('class'),
              lastClass = classStr.substr(classStr.lastIndexOf(' ') + 1);
          $("#viewport_box").load("/pages/" + lastClass + ".html");
      });


  });
