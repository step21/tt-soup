  function shareArticleToSoup(id) {

    try {
      var bookmarkletUrl = "http://www.soup.io/bookmarklet/";
      var bookmarkletCloseTriggerUrl: "http://www.soup.io/bookmarklet/save
      var query = "?op=pluginhandler&plugin=soup&method=getInfo&id=" + param_escape(id);
      var es=['body','frameset','head'];

      console.log(query);

      var d = new Date();
      var ts = d.getTime();

      var w = window.open('backend.php?op=backend&method=loading','ttrss_tweet','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=400');
      /* var w = window.open('backend.php?op=backend&method=loading', 'ttrss_tweet',
      "status=0,toolbar=0,location=0,width=500,height=400,scrollbars=1,menubar=0");*/


      new Ajax.Request("backend.php",	{
        parameters: query,
        onComplete: function(transport) {
          var ti = JSON.parse(transport.responseText);

    /*
          var share_url = "https://getpocket.com/save?" +
          "&title=" + param_escape(ti.title) +
          "&url=" + param_escape(ti.link.strip());*/
          var share_url = u +

          w.location.href = share_url;

        } });
*/

      } catch (e) {
        exception_error("tweetArticle", e);
      }
    }

/*



*/
