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
*     @version 4.0
*/

try {
    /* -- Store all the things -- */
    var name = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Title' output='normal' display_field='value' />");
    var publishDate = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Publish Date' output='normal' display_field='value' />");
    var author = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Author' output='normal' display_field='value' />");
    var articleImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Image' output='normal' formatter='path/*' />");
    var articleSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Summary' output='normal' display_field='value' />");
    var articleFullBody = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Article Body' output='normal' display_field='value' />");
    var fullTextLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='fulltext' use-element='true' filename-element='Name' modifiers='striptags,htmlentities' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");
    var lastModified = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='last_modified' format='MM/dd/yyyy' />");
    


  
  
    /* -- Prepare all the things -- */
    var beginningHTML = '<div class="knowledgeBaseItemWrapper" aria-label="' + articleTitle + '" id="id' + contentID + '"><div class="knowledgeBaseItem standardContent">';
    var endingHTML = '</div></div>';
    var titleLink = "";
    var lastModifiedString = '<div class="lastModified" style="display:inline-block">Last modified: ' + lastModified + '</div>';
  

  
    /* determine which link, if any, goes in the title */
    if (articleFullBody == "") {
      titleLink = "<h4>" + articleTitle + "</h4>";
    } else {
      titleLink = '<h4><a href="' + fieldSectionLink + '" title="Read the full ' + articleTitle + '">' + articleTitle + '</a></h4>';
    }
  
    
  
  
    /* -- Write all the things -- */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, titleLink));
  
    document.write('<div class="summaryWrapper">');
    document.write('<figure class="programImageWrapper"><img src="' + programImageMedia + '" alt="' + altImage + '" class="programImage" /><figcaption class="programImageCaption">' + altImage + '</figcaption></figure>');
    document.write('<div class="summary">' + articleSummary + '</div>')
  
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
  
    // document.write(listOfTags);
  
  
    // document.write(listOfTypes);
  
    /* -- Write Program Level 1 Details --*/
    // if (listOfTypes != "") {
    //   document.write('<div class="levelOne">');
    //   document.write('<div class="articleDetails articleTypes"><h5>Categories: </h5><div class="articleTypes"><span>' + listOfTypes + '</span></div></div>');
    //   document.write('</div>');
    // } else {
    //   document.write('<div class="levelOne articleDetails articleType" style="display: none";><h5>No Category Provided</h5></div>');
    // }
  
  
  
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, lastModified));
    // document.write('<div class="keywords" style="display:none;" aria-hidden="true">' + fieldKeywords + '</div>');
    document.write('</div>'); // close summaryWrapper
  
    document.write(endingHTML);
  
  } catch (err) {
    document.write(err.message);
  }
  