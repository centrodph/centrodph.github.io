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
      $('<iframe src="//centrodph.github.io/ogus/Minimalista/HTML/map.html" frameborder="0" scrolling="no" id="sucrucasles" height="580" widht="100%" style="width: 100%;"></iframe>')
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
    init: function(){
        this.moveDesc();
        this.addProtegido();
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


$(document).ready(function(){

    console.log($('body').attr('id'));
    //custom clases in contacto
    if(contactopage.exist()){ contactopage.init();}
    if(resultpage.exist()){ resultpage.init();}
    if(productopage.exist()){ productopage.init();}
    if(shippingpage.exist()){ shippingpage.init();}
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
