(function ($) {
  $doc = $(document);
  function get_posts($params) {
    $container = $('#container-async');
    $content = $container.find('.c-tabs__content ul');

    $.ajax({
      url: bobz.ajax_url,
      data: {
        action: 'do_filter_posts',
        //nonce use for verifying when send data to server
        nonce: bobz.nonce,
        params: $params
      },
      type: 'post',
      dataType: 'json',
      success: function (data, textStatus, XMLHttpRequest) {
        if (data.status === 200) {
          $content.html(data.content);
        }
        else if (data.status === 201) {
          $content.html(data.message);
          console.log('data fail.');
        }
        else {
          console.log(data.status+ " " + data.message);
        }
      },
      error: function (MLHttpRequest, textStatus, errorThrown) {
        console.log(textStatus);
      },
      complete: function (data, textStatus) {
        msg = textStatus;
        if (textStatus === 'success') {
          msg = data.responseJSON.found;
        }
        console.log('Posts found: ' + msg);
      }
    });
  }

  $('#container-async').on('click',
    'a[data-filter],.c-pagination a',
    function (event) {
    if (event.preventDefault) { event.preventDefault(); }
    $this = $(this);

    if ($this.data('filter')) {
      $this.closest('ul').find('.active').removeClass('active');
      $this.parent('li').addClass('active');
      $page = $this.data('page');
    }
    else {
      $page = parseInt($this.attr('href').replace(/\D/g, ''));
      $this = $('.nav-filter .active a');
    }
    $params = {
      'page': $page,
      'tax': $this.data('filter'),
      'term': $this.data('term'),
      'qty': $this.closest('#container-async').data('paged'),
    };
    get_posts($params);
  });
  $('a[data-term="all-terms"]').trigger('click');
})(jQuery);
