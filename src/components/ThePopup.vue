<script setup>
import { useGlobalStore } from '../stores/global'
import { storeToRefs } from 'pinia'
import 'vue-select/dist/vue-select.css'

const globalStore = useGlobalStore()
const { popupOpened } = storeToRefs(globalStore)

const closeModal = (event) => {
  if (event.target.classList.contains('modal__content')) {
    globalStore.changeModalOpened(false)
  }
}
</script>

<template>
  <div :class="['modal', { _active: popupOpened }]" id="main-modal">
    <div class="modal__background"></div>
    <div class="modal__content" @click="closeModal">
      <div class="modal__card">
          <div class="modal__card-inner">
            <div class="modal__card-block">
              <span class="modal__card-title">По всем вопросам обращайтесь к нам</span>
              <div class="modal__card-line">
                <span class="modal__card-linkTitle">Email</span>
                <a class="modal__card-link" href="mailto:skyfort@capital.com" target="_blank">skyfort@capital.com</a></div>
              <div class="modal__card-line">
                <span class="modal__card-linkTitle">Телефон</span>
                <a class="modal__card-link" href="tel:+79000998877">+7 900 099 88 77</a></div>
              <div class="modal__card-btns">
                <a class="modal__card-btn" href="https://wa.me/+79031005481" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.99993C0 4.03698 4.03584 0 8.99739 0V0.000149385H9.00261C13.9642 0.000149385 18 4.03713 18 9.00008C18 13.9629 13.9642 18 9.00261 18C7.17241 18 5.47448 17.4551 4.05167 16.5133L0.592352 17.6189L1.71376 14.2751C0.634748 12.7935 0 10.9682 0 8.99993ZM5.91367 4.12702C6.17805 4.13777 6.31031 4.1536 6.48482 4.57156C6.54119 4.70765 6.61863 4.89557 6.7035 5.10151C6.9452 5.68801 7.24713 6.42068 7.29408 6.5186C7.35753 6.6509 7.42112 6.83084 7.3311 7.0054C7.25236 7.17279 7.1828 7.25321 7.067 7.38707C7.05832 7.3971 7.04938 7.40744 7.04015 7.41813C6.98355 7.48383 6.92793 7.54271 6.87245 7.60144C6.7983 7.67995 6.7244 7.75819 6.64874 7.85207C6.64662 7.85455 6.6445 7.85704 6.64237 7.85954C6.52251 8.00021 6.39225 8.15308 6.54304 8.41293C6.69636 8.67216 7.22526 9.5345 8.00287 10.2275C8.92573 11.0485 9.68789 11.3568 10.0317 11.4958C10.0623 11.5082 10.0896 11.5192 10.1134 11.5292C10.3302 11.6192 10.5895 11.598 10.7482 11.4287C10.9202 11.2432 11.1269 10.9531 11.3421 10.6512C11.3784 10.6001 11.415 10.5488 11.4517 10.4975C11.6315 10.2435 11.8588 10.2117 12.0969 10.3016C12.3403 10.3863 13.6257 11.0212 13.8901 11.1535C13.9441 11.1805 13.9944 11.2047 14.0407 11.227C14.2212 11.3138 14.3421 11.3719 14.3926 11.4603C14.4562 11.5714 14.4562 12.0953 14.2393 12.7091C14.0224 13.3227 13.1601 13.8309 12.4725 13.979C12.0018 14.0795 11.3881 14.1589 9.31999 13.3018C6.87035 12.2872 5.22836 9.90632 4.89438 9.42207C4.86779 9.38351 4.84949 9.35698 4.83973 9.34412C4.83602 9.339 4.8316 9.33296 4.82653 9.32602C4.65849 9.09621 3.77132 7.88293 3.77132 6.6297C3.77132 5.37485 4.39099 4.74492 4.6685 4.46282C4.67651 4.45468 4.68423 4.44683 4.69165 4.43926C4.90855 4.21707 5.26817 4.11657 5.61212 4.11657C5.71272 4.11707 5.81328 4.12055 5.91367 4.12702Z" fill="#99C2D6"/>
                  </svg>
                  WhatsApp
                </a>
                <a class="modal__card-btn"  href="https://t.me/skyfort_support" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9.80636 6.42485C8.24569 7.07515 3.74569 8.92195 3.74569 8.92195C2.67923 9.33815 3.30347 9.72832 3.30347 9.72832C3.30347 9.72832 4.21387 10.0405 4.99424 10.2745C5.77458 10.5087 6.19078 10.2486 6.19078 10.2486C6.19078 10.2486 8.01158 9.05202 9.85838 7.77744C11.159 6.89306 10.8468 7.62138 10.5347 7.93354C9.85838 8.60983 8.7399 9.6763 7.80347 10.5347C7.38731 10.8989 7.59539 11.211 7.77748 11.367C8.30703 11.8151 9.55426 12.63 10.1205 13C10.2774 13.1026 10.3821 13.1709 10.4046 13.1878C10.5347 13.2919 11.263 13.7601 11.7052 13.6561C12.1474 13.552 12.1994 12.9537 12.1994 12.9537C12.1994 12.9537 12.5376 10.8208 12.8497 8.86993C12.9075 8.48689 12.9654 8.11189 13.0193 7.76222C13.1594 6.85335 13.2731 6.11559 13.2919 5.85259C13.37 4.96822 12.4335 5.33236 12.4335 5.33236C12.4335 5.33236 10.4046 6.16475 9.80636 6.42485Z" fill="#99C2D6"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
            <div class="modal__card-block">
              <span class="modal__card-title">По вопросам коммуникации и PR</span>
              <div class="modal__card-line">
                <span class="modal__card-linkTitle">Email</span>
                <a class="modal__card-link" href="mailto:sofia.paskal@skyfort.capital" target="_blank">sofia.paskal@skyfort.capital</a></div>
              <div class="modal__card-line">
                <span class="modal__card-linkTitle">Telegram</span>
                <a class="modal__card-link" href="https://t.me/sofyapaskal" target="_blank">https://t.me/sofyapaskal</a></div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  opacity: 0;
  visibility: hidden;
  &._active {
    opacity: 1;
    visibility: visible;
    .modal__card {
      transform: translateY(0);
    }
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
  transition: 0.5s;
 
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0a0b13;
    opacity: 0.8;
  }
  &__content {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    overflow: hidden;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    padding: 20px;
    @media (max-width: 1050px){
      overflow-y: auto;
    }
    &::-webkit-scrollbar {
      width: 10px; /* ширина scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: transparent; /* цвет дорожки */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b1b1b1; /* цвет плашки */
      &:hover {
        background-color: #777777;
      }
      &:active {
        background-color: #4b4b4b;
      }
      border-radius: 5px;
      border: 0px solid #fff; /* padding вокруг плашки */
    }
  }
  &__card {
    transform: translateY(80px);
    @include adaptive-value('border-radius', 24, 24, 1);
    max-width: 407px;
    width: 100%;
    position: relative;
    transition: 0.6s;
  }
  &__card-inner {
    @include adaptive-value('padding', 24, 24, 1);
    @include adaptive-value('border-radius', 24, 24, 1);
    border: 0.5px solid var(--White, #FFF);
    background: linear-gradient(126deg, #FFF 0%, rgba(255, 255, 255, 0.66) 100%);
    backdrop-filter: blur(10px);
  }
  &__card-block{
    display: flex;
    flex-direction: column;
  }
  &__card-block:first-child{
    border-bottom: 1px white solid;
    margin-bottom: 16px;
  }
  &__card-title{
    margin-bottom: 16px;
    color: var(--Dark-blue-2, #1B292F);
    font-size: 13px;
    line-height: 140%;
    @media (max-width: 325px){
      width: 70%;
    }
  }
  &__card-line{
    display: flex;
    justify-content: space-between;
  }
  &__card-line:nth-child(even){
    margin-bottom: 7px;
  }

  &__card-linkTitle{
    color: var(--1-1, #586165);
    font-size: 13px;
    line-height: 140%;
  }
  &__card-link{
    color: var(--1, #052E3E);
    font-size: 13px;
    line-height: 140%;
    cursor: pointer;
  }
  &__card-btns{
    margin: 20px 0 16px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  &__card-btn{
    cursor: pointer;
    min-height: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 28px;
    border: 1px solid #FFF;
    background: linear-gradient(90deg, #FFF 0.2%, rgba(255, 255, 255, 0.68) 100%);
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.02);
    color: var(--1, #052E3E);
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
  }
}

@keyframes l5 {
  0% {
    box-shadow:
      20px 0 #000,
      -20px 0 #0002;
    background: #000;
  }
  33% {
    box-shadow:
      20px 0 #000,
      -20px 0 #0002;
    background: #0002;
  }
  66% {
    box-shadow:
      20px 0 #0002,
      -20px 0 #000;
    background: #0002;
  }
  100% {
    box-shadow:
      20px 0 #0002,
      -20px 0 #000;
    background: #000;
  }
}
</style>
