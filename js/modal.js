let validateFields = (form, fieldsArray) => {

  fieldsArray.forEach((field) => {
    field.removeClass('form__input-error');
    if (field.val().trim() === "") {
      field.addClass('form__input-error');
    }
  });

  let errorFields = form.find('.form__input-error');

  return errorFields.length === 0;

}

$('.form').submit(e => {
  e.preventDefault();

  let form = $(e.currentTarget);
  let name = form.find("[name='name']");
  let phone = form.find("[name='phone']");
  let comment = form.find("[name='comment']");
  let to = form.find("[name='to']");
  let modal = $('#modal');
  let modalContent = modal.find('.modal__content');
  let validated = validateFields(form, [name, phone, comment, to]);

  modalContent.removeClass('error');

  if (validated) {
    let request = $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
    });

    request.done(data => {
      modalContent.text(data.message);
    });

    request.fail(data => {
      modalContent.text(data.responseJSON.message);
      modalContent.addClass('error');
    });

    request.always(data => {
      $.fancybox.open({
        src: '#modal',
        type: 'inline'
      });
    });
  }
})

 $('.app-close-modal').click(e => {
   e.preventDefault();
   $.fancybox.close();
 });