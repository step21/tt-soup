  function shareArticleToSoup(id) {

    try {
      var es=['body','frameset','head'];
      var u=document.location.protocol+'//www.soup.io/';
      var fn='soup_bookmarklet_'+(Math.floor(Math.random()*100000));

      var query = "" + param_escape(id);

      console.log(query);

      var d = new Date();
      var ts = d.getTime();

      var w = window.open(u+'bookmarklet-loading.html',fn,'toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=400');
      /* var w = window.open('backend.php?op=backend&method=loading', 'ttrss_tweet',
      "status=0,toolbar=0,location=0,width=500,height=400,scrollbars=1,menubar=0");*/

/*
      new Ajax.Request("backend.php",	{
        parameters: query,
        onComplete: function(transport) {
          var ti = JSON.parse(transport.responseText);

          var share_url = "https://getpocket.com/save?" +
          "&title=" + param_escape(ti.title) +
          "&url=" + param_escape(ti.link.strip());

          w.location.href = share_url;

        } });
*/

      } catch (e) {
        exception_error("tweetArticle", e);
      }
    }
