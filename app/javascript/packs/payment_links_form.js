var calculateSubtotal = function(attr) {
  quantity = parseInt(attr.parents('.nested-fields').children('.tr-quantity').children().val() || 0);
  price_cents = parseFloat(attr.parents('.nested-fields').children('.tr-price-cents').children().val().replace(",", ".") || 0);
  subtotal = ((quantity * price_cents)).toFixed(2).replace(".", ",")
  attr.parents('.nested-fields').children('.tr-subtotal').children().text('R$ ' + subtotal)
}

var calculateTotal = function(){
  total = 0;
  $('.subtotal').each(function(){
    total += parseFloat($(this).text().replace('R$ ', '').replace(',','.'));
  });

  $('#total').text('R$ ' + total.toFixed(2).replace(".", ","))
}

$(document).on('change', '.quantity', function() {
  calculateSubtotal($(this));
  calculateTotal();
});

$(document).on('change', '.price_cents', function() {
  calculateSubtotal($(this));
  calculateTotal();
});

$(document).on('submit','form.payment-links-form',function(event){
  $('input.price_cents').each(function(){
    new_value = parseFloat($(this).val().replace(',', '.')) * 100;
    $(this).val(new_value)
  });
});
