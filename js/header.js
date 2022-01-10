
        $('document').ready(function() {
            $('.font-bars').click(function() {

                $('.ul-first').toggle();
            });

            $('.font-profil').click(function() {

                $('.header2').toggle();
            });




            //script lies au nav bar
            var y = 0;
            $('#sous-menu-bakeware').hide();
            $('#bakeware').click(function() {
                if (y == 0) {
                    $('#sous-menu-bakeware').show();
                    $('#bake-chevron').css('transform', 'rotate(-180deg)');
                    y = 1;
                } else {
                    $('#sous-menu-bakeware').hide();
                    $('#bake-chevron').css('transform', 'rotate(0deg)');
                    y = 0;
                }
            });


            $('.sous-menu-product').hide();
            $('#product-type').click(function() {
                if (y == 0) {
                    $('.sous-menu-product').show();
                    $('#product-chevron').css('transform', 'rotate(-180deg)');
                    y = 1;
                } else {
                    $('.sous-menu-product').hide();
                    $('#product-chevron').css('transform', 'rotate(0deg)');
                    y = 0;
                }
            });






        });
  









