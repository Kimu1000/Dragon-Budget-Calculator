function calculateBudget() {
  if (validForm()) {
    var numberOfDragons = parseInt($('form #dragon-number').val()),
      individualCost = 0;

    $('form .budget input').each(function() {
      individualCost += parseInt($(this).val());
    });

    var totalCost = (individualCost * numberOfDragons) * 12;
    openModal('It will cost $' + totalCost + ' a year to own ' + numberOfDragons + ' dragons.');
  } else {
    openModal('Please Fill Out All Inputs');
  }
}

function validForm() {
  var numberOfFields = $('form input').length;
  numberOfValidFields = 0;

  $('form input').each(function() {
    if ($(this).val().length !== 0) {
      numberOfValidFields += 1;
    }
  });

  return numberOfFields === numberOfValidFields;
}

function openModal(content) {
  closeModal();
  var closeBtn = '<div class="modal-close">Close</div>';
  $('body').append('<div class="modal">' + closeBtn + content + '</div>');
  $('.modal-close').one('click', closeModal);
}

function closeModal() {
  $('.modal').remove();
}

$('form a.calculate').on('click', calculateBudget);

