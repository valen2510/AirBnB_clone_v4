$(document).ready(function () {
  const amenities = [];
  $('input').css('margin-left', '10px');
  $('input[type=checkbox]').click(function () {
    if ($(this).prop('checked')) {
      amenities.push($(this).attr('data-name'));
    } else {
      const index = amenities.indexOf($(this).attr('data-name'));
      amenities.splice(index, 1);
    }
    $('.amenities h4').text(amenities.join(', ')).css({ width: '220px', height: '16px', overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' });
  });
});
