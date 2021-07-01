  /***
   *     @author Victor Chimenti, MSCS-SE '20
   *     @file v9-fulltext.js
   *     v9/fulltext
   *
   *     Document will write once when the page loads
   *
   *     @version 5.1
   */




  try {

      /***
       *  default declarations
       * 
       * */
      var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
      var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
      var articleCaption = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Caption' output='normal' display_field='value' />");
      var articleAuthor = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' display_field='value' />");
      var articlePhotoCredit = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Photography By' output='normal' display_field='value' />");
      var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' date_format='MMMM d, yyyy' />");
      var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
      var articleImageAlt = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Image' attribute='description' />");
      var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />");
      var externalLinkText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link Text' output='normal' modifiers='striptags,htmlentities' />");
      var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
      var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Article Title' modifiers='striptags,htmlentities' />");
      var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
      var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");




      /***
       *  default initializations
       * 
       * */
      var beginningHTML = '<div class="newsItemWrapper card" id="id' + contentID + '" aria-label="' + articleTitle + '"><div class="newsItem standardContent">';
      var endingHTML = '</div></div>';
      var titleLink = '<div class="card-header"><h3>"' + articleTitle + '"</h3></div>';
      var openSummaryWrapper = '<div class="articleSummary card-body">';
      var closeSummaryWrapper = '</div>';
      var openImageWrapper = '<div class="imageWrapper hidden visually-hidden">';
      var closeImageWrapper = '</div>';
      var articleCaptionString = '';
      var imageString = '<img class="hidden visually-hidden" />';
      var summaryString = '<p class="card-text">' + articleSummary + '</p>';
      var dateString = '<p class="card-text"><em class="publishDate text-muted">' + publishDate + '</em></p>';
      var externalLinkString = '<span class="externalLink hidden">No Proper Link Provided</span>';
      var readMoreString = '<p class="readmore"></p>';



      /***
       *  Parse for external link
       * 
       * */
      if (externalLink != "" && externalLinkText != "") {
          externalLinkString = '<span class="externalLink"><a href="' + externalLink + '" title="' + externalLinkText + '" target="_blank"><em>' + externalLinkText + '</em></a></span>';
      }


      /***
       *  Parse for image
       * 
       * */
      if (articleImage != "") {
          openImageWrapper = '<div class="imageWrapper">';
          imageString = '<img src="' + articleImage + '" class="articleImage card-img" alt="' + articleImageAlt + '" />';
      }




      /***
       *  Parse for caption
       * 
       * */
      if (articleCaption != "") {
          imageString = '<img src="' + articleImage + '" class="articleImage card-img" alt="' + articleImageAlt + '" />';
      }




      /***
       *  write document once
       * 
       * */
      document.write(beginningHTML);
      document.write(anchorTag);
      document.write(titleLink);
      document.write(openImageWrapper);
      document.write(imageString);
      document.write(closeImageWrapper);
      document.write(openSummaryWrapper);
      document.write(externalLinkString);
      document.write(dateString);
      document.write(articleFullBody);
      document.write(closeSummaryWrapper);
      document.write(endingHTML);




  } catch (err) {
      document.write(err.message);
  }