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

}

$(document).ready(function(){

    console.log($('body').attr('id'));
    //custom clases in contacto
    if(contactopage.exist()){ contactopage.init();}



});