jQuery(document).ready(function($) {
  if ($('body').hasClass('update-core-php')) {
    $('.plugin-title strong').each(function() {
      if ($(this).text() === 'Ocade Blocks') {
        const dashiconSpan = $(this).closest('.plugin-title').find('.dashicons');  
        const customIcon = $('<img>').attr('src', ocadeblocks.iconUrl).css('width', '65px').css('height', '65px');
        dashiconSpan.replaceWith(customIcon);
      }
    });
  }
});
