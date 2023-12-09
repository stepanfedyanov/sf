<script setup>
import TheContainer from './TheContainer.vue'
import TheSectionTitle from './TheSectionTitle.vue'

const items = [
  {
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_4_4373)">
    <path
      d="M39.68 76.8199C60.1911 76.8199 76.8187 60.1922 76.8187 39.681C76.8187 19.1697 60.1911 2.54199 39.68 2.54199C19.1688 2.54199 2.54126 19.1697 2.54126 39.681C2.54126 60.1922 19.1688 76.8199 39.68 76.8199Z"
      fill="url(#paint0_linear_4_4373)" />
    <path
      d="M39.68 70.9102C56.9269 70.9102 70.9083 56.9287 70.9083 39.6817C70.9083 22.4346 56.9269 8.45312 39.68 8.45312C22.4331 8.45312 8.45166 22.4346 8.45166 39.6817C8.45166 56.9287 22.4331 70.9102 39.68 70.9102Z"
      fill="url(#paint1_linear_4_4373)" />
    <g opacity="0.7">
      <path
        d="M39.6798 76.3125C39.4919 76.3125 39.3474 76.168 39.3474 75.9801V3.39292C39.3474 3.20506 39.4919 3.06055 39.6798 3.06055C39.8676 3.06055 40.0122 3.20506 40.0122 3.39292V75.9657C40.0122 76.1535 39.8676 76.298 39.6798 76.298V76.3125Z"
        fill="white" />
    </g>
    <path
      d="M39.6799 52.6858C29.0441 52.6858 19.0585 51.3563 11.5296 48.9575C3.88513 46.5153 -0.320068 43.2204 -0.320068 39.68C-0.320068 17.6278 17.6279 -0.320312 39.6799 -0.320312C39.8678 -0.320312 40.0123 -0.175803 40.0123 0.0120597C40.0123 0.199922 39.8678 0.344432 39.6799 0.344432C18.0036 0.358883 0.359122 18.0035 0.359122 39.68C0.359122 42.8592 4.50652 45.995 11.7464 48.3072C19.2031 50.6916 29.1308 51.9922 39.6944 51.9922C50.258 51.9922 60.1857 50.6771 67.6424 48.3072C74.8822 45.995 79.0296 42.8592 79.0296 39.68C79.0296 39.4921 79.1741 39.3476 79.362 39.3476C79.5499 39.3476 79.6944 39.4921 79.6944 39.68C79.6944 43.2204 75.4892 46.5153 67.8447 48.9575C60.3158 51.3563 50.3302 52.6858 39.6944 52.6858H39.6799Z"
      fill="url(#paint2_linear_4_4373)" />
    <path
      d="M39.68 79.6811C39.4921 79.6811 39.3476 79.5366 39.3476 79.3488C39.3476 79.1609 39.4921 79.0164 39.68 79.0164C61.3707 79.0164 79.0008 61.3718 79.0008 39.6953C79.0008 36.5161 74.8534 33.3802 67.6135 31.0681C60.1568 28.6837 50.2291 27.3831 39.6655 27.3831C29.1019 27.3831 19.1742 28.6981 11.7175 31.0681C4.47767 33.3802 0.330267 36.5161 0.330267 39.6953C0.330267 39.8832 0.185759 40.0277 -0.00210273 40.0277C-0.189964 40.0277 -0.334473 39.8832 -0.334473 39.6953C-0.334473 36.1548 3.87073 32.86 11.5152 30.4178C19.0441 28.0189 29.0297 26.6895 39.6655 26.6895C50.3014 26.6895 60.2869 28.0189 67.8158 30.4178C75.4603 32.86 79.6655 36.1548 79.6655 39.6953C79.6655 61.7475 61.7175 79.6956 39.6655 79.6956L39.68 79.6811Z"
      fill="url(#paint3_linear_4_4373)" />
    <path
      d="M39.68 79.6802C26.9343 79.6802 16.5586 61.7321 16.5586 39.68C16.5586 17.6278 26.9343 -0.320312 39.68 -0.320312C61.732 -0.320312 79.68 17.6278 79.68 39.68C79.68 39.8678 79.5355 40.0123 79.3476 40.0123C79.1598 40.0123 79.0152 39.8678 79.0152 39.68C79.0152 18.0035 61.3707 0.358883 39.68 0.358883C27.2956 0.358883 17.2378 18.0035 17.2378 39.68C17.2378 61.3564 27.31 79.001 39.68 79.001C39.8678 79.001 40.0124 79.1455 40.0124 79.3334C40.0124 79.5213 39.8678 79.6658 39.68 79.6658V79.6802Z"
      fill="url(#paint4_linear_4_4373)" />
    <path
      d="M39.6799 79.6794C17.6279 79.6794 -0.320068 61.7458 -0.320068 39.6792C-0.320068 39.4913 -0.17556 39.3468 0.0123016 39.3468C0.200163 39.3468 0.344672 39.4913 0.344672 39.6792C0.344672 61.3701 17.9892 79.0002 39.6655 79.0002C52.0499 79.0002 62.1077 61.3556 62.1077 39.6792C62.1077 18.0027 52.0643 0.358104 39.6799 0.358104C39.4921 0.358104 39.3476 0.213594 39.3476 0.0257315C39.3476 -0.162131 39.4921 -0.306641 39.6799 -0.306641C52.4256 -0.306641 62.8013 17.6415 62.8013 39.6936C62.8013 61.7458 52.4256 79.6939 39.6799 79.6939V79.6794Z"
      fill="url(#paint5_linear_4_4373)" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_4_4373" x1="88.5" y1="-41" x2="2.99901" y2="108.999"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint1_linear_4_4373" x1="86.5" y1="27.501" x2="7.99978" y2="60.0005"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint2_linear_4_4373" x1="56.1539" y1="16.0093" x2="15.012" y2="57.1364"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint3_linear_4_4373" x1="23.2204" y1="63.366" x2="64.3479" y2="22.2244"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint4_linear_4_4373" x1="62.7869" y1="60.4026" x2="21.1536" y2="10.7783"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint5_linear_4_4373" x1="17.021" y1="22.1935" x2="60.186" y2="65.3727"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <clipPath id="clip0_4_4373">
      <rect width="80" height="80" fill="white" />
    </clipPath>
  </defs>
</svg>`,
    title: 'Global scope',
    desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  },
  {
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_340_173)">
    <path
      d="M12.59 50.1652C19.4962 50.1652 25.0949 44.5665 25.0949 37.6602C25.0949 30.7539 19.4962 25.1553 12.59 25.1553C5.6837 25.1553 0.0850677 30.7539 0.0850677 37.6602C0.0850677 44.5665 5.6837 50.1652 12.59 50.1652Z"
      fill="url(#paint0_linear_340_173)" />
    <path
      d="M63.4213 16.8226C62.5383 16.8226 61.6838 16.908 60.8435 17.0362C58.0519 7.28006 49.0649 0.144531 38.4258 0.144531C25.5364 0.158774 15.0824 10.5986 15.0824 23.4881C15.0824 24.1432 15.1109 24.7842 15.1678 25.4251C14.3275 25.2542 13.473 25.1545 12.5757 25.1545C5.6681 25.1545 0.0708008 30.7518 0.0708008 37.6594C0.0708008 44.5671 5.6681 50.1644 12.5757 50.1644H63.4071C72.6077 50.1644 80.0708 42.7013 80.0708 33.5006C80.0708 24.2999 72.6077 16.8368 63.4071 16.8368L63.4213 16.8226Z"
      fill="url(#paint1_linear_340_173)" />
    <path
      d="M38.4115 46.8168C51.2959 46.8168 61.7407 36.3719 61.7407 23.4875C61.7407 10.6031 51.2959 0.158203 38.4115 0.158203C25.5272 0.158203 15.0824 10.6031 15.0824 23.4875C15.0824 36.3719 25.5272 46.8168 38.4115 46.8168Z"
      fill="url(#paint2_linear_340_173)" />
    <path
      d="M63.4214 50.1508C72.6245 50.1508 80.0851 42.6902 80.0851 33.487C80.0851 24.2839 72.6245 16.8232 63.4214 16.8232C54.2183 16.8232 46.7577 24.2839 46.7577 33.487C46.7577 42.6902 54.2183 50.1508 63.4214 50.1508Z"
      fill="url(#paint3_linear_340_173)" />
    <path
      d="M56.7558 66.8288C53.537 66.8288 50.9164 64.2224 50.9164 60.9893V35.1533H62.581V60.9893C62.581 64.2081 59.9746 66.8288 56.7416 66.8288H56.7558Z"
      fill="url(#paint4_linear_340_173)" />
    <path
      d="M23.4142 66.8288C20.1954 66.8288 17.5748 64.2224 17.5748 60.9893V35.1533H29.2394V60.9893C29.2394 64.2081 26.633 66.8288 23.3999 66.8288H23.4142Z"
      fill="url(#paint5_linear_340_173)" />
    <path
      d="M40.0779 79.3189C36.8591 79.3189 34.2385 76.7125 34.2385 73.4794V39.3115H45.9031V73.4794C45.9031 76.6982 43.2967 79.3189 40.0636 79.3189H40.0779Z"
      fill="url(#paint6_linear_340_173)" />
    <path
      d="M40.0777 79.3322C43.3027 79.3322 45.9171 76.7178 45.9171 73.4928C45.9171 70.2677 43.3027 67.6533 40.0777 67.6533C36.8527 67.6533 34.2383 70.2677 34.2383 73.4928C34.2383 76.7178 36.8527 79.3322 40.0777 79.3322Z"
      fill="url(#paint7_linear_340_173)" />
    <path
      d="M40.0779 79.6602C36.6739 79.6602 33.9109 76.8972 33.9109 73.4932C33.9109 70.0892 36.6739 67.3262 40.0779 67.3262C43.4818 67.3262 46.2449 70.0892 46.2449 73.4932C46.2449 76.8972 43.4818 79.6602 40.0779 79.6602ZM40.0779 67.9956C37.0442 67.9956 34.5803 70.4595 34.5803 73.4932C34.5803 76.5269 37.0442 78.9908 40.0779 78.9908C43.1115 78.9908 45.5755 76.5269 45.5755 73.4932C45.5755 70.4595 43.1115 67.9956 40.0779 67.9956Z"
      fill="url(#paint8_linear_340_173)" />
    <path
      d="M23.4141 66.8283C26.6391 66.8283 29.2535 64.2139 29.2535 60.9889C29.2535 57.7638 26.6391 55.1494 23.4141 55.1494C20.1891 55.1494 17.5747 57.7638 17.5747 60.9889C17.5747 64.2139 20.1891 66.8283 23.4141 66.8283Z"
      fill="url(#paint9_linear_340_173)" />
    <path
      d="M23.4141 67.1553C20.0101 67.1553 17.2471 64.3923 17.2471 60.9883C17.2471 57.5843 20.0101 54.8213 23.4141 54.8213C26.818 54.8213 29.5811 57.5843 29.5811 60.9883C29.5811 64.3923 26.818 67.1553 23.4141 67.1553ZM23.4141 55.4907C20.3804 55.4907 17.9165 57.9546 17.9165 60.9883C17.9165 64.022 20.3804 66.4859 23.4141 66.4859C26.4477 66.4859 28.9117 64.022 28.9117 60.9883C28.9117 57.9546 26.4477 55.4907 23.4141 55.4907Z"
      fill="url(#paint10_linear_340_173)" />
    <path
      d="M40.0778 63.8231C39.8927 63.8231 39.7502 63.6807 39.7502 63.4955V36.8334C39.7502 36.6483 39.8927 36.5059 40.0778 36.5059C40.263 36.5059 40.4054 36.6483 40.4054 36.8334V63.4955C40.4054 63.6807 40.263 63.8231 40.0778 63.8231Z"
      fill="url(#paint11_linear_340_173)" />
    <path
      d="M23.4142 51.3177C23.2291 51.3177 23.0867 51.1753 23.0867 50.9902V30.9936C23.0867 30.8084 23.2291 30.666 23.4142 30.666C23.5994 30.666 23.7418 30.8084 23.7418 30.9936V50.9902C23.7418 51.1753 23.5994 51.3177 23.4142 51.3177Z"
      fill="url(#paint12_linear_340_173)" />
    <path
      d="M56.7557 66.8283C59.9807 66.8283 62.5951 64.2139 62.5951 60.9889C62.5951 57.7638 59.9807 55.1494 56.7557 55.1494C53.5307 55.1494 50.9163 57.7638 50.9163 60.9889C50.9163 64.2139 53.5307 66.8283 56.7557 66.8283Z"
      fill="url(#paint13_linear_340_173)" />
    <path
      d="M56.7559 67.1553C53.3519 67.1553 50.5889 64.3923 50.5889 60.9883C50.5889 57.5843 53.3519 54.8213 56.7559 54.8213C60.1598 54.8213 62.9229 57.5843 62.9229 60.9883C62.9229 64.3923 60.1598 67.1553 56.7559 67.1553ZM56.7559 55.4907C53.7222 55.4907 51.2583 57.9546 51.2583 60.9883C51.2583 64.022 53.7222 66.4859 56.7559 66.4859C59.7895 66.4859 62.2535 64.022 62.2535 60.9883C62.2535 57.9546 59.7895 55.4907 56.7559 55.4907Z"
      fill="url(#paint14_linear_340_173)" />
    <path
      d="M56.7558 51.3177C56.5706 51.3177 56.4282 51.1753 56.4282 50.9902V30.9936C56.4282 30.8084 56.5706 30.666 56.7558 30.666C56.941 30.666 57.0834 30.8084 57.0834 30.9936V50.9902C57.0834 51.1753 56.941 51.3177 56.7558 51.3177Z"
      fill="url(#paint15_linear_340_173)" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_340_173" x1="-4.99995" y1="25" x2="21.4999" y2="54.0002"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint1_linear_340_173" x1="92.652" y1="-29.1773" x2="50.3307" y2="89.5712"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint2_linear_340_173" x1="43.0001" y1="-2.5" x2="27.1551" y2="40.1075"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint3_linear_340_173" x1="66.6989" y1="14.9245" x2="55.381" y2="45.3585"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint4_linear_340_173" x1="55.0001" y1="69.5" x2="72.2492" y2="52.4191"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint5_linear_340_173" x1="21.6584" y1="69.5" x2="38.9076" y2="52.4191"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint6_linear_340_173" x1="38.3221" y1="82.6927" x2="59.4801" y2="66.1045"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint7_linear_340_173" x1="31.4999" y1="82.5" x2="41.1462" y2="82.7151"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint8_linear_340_173" x1="33.9109" y1="73.4932" x2="46.2449" y2="73.4932"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint9_linear_340_173" x1="14.8363" y1="69.9961" x2="24.4827" y2="70.2112"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint10_linear_340_173" x1="17.2471" y1="60.9883" x2="29.5811" y2="60.9883"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint11_linear_340_173" x1="40.0778" y1="36.4916" x2="40.0778" y2="63.8231"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="0.5" stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint12_linear_340_173" x1="23.4142" y1="30.6518" x2="23.4142" y2="51.3177"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="0.5" stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint13_linear_340_173" x1="48.1779" y1="69.9961" x2="57.8242" y2="70.2112"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint14_linear_340_173" x1="50.5889" y1="60.9883" x2="62.9229" y2="60.9883"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint15_linear_340_173" x1="56.7558" y1="30.6518" x2="56.7558" y2="51.3177"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="0.5" stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <clipPath id="clip0_340_173">
      <rect width="80" height="80" fill="white" />
    </clipPath>
  </defs>
</svg>`,
    title: 'Financial freedom',
    desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  },
  {
    icon: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_340_677)">
    <path
      d="M63.0077 50.8345H57.9722L39.5369 14.7891H37.8584L24.4302 44.9739H18.5696L0.120117 79.3551H75.5824L63.0077 50.8345Z"
      fill="url(#paint0_linear_340_677)" />
    <mask id="mask0_340_677" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="28" y="12"
      width="20" height="20">
      <path
        d="M38.6976 28.203L43.7189 31.5601L47.9152 29.0423L38.8114 12.2998L28.6265 29.8816L33.662 31.5601L38.6976 28.203Z"
        fill="white" />
    </mask>
    <g mask="url(#mask0_340_677)">
      <path
        d="M63.0076 50.8345H57.9721L39.5368 14.7891H37.8583L24.4301 44.9739H18.5695L0.119995 79.3551H75.5823L63.0076 50.8345Z"
        fill="url(#paint1_linear_340_677)" />
    </g>
    <path
      d="M79.7787 79.3567L72.2396 55.8717H67.204L61.3292 40.7793L54.6293 44.1363L51.2723 51.6754L46.2367 49.1719L14.3733 79.3567H79.7787Z"
      fill="url(#paint2_linear_340_677)" />
    <path d="M68.8826 79.3555L52.9508 63.4238H39.5369L27.7873 50.835L0.120117 79.3555H68.8826Z"
      fill="url(#paint3_linear_340_677)" />
    <path
      d="M79.7787 79.6838H0.959314C0.774392 79.6838 0.61792 79.5273 0.61792 79.3424C0.61792 79.1574 0.774392 79.001 0.959314 79.001H79.7787C79.9636 79.001 80.1201 79.1574 80.1201 79.3424C80.1201 79.5273 79.9636 79.6838 79.7787 79.6838Z"
      fill="url(#paint4_linear_340_677)" />
    <path
      d="M38.6976 15.117C38.5127 15.117 38.3562 14.9606 38.3562 14.7757V0.536706C38.3562 0.351784 38.5127 0.195312 38.6976 0.195312C38.8825 0.195312 39.039 0.351784 39.039 0.536706V14.7899C39.039 14.9748 38.8825 15.1313 38.6976 15.1313V15.117Z"
      fill="url(#paint5_linear_340_677)" />
    <path
      d="M55.4687 14.7899C45.4118 14.7899 45.4118 11.4329 38.6978 11.4329V1.37598C45.4118 1.37598 45.4118 4.73301 55.4687 4.73301V14.7899Z"
      fill="url(#paint6_linear_340_677)" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_340_677" x1="62.5696" y1="-36.7254" x2="-5.91799" y2="84.7789"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint1_linear_340_677" x1="-5.49994" y1="52" x2="45.2724" y2="78.2247"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint2_linear_340_677" x1="68.5001" y1="10" x2="36.2047" y2="93.1139"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint3_linear_340_677" x1="57.025" y1="28.0796" x2="39.0426" y2="93.8902"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="paint4_linear_340_677" x1="30.3477" y1="96.7107" x2="50.3902" y2="62.0024"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint5_linear_340_677" x1="35.4401" y1="13.2963" x2="41.9408" y2="2.01605"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <linearGradient id="paint6_linear_340_677" x1="56.5002" y1="5.5" x2="33.3278" y2="1.0287"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="white" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <clipPath id="clip0_340_677">
      <rect width="80" height="80" fill="white" />
    </clipPath>
  </defs>
</svg>`,
    title: 'Self-sovereignty',
    desc: 'Lorem ipsum dolor sit amet consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.'
  }
]
</script>

<template>
  <section class="liberty">
    <TheContainer>
      <div class="liberty__inner">
        <TheSectionTitle
          class="liberty__title wow animate__animated animate__fadeInUp"
          color="#052E3E"
        >
          Your purposeful path to liberty
        </TheSectionTitle>
        <p class="liberty__desc wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
          Our mission is to bring prosperity and independence to ... Lorem ipsum dolor sit amet
          consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper
          tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.
        </p>
        <ul class="liberty__list">
          <li class="liberty__item wow animate__animated animate__fadeIn" v-for="(item, idx) in items" :data-wow-delay="parseFloat(`${0.3 * idx}`) + 's'" :key="item.title">
            <div class="liberty__img-wrapper" v-html="item.icon"></div>
            <h3 class="liberty__item-title">
              {{ item.title }}
            </h3>
            <p class="liberty__item-desc">
              {{ item.desc }}
            </p>
          </li>
        </ul>
        <div class="liberty__link-wrapper wow animate__animated animate__fadeIn">
          <a class="liberty__main-link" href="#">
            <span class="liberty__main-link-left">
              <img
                class="liberty__link-img"
                src="/img/TheLibertySection/link-img.svg"
                alt="Read the Skyfort manifesto"
              />
              <span class="liberty__link-text">Read the Skyfort manifesto</span>
            </span>
            <img class="liberty__link-arrow" src="/img/global/arrow.svg" alt="Arrow" />
          </a>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<style lang="scss">
.liberty {
  background: #ddd8d5;
  @include adaptive-value('padding-top', 128, 80, 1);
  padding-bottom: 80px;
  &__title {
    font-feature-settings: 'ss02' on;
    @include adaptive-value('margin-bottom', 49, 77, 1);
    line-height: calc(84 / 96);
  }
  &__desc {
    text-align: center;
    @include adaptive-value('font-size', 18, 20, 1);
    line-height: calc(24 / 18);
    letter-spacing: 0.36px;
    max-width: 785px;
    margin: 0 auto;
    @include adaptive-value('margin-bottom', 66, 46, 1);
  }
  &__list {
    display: flex;
    justify-content: center;
    margin: -9px;
    flex-wrap: wrap;
    @include adaptive-value('margin-bottom', 84, 69, 1);
  }
  &__item {
    max-width: 322px;
    width: 100%;
    margin: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    @include adaptive-value('padding-top', 47, 24, 1);
    @include adaptive-value('padding-bottom', 30, 24, 1);
    border-radius: 40px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      154deg,
      rgba(255, 255, 255, 0.8) 5.42%,
      rgba(255, 255, 255, 0) 36.35%
    );
  }
  &__img-wrapper {
    margin-bottom: 23px;
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 17, 1);
    line-height: calc(24 / 20);
    @include adaptive-value('margin-bottom', 18, 9, 1);
  }
  &__item-desc {
    font-family: 'Articulat CF', sans-serif;
    @include adaptive-value('font-size', 12, 10, 1);
    line-height: calc(15 / 12);
  }
  &__main-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptive-value('padding-top', 32.5, 21, 1);
    @include adaptive-value('padding-bottom', 32.5, 21, 1);
    @include adaptive-value('padding-left', 48, 24, 1);
    @include adaptive-value('padding-right', 48, 24, 1);
    border-radius: 40px;
    background: #fff;
  }
  &__main-link-left {
    display: flex;
    align-items: center;
  }
  &__link-img {
    @include adaptive-value('margin-right', 24, 16, 1);
    @include adaptive-value('width', 39, 24, 1);
  }
  &__link-text {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 10, 1);
    line-height: calc(24 / 20);
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #052e3e;
    }
  }
  &__link-arrow {
    @include adaptive-value('width', 24, 18, 1);
  }
}
</style>
