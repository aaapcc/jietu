<script type="text/javascript">$(function() {
    $('.slt-phone-os').change(function() {
      var mob_os = $('.slt-p-os option:selected').val();
      var str = '../static/app/css/public/app_os_';
      if (mob_os != '') {
        str += mob_os
      }
      str += '.css';
      $('#mobileOsStyle').remove();
      var link = document.createElement('link');
      link.id = 'mobileOsStyle';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = str;
      var existingLink = document.getElementById('mobileSkinStyle');
      if (existingLink) {
        document.head.insertBefore(link, existingLink)
      } else {
        document.head.appendChild(link)
      }

      var shi = $('.slt-p-skin option:selected').val();
      var str = '../static/app/css/public/app_os_';
      if (mob_os != '') {
        str += mob_os + '_'
      }
      if (shi != '') {
        str += shi
      }
      str += '.css';
      $('#mobileSkinStyle').remove();
      var link2 = document.createElement('link');
      link2.id = 'mobileSkinStyle';
      link2.rel = 'stylesheet';
      link2.type = 'text/css';
      link2.href = str;
      var existingLink = document.getElementById('mobilePageStyle');
      if (existingLink) {
        document.head.insertBefore(link2, existingLink)
      } else {
        document.head.appendChild(link2)
      }

      $('#appDevIframe').remove();
      var iframe = document.createElement('iframe');
      iframe.id = 'appDevIframe';
      var iframeSrc = '../iframe/ipx/wechat_im_';
      var mob_os = $('.slt-p-os option:selected').val();
      if (mob_os !== '') {
        iframeSrc += mob_os + '_'
      }
      var shi = $('.slt-p-skin option:selected').val();
      if (shi !== '') {
        iframeSrc += shi
      }
      iframeSrc += '.html';
      iframe.src = iframeSrc;
      document.body.appendChild(iframe)
    }).change();

    $('.slt-phone-skin').change(function() {
      var mob_os = $('.slt-p-os option:selected').val();
      var str = '../static/app/css/public/app_os_';
      if (mob_os != '') {
        str += mob_os
      }
      str += '.css';
      $('#mobileOsStyle').remove();
      var link = document.createElement('link');
      link.id = 'mobileOsStyle';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = str;
      var existingLink = document.getElementById('mobileSkinStyle');
      if (existingLink) {
        document.head.insertBefore(link, existingLink)
      } else {
        document.head.appendChild(link)
      }

      var shi = $('.slt-p-skin option:selected').val();
      var str = '../static/app/css/public/app_os_';
      if (mob_os != '') {
        str += mob_os + '_'
      }
      if (shi != '') {
        str += shi
      }
      str += '.css';
      $('#mobileSkinStyle').remove();
      var link2 = document.createElement('link');
      link2.id = 'mobileSkinStyle';
      link2.rel = 'stylesheet';
      link2.type = 'text/css';
      link2.href = str;
      var existingLink = document.getElementById('mobilePageStyle');
      if (existingLink) {
        document.head.insertBefore(link2, existingLink)
      } else {
        document.head.appendChild(link2)
      }

      $('#appDevIframe').remove();
      var iframe = document.createElement('iframe');
      iframe.id = 'appDevIframe';
      var iframeSrc = '../iframe/ipx/wechat_im_';
      var mob_os = $('.slt-p-os option:selected').val();
      if (mob_os !== '') {
        iframeSrc += mob_os + '_'
      }
      var shi = $('.slt-p-skin option:selected').val();
      if (shi !== '') {
        iframeSrc += shi
      }
      iframeSrc += '.html';
      iframe.src = iframeSrc;
      document.body.appendChild(iframe)
    }).change()
  });
</script>