
         $(".menu").click(function(){
             $('#mySidenav').css('with','70px');
             $('#main').css('margin-left', '70px');
             $(".logo").css('display', none);
             $(".logo1").css('display', 'block');
             $(".logo span").css('visibility', 'visible');
             $(".logo span").css('margin-left', '-10px')
             $(".icon a").css('visibility', 'hidden');
             $(".icon a").css('height', '25px');
             $(".icons").css('visibility', 'visible');
             $(".icon a").css('margine-left', 'visible');
             $(".icons").css('margin-left', '-8px');
             $(".menu1").css('display', block);
             $(".menu").css('display', none);
         });
         $(".menu1").click(function(){
            $('#mySidenav').css('with','300px');
             $('#main').css('margin-left', '300px');
             $(".logo").css('display', block);
             $(".icon a").css('visibility', 'visible');
             $(".menu1").css('display',none);
             $(".menu").css('display', block);
         })

