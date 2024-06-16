<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'

import { RouterLink } from 'vue-router'

const socialsList = [
  {
    title: 'telegram',
    href: 'https://t.me/skyfortrussia',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
<g clip-path="url(#clip0_4_5432)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.1458 17.3826C2.1458 16.6479 2.55222 14.6471 2.7398 13.9125C5.80354 2.15777 21.0128 -2.90676 30.7668 6.73773C31.392 7.36298 32.0642 8.33212 32.5644 9.08242C39.4734 19.4147 33.1271 34.2331 19.0589 34.8427C14.1976 35.0616 9.77389 32.6856 7.30414 30.3409C6.00674 29.1217 4.86565 27.5429 3.88088 25.6203C2.36464 22.6816 2.13018 20.3994 2.13018 17.367L2.1458 17.3826ZM16.1046 0.219494C13.1503 0.876007 11.6027 1.29805 9.36747 2.62671C3.47445 6.14374 -0.574059 13.553 0.723341 21.1185C2.44279 31.1381 11.634 37.8127 21.4505 36.2964C28.5471 35.2022 34.0806 30.3878 36.1596 23.682C39.1451 14.0688 33.9399 4.11168 24.2954 0.891638C22.2164 0.203863 18.4493 -0.311968 16.0889 0.219494H16.1046Z" fill="white"/>
<path d="M10.0552 17.3363C14.4164 15.4449 17.3082 14.1944 18.7619 13.5848C22.9042 11.8654 23.7796 11.5527 24.3267 11.5527C24.4517 11.5527 24.7331 11.584 24.905 11.7247C25.0613 11.8497 25.0926 12.006 25.1238 12.1311C25.1395 12.2405 25.1707 12.5062 25.1551 12.7251C24.9363 15.0854 23.9515 20.8221 23.4669 23.4638C23.2637 24.5892 22.8417 24.9643 22.4509 24.9956C21.5912 25.0738 20.919 24.4173 20.0905 23.8702C18.7775 23.0104 18.0272 22.479 16.7611 21.6349C15.2917 20.6658 16.2452 20.1343 17.0893 19.2589C17.3082 19.0245 21.1379 15.5543 21.2004 15.2417C21.2004 15.1948 21.216 15.0541 21.1378 14.976C21.0441 14.8978 20.919 14.9291 20.8252 14.9447C20.7002 14.976 18.5899 16.3672 14.5258 19.1026C13.9318 19.509 13.3847 19.7122 12.9002 19.6966C12.3687 19.6966 11.337 19.3996 10.5711 19.1495C9.6332 18.8525 8.89853 18.6806 8.96105 18.1648C8.99231 17.899 9.36748 17.6177 10.0709 17.3363H10.0552Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_5432">
<rect width="36.5195" height="36.5109" fill="white" transform="translate(0.48053)"/>
</clipPath>
</defs>
</svg>`
  },

  {
    title: 'youtube',
    href: 'https://www.youtube.com/@skyfortrussia',
    icon: `<svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_23_571)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3589 1.79187C24.4903 0.882823 30.7126 4.80113 33.7532 10.3965C37.17 16.6971 36.0572 24.1419 31.747 29.173C29.1453 32.2136 24.7724 34.7056 20.807 34.8937C15.3684 35.1445 12.171 34.0473 8.2527 30.9284C5.54121 28.7655 3.15887 24.8942 2.51626 20.0041C1.59153 13.0452 5.76064 6.65057 11.0112 3.76669C13.2211 2.54418 14.5534 2.13668 17.3589 1.7762V1.79187ZM16.4342 0.208874C15.0549 0.522339 14.1302 0.632051 12.8293 1.11792C10.4626 2.01129 7.5474 3.75102 5.93305 5.60046C5.54121 6.03931 5.1964 6.35278 4.80457 6.86999C1.92067 10.7569 0.416033 14.5969 1.01162 20.8348C1.95202 30.5836 12.2024 38.0597 21.5123 36.4297C26.1673 35.6147 30.5088 33.5928 33.2517 29.8939C36.308 25.7719 37.985 21.3991 37.217 15.7254C36.261 8.67241 30.9634 2.79495 24.6784 0.882823C22.5311 0.224547 18.8165 -0.324015 16.4185 0.224547L16.4342 0.208874Z" fill="white"/>
<path d="M17.0739 20.8895L22.0717 18.0006L17.0739 15.1117V20.8895ZM28.2059 13.3494C28.3311 13.802 28.4177 14.4087 28.4755 15.1791C28.5429 15.9494 28.5718 16.6139 28.5718 17.1917L28.6296 18.0006C28.6296 20.1095 28.4755 21.6599 28.2059 22.6518C27.9651 23.5184 27.4066 24.077 26.5399 24.3177C26.0874 24.4429 25.2592 24.5296 23.9881 24.5873C22.7362 24.6547 21.5903 24.6836 20.531 24.6836L18.9999 24.7414C14.965 24.7414 12.4516 24.5873 11.4598 24.3177C10.5931 24.077 10.0346 23.5184 9.79383 22.6518C9.66864 22.1992 9.58197 21.5925 9.52419 20.8221C9.45678 20.0517 9.4279 19.3873 9.4279 18.8095L9.37012 18.0006C9.37012 15.8917 9.52419 14.3413 9.79383 13.3494C10.0346 12.4827 10.5931 11.9242 11.4598 11.6835C11.9124 11.5583 12.7405 11.4716 14.0117 11.4138C15.2635 11.3464 16.4095 11.3175 17.4687 11.3175L18.9999 11.2598C23.0347 11.2598 25.5481 11.4138 26.5399 11.6835C27.4066 11.9242 27.9651 12.4827 28.2059 13.3494Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_23_571">
<rect width="36.5195" height="36.6537" fill="white" transform="translate(0.882812)"/>
</clipPath>
</defs>
</svg>
`
  },

  {
    title: 'linkedin',
    href: 'https://linkedin.com/company/skyfortcapital',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
<g clip-path="url(#clip0_4_5430)">
<path d="M11.3351 14.8171H14.573V25.2346H11.3351V14.8171ZM12.9619 9.63965C13.9942 9.63965 14.8389 10.4843 14.8389 11.5167C14.8389 12.549 13.9942 13.3937 12.9619 13.3937C11.9295 13.3937 11.0848 12.549 11.0848 11.5167C11.0848 10.4843 11.9295 9.63965 12.9619 9.63965Z" fill="white"/>
<path d="M16.6064 14.8171H19.7191V16.2405H19.766C20.204 15.4271 21.252 14.5512 22.8318 14.5512C26.1166 14.5512 26.711 16.7098 26.711 19.5097V25.2346H23.4732V20.1666C23.4732 18.9622 23.4419 17.398 21.7838 17.398C20.1258 17.398 19.8443 18.7119 19.8443 20.0728V25.2346H16.6064V14.8171Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9505 1.83286C22.0811 1.1759 26.8518 3.27192 29.6048 5.8059C31.3567 7.41701 32.0293 8.05833 33.2962 10.4359C36.1587 15.8323 35.8615 21.3539 33.0303 26.6878C30.8561 30.786 25.2876 34.5713 20.4074 34.8372C1.18361 35.854 -4.29102 12.2504 10.5843 3.75681C12.5239 2.64624 14.354 2.1457 16.9662 1.81722L16.9505 1.83286ZM15.9182 0.268674C14.5104 0.612795 13.6814 0.706647 12.3206 1.19154C10.3653 1.89543 9.42684 2.53675 7.86266 3.60039C7.34648 3.96016 7.09621 4.21043 6.62696 4.61712C5.54767 5.52435 5.29741 5.88411 4.3589 6.97904C2.99806 8.55887 1.99699 10.6392 1.23054 12.9542C0.3546 15.5821 0.292025 18.1004 0.636145 21.0098C1.63722 29.8162 10.8346 38.122 21.252 36.3389C27.0082 35.3534 30.0584 33.0071 32.8896 29.738C35.4392 26.7817 37.6916 20.8534 36.7374 15.629C35.361 8.13654 30.7936 2.99036 24.1301 0.863065C22.0654 0.206106 18.2175 -0.325718 15.9182 0.23739V0.268674Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_5430">
<rect width="36.5195" height="36.5823" fill="white" transform="translate(0.441589)"/>
</clipPath>
</defs>
</svg>`
  }
]

const navList = [
  {
    title: 'Условия обслуживания',
    href: 'conditions',
    router: true
  },
  {
    title: 'Политика конфиденциальности',
    href: 'policy',
    router: true
  },
  {
    title: 'Раскрытие информации',
    href: 'information',
    router: true
  }
]
</script>

<template>
  <footer class="footer">
    <TheContainer>
      <div class="footer__inner">
        <div class="footer__top">
          <h2
            class="footer__title wow animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="1200"
          >
            Включайтесь в&nbsp;сообщество
          </h2>
          <p class="footer__desc wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
            Присоединяйтесь к&nbsp;растущему сообществу профессиональных управляющих капиталом,
            финансовых советников, экспертов и&nbsp;частных инвесторов
          </p>
          <TheButton
            href="https://t.me/skyfortrussia"
            target="_blank"
            class="flex wow animate__animated animate__fadeIn"
            data-wow-delay="0.1s"
            size="big"
            color="blue"
            flex="flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"
              ></path>
            </svg>
            Telegram
          </TheButton>
        </div>
        <div class="footer__bottom">
          <div class="footer__bottom-line">
            <div class="footer__logo-wrapper wow animate__animated animate__fadeIn">
              <img class="footer__logo-img" src="/img/TheFooterSection/logo.svg" alt="Логотип" />
            </div>
            <ul class="socials__list">
              <li
                class="socials__item wow animate__animated animate__fadeIn"
                :data-wow-delay="parseFloat(`${0.2 * idx}`) + 's'"
                v-for="(item, idx) in socialsList"
                :key="item.title"
              >
                <a class="socials__link" :href="item.href" target="_blank" v-html="item.icon"></a>
              </li>
            </ul>
          </div>
          <div class="footer__bottom-line">
            <span>
              Работать в Skyfort:
              <a class="one_link" href="mailto:recruiting@skyfort.capital"
                >recruiting@skyfort.capital</a
              >
            </span>
          </div>
          <div class="footer__bottom-line">
            <span>
              Связаться с нами:
              <a class="one_link" href="mailto:support@skyfort.capital">support@skyfort.capital,</a
              >&nbsp;
              <a class="one_link" href="https://t.me/skyfort_support" target="_blank">Telegram,</a
              >&nbsp;
              <a class="one_link" href="https://wa.me/+79031005481" target="_blank">WhatsApp</a>
            </span>
          </div>
          <div class="footer__bottom-line">
            <span>
              По вопросам PR и коммуникаций:
              <a class="one_link" href="https://t.me/David_cap" target="_blank">@David_cap</a>
              и
              <a
                class="one_link"
                href="mailto:david.dadiani@skyfort.capital
"
                >david.dadiani@skyfort.capital
              </a>
            </span>
          </div>
          <div class="footer__bottom-line">
            <nav class="footer__nav">
              <ul class="footer__nav-list">
                <li
                  class="footer__nav-item wow animate__animated animate__fadeIn"
                  :data-wow-delay="parseFloat(`${0.3 * idx}`) + 's'"
                  v-for="(item, idx) in navList"
                  :key="item.title"
                >
                  <router-link
                    v-if="item.router"
                    class="footer__nav-link"
                    :to="item.href"
                    target="_blank"
                  >
                    {{ item.title }}
                  </router-link>

                  <a v-else class="footer__nav-link" :href="item.href" target="_blank">
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </nav>
            <a
              class="footer__bottom-link wow animate__animated animate__fadeIn"
              data-wow-delay="0.6s"
              data-wow-duration="1600"
            >
              &#169; 2024 Skyfort
            </a>
          </div>
        </div>
        <div class="disclaimer">
          <div>
            <span
              >Общество с ограниченной ответственностью «КЭПИТАЛ БОРД»<br />ИНН 9704220707;
              Зарегистрировано: 13.09.2023<br />Включено в реестр инвестиционных советников ЦБ РФ
              <a
                class="disclaimer__link"
                href="https://cbr.ru/registries/?CF.Search=%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9+%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80+%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2&CF.TagId=&CF.Date.Time=Any&CF.Date.DateFrom=&CF.Date.DateTo="
                target="_blank"
                >под номером 238</a
              >
              от 13.03.2024</span
            >
            <span
              >Информация, размещённая на данном веб-сайте, не является индивидуальной
              инвестиционной рекомендацией, и финансовые инструменты либо операции, упомянутые в
              ней, могут не соответствовать вашему инвестиционному профилю и инвестиционным целям
              (ожиданиям). Определение соответствия финансового инструмента либо операции вашим
              интересам, инвестиционным целям, инвестиционному горизонту и уровню допустимого риска
              является вашей задачей.</span
            >
          </div>
          <div>
            <span
              >Юридический адрес: 125047, город Москва, вн. тер. г. муниципальный округ Тверской,
              ул. Бутырский вал, д. 10</span
            >
            <span
              >ООО «КЭПИТАЛ БОРД» (ОГРН 1237700608309, ИНН 9704220707), действующее под брендом
              Skyfort, не несёт ответственности за возможные убытки в случае совершения операций
              либо инвестирования в финансовые инструменты, упомянутые в данной информации, и не
              рекомендует использовать указанную информацию в качестве единственного источника
              информации при принятии инвестиционного решения.</span
            >
            <span
              >Используемый технологический стек: React 17.0.2, Python 3.9.6, Vue 3.2.37, PostgreSQL
              13.3</span
            >
          </div>
        </div>
      </div>

      <div class="footer__inner _mobile">
        <div class="footer__bottom">
          <div class="footer__logo-wrapper">
            <div>
              <img class="footer__logo-img" src="/img/TheFooterSection/logo.svg" alt="Логотип" />
            </div>
            <a class="footer__bottom-link">&#169; 2024 Skyfort</a>
          </div>
          <div class="one_link_wrapper">
            <span>
              Работать в Skyfort:
              <a class="one_link" href="mailto:recruiting@skyfort.capital"
                >recruiting@skyfort.capital</a
              >
            </span>
          </div>
          <div class="one_link_wrapper">
            <span>
              Связаться с нами:
              <a class="one_link" href="mailto:support@skyfort.capital">support@skyfort.capital,</a
              ><br />
              <a class="one_link" href="https://t.me/skyfort_support" target="_blank">Telegram,</a
              >&nbsp;
              <a class="one_link" href="https://wa.me/+79031005481" target="_blank">WhatsApp</a>
            </span>
          </div>
          <div class="one_link_wrapper">
            <span>
              По вопросам PR и коммуникаций:
              <a class="one_link" href="https://t.me/David_cap" target="_blank">@David_cap</a><br />
              и
              <a
                class="one_link"
                href="mailto:david.dadiani@skyfort.capital
"
                >david.dadiani@skyfort.capital
              </a>
            </span>
          </div>
          <ul class="socials__list">
            <li class="socials__item" v-for="item in socialsList" :key="item.title">
              <a class="socials__link" :href="item.href" v-html="item.icon" target="_blank"></a>
            </li>
          </ul>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item" v-for="item in navList" :key="item.title">
                <a class="footer__nav-link" :href="item.href" target="_blank">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="disclaimer">
          <div>
            <span
              >Общество с ограниченной ответственностью «КЭПИТАЛ БОРД»<br />ИНН 9704220707;
              Зарегистрировано: 13.09.2023<br />Включено в реестр инвестиционных советников ЦБ РФ
              <a
                class="disclaimer__link"
                href="https://cbr.ru/registries/?CF.Search=%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9+%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80+%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D1%85+%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2&CF.TagId=&CF.Date.Time=Any&CF.Date.DateFrom=&CF.Date.DateTo="
                target="_blank"
                >под номером 238</a
              >
              от 13.03.2024</span
            >
            <span
              >Юридический адрес: 125047, город Москва, вн. тер. г. муниципальный округ Тверской,
              ул. Бутырский вал, д. 10</span
            >
          </div>
          <div>
            <span
              >Информация, размещённая на данном веб-сайте, не является индивидуальной
              инвестиционной рекомендацией, и финансовые инструменты либо операции, упомянутые в
              ней, могут не соответствовать вашему инвестиционному профилю и инвестиционным целям
              (ожиданиям). Определение соответствия финансового инструмента либо операции вашим
              интересам, инвестиционным целям, инвестиционному горизонту и уровню допустимого риска
              является вашей задачей.</span
            >
            <span
              >ООО «КЭПИТАЛ БОРД» (ОГРН 1237700608309, ИНН 9704220707), действующее под брендом
              Skyfort, не несёт ответственности за возможные убытки в случае совершения операций
              либо инвестирования в финансовые инструменты, упомянутые в данной информации, и не
              рекомендует использовать указанную информацию в качестве единственного источника
              информации при принятии инвестиционного решения.</span
            >
            <span
              >Используемый технологический стек: React 17.0.2, Python 3.9.6, Vue 3.2.37, PostgreSQL
              13.3</span
            >
          </div>
        </div>
      </div>
    </TheContainer>
  </footer>
</template>

<style lang="scss">
.footer {
  @include adaptive-value('padding-top', 100, 70, 1);
  @include adaptive-value('padding-bottom', 48, 43, 1);
  background: #052e3e;
  color: #fff;

  ._mobile {
    display: none;
  }

  .disclaimer {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 31px;
    div {
      display: flex;
      flex-direction: column;
      min-height: 170px;
      height: 170px;
      justify-content: space-between;
      span {
        opacity: 0.5;
        color: white;
        font-family: 'Articulat CF', sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 138.462% */
        letter-spacing: -0.195px;
        .disclaimer__link {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }
  }

  &__title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 90, 37, 1);
    font-weight: 300;
    @include adaptive-value('margin-bottom', 44, 47.1, 1);
    @include adaptive-value('letter-spacing', 0, 0.6, 1);
    @include adaptive-value('line-height', 81, 47, 1);
  }

  &__desc {
    max-width: 788px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 68, 55, 1);
    @include adaptive-value('font-size', 18, 19, 1);
    @include adaptive-value('line-height', 25, 30, 1);
    @include adaptive-value('letter-spacing', 0.7, 1, 1);
    font-weight: 200;
    @media (max-width: 490px) {
      font-weight: 300;
    }
  }

  &__bottom {
    @include adaptive-value('padding-top', 40, 32, 1);
    padding-left: 6px;
  }

  &__bottom-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .one_link {
      color: #99c2d6;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

  &__bottom-line + &__bottom-line {
    margin-top: 35px;
  }

  &__bottom-line:first-child {
    border-top: 1px rgba(255, 255, 255, 0.3) solid;
    padding-top: 40px;
    margin-bottom: -20px;
  }
  &__bottom-line:nth-child(2) {
    margin-bottom: -20px;
  }
  &__bottom-line:nth-child(3) {
    margin-bottom: -20px;
  }

  &__bottom-line:last-child {
    border-bottom: 1px rgba(255, 255, 255, 0.3) solid;
    padding-bottom: 40px;
  }

  &__nav-list {
    display: flex;
    align-items: center;
  }

  &__nav-item + &__nav-item {
    @include adaptive-value('margin-left', 42, 23, 1);
  }

  &__bottom-link {
    line-height: calc(24 / 13);
    letter-spacing: 0.3px;
    @include adaptive-value('font-size', 12.8, 8, 1);
    font-weight: 200;
  }

  .btn-wrapper {
    .btn {
      padding: 6px 48px 7px;

      span {
        letter-spacing: 0.3px;
      }
    }
  }

  &__top {
    @include adaptive-value('padding-bottom', 82, 64, 1);
    text-align: center;
    border-bottom: 1px solid #fff;

    .btn-wrapper {
      .btn {
        line-height: 24px;
        @include adaptive-value('font-size', 16, 14, 1);
        @include adaptive-value('padding-top', 10, 4, 1);
        @include adaptive-value('padding-bottom', 10, 4, 1);
        @include adaptive-value('padding-left', 50, 27, 1);
        @include adaptive-value('padding-right', 50, 27, 1);

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 116px;

          svg {
            height: 15px;
            width: 15px;
          }
        }
      }
    }
  }

  &__logo-img {
    @include adaptive-value('width', 165, 103, 1);
  }
}

.socials {
  &__list {
    display: flex;
    align-items: center;
    transform: translateY(3px);
  }

  &__item {
    @include adaptive-value('width', 36, 23, 1);

    svg {
      width: 100%;
    }
  }

  &__item + &__item {
    @include adaptive-value('margin-left', 27, 17, 1);
  }
}

@media (max-width: 820px) {
  .socials {
    &__list {
      transform: translateY(0);
    }
  }
  .footer {
    &__inner {
      display: none;
    }

    ._mobile {
      display: block;
    }

    &__logo-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .logo__img {
        margin: 0 auto;
      }

      @include adaptive-value('margin-bottom', 48, 24, 1);
    }

    &__nav-list {
      justify-content: center;
    }

    &__bottom-link {
      display: block;
      text-align: center;
      padding: 5px 0;
      @include adaptive-value('padding-top', 5, 3, 1);
    }
  }

  .footer {
    &__desc {
      max-width: 299px;
    }

    &__top {
      .btn-wrapper {
        .btn {
          font-weight: 300;
        }
      }
    }

    &__bottom {
      padding-left: 0;
    }

    &__logo-img {
      margin: 0 auto;
    }

    &__bottom-link {
      font-weight: 200;
    }
  }

  .socials {
    &__list {
      justify-content: center;
      @include adaptive-value('margin-bottom', 30, 8, 1);
    }
  }
}
@media (max-width: 820px) {
  ._mobile {
    padding: 0 32px;
    .footer__logo-wrapper {
      margin-bottom: 10px;
      a {
        color: #fff;
        text-align: center;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px;
      }
    }
    .one_link_wrapper {
      color: #fff;
      text-align: left;
      font-size: 13px;
      line-height: 20px;
      .one_link {
        color: #99c2d6;
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    }
    .socials__list {
      justify-content: space-between;
      margin-top: 10px;
      .socials__item {
        width: 33px;
      }
    }
    .footer__nav {
      .footer__nav-list {
        justify-content: start;
        flex-wrap: wrap;
        .footer__nav-item {
          margin-right: 19px;
          margin-left: 0;
          color: #fff;
          text-align: center;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 200% */
          letter-spacing: -0.15px;
        }
      }
    }
    .disclaimer {
      margin: 24px 0;
      padding-top: 24px;
      border-top: 1px rgba(255, 255, 255, 0.3) solid;
      flex-direction: column;
      gap: 5px;
      div {
        justify-content: start;
        align-items: start;
        min-height: 0;
        height: auto;
        gap: 5px;
        span {
          color: #fff;
          text-align: start;
          font-size: 10px;
          line-height: 20px;
          letter-spacing: -0.15px;
        }
      }
    }
  }
}
</style>
