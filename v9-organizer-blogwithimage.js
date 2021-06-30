  /***
   *     @author Victor Chimenti, MSCS-SE '20
   *     @file v9-organizer-blogwithimage.js
   *     v9/organizer/blogwithimage
   *
   *     This new blog content type is derived from the Career Engagement Blog.
   *
   *     This content type will work in conjunction with the Organizer and each item
   *     will contain one searchable, article.
   *
   *     Document will write once when the page loads
   *
   *     @version 4.1
   */

  try {


      /***
       *  default declarations
       * 
       * */
      var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
      var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
      var articleSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary' output='normal' display_field='value' />");
      var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' display_field='value' />");
      var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
      var articleImageAlt = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Image' attribute='description' />");
      var externalLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link' output='normal' modifiers='striptags,htmlentities' />");
      var externalLinkText = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Link Text' output='normal' modifiers='striptags,htmlentities' />");
      var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
      var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Article Title' modifiers='striptags,htmlentities' />");
      var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");





      /***
       *  default initializations
       * 
       * */
      var beginningHTML = '<div class="newsItemWrapper" id="id' + contentID + '" aria-label="' + articleTitle + '"><div class="newsItem standardContent">';
      var endingHTML = '</div></div>';
      var titleLink = '<h3>"' + articleTitle + '"</h3>';
      var openSumaryWrapper = '<div class="articleSummary">';
      var closeSumaryWrapper = '</div>';
      var openImageWrapper = '<div class="newsImage hidden visually-hidden">';
      var closeImageWrapper = '</div>';
      var imageString = '<img class="hidden visually-hidden" />';
      var summaryString = '<p>' + articleSummary + '<em class="publishDate">' + publishDate + '</em></p>';
      var externalLinkString = '<span class="externalLink hidden">No Proper Link Provided</span>';





      /***
       *  check for fulltext content
       * 
       * */
      if (articleFullBody != "") {
          titleLink = '<h3><a href="' + fullTextLink + '" title="Read the full post ' + articleTitle + '">' + articleTitle + '</a></h3>';
      }


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
          openImageWrapper = '<div class="newsImage">';
          imageString = '<img src="' + articleImage + '" class="articleImage" alt="' + articleImageAlt + '" />';
      }



      /***
       *  write document once
       * 
       * */
      document.write(beginningHTML);
      document.write(titleLink);
      document.write(openImageWrapper);
      document.write(imageString);
      document.write(closeImageWrapper);
      document.write(openSumaryWrapper);
      document.write(externalLinkString);
      document.write(summaryString);

      document.write(closeSumaryWrapper);





      if (author != "") {
          document.write('<div class="author">');
          document.write('<div class="articleDetails articleAuthor"><h5>By: </h5><div class="articleAuthor"><h5>' + author + '</h5></div></div>');
          document.write('</div>');
      } else {
          document.write('<div class="author articleDetails articleAuthor" style="display: none";><h5>No Author Provided</h5></div>');
      }

      if (publishDate != "") {
          document.write('<div class="publishDate">');
          document.write('<div class="articleDetails articleDate"><h5>Published: </h5><div class="articleDate"><h5>' + publishDate + '</h5></div></div>');
          document.write('</div>');
      } else {
          document.write('<div class="publishDate articleDetails articleDate" style="display: none";><h5>No Date Provided</h5></div>');
      }





      document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, lastModified));
      document.write('</div>'); // close summaryWrapper

      document.write(endingHTML);

  } catch (err) {
      document.write(err.message);
  }