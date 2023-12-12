<script setup>
import TheButton from './TheButton.vue'
import TheContainer from './TheContainer.vue'

const socialsList = [
  {
    title: 'facebook',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
<g clip-path="url(#clip0_4_5428)">
<path d="M20.076 14.0948V16.336H22.9756L22.5054 19.4237H20.0917V26.8057H16.7846V19.4237H14.0418V16.336H16.7846V13.2327C16.7846 11.4146 18.2579 9.95703 20.0603 9.95703H23.1637V12.7469H21.4396C20.6873 12.7469 20.0917 13.3581 20.0917 14.0948H20.076Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8787 1.79187C24.0101 0.882823 30.2324 4.80113 33.273 10.3965C36.6898 16.6971 35.577 24.1419 31.2668 29.173C28.665 32.2136 24.2922 34.7056 20.3268 34.8937C14.8882 35.1445 11.6908 34.0473 7.77248 30.9284C5.06099 28.7655 2.67864 24.8942 2.03604 20.0041C1.11131 13.0452 5.28042 6.65057 10.531 3.76669C12.7409 2.54418 14.0732 2.13668 16.8787 1.7762V1.79187ZM15.954 0.208874C14.5747 0.522339 13.65 0.632051 12.3491 1.11792C9.98242 2.01129 7.06718 3.75102 5.45282 5.60046C5.06099 6.03931 4.71618 6.35278 4.32434 6.86999C1.44045 10.7569 -0.0641914 14.5969 0.531395 20.8348C1.4718 30.5836 11.7222 38.0597 21.0321 36.4297C25.6871 35.6147 30.0286 33.5928 32.7714 29.8939C35.8277 25.7719 37.5048 21.3991 36.7368 15.7254C35.7807 8.67241 30.4831 2.79496 24.1981 0.882823C22.0509 0.224547 18.3363 -0.324015 15.9383 0.224547L15.954 0.208874Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_5428">
<rect width="36.5195" height="36.6537" fill="white" transform="translate(0.402588)"/>
</clipPath>
</defs>
</svg>`
  },
  {
    title: 'instagram',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
<g clip-path="url(#clip0_4_5429)">
<path d="M22.3533 26.8984H15.5886C12.9892 26.8984 10.8909 24.7844 10.8909 22.2007V15.436C10.8909 12.8366 13.0048 10.7383 15.5886 10.7383H22.3533C24.9527 10.7383 27.051 12.8522 27.051 15.436V22.2007C27.051 24.8001 24.9371 26.8984 22.3533 26.8984ZM15.5886 12.1476C13.7721 12.1476 12.3002 13.6195 12.3002 15.436V22.2007C12.3002 24.0171 13.7721 25.4891 15.5886 25.4891H22.3533C24.1698 25.4891 25.6417 24.0171 25.6417 22.2007V15.436C25.6417 13.6195 24.1698 12.1476 22.3533 12.1476H15.5886Z" fill="white"/>
<path d="M18.971 22.9523C16.6847 22.9523 14.837 21.1045 14.837 18.8183C14.837 16.5321 16.6847 14.6844 18.971 14.6844C21.2572 14.6844 23.105 16.5321 23.105 18.8183C23.105 21.1045 21.2572 22.9523 18.971 22.9523ZM18.971 16.0937C17.4677 16.0937 16.2463 17.3151 16.2463 18.8183C16.2463 20.3216 17.4677 21.543 18.971 21.543C20.4742 21.543 21.6956 20.3216 21.6956 18.8183C21.6956 17.3151 20.4742 16.0937 18.971 16.0937Z" fill="white"/>
<path d="M23.2929 15.483C23.8377 15.483 24.2794 15.0413 24.2794 14.4964C24.2794 13.9516 23.8377 13.5099 23.2929 13.5099C22.748 13.5099 22.3063 13.9516 22.3063 14.4964C22.3063 15.0413 22.748 15.483 23.2929 15.483Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.3177 34.9301H18.0784C13.6939 34.9301 8.9022 31.8453 7.03877 29.747C-2.81079 18.6917 4.70556 1.71738 19.3625 1.71738C21.774 1.71738 24.0445 2.2811 25.9549 3.14235C28.1002 4.1132 29.1964 5.00577 30.8249 6.43074C35.507 10.5491 37.1355 18.77 34.5988 24.6422C34.129 25.707 33.7845 26.3177 33.2208 27.2729C30.7779 31.3129 25.3599 34.9301 20.3333 34.9301H20.3177ZM16.8727 0.198454C13.5216 0.73086 9.84174 2.07753 7.43025 4.36375C4.62727 7.01012 3.32757 8.49773 1.85562 12.5691C-0.618519 19.459 2.0122 28.275 7.53986 32.4403C11.3763 35.3216 16.262 37.3573 21.4451 36.4804C24.1228 36.0263 26.3464 35.4156 28.2725 34.1942C32.1873 31.7044 34.8493 28.9797 36.4935 24.1724C38.5605 18.175 37.1512 11.1911 33.2051 6.60299C29.4782 2.29676 23.4025 -0.835041 16.8727 0.198454Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_5429">
<rect width="36.5195" height="36.6861" fill="white" transform="translate(0.922089)"/>
</clipPath>
</defs>
</svg>`
  },
  {
    title: 'linkedin',
    href: '#',
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
  },
  {
    title: 'x',
    href: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
<g clip-path="url(#clip0_4_5431)">
<path d="M20.79 17.071L26.9174 10.5059H25.4168L20.1178 16.18L15.8817 10.5059H11.161L17.4917 18.9936L11.0985 25.8401H12.5991L18.1483 19.8846L22.6032 25.8401H27.3082L20.7587 17.071H20.79ZM18.9298 19.0562L18.2577 18.1652L13.3494 11.6H15.3346L19.3675 16.9928L20.0396 17.8838L25.1511 24.7459H23.1659L18.9298 19.0718V19.0562Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.62632 17.3826C2.62632 16.6479 3.03274 14.6471 3.22031 13.9125C6.28405 2.15777 21.4933 -2.90676 31.2473 6.73773C31.8725 7.36298 32.5447 8.33212 33.0449 9.08242C39.9539 19.4147 33.6076 34.2331 19.5394 34.8427C14.6781 35.0616 10.2544 32.6856 7.78466 30.3409C6.48726 29.1217 5.34617 27.5429 4.36139 25.6203C2.84515 22.6816 2.61069 20.3994 2.61069 17.367L2.62632 17.3826ZM16.5851 0.219494C13.6308 0.876007 12.0833 1.29805 9.848 2.62671C3.95499 6.14374 -0.0935296 13.553 1.20387 21.1185C2.92332 31.1381 12.1145 37.8127 21.931 36.2964C29.0276 35.2022 34.5611 30.3878 36.6401 23.682C39.6257 14.0688 34.4204 4.11168 24.7759 0.891638C22.6969 0.203863 18.9298 -0.311968 16.5695 0.219494H16.5851Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_5431">
<rect width="36.5195" height="36.5109" fill="white" transform="translate(0.96106)"/>
</clipPath>
</defs>
</svg>`
  },
  {
    title: 'telegram',
    href: '#',
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
  }
]

const navList = [
  {
    title: 'Terms and Conditions',
    href: '#'
  },
  {
    title: 'Privacy Policy',
    href: '#'
  },
  {
    title: 'Cookies Policy',
    href: '#'
  }
]
</script>

<template>
  <footer class="footer">
    <TheContainer>
      <div class="footer__inner">
        <div class="footer__top">
          <h2 class="footer__title wow animate__animated animate__fadeInUp">Join the community</h2>
          <p class="footer__desc wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
            Get access to private community of wealth management professionals, experts and service
            providers to attend special events, share knowledge, network and collaborate globally.
          </p>
          <TheButton
            class="wow animate__animated animate__fadeIn"
            data-wow-delay="0.1s"
            size="big"
            color="blue"
            >Apply Now</TheButton
          >
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
                <a class="socials__link" :href="item.href" v-html="item.icon"></a>
              </li>
            </ul>
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
                  <a class="footer__nav-link" :href="item.href">
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </nav>
            <a
              class="footer__bottom-link wow animate__animated animate__fadeIn"
              data-wow-delay="0.6s"
              data-wow-duration="1600"
              href="#"
              >Skyfort - 2023 - All rights reserved</a
            >
          </div>
        </div>
      </div>

      <div class="footer__inner _mobile">
        <div class="footer__top">
          <h2 class="footer__title">Join the community</h2>
          <p class="footer__desc">
            Get access to private community of wealth management professionals, experts and service
            providers to attend special events, share knowledge, network and collaborate globally.
          </p>
          <TheButton size="big" color="blue">Apply Now</TheButton>
        </div>
        <div class="footer__bottom">
          <div class="footer__logo-wrapper">
            <img class="footer__logo-img" src="/img/TheFooterSection/logo.svg" alt="Логотип" />
          </div>
          <ul class="socials__list">
            <li class="socials__item" v-for="item in socialsList" :key="item.title">
              <a class="socials__link" :href="item.href" v-html="item.icon"></a>
            </li>
          </ul>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item" v-for="item in navList" :key="item.title">
                <a class="footer__nav-link" :href="item.href">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
          <a class="footer__bottom-link" href="#">Skyfort - 2023 - All rights reserved</a>
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
  &__title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 90, 49, 1);
    font-weight: 300;
    @include adaptive-value('margin-bottom', 44, 47.1, 1);
    @include adaptive-value('letter-spacing', 0, 0.6, 1);
    @include adaptive-value('line-height', 103.5, 52, 1);
  }
  &__desc {
    max-width: 788px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 68, 55, 1);
    @include adaptive-value('font-size', 18, 19, 1);
    @include adaptive-value('line-height', 25, 30, 1);
    @include adaptive-value('letter-spacing', 0.7, 1, 1);
    font-weight: 200;
  }
  &__bottom {
    @include adaptive-value('padding-top', 40, 32, 1);
    padding-left: 6px;
  }
  &__bottom-line {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__bottom-line + &__bottom-line {
    margin-top: 40px;
  }
  &__nav-list {
    display: flex;
    align-items: center;
  }
  &__nav-item + &__nav-item {
    @include adaptive-value('margin-left', 42, 23, 1);
  }
  &__nav-link,
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
        @include adaptive-value('padding-top', 10, 2, 1);
        @include adaptive-value('padding-bottom', 10, 2, 1);
        @include adaptive-value('padding-left', 50, 27, 1);
        @include adaptive-value('padding-right', 50, 27, 1);
        span {
          min-width: 116px;
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

@media (max-width: 515px) {
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
      text-align: center;
      .logo__img {
        margin: 0 auto;
      }
      @include adaptive-value('margin-bottom', 48, 24, 1);
    }
    &__nav-list {
      justify-content: center;
    }
    &__nav-item {
      padding: 5px 0;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        @include adaptive-value('bottom', 6, 9, 1);
        left: 0;
        width: 100%;
        background-color: rgba(#fff, 0.5);
        height: 1px;
      }
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
      max-width: 269px;
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
    &__nav-link {
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
</style>
