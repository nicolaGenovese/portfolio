$(document).ready(function(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let day = days[d.getDay()];
    
    const time = new Date();
    
    if(time.getHours() >= 15 && (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday")) {
      $("#MondaytoSaturdaydinner").prop("checked", true);
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
    }
    if((time.getHours() >= 10 && time.getHours() <= 14) && (day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday")){
      $("#ThursdayANDFridayLunch").prop("checked", true);
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
    }
    if((time.getHours() >= 10 && time.getHours() <= 14) && (day === "Saturday")){
      $("#SaturdayBrunchANDLunch").prop("checked", true);
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
    }
    if((time.getHours() >= 10 && time.getHours() <= 14) && (day === "Sunday")){
      $("#SundayBrunchANDLunch").prop("checked", true); 
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
    }
    if((time.getHours() >= 15) && (day === "Sunday")){
      $("#SundayDinnerMenu").prop("checked", true);
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
    }

});
















 