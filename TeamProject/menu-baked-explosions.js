jQuery(document).ready(function(){
// cakes section javascript
    $('#list-cake li,#list-donuts li').hover(
		function(){$(this).css('background','white');},
		function(){$(this).css('background','#D0ECC5');}
			
    );
    $('#list-cupcakes li,#list-macarons li').hover(
      function(){$(this).css('background','white');},
      function(){$(this).css('background','#FFAAA5');}
        
      );
      
     
    $("#cake1").hover(
    function()
     {
        $("#img-cake").attr("src","images/cake.jpg");
      },
      function(){
        $("#img-cake").attr("src","images/defaultcake.jpg");
      });
    $("#cake2").hover(
      function()
        {
          $("#img-cake").attr("src","images/blackforest.jpg");
        },
        function(){
          $("#img-cake").attr("src","images/defaultcake.jpg");
        });
      $("#cake3").hover(
        function()
          {
            $("#img-cake").attr("src","images/strawberry.jpg");
          },
          function(){
            $("#img-cake").attr("src","images/defaultcake.jpg");
          });
        $("#cake4").hover(
        function()
        {
          $("#img-cake").attr("src","images/carrot.jpg");
        },
        function(){
          $("#img-cake").attr("src","images/defaultcake.jpg");
        });

        
        //section macarons 
          $("#macarons1").hover(
          function()
            {
              $("#img-macarons").attr("src","images/matcha.jpg");
            },
            function(){
              $("#img-macarons").attr("src","images/macarons.jpg");
            });
          $("#macarons2").hover(
            function()
              {
                $("#img-macarons").attr("src","images/raspberry.jpg");
              },
              function(){
                $("#img-macarons").attr("src","images/macarons.jpg");
              });
            $("#macarons3").hover(
              function()
                {
                  $("#img-macarons").attr("src","images/mango.jpg").width(400);
                  // $("#img-macarons").width(400);
                  //here i am changing the width also of mango macarons image because that was looking odd before
                },
                function(){
                  $("#img-macarons").attr("src","images/macarons.jpg").width(300);
                });
          //section donuts
          $("#donut1").hover(
            function()
              {
                $("#img-donuts").attr("src","images/vanilla.jpg");
              },
              function(){
                $("#img-donuts").attr("src","images/donuts.jpg");
              });
            
          $("#donut2").hover(
            function()
              {
                $("#img-donuts").attr("src","images/coconut.jpg").width(400);
              },
              function(){
                $("#img-donuts").attr("src","images/donuts.jpg").width(300);
              });
          $("#donut3").hover(
            function()
              {
                $("#img-donuts").attr("src","images/churro.jpg").css("border-radius","30%");
              },
              function(){
                $("#img-donuts").attr("src","images/donuts.jpg").css("border-radius","50%");
              });
//section cupcakes
          $("#cup1").hover(
            function()
              {
                $("#img-cupcakes").attr("src","images/redvelvet.jpg");
              },
              function(){
                $("#img-cupcakes").attr("src","images/cupcake.jpg");
              });
          $("#cup2").hover(
            function()
              {
                $("#img-cupcakes").attr("src","images/coffee.jpg").css("border-radius","30%");
              },
              function(){
                $("#img-cupcakes").attr("src","images/cupcake.jpg").css("border-radius","50%");
              });
          $("#cup3").hover(
            function()
              {
                $("#img-cupcakes").attr("src","images/blueberry.jpg").css("border-radius","20%");
              },
              function(){
                $("#img-cupcakes").attr("src","images/cupcake.jpg").css("border-radius","50%");
              });








});