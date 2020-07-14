var CONTENT = {
  'zh-tw': {
    nav: {
      sections: {
        about: '關於我',
        skill: '技能',
        experience: '工作經驗',
        portfolio:'作品集',
      }
    },
    about: {
      info: [
        '嗨，我是 Emma，目前致力於前端開發，也懂得少許後端技術。',
        '曾經以交換學生的身份到歐洲待了半年，閒暇之餘也走過歐洲許多城市。樂於擁抱新事物，因此交換期間內並沒有遇到太大的文化衝擊，反倒嘗試了很多新事物，例如：滑雪、跳傘、一個人的長途旅行、couchsurfing、訂了沒有共同語言的外國人的共乘（當時我透過 google translate 和他溝通，結局是一段非常美好的回憶）。',
        '大學時期在學長的介紹下第一次參加了資訊研討會—— 2013 年的 COSCUP，受到社群與開源精神的感召，至今仍以與會者或志工的身份穿梭大小研討會間。雖然技術還不甚純熟，但認為學習新知識是一件愉悅的事情，正在以自己的步調成長中。除了技術外，對人文和藝術領域也相當感興趣。',
      ],
    },
    skill: {
      skills: {
        frontend: {
          CSS: 4,
          JavaScript: 3,
          React: 2,
        },
        backend: {
          'Node.js': 2,
          Rails: 1,
          PHP: 1,
        },
        others: {
          MongoDB: 2,
          'Meteor.js': 2,
        },
        tools: {
          Git: 3,
        }
      }
    },
    experience: {
      list: [
        {
          company: {
            name: '中興⼤學圖書館校史館組',
            url: 'http://archive.nchu.edu.tw/',
          },
          title: '工讀生',
          duration: '2015/1 - 2016/1',
          tech: ['jsp', 'Dspace'],
          info: [
            '將機構典藏系統前端樣式客製化並串接論⽂分析相關 API（例如 PubMed、Altmetric）',
            '偶爾修復系統（JSP 專案）沒有正常運作的功能',
          ],
        },
        {
          company: {
            name: '享萊 Sharelike',
            url: 'https://sharelike.asia/',
          },
          title: '實習生',
          duration: '2015/7 - 2015/8',
          tech: ['Rails', 'WordPress'],
          info: [
            '期間內接受 Ruby on Rails 訓練，開發通⽤點數功能',
            '與⾏銷部⾨配合改善公司形象網⾴，導入 SEO 加強網⾴曝光率，並將預約體驗表格導入 Google 表單以便⾏銷部⾨彙整',
          ],
        },
        {
          company: {
            name: '數巨飛船 Informaship',
            url: 'https://informaship.com/',
          },
          title: '前端工程師',
          duration: '2017/5 - 2018/10',
          tech: ['Meteor.js', 'Phaser.js', 'LESS', 'MongoDB', 'WordPress'],
          info: [
            '主要負責網⾴前端開發，偶爾兼顧後端開發。',
            '選定 Meteor 搭配 LESS 和 Bootstrap 為主要開發架構，但仍會依案件類型採⽤不同的框架或後端語⾔，因此需要具備能短時間學習並能使用新技術的能力',
            '⼤多開發活動互動式體驗應⽤，因此⼗分注重⽤⼾體驗和響應式設計，曾經參與麥當勞員⼯⼤會、Samsung S9 點食晨⾦等活動系統開發',
          ],
        },
        {
          company: {
            name: '數果數位 SUGOI',
            url: 'https://www.popdaily.com.tw/',
          },
          title: '全端工程師',
          duration: '2018/11 - 2020/7',
          tech: ['ejs', 'React', 'SASS', 'Node,js', 'MongoDB'],
          info: [
            '負責<a href="https://www.popdaily.com.tw" target="_blank">波波黛莉</a>網頁前端、api 開發與維護，想辦法在瀏覽器與 web app 間取得用戶最佳體驗',
            '開發美食地圖、話題等功能、參與 react、AMP 版本重構計畫',
          ],
        },
      ],
    },
    portfolio: {
      list: [
        {
          title: '台灣登革熱地圖',
          type: '靜態網站',
          img: 'dengue_tw.png',
          des: '利用 D3.js 將資料視覺化，以判斷各地區登革熱嚴重性（demo 頁資料僅更新至 2018/6）',
          tags: ['D3.js'],
          link: 'https://emma2334.github.io/dengue_tw/',
          github: 'https://github.com/emma2334/dengue_tw',
        },
        {
          title: '導回分類最新文章',
          type: 'WordPress 插件',
          img: 'RCLP.png',
          des: '在設定 WordPress 導覽列時新增文章分類只需點擊勾選就可以設定是否導到該分類最新文章',
          tags: ['wordpress'],
          link: 'https://wordpress.org/plugins/redirect-to-latest-post-in-category/',
          github: 'https://github.com/emma2334/wp-redirect-to-category-latest-post',
        },
        {
          title: '動漫屋閱讀輔助器',
          type: 'js 腳本',
          img: 'dm5-reader.png',
          des: '大學時為了看漫畫寫的腳本，把一些在手機漫畫 app 的優點整併進腳本（內容展開、自動滾動、自動換章）',
          tags: ['javascript'],
          link: 'https://emma2334.github.io/DM5-Viewer/',
          github: 'https://github.com/emma2334/DM5-Viewer',
        }
      ]
    },
  },
  'en': {
    nav: {
      sections: {
        about: 'about me',
        skill: 'skills',
        experience: 'experience',
        portfolio:'portfolio',
      }
    },
    about: {
      info: [
        'Hi, I\'m Emma, a full stack web developer, mostly working on frontend development.',
        'I did an exchange program to Poland in 2016 for a half year. I\'m always confident with embracing new things, hence there were more priceless experiences than culture shock. Many first times happened in this duration: skiing, sky diving, first solo long distance trip, couch surfing... and the most precious of all, taking a blah blah car from someone who shared no common language with me. Thanks to Google translation, it turned out to be an extremely wonderful memory',
        'learning new things, it won\'t be a tough process. I\'m eager to be challenged and improve! Excepting IT field, I also find interest in cultures and arts.'
      ],
    },
    skill: {
      skills: {
        frontend: {
          CSS: 4,
          JavaScript: 3,
          React: 2,
        },
        backend: {
          'Node.js': 2,
          Rails: 1,
          PHP: 1,
        },
        others: {
          MongoDB: 2,
          'Meteor.js': 2,
        },
        tools: {
          Git: 3,
        }
      }
    },
    experience: {
      list: [
        {
          company: {
            name: 'NCHU Library Archive',
            url: 'http://archive.nchu.edu.tw/',
          },
          title: 'part-time worker',
          duration: '2015/1 - 2016/1',
          tech: ['jsp', 'Dspace'],
          info: [
            'Integrated thesis attention analyzing APIs (such as PubMed and Altmetric)',
            'Maintain and develop institutional repository system',
          ],
        },
        {
          company: {
            name: 'Sharelike',
            url: 'https://sharelike.asia/',
          },
          title: 'intern',
          duration: '2015/7 - 2015/8',
          tech: ['Rails', 'WordPress'],
          info: [
            'Attended Ruby on Rails training session in order to complete development of new features of a universal loyalty points system',
            'Collaborate with marketing department on improving SEO performance',
          ],
        },
        {
          company: {
            name: 'Informaship',
            url: 'https://informaship.com/',
          },
          title: 'frontend developer',
          duration: '2017/5 - 2018/10',
          tech: ['Meteor.js', 'Phaser.js', 'LESS', 'MongoDB', 'WordPress'],
          info: [
            'Involved in backend development as well',
            'Adapting new technology in short time is required, since the choice of framework is different from case to case',
            'Focusing on user experiences. Always fine-tune UI/UX according to user feedback',
          ],
        },
        {
          company: {
            name: 'SUGOI',
            url: 'https://www.popdaily.com.tw/',
          },
          title: 'full stack web developer',
          duration: '2018/11 - 2020/7',
          tech: ['ejs', 'React', 'SASS', 'Node,js', 'MongoDB'],
          info: [
            'Develop and maintain both api and web frontend in <a href="https://www.popdaily.com.tw" target="_blank">Popdaily</a>',
            'Involved in development of food map, topic, etc',
            'Participated in refactor of react and AMP version',
            'Make sure user experience keeps well in both browser and web app'
          ],
        },
      ],
    },
    portfolio: {
      list: [
        {
          title: 'Taiwan dengue map',
          type: 'static web',
          img: 'dengue_tw.png',
          des: 'Visualize data with D3.js to see dengue infection severity in Taiwan (data was only updated to 2018/6 in demo page)',
          tags: ['D3.js'],
          link: 'https://emma2334.github.io/dengue_tw/',
          github: 'https://github.com/emma2334/dengue_tw',
        },
        {
          title: 'Redirect to latest post',
          type: 'WordPress plugin',
          img: 'RCLP.png',
          des: 'Setup whether navbar links redirect to the latest post of an category by only a click on checkbox',
          tags: ['wordpress'],
          link: 'https://wordpress.org/plugins/redirect-to-latest-post-in-category/',
          github: 'https://github.com/emma2334/wp-redirect-to-category-latest-post',
        },
        {
          title: 'DM5 Viewer',
          type: 'user script',
          img: 'dm5-reader.png',
          des: 'In order to read comics in a lazy way, I wrote a script which contains those awesome features in comic apps when I was in college',
          tags: ['javascript'],
          link: 'https://emma2334.github.io/DM5-Viewer/',
          github: 'https://github.com/emma2334/DM5-Viewer',
        }
      ]
    },
  }
}