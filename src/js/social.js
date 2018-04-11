$(document).ready(function () {
  var curTitle = $('.quote_autor').text(),
    curDescription = $('.quote_cite').find('cite').text(),
    curImage = $('.quote_img').find('img').attr('src');
  $('.social_buttons').on('click', '.facebook--hover', function (el) {
    el.preventDefault();

    shareOverrideOGMeta(curTitle, curDescription, curImage);
  });
});