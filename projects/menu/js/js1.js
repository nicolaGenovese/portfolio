
// menu filter
    $("#MondaytoSaturdaydinner").click(function(){
      $(".starters-box").hide();
      $(".brunch-box").hide();
      $(".kids-box").hide();
      $(".sharingPlates-box").fadeIn(1000);
      $(".mainsRoast-box").hide();
      $(".cocktails-box").hide();
      $(".mains-box").fadeIn(1000);
      $(".smallPlates-box").fadeIn(1000);
      $(".sides-box").fadeIn(1000);
      $(".desserts-box").fadeIn(1000);
      $(".DinnerMenu-title").fadeIn(1000);
      $(".BrunchLunch-title").hide();
      $(".SaturdayBrunch-title").hide();
      $(".SundayBrunch-title").hide();
      $(".SundayDinner-title").hide();
      $(".KidsMenu-title").hide();
    });

    $("#ThursdayANDFridayLunch").click(function(){
      $(".starters-box").hide();
      $(".brunch-box").fadeIn(1000);
      $(".kids-box").hide();
      $(".sharingPlates-box").hide();
      $(".mainsRoast-box").hide();
      $(".cocktails-box").hide();
      $(".mains-box").fadeIn(1000);
      $(".smallPlates-box").hide();
      $(".sides-box").fadeIn(1000);
      $(".desserts-box").fadeIn(1000);
      $(".DinnerMenu-title").hide();
      $(".BrunchLunch-title").fadeIn(1000);
      $(".SaturdayBrunch-title").hide();
      $(".SundayBrunch-title").hide();
      $(".SundayDinner-title").hide();
      $(".KidsMenu-title").hide();
    });


    $("#SaturdayBrunchANDLunch").click(function(){
      $(".starters-box").hide();
      $(".brunch-box").fadeIn(1000);
      $(".kids-box").hide();
      $(".sharingPlates-box").hide();
      $(".mainsRoast-box").hide();
      $(".mains-box").fadeIn(1000);
      $(".smallPlates-box").hide();
      $(".sides-box").fadeIn(1000);
      $(".desserts-box").fadeIn(1000);
      $(".cocktails-box").fadeIn(1000);
      $(".DinnerMenu-title").hide();
      $(".BrunchLunch-title").hide();
      $(".SaturdayBrunch-title").fadeIn(1000);
      $(".SundayBrunch-title").hide();
      $(".SundayDinner-title").hide();
      $(".KidsMenu-title").hide();
    });

    $("#SundayBrunchANDLunch").click(function(){
      $(".starters-box").fadeIn(1000);
      $(".brunch-box").fadeIn(1000);
      $(".kids-box").hide();
      $(".sharingPlates-box").hide();
      $(".mains-box").hide();
      $(".mainsRoast-box").fadeIn(1000);
      $(".smallPlates-box").hide();
      $(".sides-box").fadeIn(1000);
      $(".cocktails-box").fadeIn(1000);
      $(".desserts-box").fadeIn(1000);
      $(".DinnerMenu-title").hide();
      $(".BrunchLunch-title").hide();
      $(".SaturdayBrunch-title").hide();
      $(".SundayBrunch-title").fadeIn(1000);
      $(".SundayDinner-title").hide();
      $(".KidsMenu-title").hide();
    });

 
    $("#SundayDinnerMenu").click(function(){
      $(".kids-box").hide();
      $(".sharingPlates-box").hide();
      $(".mainsRoast-box").fadeIn(1000);
      $(".mains-box").hide();    
      $(".smallPlates-box").hide();
      $(".cocktails-box").hide();
      $(".sides-box").fadeIn(1000);
      $(".desserts-box").fadeIn(1000);
      $(".starters-box").fadeIn(1000);
      $(".brunch-box").fadeIn(1000);
      $(".DinnerMenu-title").hide();
      $(".BrunchLunch-title").hide();
      $(".SaturdayBrunch-title").hide();
      $(".SundayBrunch-title").hide();
      $(".SundayDinner-title").fadeIn(1000);
      $(".KidsMenu-title").hide();
    });

    $("#KidsMenu").click(function(){
      $(".starters-box").hide();
      $(".brunch-box").hide();
      $(".kids-box").fadeIn(1000);
      $(".sharingPlates-box").hide();
      $(".mains-box").hide();
      $(".mainsRoast-box").hide();
      $(".smallPlates-box").hide();
      $(".cocktails-box").hide();
      $(".sides-box").hide();
      $(".desserts-box").hide();
      $(".DinnerMenu-title").hide();
      $(".BrunchLunch-title").hide();
      $(".SaturdayBrunch-title").hide();
      $(".SundayBrunch-title").hide();
      $(".SundayDinner-title").hide();
      $(".KidsMenu-title").fadeIn(1000);
    });


    // vegetarian vegan

    $("#vegan").click(function(){
      $(".vegetarian").hide();
      $(".no-vegetarian").hide();
      $(".vegan").fadeIn(1000);
    });

    $("#vegetarian").click(function(){
      $(".no-vegetarian").hide();
      $(".vegetarian").fadeIn(1000);
      $(".vegan").fadeIn(1000);
    });

    $("#no-vegetarian").click(function(){
      $(".no-vegetarian").fadeIn(1000);
      $(".vegetarian").fadeIn(1000);
      $(".vegan").fadeIn(1000);
    });



