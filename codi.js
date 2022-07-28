$(document).ready(function(){
    //AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
	$('.category-list .category-item[category="todo"]').addClass('ct_item-active');
    $('.category-item').click(function(){
    	var catProduct = $(this).attr('category');
    	console.log(catProduct);
        //AGREGANDO CLASE ACTIVE AL ENLACE SELECIONADO
    	$('.category-item').removeClass('ct_item-active');
    	$(this).addClass('ct_item-active');
        //OCULTANDO PRODUCTOS
        $('.product-item').hide();
    });
});