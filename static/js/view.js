;(() => {
  /* Parameters */
  // Check language
  const langDomain = ['zh-tw', 'en']
  let CURRENT_LANG = (
    window.location.search.match('lang=([^&]+)')?.[1] ||
    navigator.language ||
    navigator.userLanguage
  ).toLowerCase()
  if (!langDomain.includes(CURRENT_LANG)) {
    CURRENT_LANG = 'en'
    console.log(
      `Language "${CURRENT_LANG}" is unavailable, context will be shown in English.`
    )
  }

  // Translation for each section
  const TITLE = {
    'zh-tw': {
      about: '關於我',
      skill: '技能',
      experience: '工作經驗',
      portfolio: '作品集',
    },
    en: {
      about: 'about me',
      skill: 'skills',
      experience: 'experience',
      portfolio: 'portfolio',
    },
  }

  /* Templates */
  // Icons
  ;[
    {
      type: 'github',
      viewBox: '0 0 512 512',
      icon: '<path d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"/>',
    },
    {
      type: 'link',
      viewBox: '0 0 16 16',
      icon: '<path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"/><path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"/>',
    },
    {
      type: 'global',
      viewBox: '0 0 16 16',
      icon: '<path fill-rule="evenodd" d="M1.018 7.5h2.49c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM2.255 4H4.09a9.266 9.266 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.024 7.024 0 0 0 2.255 4zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V1.077zM7.5 5H4.847a12.5 12.5 0 0 0-.338 2.5H7.5V5zm1 2.5V5h2.653c.187.765.306 1.608.338 2.5H8.5zm-1 1H4.51a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm1 2.5V8.5h2.99a12.495 12.495 0 0 1-.337 2.5H8.5zm-1 1H5.145c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm-2.173 2.472a6.695 6.695 0 0 1-.597-.933A9.267 9.267 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 11H3.82a13.651 13.651 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm8.999 3.472A7.024 7.024 0 0 0 13.745 12h-1.834a9.278 9.278 0 0 1-.641 1.539 6.688 6.688 0 0 1-.597.933zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855A7.98 7.98 0 0 0 10.855 12zm1.325-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm.312-3.5h2.49a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.91 4a9.277 9.277 0 0 0-.64-1.539 6.692 6.692 0 0 0-.597-.933A7.024 7.024 0 0 1 13.745 4h-1.834zm-1.055 0H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"/>',
    },
  ].map(e => {
    Vue.component('icon-' + e.type, {
      props: { href: String, onclick: Function },
      template: `
        <a v-if="href" :href="href" class="icon">
          <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="${e.viewBox}" fill="currentColor">'${e.icon}</svg>
          <slot></slot>
        </a>
        <div v-else :href="href" class="icon">
          <svg v-on:click="onclick()" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="${e.viewBox}" fill="currentColor">'${e.icon}</svg>
          <slot></slot>
        </div>
      `,
    })
  })

  // Language
  Vue.component('language', {
    props: ['id', 'checked'],
    template: `
    <span>
        <input
          type="radio"
          name="lang"
          :id="id"
          :checked="this.$parent.$parent.lang === id"
          v-on:change="changeLang(id)"
        />
        <label :for="id">
          <slot></slot>
         </label>
       </span>
    `,
    methods: {
      changeLang: lang => {
        location.href = '?lang=' + lang
      },
    },
  })

  // Section
  Vue.component('section-template', {
    props: { id: String },
    template: `
      <section :id="id">
        <div class="container">
          <h2>{{this.$parent.sections[id]}}</h2>
          <div class="row">
            <slot></slot>
          </div>
        </div>
      </section>
      `,
  })

  // Experience
  Vue.component('work', {
    props: ['data'],
    computed: {
      ...Object.fromEntries(
        ['company', 'url', 'title', 'duration', 'tech', 'info'].map((e, i) => [
          e,
          vm => vm.data[i],
        ])
      ),
    },
  })

  // portfolio
  Vue.component('card', {
    props: ['data'],
    computed: {
      ...Object.fromEntries(
        ['title', 'type', 'img', 'des', 'tags', 'github', 'link'].map(
          (e, i) => [e, vm => vm.data[i]]
        )
      ),
    },
  })

  /* Root */
  // Navbar
  new Vue({
    el: 'nav',
    data: {
      lang: CURRENT_LANG,
      sections: TITLE[CURRENT_LANG],
    },
    methods: {
      switchLang: () => {
        location.href = '?lang=' + (this.lang == 'zh-tw' ? 'en' : 'zh-tw')
      },
      scrollToTop: () => {
        $('html, body').animate({ scrollTop: 0 }, 500)
      },
    },
  })

  // Content
  new Vue({
    el: '.content',
    data: {
      lang: CURRENT_LANG,
      sections: TITLE[CURRENT_LANG],
      about: '',
      skills: {
        frontend: { CSS: 4, JavaScript: 3, 'React.js': 2, 'Vue.js': 2 },
        backend: { 'Node.js': 2, Rails: 1, PHP: 1 },
        others: { MongoDB: 2, 'Meteor.js': 2 },
        tools: { Git: 3 },
      },
      experience: null,
      portfolio: null,
    },
    mounted() {
      fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1MzCg-NzPuSWk0aNjkw5dVQv1vJKBIWuOCTPjBNe0P6c/values/${CURRENT_LANG}?key=AIzaSyANNuXLVPxlg7vylBwVU0DUS-ypFNVMs8s`
      )
        .then(res => res.json())
        .then(res => {
          const data = res.values.reduce(
            (object, cur) => {
              object[cur[0]].push(cur.slice(1))
              return object
            },
            { about: [], experience: [], portfolio: [] }
          )
          this.about = data.about.flat()[0]
          this.experience = data.experience
          this.portfolio = data.portfolio
        })
    },
    methods: {
      skillLevel: score =>
        ['no idea', 'learned', 'average', 'above average', 'great', 'awesome'][
          score
        ],
      parseContent: string => string.split('\n'),
      parseTags: string => string.split(',').map(e => e.trim()),
    },
  })
})()
