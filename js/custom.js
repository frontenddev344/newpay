                // js==1

$(".pic-deliv a").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    });


                  // js==2

$(".list_tip li").click(function(){
$(this).addClass("active").siblings().removeClass("active")
});



                      // js==3

$(".stp-btn a").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    });


                    // js==4

 $(".price-range span").click(function(){
        $(this).addClass("select-price").siblings().removeClass("select-price")
        });
    



                            // js==5

        $(".fav-icons").click(function() {
            var svgHeart = $(this).find('.svg_heart');
            var heartIcon = $(this).find('.heart_icon');
            
            if (svgHeart.css("display") === "none") {
                svgHeart.css("display", "block");
                heartIcon.css("display", "none");
            } else {
                svgHeart.css("display", "none");
                heartIcon.css("display", "block");
            }
        });
        
        


$(".forgot .form-control-popup").on("click", function() {
$("body").toggleClass("forgot-active");
});
$(".forgot-active-remove").on("click", function() {
    $("body").removeClass("forgot-active");
});

$(".password-reset").on("click", function() {
$("body").toggleClass("password-reset");
});

$(".password-reset").on("click", function() {
$("body").removeClass("forgot-active");
});

$(".cancil-earned").on("click", function() {
    $(".earned-point").addClass("active");
});