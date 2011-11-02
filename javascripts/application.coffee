$ ->
  total_time = 0

  $.getJSON './shows.json', (shows) ->
    for show in shows
      $('select').append "<option value=\"#{show["run time"]}\">#{show.title} (#{show.country}, #{show["start date"]})</option>"

    $('select').chosen().focus().change ->
      if !$('option:selected').hasClass 'seen'
        total_time += parseInt $('option:selected').attr('value')
        $('option:selected').addClass 'seen'
        $('#total-time').text total_time
        $('#seen-shows').html seenShows

  $('form').submit ->
    return false

  seenShows = ->
    text = ""
    $('.seen').each ->
      text += "<li>#{this.text}</li>"

    return text
  #    html = ""
  #    for show in shows
  #      html += "<option value=\"#{show["run time"]}\">#{show.title} (#{show.country}, #{show["start date"]})</option>"
  #
  #    $('select').html html

