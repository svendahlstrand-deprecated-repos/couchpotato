(function() {
  $(function() {
    var seenShows, total_time;
    total_time = 0;
    $.getJSON('./shows.json', function(shows) {
      var show, _i, _len;
      for (_i = 0, _len = shows.length; _i < _len; _i++) {
        show = shows[_i];
        $('select').append("<option value=\"" + show["run time"] + "\">" + show.title + " (" + show.country + ", " + show["start date"] + ")</option>");
      }
      return $('select').chosen().focus().change(function() {
        if (!$('option:selected').hasClass('seen')) {
          total_time += parseInt($('option:selected').attr('value'));
          $('option:selected').addClass('seen');
          $('#total-time').text(total_time);
          return $('#seen-shows').html(seenShows);
        }
      });
    });
    $('form').submit(function() {
      return false;
    });
    return seenShows = function() {
      var text;
      text = "";
      $('.seen').each(function() {
        return text += "<li>" + this.text + "</li>";
      });
      return text;
    };
  });
}).call(this);
