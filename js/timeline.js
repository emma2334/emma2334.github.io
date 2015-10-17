$(function(){
  // all events
  var event = [
    { 'title': 'COSCUP 2013',
      'date': '03/08/2013',
      'img': './img/timeline/coscup2013.jpg',
      'img_t': './img/timeline/coscup2013_t.jpg',
      'period': '2013/8/3~2013/8/4',
      'info': '第一次參加年會。',
      'text': '第一次參加 conference，感謝若虛大大帶我進入這個圈子。<br><br>\
              因為 BESG 的關係認識了不少學生會資訊部的大大，在電競決賽時還守在電腦前面搶 COSCUP 的票XD。大家都搶到票了，於是有了這次部遊(?)。<br><br>\
              由於當時還是打雜小妹的我，技術的東西根本一知半解，所以只能挑非技術性的東西聽 ( ;  _  ; )。雖然都挑非技術性的議程聽，但聽了還是覺得大家都好猛喔，該加油了我。'},
    { 'title': 'MOPCON 2013',
      'date': '28/10/2013',
      'img': './img/timeline/mopcon2013.jpg',
      'img_t': './img/timeline/mopcon2013_t.jpg',
      'period': '2013/10/28~2013/10/29',
      'info': '仍舊會眾乙枚，而且完全不是開發者的狀態 ( ;  _  ; )。',
      'text': ''},
      { 'title': 'SITCON 2014',
        'date': '15/03/2014',
        'img': './img/timeline/sitcon2014.jpg',
        'img_t': './img/timeline/sitcon2014_t.jpg',
        'period': '2014/3/15',
        'info': '第一次參加 SICON，成就解鎖！',
        'text': ''},
      { 'title': 'COSCUP 2014',
        'date': '19/07/2014',
        'img': './img/timeline/coscup2014.jpg',
        'img_t': './img/timeline/coscup2014_t.jpg',
        'period': '2014/7/19~2014/7/20',
        'info': '第一次當工人就上手！<br>as 場務門機組組員',
        'text': '第一次當 conference 工作人員，成就解鎖！<br><br>\
                提早一天去做場佈，隻身前往，完全沒認識的人，各種自我挑戰吶根本。不過還好 COSCUP 的大家人都很好，認識了很多好朋友 ( ´ ▽ ` )ﾉ。<br><br>\
                弄完發現大家都不見了，找不到人陪我去住宿地點，只好自己回去。結果好不容易找到住宿地點卻找不到人陪我吃晚餐，覺得我好可憐喔嗚嗚嗚。<br>\
                <a href="https://www.facebook.com/photo.php?fbid=703098666428087&set=a.118622201542406.20471.100001838803120&type=3&theater" target="_blank">附上找不到室友的蠢照乙張</a><br><br>\
                為了不接觸人群，把報道組志願排到最後。結果當門神超無聊的呀哈哈哈，然後場佈認識的人都在報道組...இдஇ<br>\
                各種初體驗，也學到了很多事，跨出這一步雖然一開始覺得有點緊張、有點可怕，不過超值得！以後還會繼續加油的！'},
      { 'title': 'HITCON x PLG 2014',
        'date': '21/08/2014',
        'img': './img/timeline/hitcon2014.jpg',
        'img_t': './img/timeline/hitcon2014_t.jpg',
        'period': '2014/8/21~2014/8/22',
        'info': 'as 議程助理',
        'text': '本來是報名場務組志工，結果沒有被選上，最後跑去議程組當議程助理了。感謝小Q告訴我還有議程助理的個選項 இдஇ。<br><br>\
                頓時間覺得門神無聊歸無聊，不過比起議程助理真的輕鬆多了。議程結束宣布公告一開始瘋狂吃螺絲，不過之後越來越上手，越講越順了~~ 有趴尼 Orin 的 cover，兩天的工作順利結束了，棒棒！'},
      { 'title': 'Rails Girls #4',
        'date': '29/08/2014',
        'img': './img/timeline/rg.jpg',
        'img_t': './img/timeline/rg_t.jpg',
        'period': '2014/8/29~2014/8/30',
        'info': '謝謝讓我有這個機會去 RG，覺得 RG 超棒的呀!!! இдஇ',
        'text': '在 COSCUP 時遇見 Rock，超感謝他推薦我去參加 Rails Girls 的。別人跟我說資訊本科系的人都不太容易申請上 Rails Girls，嗚嗚，超感謝 Rock 的，真的！இдஇ<br><br>\
                雖然只有短短不到一天半左右的時間，卻覺得收獲滿滿！而且教練人超好，然後又帥>///< (咦)。現在還在努力學後端，後端好難吶..._(´ཀ`」 ∠)_'},
      { 'title': 'PHPConf 2014',
        'date': '18/10/2014',
        'img': './img/timeline/phpconf2014.jpg',
        'img_t': './img/timeline/phpconf2014_t.jpg',
        'period': '2014/10/18',
        'info': 'as 議程助理',
        'text': '覺得我超白癡呀根本，申請了場務組工人，也被選上了，結果忘記填確認單於是失去工人身份了!!!!!! QAQ<br><br>\
                感謝蛇蛇找我當議程助理，我這次才有機會出現在 PHPConf！雖然已經有一次議程助理經驗了，可是還是會緊張吶，雖然這次的工作比較簡單，只要舉時間牌和幫主持人注意其他事情就好。我的主持人趴尼是蛇蛇，整個打扮的超美!!!! /兩廳的主持人都盛裝打扮吶！能當蛇蛇的趴尼覺得很榮幸，覺得她超厲害的！♥'},
      { 'title': 'SITCON 2015',
        'date': '07/03/2015',
        'img': './img/timeline/sitcon2015.jpg',
        'img_t': './img/timeline/sitcon2015_t.jpg',
        'period': '2015/3/7',
        'info': 'as 議程助理',
        'text': '這次當議程助理完全沒有趴尼呀呀呀呀呀!!!!! 連介紹講者都要自己來，上台講話的時候真的超可怕的>  <。<br><br>\
                不小心講錯話「咧~:-P」了一下結果一直被學弟噹QAQ。<br>\
                不曉得哪位大大在 IRC 上說我聲音很好聽，結果就被果醬截圖狂嗆惹QAQ。雖然不知道是哪位大大，不過謝啦XD<br>\
                <img src="./img/humm.jpg" class="img-responsive" alt=""><br><br>\
                看到很多好久不見的人，覺得開心 ♥'}
    ];

    // append to html
    for(i=0; i<event.length; i++){
      $('<div class="event">\
          <div class="item" data-id="' + event[i].date + '" data-description="' + event[i].title + '">\
            <a class="image_rollover_bottom con_borderImage" data-description="ZOOM IN" href="' + event[i].img + '" rel="lightbox[timeline]">\
            <img src="' + event[i].img_t + '" alt=""/>\
            </a>\
            <div class="post_date"></div>\
            <span>' + event[i].period + '<br>' + event[i].info + '</span>\
          </div>\
        </div>').appendTo('.timelineFlat')
      if(event[i].text!=''){
        $('[data-description="' + event[i].title + '"][data-id="' + event[i].date + '"]').append('<div class="read_more" data-id="' + event[i].date + '">Read more</div>');
        $('<div class="item_open" data-id="' + event[i].date + '">\
            <div class="item_open_content">\
              <div class="timeline_open_content">\
                <header>' + event[i].period + '</header>\
                <span>' + event[i].text + '</span>\
              </div>\
            </div>\
          </div>').appendTo($('[data-description="' + event[i].title + '"][data-id="' + event[i].date + '"]').parent('.event'));
      }
    }

  // light
  $('.tl2').timeline({
    openTriggerClass : '.read_more',
    startItem : $(".event").last().prev().find('.item').attr('data-id'),
    closeText : 'x',
    ajaxFailMessage: 'This ajax fail is made on purpose. You can add your own message here, just remember to escape single quotes if you\'re using them.'
  });
  $(document).ready(function(){
    var e=$(".event").last().prev(),
        click=false,
        max=$(".event").last().find('.item').attr('data-count');
    $('div.read_more').click(function(){
      click=true;
      e = $(".item_open[data-id='" + $(this).attr('data-id') + "']");
      if(!e.find('span').hasClass('mCustomScrollbar')) enroll();
      e=e.parent();
    });

    $('.item_open').find('.t_close').click(function(){
      click=false;
    });

    $('.t_left').click(function(){
      // console.log(e.prev().find('.item_open').attr('data-count'));
      if(parseInt(e.prev().find('.item_open').attr('data-count'))>=0){
        e=e.prev().find('.item_open');
        // console.log(e);
        if(click==true && !e.find('span').hasClass('mCustomScrollbar')) enroll();
        e=e.parent();
      }
    });

    $('.t_right').click(function(){
      // console.log(e.next().find('.item_open').attr('data-count'));
      if(parseInt(e.next().find('.item_open').attr('data-count'))<=max){
        e=e.next().find('.item_open');
        // console.log(e);
        if(click==true && !e.find('span').hasClass('mCustomScrollbar')) enroll();
        e=e.parent();
      }
    });

    function enroll(){
        var height = e.height()-60-e.find('h2').height();
        e.find('.timeline_open_content').children('span').css('max-height', height).mCustomScrollbar({
          autoHideScrollbar:true,
          theme:"light-thin"
        });
    }
  });
});

// display date
$(function(){
  var month={01: "Jan", 02: "Feb", 03: "Mar", 04: "Apr", 05: "May", 06: "Jun", 07: "Jul", 08: "Aug", 09: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
  for(var i=0; i<$('.item').length; i++){
    var date=$('.item').eq(i).attr('data-id').split('/');
    $('.item').eq(i).find("div.post_date").html(date[0]+"<span>"+month[parseInt(date[1])]+"</span>");
    var name="<h2>"+$('.item').eq(i).attr('data-description')+"</h2>";
    $('.item').eq(i).children("span").before(name);
  }
});
