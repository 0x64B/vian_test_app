$(document).on('turbolinks:load', () => {
  $(".option-item").each((i, e) => {
    let option = e.querySelector('.show-option')
    let has_default_value = option.querySelector('input').value == 0
    let checkbox = e.querySelector(".checkbox-item input[type='checkbox']")
    if(has_default_value && !checkbox.checked) {
      $(option).hide()
    } else {
      checkbox.checked = true
    }
  })
  $(".option-item input[type='checkbox']").each((i, e) => {
    $el = $(e);
    $($el).change((e) => {
      let checked = $(e.currentTarget.checked);
      let option = $(e.currentTarget).data('option');
      let $target = $("[data-show-option='" + option + "']");
      if (checked[0] == true) {
        $target.show();
      } else {
        $target.find('input').val(0);
        $target.hide();
      }
    });
  });
});
