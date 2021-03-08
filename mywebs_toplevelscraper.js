async function pageFunction(context) {
    // See README for context properties. If the syntax is unfamiliar see the link
    // https://javascript.info/destructuring-assignment#object-destructuring
    
    
    var $ = context.jQuery;
    var results = [];
    var base_url = "https://mywed.com"

    // This line is optional - it makes Apify wait for x seconds before trying
    // to extract data. Helpful for sites that lazy load data
    context.waitFor('1000')

    $('.filter-rusult-list-item').each(function(){
        results.push({
            name: $(this).find('.cap-author-name').text().trim(),
            // find a links, in case we get multiple, use eq(0) to get the first
            // add links onto a base_url so they're complete
            link: base_url.concat($(this).find('a').eq(0).attr('href')), 
            // find images, in case we get multiple, use eq(0) to get the first
            img_link: $(this).find('.photos-wrap').find('img').eq(0).attr('realsrc'),
            // Use general selector of the form "[attribute='value']" to get meta info
            // this gives an array of meta info which we access via eq('n')
            tagline: $(this).find('span[itemprop="workLocation"]').find('meta').eq(0).attr('content'),
            city: $(this).find('span[itemprop="workLocation"]').find('meta').eq(1).attr('content'),
            telephone: $(this).find('span[itemprop="workLocation"]').find('meta').eq(2).attr('content'),
            lat: $(this).find('span[itemprop="workLocation"]').find('meta').eq(3).attr('content'),
            long: $(this).find('span[itemprop="workLocation"]').find('meta').eq(4).attr('content'),
        });
    });    

   // For each list item of class .filter-rusult-list-item, do  
   

    return results
   
}
