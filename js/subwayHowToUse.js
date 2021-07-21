//$('.single-item').slick();

function storeOrder(){
    $('#store_order').css("display", "block");
    $('#order_tip').css("display", "none");
    $('.tab_storeOrder').addClass('active');
    $('.tab_orderTip').removeClass('active');
}

function orderTip(){
    $('#store_order').css("display", "none");
    $('#order_tip').css("display", "block");
    $('.tab_orderTip').removeClass('active');
    $('.tab_storeOrder').addClass('active');
}