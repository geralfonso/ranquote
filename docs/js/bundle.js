$(document).ready(function () {
  var colors = ["22,160,133", "39,174,96", "44,62,80", "243,156,18", "231,76,60", "155,89,182", "251,105,100", "52,34,36", "71,46,50", "189,187,153", "119,177,169", "115,168,87", "0,51,102", "128,0,0", "0,206,209"],
    cite = $('.quote_cite'),
    img = $('.quote_img img'),
    author = $('.quote_autor, .title_heading'),
    name = $('.title_heading'),
    btnColor = $('.social_tittle, .quote_btn, .social_buttons'),
    body = $('body');

  $.preloadImages("images/nav/1.jpg", "images/nav/2.jpg")

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

// Force a hover to see the effect
var social = document.getElementsByClassName('social')[0];

setTimeout(function () {
  social.classList.add("hover");
}, 1000);

setTimeout(function () {
  social.classList.remove("hover");
}, 3000);
