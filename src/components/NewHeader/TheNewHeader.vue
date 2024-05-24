<script>
const navItems = []
export default {
  data() {
    return {
        currentMenu: [],
        isShowMenu: false,
    }
  },
    methods: {
        handleFamilyOfficeHover() {
            this.currentMenu = navItems
            this.isShowMenu = true
        },
        handleMarketHover() {
            this.currentMenu = navItems
            this.isShowMenu = true
        },
  },
}
</script>

<template>
    <div class="box"></div>
    <div
        class="container"
        @mouseleave="this.isShowMenu=false"
      >
        <div class="header">
          <a href="/">
            <div className={styles.logo}>
              <img
                className={styles.logo_img}
                priority
                src="/icons/logo_black.svg"
                width={146}
                height={31}
                alt="SkyFort"
              />
            </div>
            <div class="logo__mobile">
              <img
                class="logo_img__mobile"
                priority
                src="/icons/logo.svg"
                width={21}
                height={30}
                alt="SkyFort"
              />
            </div>
          </a>
          <div class="navigation">
            <a href="/">
              <div class="nav">О нас</div>
            </a>
            <a href="/mfo" @mouseenter="handleFamilyOfficeHover">
              <div class="nav">
                Семейный офис <img src="/icons/arrow_new_header.svg" alt="" />
              </div>
            </a>
            <a href="/" @mouseenter="handleMarketHover">
              <div class="nav">
                Маркетплейс <img src="/icons/arrow_new_header.svg" alt="" />
              </div>
            </a>
          </div>
          <div class="btns">
            <div class="profile_btn">Личный кабинет</div>
        </div>
    </div>
    <HeaderMenu isShow="isShowMenu" items="currentMenu" />
    </div>
</template>


<style lang="scss">
.box {
  height: 80px;
  width: 100%;
}

.container {
  // @include container();

  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.header {
  display: flex;
  align-items: center;
  padding: 15px 38px;
  margin-bottom: 10px;
  background: linear-gradient(
    92.45deg,
    rgba(255, 255, 255, 0.79) -36.65%,
    rgba(255, 255, 255, 0.47) 140.09%
  );
  border: 1px solid #DBECF5;
  backdrop-filter: blur(10px);
  border-radius: 34px;
}

.logo_img {
  width: 146px;
  height: 31px;
  &__mobile {
    width: 21px;
    height: 30px;
    object-fit: cover;
  }
}

.logo {
  &__mobile {
    display: none;
  }
}

.navigation {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 64px;
}

.nav {
  display: flex;
  align-items: center;
  color: #052e3e;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;

    img {
      transform: rotate(180deg);
    }
  }

  img {
    // Без трансформа лежит криво
    transform: translateY(-1px);
    width: 16px;
    height: 16px;
  }
}

.btns {
  margin-left: auto;
}

.profile_btn {
  padding: 5px 20px;
  color: $navyBlue;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;

  background: linear-gradient(
    92.84deg,
    #ffffff 12%,
    rgba(255, 255, 255, 0.26) 94.33%
  );
  border-radius: 34px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: $mobile) {
  .header {
    padding: 16px 20px;
  }

  .logo {
    display: none;

    &__mobile {
      display: block;
    }
  }

  .navigation {
    gap: 8px;
    margin-left: 24px;
  }

  .nav {
    font-size: 12px;
  }

  .profile_btn {
    font-size: 12px;
    padding: 5px 10px;
  }
}

</style>