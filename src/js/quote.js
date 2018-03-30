$(document).ready(function () {
  var colors = ["22,160,133", "39,174,96", "44,62,80", "243,156,18", "231,76,60", "155,89,182", "251,105,100", "52,34,36", "#472E32", "#BDBB99", "#77B1A9", "#73A857"],
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
    body.css('background-color', 'rgba(' + colors[current] + ',0.3)');
    cite.css('background-color', 'rgb(' + colors[current] + ')');
    name.css('color', 'rgb(' + colors[current] + ')');
    btnColor.css('color', 'rgb(' + colors[current] + ')');
  }
  $.ajax("https://geralfonso.github.io/ranquote/server/db.json", {
    success: function (json) {
      var curQuote = json.quotes;
      change(curQuote);
      $('.quote_btn').on('click', function (el) {
        el.preventDefault();
        change(curQuote);
      });
    },
    error: function (request, errorType, errorMessage) {
      console.log('Error: ' + errorType + ' with message: ' + errorMessage);
    },
    timeout: 1000,
    beforeSend: function () {
      $('.confirmation').addClass('is--loading');
    }
  });


  /*
    $.getJSON("https://geralfonso.github.io/ranquote/server/db.json", function (json) {
      console.log(json);
      var curQuote = json.quotes;
      var current = Math.floor(Math.random() * curQuote.length);
      cite.find('cite').text(curQuote[current].cite);
      img.attr({
        'src': curQuote[current].image,
        'alt': curQuote[current].author
      });
      author.text(curQuote[current].author);
      body.css('background-color', 'rgba(' + colors[current] + ',0.3)');
      cite.css('background-color', 'rgb(' + colors[current] + ')');
      $('.title_heading').css('color', 'rgb(' + colors[current] + ')');

      $('.social_tittle, .quote_btn, .social_buttons').css('color', 'rgb(' + colors[current] + ')');

      $('.quote_btn').on('click', function (el) {
        el.preventDefault();
        current = Math.floor(Math.random() * (curQuote.length));
        console.log("Frase actual: " + current + " y total de frases: " + curQuote.length);
        cite.find('cite').text(curQuote[current].cite);
        img.attr({
          'src': curQuote[current].image,
          'alt': curQuote[current].author
        });
        author.text(curQuote[current].author);
        body.css('background-color', 'rgba(' + colors[current] + ',0.3)');
        cite.css('background-color', 'rgb(' + colors[current] + ')');
        $('.title_heading').css('color', 'rgb(' + colors[current] + ')');

        $('.social_tittle, .quote_btn, .social_buttons').css('color', 'rgb(' + colors[current] + ')');

      });
    });
  */

});
