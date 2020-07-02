$(document).on('turbolinks:load', () => {

  $('ul.tabs a').on('click', (e) => {

    e.preventDefault();
    let $el = $(e.currentTarget);
    let target = $($el).data('target');
    let type = $el.parents("ul").data("type") || null;

    $('.tabs-content > div').hide();
    $('ul.tabs li').removeClass('active');

    $($el).parent().addClass('active');
    $('.tabs-content .' + target).show();

    if (type === "link") handleLinkType(target)

  });

  handleLinkType = (target) => {

    $typeInput = $("#type_link");

    switch (target) {
      case "form-itens":
        $typeInput.val("products")
        break;
      case "form-unbound":
        $typeInput.val("any_value")
        break;
    }
  }
});


