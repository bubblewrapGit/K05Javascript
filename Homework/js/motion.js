$(document).ready(function () {
    $('.find_select > input[name=accountFind]').click(function(){
        $('.find_id, .help_text').toggleClass('hide'); 
    });


    $(".find_detail_list>li:eq(1)").hide();
    $(".find_detail_list>li:eq(2)").hide();

    jQuery('.find_detail select').change(function() {
        var state = jQuery('.find_detail select option:selected').val();

        if(state == 'phoneN'){
            $(".find_detail_list>li:eq(0)").show();
            $(".find_detail_list>li:eq(1)").hide();
            $(".find_detail_list>li:eq(2)").hide();
        }else if(state == 'homeN'){
            $(".find_detail_list>li:eq(0)").hide();
            $(".find_detail_list>li:eq(1)").show();
            $(".find_detail_list>li:eq(2)").hide();
        }else if(state == 'email'){
            $(".find_detail_list>li:eq(0)").hide();
            $(".find_detail_list>li:eq(1)").hide();
            $(".find_detail_list>li:eq(2)").show();
        }else{
        }
    });
    
    jQuery('.email_back_choose').change(function() {
        var state = jQuery('.email_back_choose option:selected').val();

        $('.email_form input[name=email_back]').val(state);
    });

});
