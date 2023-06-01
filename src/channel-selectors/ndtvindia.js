const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.ndtvindia = {
    feedSelector: '.rss_list li',
    newsSelector: '.ins_storybody p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}