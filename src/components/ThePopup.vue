<script setup>
import { onMounted, ref } from 'vue';
import { useGlobalStore } from '../stores/global'
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore()
const { popupOpened } = storeToRefs(globalStore)

const formLoad = ref(false);
const formLoadText = ref('Отправить');

const closeModal = (event) => {
  if (event.target.classList.contains('modal__content')) {
    globalStore.changeModalOpened(false)
  }
}

const sumbitForm = async (e) => {
  if (formLoad.value) return;

  const formData = new FormData(e.target).entries();
  const body = JSON.stringify({ fields: Object.fromEntries(formData) });

  try {
    formLoad.value = true;
    const request = await fetch('https://api.airtable.com/v0/appyfMQxX3naDC0n2/tblE44oemChAawDsX', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer patzgje0utMdruvrX.07a501d0db9be780db488c9399ddb00ba155ff9b0c00fbf76663e0dcb430be3c',
        'Content-Type': 'application/json', 
      },
      body
    });
    formLoad.value = false;
    formLoadText.value = 'Данные отправлены'

    setTimeout(() => {
      formLoadText.value = 'Отправить'
    }, 1000)
  } catch (error) {
    console.log('data send error', error);
  }
};
</script>

<template>
  <div :class="['modal', { _active: popupOpened }]" id="main-modal">
    <div class="modal__background"></div>
    <div class="modal__content" @click="closeModal">
      <div class="modal__card">
        <div class="modal__card-inner">
          <button class="modal__back" @click="globalStore.changeModalOpened(false)">
            <svg class="modal__back-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.24 6.34">
              <g id="Layer_1" data-name="Layer 1">
                <g>
                  <g>
                    <rect
                      class="cls-1"
                      x="1.19"
                      y="2.91"
                      width=".79"
                      height="3.69"
                      transform="translate(-2.9 2.51) rotate(-45)"
                      fill=" #052e3e"
                      stroke-width="0"
                    />
                    <rect
                      class="cls-1"
                      x="-.26"
                      y="1.19"
                      width="3.69"
                      height=".79"
                      transform="translate(-.66 1.58) rotate(-45)"
                    />
                  </g>
                  <rect class="cls-1" x="3.17" y="2.78" width="5.07" height=".79" />
                </g>
              </g>
            </svg>
            <span class="modal__back-text">Назад</span>
          </button>
          <h2 class="modal__title">Получить доступ</h2>
          <form class="modal__form" @submit.prevent="sumbitForm">
            <div class="modal__container">
              <label class="modal__label">
                <span class="modal__label-text">Имя*</span>
                <input class="modal__input" type="text" name="Name" required />
              </label>
              <label class="modal__label">
                <span class="modal__label-text">Email*</span>
                <input class="modal__input" type="text" name="Email" required />
              </label>
            </div>

            <label class="modal__label">
              <span class="modal__label-text">Сообщение</span>
              <textarea class="modal__textarea" type="text" name="Comments"></textarea>
            </label>
            <span class="modal__span">Нажимая Отправить, вы&nbsp;соглашаетесь с&nbsp;<a href="#">политикой обработки персональных данных</a>.</span>
            <button :class="[
              'modal__submit-btn',
              { 'modal__submit-btn-load': formLoad }
            ]" type="submit">{{ formLoadText }} <div v-if="formLoad" class="modal__loader"></div> </button>
          </form>
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
  transition: 0.3s;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #0a0b13;
    opacity: 0.8;
  }
  &__container {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding-bottom: 15px;
    .modal__label {
      width: 50%;
    }
    .modal__label + .modal__label {
      margin-top: 0;
    }
    @media (max-width: 1100px) {
      flex-direction: column;
      .modal__label {
        width: 100%;
      }
    }
  }
  &__span {
    margin-top: 15px;
    font-size: 14px;
    @media (max-width: 1100px) {
      font-size: 12px;
    }
    a {
      border-bottom: 1px solid #000;
    }
  }
  &__content {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    overflow-y: auto;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    padding: 20px;
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
    background: linear-gradient(315deg, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 102%);
    backdrop-filter: blur(5px);
    @include adaptive-value('border-radius', 20, 15, 1);
    max-width: 872px;
    width: 100%;
    position: relative;
    @include adaptive-value('padding', 15, 12, 1);
    display: grid;
    border: 1px solid #fff;
    transition: 0.6s;
  }
  &__card-inner {
    @include adaptive-value('padding-top', 35, 25, 1);
    @include adaptive-value('padding-bottom', 35, 25, 1);
    @include adaptive-value('padding-left', 50, 30, 1);
    @include adaptive-value('padding-right', 50, 30, 1);
    @include adaptive-value('border-radius', 10, 8, 1);
    background-color: #fff;
  }
  &__back {
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
    @include adaptive-value('margin-bottom', 30, 15, 1);
    cursor: pointer;
    display: flex;
    position: relative;
    @include adaptive-value('left', -22, -17, 1);
    align-items: center;
    @media (hover: hover) {
      &:hover {
        .modal__back-text {
          color: #888;
        }
        .modal__back-img {
          svg,
          rect {
            fill: #888;
          }
        }
      }
    }
  }
  &__back-img {
    @include adaptive-value('margin-right', 10, 7, 1);
    @include adaptive-value('width', 12, 10, 1);
    svg,
    rect {
      transition: 0.15s;
    }
  }
  &__back-text {
    font-size: 12px;
    color: #052e3e;
    line-height: 13.88px;
    transition: 0.15s;
  }
  &__title {
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 29, 24, 1);
    line-height: 28.75px;
    @include adaptive-value('margin-bottom', 30, 15, 1);
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__label {
    display: flex;
    flex-direction: column;
  }
  &__label + &__label {
    @include adaptive-value('margin-top', 15, 8, 1);
  }
  &__label-text {
    @include adaptive-value('margin-bottom', 15, 8, 1);
    font-family: 'Atyp Display', sans-serif;
    @include adaptive-value('font-size', 14, 13, 1);
    line-height: 15.86px;
    color: #052e3e;
  }
  &__input {
    border: 2px solid #f1f3f5;
    @include adaptive-value('padding-top', 10, 8, 1);
    @include adaptive-value('padding-bottom', 10, 8, 1);
    @include adaptive-value('padding-left', 15, 10, 1);
    @include adaptive-value('padding-right', 15, 10, 1);
    outline: none;
    @include adaptive-value('border-radius', 8, 6, 1);
    font-family: 'Atyp Display', sans-serif;
    font-size: 14px;
    line-height: 15.86px;
    color: #586164;
    transition: 0.15s;
    &:focus {
      border-color: #e1e4e6;
    }
  }
  &__textarea {
    border: 2px solid #f1f3f5;
    @include adaptive-value('padding-top', 10, 8, 1);
    @include adaptive-value('padding-bottom', 10, 8, 1);
    @include adaptive-value('padding-left', 15, 10, 1);
    @include adaptive-value('padding-right', 15, 10, 1);
    outline: none;
    border-radius: 8px;
    font-family: 'Atyp Display', sans-serif;
    font-size: 14px;
    line-height: 15.86px;
    color: #586164;
    resize: vertical;
    max-height: 200px;
    min-height: 80px;
  }
  &__submit-btn {
    position: relative;
    @include adaptive-value('margin-top', 30, 15, 1);
    font-size: 14px;
    line-height: 13.81px;
    border-radius: 20px;
    @include adaptive-value('padding-top', 14, 10, 1);
    @include adaptive-value('padding-bottom', 14, 10, 1);
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    outline: none;
    background: #a5cce0;
    color: #052e3e;
    cursor: pointer;
    transition: 0.15s;
    @media (hover: hover) {
      &:hover {
        background: #86cbee;
      }
    }
    &-load {
      color: transparent
    }
    @media (max-width: 1100px) {
      font-weight: 300;
    }
  }
  &__loader {
    position: absolute;
    top: 43%;
    left: 50%;
    transform: translate(-50%);
    width: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    animation: l5 1s infinite linear alternate;
  }
}

@keyframes l5 {
    0% {
      box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 
    }
    33% {
      box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002
    }
    66% {
      box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002
    }
    100% {
      box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 
    }
}
</style>
