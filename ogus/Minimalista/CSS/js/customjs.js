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
    init: function(){
        this.addCustomClases();
        this.addWrap();
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

$(document).ready(function(){

    console.log($('body').attr('id'));
    //custom clases in contacto
    if(contactopage.exist()){ contactopage.init();}
    if(resultpage.exist()){ resultpage.init();}


});

/*<div class="home-mas-info">
<a class="link" title="ALBA PINTURA" href="/alba-pintura-1000007804xJM">
+ info
</a>
</div>*/