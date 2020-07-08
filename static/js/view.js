var initLanguage = function(callback) {
  var langDomain = ['zh-tw', 'en'];

  // get param
  var getQueryParam = function(param) {
    var found;
    window.location.search.substr(1).split("&").forEach(function(item) {
        if (param ==  item.split("=")[0]) {
            found = item.split("=")[1];
        }
    });
    return found;
  };

  // set lang
  var lang = getQueryParam('lang');
  if(lang==null){
    lang = navigator.language || navigator.userLanguage;
  }

  lang = lang.toLowerCase();

  if(!langDomain.includes(lang)) {
    lang = 'en';
    console.log(`Language "${lang}" is unavailable, context will be shown in English.`);
  }

  callback(lang);
}

initLanguage(function(CURRENT_LANG) {
    console.log('Init Vue, CURRENT_LANG: ' + CURRENT_LANG);

    var nav = new Vue({
        el  : 'nav',
        data: { menu: CONTENT[CURRENT_LANG].nav }
    });

    var about = new Vue({
        el  : '#about',
        data: CONTENT[CURRENT_LANG].about
    });
});