async function pageFunction(context) {
    // See README for context properties. If the syntax is unfamiliar see the link
    // https://javascript.info/destructuring-assignment#object-destructuring
    
    
    var $ = context.jQuery;
    var results = [];

    //context.waitFor('1000')

    //context.saveSnapshot()

    var website = $('.profile-new-head-actions').find('a[referrerpolicy="unsafe-url"').attr('href')
    // uncomment if you want languages
    //var languages = $('.profile-new-head-languages').text().trim()

    results.push({
            website: website,
            url: context.request.url
            //languages: languages
    });
    


    return results
   
}
