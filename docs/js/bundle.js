"use strict";

$(document).ready(function () {
  var cite = $('.quote_cite'),
      img = $('.quote_img img'),
      author = $('.quote_autor, .title_heading'),
      name = $('.title_heading'),
      btnColor = $('.social_tittle, .quote_btn, .social_buttons'),
      body = $('body'),
      twitter = $('.twitter--hover');

  function change(quote) {
    var current = Math.floor(Math.random() * quote.length);

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
    twitter.attr('href', 'http://twitter.com/share?text=' + quote[current].cite + ' -' + quote[current].author + '&via=GerAlfonso&url=https%3A%2F%2Fgeralfonso.github.io/ranquote');

    $('.social_buttons').on('click', '.facebook--hover', function (e) {
      e.preventDefault();
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.shares',
        action_properties: JSON.stringify({
          object: {
            'og:url': 'https://geralfonso.github.io/ranquote',
            'og:title': quote[current].author,
            'og:description': quote[current].cite,
            'og:image:url': quote[current].image,
            'og:image:type': 'image/gif'
          }
        })
      }, function (response) {});
    });
  }
  $.ajax("https://geralfonso.github.io/ranquote/server/db.json", {
    dataType: 'json',
    success: function success(json) {
      var curQuote = json.quotes;
      change(curQuote);
      $('.quote_btn').on('click', function (el) {
        el.preventDefault();
        change(curQuote);
      });
    }
  });
});
//# sourceMappingURL=bundle.js.map
