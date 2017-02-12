function Script(){};

Script.prototype.Initialize = function(){
    
    var self = this;

    // Set height of content
    var window_height = $(window).outerHeight();
    console.log('window_height', window_height);
    var header_height = $('nav').outerHeight();
    console.log('header_height', header_height);
    var footer_height = $('footer').outerHeight();
    console.log('footer_height', footer_height);
    var exclude_height = header_height+footer_height;
    var content_height = window_height - exclude_height;

    // apply content height now
    $('.content').height(content_height);

    var per_box_height = content_height/5;
    $('body').append('<style>.content .item{ height:'+per_box_height+'px;}</style>');
    // load defaut items
    for(var i=1; i<6; i++)
    {
        if(i%2==0)
        {
            var extraClass= 'even';
        }
        else 
        {
            var extraClass = 'odd';
        }
        $('.content').append('<div class="item '+extraClass+'"></div>');
         $('.content .item:even').css('background-color', '#ccc');
        $('.content .item:odd').css('background-color', '#fff');

    }

    setInterval(self.loadNextItem, 1000); 
    
};

Script.prototype.loadNextItem = function(){
    var last_item = $('.content .item:last');

     if(last_item.hasClass('odd'))
        {
            var extraClass= 'even';
        }
        else 
        {
            var extraClass = 'odd';
        }

     var new_item = $('<div class="item '+extraClass+'" style="display:none"></div>');
    $('.content').append(new_item);
    new_item.slideDown(1000);


    var first_item = $('.content .item:first');
    first_item.slideUp(1000);
    setTimeout(function(){
        
        first_item.remove();

        

    }, 900)
   
$('.content .item.even').css('background-color', '#fff');
        $('.content .item.odd').css('background-color', '#ccc');

};

var script = new Script();
script.Initialize();


