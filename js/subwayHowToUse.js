$('.slider_wrapper').slick(onclick(.arr_controls));

function storeOrder(){
    $('#store_order').css("display", "block");
    $('#order_tip').css("display", "none");
    $('.tab_storeOrder').addClass('active');
    $('.tab_orderTip').removeClass('active');
}

function orderTip(){
    $('#store_order').css("display", "none");
    $('#order_tip').css("display", "block");
    $('.tab_orderTip').addClass('active');
    $('.tab_storeOrder').removeClass('active');
}