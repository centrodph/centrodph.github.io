var contactopage ={
    form: $('#frmContact'),
    exist: function(){
        console.log(this.form.length > 0)
        return ( this.form.length > 0 ) ? true : false ;
    },
    addCustomClases: function(){
        $('p.ch-form-row',this.form).each(function(index){
            $(this).addClass('row'+index);
        });
    },
    addWrap: function(){
        $('p.row0,p.row1,p.row2',this.form).wrapAll('<div class="contactWrap" />');
    },
    moveCaptcha: function(){
      $(".ms-captcha").appendTo(".contactWrap");
    },
    addSucursales: function(){
      $('<iframe src="https://centrodph.github.io/ogus/Minimalista/HTML/map.html" frameborder="0" scrolling="no" id="sucursales" height="580" widht="100%" style="width: 100%;"></iframe>')
     .insertBefore(".ogus-footer-top");
    },
    init: function(){
        this.addCustomClases();
        this.addWrap();
        this.moveCaptcha();
        this.addSucursales();
        console.log("contactopage ");
    }

};
var resultpage ={
    page: $('#page-RESULT'),
    exist: function(){
        return ( this.page.length > 0 ) ? true : false ;
    },
    addInfo: function(){
        console.log('dsadads');
        $(".searchResults .component.item-gallery li.row").each(function(index){
            console.log(this);
            var ref= $("h2 a",this).attr("href");
            var info='<div class="home-mas-info"><a class="link" href="'+ref+'">'+
                     '+ info'+'</a></div>';
                     $("ul.itemPrice",this).after(info);
        })
    },
    init: function(){
        this.addInfo();
        console.log(" ressult page ");
    }

};

var productopage={
    page: $('#page-VIP'),
    exist: function(){
        return ( this.page.length > 0 ) ? true : false ;
    },
    moveDesc: function(){
        //$('.component.vip .contentBtnBuy').after($(".component.prodDescription.ch-tabNavigator"));
    },
    addProtegido: function(){
        var t='<div class="compra-protegida"><span></span>'
              +'<div class="compra-protegida-top">Compra Protegida con Mercado Pago.</div>'
              +'Recibe el producto que esperabas o te devolvemos tu dinero.'
              +'</div>';
        //$(t).insertBefore(".component.prodDescription");
        $(t).insertAfter(".contentBtnBuy");
    },
    resize: function() {
      var viewportWidth = $(window).width();

      // Titulo del producto
      var _title = $('#page-VIP h1.title'),
        _thumbs = $('#page-VIP .ch-carousel');
      if (viewportWidth < 640) {
        // Mover titulo al principio del contenido
        _title.insertBefore('#page-VIP .vipImageWrapper');

        // Mover opciones de fotos debajo de la imagen
        _thumbs.insertAfter('#page-VIP .ch-viewervip-display');
      }
      else {
        // Restaurar posicion original de elementos en desktop
        _title.appendTo('.component.vip header');
        _thumbs.insertBefore('.ch-viewervip-display');

      }
    },
    init: function(){
        this.moveDesc();
        this.addProtegido();
        this.resize();
        $(window).resize(this.resize);
        console.log(" producto page ");
    }

};

var shippingpage={
  page: $('#page-SHIPPING'),
  exist: function(){
      return ( this.page.length > 0 ) ? true : false ;
  },
  addClases: function(){
      var c= $("section.component");
      console.log(c);
      $('.title-component',c).each(function(index) {
          $(this).addClass("icon-type-"+index);
      });
  },
  init: function(){
      this.addClases();
      console.log(" shipping page ");
  }
}

var homepage = {
    page: $('#page-HOME'),
    exist: function(){
        return ( this.page.length > 0 ) ? true : false ;
    },
    // doRotation: function() {
      
    // },
    // sliderRotation: function(){
    //   this.doRotation();
    //   var timer = null;
    //   $('#page-HOME .ch-carousel-next').hover(function(ev){
    //       clearInterval(timer);
    //   }, function(ev){
    //       timer = this.doRotation();
    //   });
    // },
    init: function(){
        var timer;

        var rotate = function() { timer = setInterval(function() {
          // Rotar slides en carrusel cada 3s
          var nextButton = $('#page-HOME .ch-carousel-next');
          if (!nextButton.hasClass('ch-carousel-disabled')) 
            nextButton.click();
          else
            $('.ch-carousel-pages').find("[data-page=1]").click();
          }, 3000)
        };


        $('#page-HOME .ch-carousel').hover(function(ev){
            clearInterval(timer);
        }, function(ev){
            rotate();
        });

        rotate();

        console.log(" home page ");
    }
}

$(document).ready(function(){

    console.log($('body').attr('id'));
    //custom clases in contacto
    if(contactopage.exist()){ contactopage.init();}
    if(resultpage.exist()){ resultpage.init();}
    if(productopage.exist()){ productopage.init();}
    if(shippingpage.exist()){ shippingpage.init();}
    if(homepage.exist()){ homepage.init();}
});

var newsController ={
  hideNewsletter: function(){
    $(".emailMarketingSubscriptionFormContainer").hide();
  },
  showNewsletter: function(){
    $(".emailMarketingSubscriptionFormContainer").show();
    newsController.init();
  },
  init: function(){
    $(".emailMarketingFormTitle").click(newsController.hideNewsletter);
    $(".emailMarketingSubscriptionFormContainer form").attr("target","_blank");
  }
};


/*<div class="home-mas-info">
<a class="link" title="ALBA PINTURA" href="/alba-pintura-1000007804xJM">
+ info
</a>
</div>

component prodDescription ch-tabNavigator

*/
