$(document).ready(function () {
  var colors = ["22,160,133", "39,174,96", "44,62,80", "243,156,18", "231,76,60", "155,89,182", "251,105,100", "52,34,36", "71,46,50", "189,187,153", "119,177,169", "115,168,87", "0,51,102", "128,0,0", "0,206,209"],
    cite = $('.quote_cite'),
    img = $('.quote_img img'),
    author = $('.quote_autor, .title_heading'),
    name = $('.title_heading'),
    btnColor = $('.social_tittle, .quote_btn, .social_buttons'),
    body = $('body');


  function change(quote) {
    var current = Math.floor(Math.random() * (quote.length));
    cite.find('cite').text(quote[current].cite);
    img.attr({
      'src': quote[current].image,
      'alt': quote[current].author
    });
    author.text(quote[current].author);
    body.css('background-color', 'rgba(' + quote[current].color + ',0.3)');
    cite.css('background-color', 'rgb(' + quote[current].color + ')');
    name.css('color', 'rgb(' + quote[current].color + ')');
    btnColor.css('color', 'rgb(' + quote[current].color + ')');
  }
  $.ajax("https://geralfonso.github.io/ranquote/server/db.json", {
    success: function (json) {
      var curQuote = json.quotes;
      change(curQuote);
      $('.quote_btn').on('click', function (el) {
        el.preventDefault();
        change(curQuote);
      });
    }
  });
});
