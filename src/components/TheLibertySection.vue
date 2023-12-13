<script setup>
import { onMounted } from 'vue'
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

onMounted(() => {
  const lbBgPaths = document.querySelectorAll('.liberty__bg path')

  lbBgPaths.forEach((path) => {
    path.style.animationDelay = `${Math.random()}s`
  })
})
</script>

<template>
  <section class="liberty">
    <TheContainer>
      <div class="liberty__inner">
        <svg
          class="liberty__bg"
          height="577"
          viewBox="0 0 1358 577"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1357.35 98.4551H1355.31V330.485H1357.35V98.4551Z"
            fill="url(#paint0_linear_4_4216)"
          />
          <path
            d="M1342.31 174.118H1340.27V406.148H1342.31V174.118Z"
            fill="url(#paint1_linear_4_4216)"
          />
          <path
            d="M1327.27 21.749H1325.23V253.779H1327.27V21.749Z"
            fill="url(#paint2_linear_4_4216)"
          />
          <path
            d="M1312.23 112.712H1310.18V344.741H1312.23V112.712Z"
            fill="url(#paint3_linear_4_4216)"
          />
          <path
            d="M1297.18 213.42H1295.14V445.449H1297.18V213.42Z"
            fill="url(#paint4_linear_4_4216)"
          />
          <path
            d="M1282.16 67.3154H1280.12V299.345H1282.16V67.3154Z"
            fill="url(#paint5_linear_4_4216)"
          />
          <path
            d="M1267.12 183.852H1265.07V415.881H1267.12V183.852Z"
            fill="url(#paint6_linear_4_4216)"
          />
          <path
            d="M1252.07 39.4873H1250.03V271.517H1252.07V39.4873Z"
            fill="url(#paint7_linear_4_4216)"
          />
          <path
            d="M1242.4 290.654H1240.36V522.684H1242.4V290.654Z"
            fill="url(#paint8_linear_4_4216)"
          />
          <path
            d="M1327.72 311.518H1325.68V543.547H1327.72V311.518Z"
            fill="url(#paint9_linear_4_4216)"
          />
          <path
            d="M1227.36 203.16H1225.32V435.19H1227.36V203.16Z"
            fill="url(#paint10_linear_4_4216)"
          />
          <path
            d="M1212.32 0.171875H1210.27V232.201H1212.32V0.171875Z"
            fill="url(#paint11_linear_4_4216)"
          />
          <path
            d="M1204.67 248.727H1202.63V480.756H1204.67V248.727Z"
            fill="url(#paint12_linear_4_4216)"
          />
          <path
            d="M1031.19 330.483H1033.23V98.4539H1031.19V330.483Z"
            fill="url(#paint13_linear_4_4216)"
          />
          <path
            d="M1046.23 406.133H1048.27V174.103H1046.23V406.133Z"
            fill="url(#paint14_linear_4_4216)"
          />
          <path
            d="M1061.26 232.028H1063.3V-0.00115967H1061.26V232.028Z"
            fill="url(#paint15_linear_4_4216)"
          />
          <path
            d="M1076.31 322.991H1078.35V90.9617H1076.31V322.991Z"
            fill="url(#paint16_linear_4_4216)"
          />
          <path
            d="M1091.34 482.34H1093.38V250.31H1091.34V482.34Z"
            fill="url(#paint17_linear_4_4216)"
          />
          <path
            d="M1106.38 274.127H1108.42V42.0975H1106.38V274.127Z"
            fill="url(#paint18_linear_4_4216)"
          />
          <path
            d="M1121.42 435.889H1123.47V203.859H1121.42V435.889Z"
            fill="url(#paint19_linear_4_4216)"
          />
          <path
            d="M1136.45 233.412H1138.49V1.38261H1136.45V233.412Z"
            fill="url(#paint20_linear_4_4216)"
          />
          <path
            d="M1146.14 484.579H1148.18V252.55H1146.14V484.579Z"
            fill="url(#paint21_linear_4_4216)"
          />
          <path
            d="M1060.82 543.561H1062.86V311.531H1060.82V543.561Z"
            fill="url(#paint22_linear_4_4216)"
          />
          <path
            d="M1161.18 405.277H1163.22V173.248H1161.18V405.277Z"
            fill="url(#paint23_linear_4_4216)"
          />
          <path
            d="M1176.21 273.271H1178.25V41.242H1176.21V273.271Z"
            fill="url(#paint24_linear_4_4216)"
          />
          <path
            d="M1183.87 521.812H1185.91V289.783H1183.87V521.812Z"
            fill="url(#paint25_linear_4_4216)"
          />
          <path
            d="M686.806 330.483H688.847V98.4539H686.806V330.483Z"
            fill="url(#paint26_linear_4_4216)"
          />
          <path
            d="M701.848 406.133H703.888V174.103H701.848V406.133Z"
            fill="url(#paint27_linear_4_4216)"
          />
          <path
            d="M716.875 253.764H718.916V21.7342H716.875V253.764Z"
            fill="url(#paint28_linear_4_4216)"
          />
          <path
            d="M731.916 344.74H733.957V112.711H731.916V344.74Z"
            fill="url(#paint29_linear_4_4216)"
          />
          <path
            d="M746.943 445.464H748.984V213.434H746.943V445.464Z"
            fill="url(#paint30_linear_4_4216)"
          />
          <path
            d="M761.999 299.344H764.04V67.3143H761.999V299.344Z"
            fill="url(#paint31_linear_4_4216)"
          />
          <path
            d="M777.026 415.894H779.067V183.864H777.026V415.894Z"
            fill="url(#paint32_linear_4_4216)"
          />
          <path
            d="M792.068 271.516H794.109V39.4861H792.068V271.516Z"
            fill="url(#paint33_linear_4_4216)"
          />
          <path
            d="M801.758 522.683H803.798V290.653H801.758V522.683Z"
            fill="url(#paint34_linear_4_4216)"
          />
          <path
            d="M716.418 543.561H718.459V311.531H716.418V543.561Z"
            fill="url(#paint35_linear_4_4216)"
          />
          <path
            d="M816.785 435.188H818.826V203.159H816.785V435.188Z"
            fill="url(#paint36_linear_4_4216)"
          />
          <path
            d="M831.826 232.214H833.867V0.184372H831.826V232.214Z"
            fill="url(#paint37_linear_4_4216)"
          />
          <path
            d="M839.49 480.77H841.531V248.74H839.49V480.77Z"
            fill="url(#paint38_linear_4_4216)"
          />
          <path
            d="M1012.95 98.4541H1010.91V330.484H1012.95V98.4541Z"
            fill="url(#paint39_linear_4_4216)"
          />
          <path
            d="M997.91 174.117H995.87V406.147H997.91V174.117Z"
            fill="url(#paint40_linear_4_4216)"
          />
          <path
            d="M982.869 -0.000976562H980.828V232.029H982.869V-0.000976562Z"
            fill="url(#paint41_linear_4_4216)"
          />
          <path
            d="M967.842 90.9756H965.801V323.005H967.842V90.9756Z"
            fill="url(#paint42_linear_4_4216)"
          />
          <path
            d="M952.8 250.295H950.76V482.324H952.8V250.295Z"
            fill="url(#paint43_linear_4_4216)"
          />
          <path
            d="M937.759 42.0977H935.718V274.127H937.759V42.0977Z"
            fill="url(#paint44_linear_4_4216)"
          />
          <path
            d="M922.717 203.857H920.677V435.887H922.717V203.857Z"
            fill="url(#paint45_linear_4_4216)"
          />
          <path
            d="M907.676 1.39844H905.635V233.428H907.676V1.39844Z"
            fill="url(#paint46_linear_4_4216)"
          />
          <path d="M898 252.564H895.96V484.594H898V252.564Z" fill="url(#paint47_linear_4_4216)" />
          <path
            d="M983.34 311.518H981.299V543.547H983.34V311.518Z"
            fill="url(#paint48_linear_4_4216)"
          />
          <path
            d="M882.959 173.247H880.918V405.277H882.959V173.247Z"
            fill="url(#paint49_linear_4_4216)"
          />
          <path
            d="M867.917 41.2266H865.877V273.256H867.917V41.2266Z"
            fill="url(#paint50_linear_4_4216)"
          />
          <path
            d="M860.268 289.782H858.227V521.812H860.268V289.782Z"
            fill="url(#paint51_linear_4_4216)"
          />
          <path
            d="M671.237 131.848H669.196V363.877H671.237V131.848Z"
            fill="url(#paint52_linear_4_4216)"
          />
          <path
            d="M656.195 207.513H654.154V439.542H656.195V207.513Z"
            fill="url(#paint53_linear_4_4216)"
          />
          <path
            d="M641.154 55.1416H639.113V287.171H641.154V55.1416Z"
            fill="url(#paint54_linear_4_4216)"
          />
          <path
            d="M626.127 146.104H624.086V378.134H626.127V146.104Z"
            fill="url(#paint55_linear_4_4216)"
          />
          <path
            d="M611.085 246.814H609.044V478.844H611.085V246.814Z"
            fill="url(#paint56_linear_4_4216)"
          />
          <path
            d="M596.044 100.71H594.003V332.739H596.044V100.71Z"
            fill="url(#paint57_linear_4_4216)"
          />
          <path
            d="M581.002 217.245H578.961V449.275H581.002V217.245Z"
            fill="url(#paint58_linear_4_4216)"
          />
          <path
            d="M565.961 72.8818H563.92V304.911H565.961V72.8818Z"
            fill="url(#paint59_linear_4_4216)"
          />
          <path
            d="M556.285 324.048H554.244V556.077H556.285V324.048Z"
            fill="url(#paint60_linear_4_4216)"
          />
          <path
            d="M541.244 236.553H539.203V468.582H541.244V236.553Z"
            fill="url(#paint61_linear_4_4216)"
          />
          <path
            d="M526.202 33.5645H524.161V265.594H526.202V33.5645Z"
            fill="url(#paint62_linear_4_4216)"
          />
          <path
            d="M518.553 282.135H516.512V514.164H518.553V282.135Z"
            fill="url(#paint63_linear_4_4216)"
          />
          <path
            d="M345.077 363.878H347.118V131.848H345.077V363.878Z"
            fill="url(#paint64_linear_4_4216)"
          />
          <path
            d="M360.132 439.541H362.173V207.512H360.132V439.541Z"
            fill="url(#paint65_linear_4_4216)"
          />
          <path
            d="M375.16 265.437H377.2V33.407H375.16V265.437Z"
            fill="url(#paint66_linear_4_4216)"
          />
          <path
            d="M390.201 356.399H392.242V124.37H390.201V356.399Z"
            fill="url(#paint67_linear_4_4216)"
          />
          <path
            d="M405.228 515.733H407.269V283.704H405.228V515.733Z"
            fill="url(#paint68_linear_4_4216)"
          />
          <path
            d="M420.284 307.521H422.325V75.492H420.284V307.521Z"
            fill="url(#paint69_linear_4_4216)"
          />
          <path
            d="M435.326 469.281H437.366V237.252H435.326V469.281Z"
            fill="url(#paint70_linear_4_4216)"
          />
          <path
            d="M450.353 266.82H452.393V34.7908H450.353V266.82Z"
            fill="url(#paint71_linear_4_4216)"
          />
          <path
            d="M460.043 517.987H462.083V285.958H460.043V517.987Z"
            fill="url(#paint72_linear_4_4216)"
          />
          <path
            d="M374.703 576.94H376.744V344.911H374.703V576.94Z"
            fill="url(#paint73_linear_4_4216)"
          />
          <path
            d="M475.084 438.671H477.125V206.641H475.084V438.671Z"
            fill="url(#paint74_linear_4_4216)"
          />
          <path
            d="M490.111 306.65H492.152V74.6209H490.111V306.65Z"
            fill="url(#paint75_linear_4_4216)"
          />
          <path
            d="M497.76 555.221H499.801V323.191H497.76V555.221Z"
            fill="url(#paint76_linear_4_4216)"
          />
          <path
            d="M0.693036 363.878H2.73376L2.73376 131.848H0.693036L0.693036 363.878Z"
            fill="url(#paint77_linear_4_4216)"
          />
          <path
            d="M15.7202 439.542H17.761L17.761 207.513H15.7202L15.7202 439.542Z"
            fill="url(#paint78_linear_4_4216)"
          />
          <path
            d="M30.7617 287.173H32.8024L32.8024 55.1434H30.7617L30.7617 287.173Z"
            fill="url(#paint79_linear_4_4216)"
          />
          <path
            d="M45.8174 378.149H47.8582L47.8582 146.12H45.8174L45.8174 378.149Z"
            fill="url(#paint80_linear_4_4216)"
          />
          <path
            d="M60.8446 478.858H62.8853L62.8853 246.829H60.8446L60.8446 478.858Z"
            fill="url(#paint81_linear_4_4216)"
          />
          <path
            d="M75.886 332.739H77.9268L77.9268 100.71H75.886L75.886 332.739Z"
            fill="url(#paint82_linear_4_4216)"
          />
          <path
            d="M90.9132 449.289H92.954L92.954 217.26H90.9132L90.9132 449.289Z"
            fill="url(#paint83_linear_4_4216)"
          />
          <path
            d="M105.969 304.911H108.01L108.01 72.8817H105.969L105.969 304.911Z"
            fill="url(#paint84_linear_4_4216)"
          />
          <path
            d="M115.645 556.077H117.685L117.685 324.048H115.645L115.645 556.077Z"
            fill="url(#paint85_linear_4_4216)"
          />
          <path
            d="M30.3193 576.941H32.36L32.36 344.912H30.3193L30.3193 576.941Z"
            fill="url(#paint86_linear_4_4216)"
          />
          <path
            d="M130.672 468.598H132.713L132.713 236.568H130.672L130.672 468.598Z"
            fill="url(#paint87_linear_4_4216)"
          />
          <path
            d="M145.728 265.608H147.768L147.768 33.5789H145.728L145.728 265.608Z"
            fill="url(#paint88_linear_4_4216)"
          />
          <path
            d="M153.362 514.15H155.403L155.403 282.121H153.362L153.362 514.15Z"
            fill="url(#paint89_linear_4_4216)"
          />
          <path
            d="M326.839 131.85H324.798V363.879H326.839V131.85Z"
            fill="url(#paint90_linear_4_4216)"
          />
          <path
            d="M311.812 207.513H309.771V439.542H311.812V207.513Z"
            fill="url(#paint91_linear_4_4216)"
          />
          <path
            d="M296.77 33.3945H294.729V265.424H296.77V33.3945Z"
            fill="url(#paint92_linear_4_4216)"
          />
          <path
            d="M281.729 124.371H279.688V356.401H281.729V124.371Z"
            fill="url(#paint93_linear_4_4216)"
          />
          <path
            d="M266.687 283.69H264.646V515.72H266.687V283.69Z"
            fill="url(#paint94_linear_4_4216)"
          />
          <path
            d="M251.646 75.4932H249.605V307.523H251.646V75.4932Z"
            fill="url(#paint95_linear_4_4216)"
          />
          <path
            d="M236.618 237.253H234.578V469.282H236.618V237.253Z"
            fill="url(#paint96_linear_4_4216)"
          />
          <path
            d="M221.577 34.7939H219.536V266.823H221.577V34.7939Z"
            fill="url(#paint97_linear_4_4216)"
          />
          <path
            d="M211.887 285.96H209.846V517.989H211.887V285.96Z"
            fill="url(#paint98_linear_4_4216)"
          />
          <path
            d="M297.227 344.927H295.186V576.956H297.227V344.927Z"
            fill="url(#paint99_linear_4_4216)"
          />
          <path
            d="M196.86 206.643H194.819V438.672H196.86V206.643Z"
            fill="url(#paint100_linear_4_4216)"
          />
          <path
            d="M181.819 74.6221H179.778V306.652H181.819V74.6221Z"
            fill="url(#paint101_linear_4_4216)"
          />
          <path
            d="M174.169 323.178H172.129V555.207H174.169V323.178Z"
            fill="url(#paint102_linear_4_4216)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4_4216"
              x1="1303.85"
              y1="184.822"
              x2="1407.71"
              y2="243.493"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4_4216"
              x1="1288.81"
              y1="260.485"
              x2="1392.68"
              y2="319.152"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_4_4216"
              x1="1273.78"
              y1="108.116"
              x2="1377.64"
              y2="166.783"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_4_4216"
              x1="1258.74"
              y1="199.093"
              x2="1362.6"
              y2="257.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_4_4216"
              x1="1243.7"
              y1="299.801"
              x2="1347.56"
              y2="358.468"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_4_4216"
              x1="1228.65"
              y1="153.683"
              x2="1332.52"
              y2="212.353"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_4_4216"
              x1="1213.63"
              y1="270.233"
              x2="1317.49"
              y2="328.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_4_4216"
              x1="1198.59"
              y1="125.854"
              x2="1302.45"
              y2="184.521"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_4_4216"
              x1="1188.9"
              y1="377.021"
              x2="1292.77"
              y2="435.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_4_4216"
              x1="1274.24"
              y1="397.899"
              x2="1378.1"
              y2="456.566"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_4_4216"
              x1="1173.87"
              y1="289.527"
              x2="1277.73"
              y2="348.208"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_4_4216"
              x1="1158.83"
              y1="86.5532"
              x2="1262.69"
              y2="145.22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_4_4216"
              x1="1151.17"
              y1="335.108"
              x2="1255.04"
              y2="393.775"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_4_4216"
              x1="1084.69"
              y1="184.835"
              x2="980.814"
              y2="243.502"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_4_4216"
              x1="1099.72"
              y1="260.485"
              x2="995.855"
              y2="319.152"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_4_4216"
              x1="1114.75"
              y1="86.3659"
              x2="1010.88"
              y2="145.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_4_4216"
              x1="1129.8"
              y1="177.343"
              x2="1025.94"
              y2="236.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_4_4216"
              x1="1144.83"
              y1="336.692"
              x2="1040.97"
              y2="395.359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_4_4216"
              x1="1159.88"
              y1="128.479"
              x2="1056.01"
              y2="187.146"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_4_4216"
              x1="1174.91"
              y1="290.241"
              x2="1071.05"
              y2="348.907"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_4_4216"
              x1="1189.94"
              y1="87.764"
              x2="1086.08"
              y2="146.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_4_4216"
              x1="1199.63"
              y1="338.931"
              x2="1095.77"
              y2="397.598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_4_4216"
              x1="1114.3"
              y1="397.898"
              x2="1010.44"
              y2="456.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_4_4216"
              x1="1214.67"
              y1="259.629"
              x2="1110.81"
              y2="318.296"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint24_linear_4_4216"
              x1="1229.74"
              y1="127.552"
              x2="1125.88"
              y2="186.219"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint25_linear_4_4216"
              x1="1237.36"
              y1="376.15"
              x2="1133.5"
              y2="434.817"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint26_linear_4_4216"
              x1="740.294"
              y1="184.835"
              x2="636.43"
              y2="243.504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint27_linear_4_4216"
              x1="755.334"
              y1="260.485"
              x2="651.472"
              y2="319.152"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint28_linear_4_4216"
              x1="770.376"
              y1="108.116"
              x2="666.499"
              y2="166.782"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint29_linear_4_4216"
              x1="785.403"
              y1="199.092"
              x2="681.54"
              y2="257.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint30_linear_4_4216"
              x1="800.43"
              y1="299.816"
              x2="696.567"
              y2="358.483"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint31_linear_4_4216"
              x1="815.486"
              y1="153.681"
              x2="711.623"
              y2="212.348"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint32_linear_4_4216"
              x1="830.513"
              y1="270.245"
              x2="726.636"
              y2="328.912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint33_linear_4_4216"
              x1="845.555"
              y1="125.867"
              x2="741.692"
              y2="184.534"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint34_linear_4_4216"
              x1="855.245"
              y1="377.034"
              x2="751.382"
              y2="435.701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint35_linear_4_4216"
              x1="769.905"
              y1="397.898"
              x2="666.042"
              y2="456.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint36_linear_4_4216"
              x1="870.272"
              y1="289.526"
              x2="766.395"
              y2="348.207"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint37_linear_4_4216"
              x1="885.313"
              y1="86.5657"
              x2="781.45"
              y2="145.233"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint38_linear_4_4216"
              x1="892.977"
              y1="335.107"
              x2="789.114"
              y2="393.774"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint39_linear_4_4216"
              x1="959.465"
              y1="184.821"
              x2="1063.33"
              y2="243.488"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint40_linear_4_4216"
              x1="944.424"
              y1="260.484"
              x2="1048.29"
              y2="319.151"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint41_linear_4_4216"
              x1="929.382"
              y1="86.3661"
              x2="1033.24"
              y2="145.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint42_linear_4_4216"
              x1="914.338"
              y1="177.343"
              x2="1018.2"
              y2="236.013"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint43_linear_4_4216"
              x1="899.299"
              y1="336.676"
              x2="1003.18"
              y2="395.343"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint44_linear_4_4216"
              x1="884.272"
              y1="128.465"
              x2="988.135"
              y2="187.132"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint45_linear_4_4216"
              x1="869.228"
              y1="290.225"
              x2="973.093"
              y2="348.895"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint46_linear_4_4216"
              x1="854.189"
              y1="87.7655"
              x2="958.052"
              y2="146.432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint47_linear_4_4216"
              x1="844.513"
              y1="338.932"
              x2="948.376"
              y2="397.598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint48_linear_4_4216"
              x1="929.839"
              y1="397.899"
              x2="1033.7"
              y2="456.566"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint49_linear_4_4216"
              x1="829.472"
              y1="259.614"
              x2="933.335"
              y2="318.281"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint50_linear_4_4216"
              x1="814.431"
              y1="127.594"
              x2="918.293"
              y2="186.261"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint51_linear_4_4216"
              x1="806.781"
              y1="376.149"
              x2="910.644"
              y2="434.816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint52_linear_4_4216"
              x1="617.75"
              y1="218.215"
              x2="721.613"
              y2="276.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint53_linear_4_4216"
              x1="602.708"
              y1="293.88"
              x2="706.571"
              y2="352.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint54_linear_4_4216"
              x1="587.666"
              y1="141.509"
              x2="691.53"
              y2="200.178"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint55_linear_4_4216"
              x1="572.624"
              y1="232.486"
              x2="676.503"
              y2="291.155"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint56_linear_4_4216"
              x1="557.598"
              y1="333.196"
              x2="661.461"
              y2="391.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint57_linear_4_4216"
              x1="542.557"
              y1="187.091"
              x2="646.42"
              y2="245.758"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint58_linear_4_4216"
              x1="527.515"
              y1="303.626"
              x2="631.378"
              y2="362.293"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint59_linear_4_4216"
              x1="512.473"
              y1="159.249"
              x2="616.337"
              y2="217.918"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint60_linear_4_4216"
              x1="502.797"
              y1="410.415"
              x2="606.661"
              y2="469.084"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint61_linear_4_4216"
              x1="487.757"
              y1="322.934"
              x2="591.62"
              y2="381.601"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint62_linear_4_4216"
              x1="472.715"
              y1="119.946"
              x2="576.578"
              y2="178.613"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint63_linear_4_4216"
              x1="465.066"
              y1="368.502"
              x2="568.929"
              y2="427.169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint64_linear_4_4216"
              x1="398.578"
              y1="218.23"
              x2="294.715"
              y2="276.897"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint65_linear_4_4216"
              x1="413.62"
              y1="293.893"
              x2="309.756"
              y2="352.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint66_linear_4_4216"
              x1="428.646"
              y1="119.788"
              x2="324.769"
              y2="178.455"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint67_linear_4_4216"
              x1="443.688"
              y1="210.751"
              x2="339.825"
              y2="269.418"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint68_linear_4_4216"
              x1="458.715"
              y1="370.085"
              x2="354.852"
              y2="428.752"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint69_linear_4_4216"
              x1="473.799"
              y1="161.788"
              x2="369.937"
              y2="220.455"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint70_linear_4_4216"
              x1="488.813"
              y1="323.619"
              x2="384.949"
              y2="382.288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint71_linear_4_4216"
              x1="503.854"
              y1="121.172"
              x2="399.977"
              y2="179.839"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint72_linear_4_4216"
              x1="513.529"
              y1="372.339"
              x2="409.667"
              y2="431.006"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint73_linear_4_4216"
              x1="428.191"
              y1="431.292"
              x2="324.327"
              y2="489.961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint74_linear_4_4216"
              x1="528.571"
              y1="293.023"
              x2="424.708"
              y2="351.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint75_linear_4_4216"
              x1="543.612"
              y1="161.002"
              x2="439.735"
              y2="219.669"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint76_linear_4_4216"
              x1="551.276"
              y1="409.473"
              x2="447.413"
              y2="468.154"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint77_linear_4_4216"
              x1="54.1801"
              y1="218.23"
              x2="-49.683"
              y2="276.897"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint78_linear_4_4216"
              x1="69.2073"
              y1="293.894"
              x2="-34.6558"
              y2="352.561"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint79_linear_4_4216"
              x1="84.263"
              y1="141.525"
              x2="-19.6001"
              y2="200.192"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint80_linear_4_4216"
              x1="99.3045"
              y1="232.501"
              x2="-4.55862"
              y2="291.169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint81_linear_4_4216"
              x1="114.332"
              y1="333.196"
              x2="10.4543"
              y2="391.863"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint82_linear_4_4216"
              x1="129.373"
              y1="187.091"
              x2="25.51"
              y2="245.759"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint83_linear_4_4216"
              x1="144.4"
              y1="303.641"
              x2="40.5372"
              y2="362.308"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint84_linear_4_4216"
              x1="159.456"
              y1="159.249"
              x2="55.5929"
              y2="217.916"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint85_linear_4_4216"
              x1="169.132"
              y1="410.415"
              x2="65.2686"
              y2="469.082"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint86_linear_4_4216"
              x1="83.8064"
              y1="431.293"
              x2="-20.0568"
              y2="489.961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint87_linear_4_4216"
              x1="184.159"
              y1="322.95"
              x2="80.2957"
              y2="381.617"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint88_linear_4_4216"
              x1="199.215"
              y1="119.946"
              x2="95.3515"
              y2="178.613"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint89_linear_4_4216"
              x1="206.849"
              y1="368.502"
              x2="102.986"
              y2="427.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint90_linear_4_4216"
              x1="273.352"
              y1="218.217"
              x2="377.215"
              y2="276.884"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint91_linear_4_4216"
              x1="258.31"
              y1="293.88"
              x2="362.188"
              y2="352.547"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint92_linear_4_4216"
              x1="243.283"
              y1="119.776"
              x2="347.146"
              y2="178.444"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint93_linear_4_4216"
              x1="228.242"
              y1="210.738"
              x2="332.105"
              y2="269.405"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint94_linear_4_4216"
              x1="213.2"
              y1="370.072"
              x2="317.063"
              y2="428.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint95_linear_4_4216"
              x1="198.159"
              y1="161.86"
              x2="302.022"
              y2="220.527"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint96_linear_4_4216"
              x1="183.117"
              y1="323.62"
              x2="286.995"
              y2="382.287"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint97_linear_4_4216"
              x1="168.09"
              y1="121.161"
              x2="271.953"
              y2="179.829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint98_linear_4_4216"
              x1="158.4"
              y1="372.327"
              x2="262.263"
              y2="430.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint99_linear_4_4216"
              x1="243.74"
              y1="431.294"
              x2="347.603"
              y2="489.961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint100_linear_4_4216"
              x1="143.359"
              y1="293.01"
              x2="247.236"
              y2="351.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint101_linear_4_4216"
              x1="128.331"
              y1="160.989"
              x2="232.195"
              y2="219.657"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
            <linearGradient
              id="paint102_linear_4_4216"
              x1="120.668"
              y1="409.545"
              x2="224.545"
              y2="468.226"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="0.5" stop-color="#DDD8D5" />
              <stop offset="1" stop-color="#DDD8D5" />
            </linearGradient>
          </defs>
        </svg>

        <TheSectionTitle
          class="liberty__title wow animate__animated animate__fadeInUp"
          color="#052E3E"
        >
          Your purposeful path to&nbsp;liberty
        </TheSectionTitle>
        <p class="liberty__desc wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
          Our mission is to bring prosperity and independence to ... Lorem ipsum dolor sit amet
          consectetur. Quam ultricies orci tortor phasellus. Nisl ut ut ut volutpat. Fusce semper
          tempor egestas diam. Vel placerat eu ullamcorper pellentesque laoreet euismod.
        </p>
        <ul class="liberty__list">
          <li
            class="liberty__item wow animate__animated animate__fadeIn"
            v-for="(item, idx) in items"
            :data-wow-delay="parseFloat(`${0.3 * idx}`) + 's'"
            :key="item.title"
          >
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
                alt="Read the Skyfort Manifesto"
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
  overflow: hidden;
  @include adaptive-value('padding-top', 145, 80, 1);
  padding-bottom: 80px;
  &__inner {
    position: relative;
  }
  &__bg {
    position: absolute;
    width: 140%;
    left: 50%;
    transform: translateX(-50%);
    top: -20%;
    z-index: 0;
    path {
      animation: loader 2s ease-in 1.5s infinite;
      opacity: 0;
    }
  }
  &__title {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    font-feature-settings: 'ss02' on;
    @include adaptive-value('margin-bottom', 64, 70, 1);
    @include adaptive-value('line-height', 88, 53, 1);
    @include adaptive-value('letter-spacing', 0.8, 0.96, 1);
    @include adaptive-value('font-size', 88, 49, 1);
    @media (max-width: 490px) {
      font-feature-settings: initial;
    }
  }
  &__desc {
    position: relative;
    z-index: 1;
    text-align: center;
    @include adaptive-value('font-size', 18, 20, 1);
    @include adaptive-value('line-height', 25, 30, 1);
    @include adaptive-value('letter-spacing', 0.36, 0.6, 1);
    max-width: 785px;
    margin: 0 auto;
    font-weight: 300;
    @include adaptive-value('margin-bottom', 62, 44, 1);
    @media (max-width: 490px) {
      font-weight: 200;
      max-width: 315px;
    }
  }
  &__list {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    margin: -9px;
    flex-wrap: wrap;
    @include adaptive-value('margin-bottom', 76, 60, 1);
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
    @include adaptive-value('padding-left', 35, 25, 1);
    @include adaptive-value('padding-right', 35, 25, 1);
    @include adaptive-value('padding-top', 40, 27, 1);
    @include adaptive-value('padding-bottom', 30, 27, 1);
    @include adaptive-value('border-radius', 40, 32, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      154deg,
      rgba(255, 255, 255, 0.8) 5.42%,
      rgba(255, 255, 255, 0) 36.35%
    );
  }
  &__img-wrapper {
    margin-bottom: 15px;
    svg {
      width: 85px;
      height: 85px;
    }
  }
  &__item-title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 17, 1);
    line-height: calc(24 / 20);
    @include adaptive-value('margin-bottom', 23, 13, 1);
  }
  &__item-desc {
    font-family: 'Articulat CF', sans-serif;
    @include adaptive-value('font-size', 12, 10, 1);
    @include adaptive-value('line-height', 15, 15.5, 1);
    @include adaptive-value('letter-spacing', 0.3, 0.4, 1);
    color: #4e575a;
  }
  &__main-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptive-value('padding-top', 33, 21, 1);
    @include adaptive-value('padding-bottom', 33, 21, 1);
    @include adaptive-value('padding-left', 53, 24, 1);
    @include adaptive-value('padding-right', 40, 24, 1);
    border-radius: 45px;
    background: #fff;
  }
  &__main-link-left {
    display: flex;
    align-items: center;
  }
  &__link-img {
    @include adaptive-value('margin-right', 20, 16, 1);
    @include adaptive-value('width', 39, 24, 1);
  }
  &__link-text {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 20, 10, 1);
    line-height: calc(24 / 20);
    position: relative;
    transform: translateY(-3px);
    &::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      border-radius: 2px;
      background-color: #052e3e;
    }
    @media (max-width: 490px) {
      &::before {
      }
    }
  }
  &__link-arrow {
    @include adaptive-value('width', 24, 18, 1);
  }
}
</style>
