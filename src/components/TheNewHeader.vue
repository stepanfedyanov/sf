
<script>
import TheHeaderMenu from './TheHeaderMenu.vue'
const familyOfficeItems = [
    {
      "tag": {
        "slug": "multi-semeinii-ofis",
        "title": "Семейный офис",
        "isMfo": true
      },
      "products": [
        {
          "description": "Составление и ведение портфеля клиента на российском или зарубежном брокере с фокусом на биржевые и OTC инструменты, подобранные в соответствии с целями",
          "image": "https://s3.skyfort.capital/upload/pageheader15-9f3ec8bb.webp",
          "title": "Консультационное управление портфелем (Advisory)",
          "slug": "konsultatsionnoeupravlenieportfelemadvisory",
          "isBanned": false
        },
        {
          "description": "Консультация управляющего капиталом по запросу клиента и предварительному брифу. Как правило, по инвестиционным идеям, но возможны и другие темы.",
          "image": "https://s3.skyfort.capital/upload/productcard11-f33acce4.webp",
          "title": "Консультация по точечным инвестиционным идеям",
          "slug": "konsultatsiyapotochechniminvestitsionnimideyam",
          "isBanned": false
        },
        {
          "description": "Регулярная поддержка со стороны команды семейного офиса по всем вопросам управления благосостоянием, включая подборку индивидуальных решений для инвестиций",
          "image": "https://s3.skyfort.capital/upload/pageheader16-e7df12e9.webp",
          "title": "Подписка на регулярное обслуживание",
          "slug": "podpiskanaregulyarnoeobsluzhivanie",
          "isBanned": false
        },
        {
          "description": "Комплексная диагностика личного капитала по всем видам активов, включая финансовые инструменты, недвижимость, бизнес и криптовалюты.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader4-d8868593.webp",
          "title": "Анализ и планирование благосостояния \"Wealth check & plan\"",
          "slug": "wealth",
          "isBanned": false
        }
      ]
    }
]
  
const marketItems = [
    {
      "tag": {
        "slug": "uslugi-dlya-biznesa",
        "title": "Услуги для бизнеса",
        "isMfo": false
      },
      "products": [
        {
          "description": "Разработка акционерных и опционных соглашений в рамках структурирования бизнеса и отношений между партнерами и ключевыми сотрудниками компаний.",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard7-b41af734.webp",
          "title": "Акционерные и опционные соглашения",
          "slug": "aktsionernie-i-optsionnie-soglasheniya",
          "isBanned": true
        },
        {
          "description": "Оценка состояния бизнеса и его стоимости с целью покупки или продажи",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard6-5b2640b5.webp",
          "title": "Независимый совет директоров ",
          "slug": "nezavisimii-sovet-direktorov-",
          "isBanned": true
        },
        {
          "description": "Оценка состояния бизнеса и его стоимости с целью покупки или продажи.",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard8-b7956f64.webp",
          "title": "Аудит и оценка бизнеса (Due Diligence & Valuation)",
          "slug": "otsenkabiznesa",
          "isBanned": true
        },
        {
          "description": "Структурирование и консолидация денежных потоков компании для создания необходимой прозрачности для собственника.",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard4-1854aa0d.webp",
          "title": "Подготовка управленческой отчетности",
          "slug": "podgotovka-upravlencheskoi-otchetnosti",
          "isBanned": false
        },
        {
          "description": "Содействие в проведении сделок слияния-поглощения на стороне продавца (оценка, поиск покупателя, организация сделки).",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard5-cbe27d45.webp",
          "title": "Сопровождение сделок M&A",
          "slug": "soprovozhdenie",
          "isBanned": true
        }
      ]
    },
    {
      "tag": {
        "slug": "laifstail",
        "title": "Лайфстайл",
        "isMfo": false
      },
      "products": [
        {
          "description": "Услуги по защите жизни, здоровья и имущества, а также поддержка в GR и сложных переговорах.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader9-d6ff1184.webp",
          "title": "Личная безопасность",
          "slug": "bezopasnost",
          "isBanned": false
        },
        {
          "description": "Предоставление проверенного и опытного персонального врача, постоянно находящегося на связи и оказывающего медицинскую поддержку всем членам семьи.",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard-7900543b.webp",
          "title": "Семейный доктор",
          "slug": "semeinii-doktor",
          "isBanned": true
        }
      ]
    },
    {
      "tag": {
        "slug": "lichnaya-finansovaya-infrastruktura",
        "title": "Личная финансовая инфраструктура",
        "isMfo": false
      },
      "products": [
        {
          "description": "Открытие текущих и брокерских счетов за границей для эффективного управления капиталом в различных юрисдикциях и снижения рисков блокировок.",
          "image": "https://s3.skyfort.capital/upload/Pictures/PreIPO-Kraken-7cd19999.webp",
          "title": "Брокерские и банковские счета за рубежом",
          "slug": "brokerskie-i-bankovskie-scheta-za-rubezhom",
          "isBanned": false
        },
        {
          "description": "Структурирование личных активов для оптимизации налогов и схемы владения с использованием личных фондов - наиболее актуального юридического механизма в РФ",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader6-06724768.webp",
          "title": "Личные фонды",
          "slug": "lichnie-fondi",
          "isBanned": false
        },
        {
          "description": "Оформление видов на жительство (ВНЖ) и гражданств зарубежных стран жителями РФ для свободного перемещения по миру, безопасности активов и упрощения комплаенс-процедур.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader10-fd890a6f.webp",
          "title": "Паспорта и ВНЖ",
          "slug": "pasporta-i-vnzh",
          "isBanned": false
        },
        {
          "description": "Комплекс действий по разблокировке активов из европейского депозитария, в т. ч. подготовка документов, получение европейского ВНЖ и открытие счета.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader8-0627d0be.webp",
          "title": "Разблокировка активов",
          "slug": "razblokirovka-aktivov",
          "isBanned": false
        }
      ]
    },
    {
      "tag": {
        "slug": "alternativnie-investitsii",
        "title": "Альтернативные инвестиции",
        "isMfo": false
      },
      "products": [
        {
          "description": "Онлайн-платформа, которая безопасно выдает займы под залог ликвидных активов. Инвестиционный инструмент с доходностью до 21% и защитой в виде залога.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-1-26c1113c.webp",
          "title": "Чистые займы под залог недвижимости Credit.Club hey hey hey",
          "slug": "drugieproduct",
          "isBanned": false
        },
        {
          "description": "Покупка облигаций и ценных бумаг российских эмитентов за пределами РФ для их перевода в российский контур и получения прибыли за счет арбитража в цене.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-4-1f3dea09.webp",
          "title": "Еврооблигации российских эмитентов за пределами РФ",
          "slug": "evroobligatsii-rossiiskih-emitentov-za-predelami-rf",
          "isBanned": false
        },
        {
          "description": "Высоконадежный private credit фонд в Швейцарии с доходностью 8-9% в валюте, инвестирующий в залоговые сделки торгового финансирования",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-2-e9428349.webp",
          "title": "Фонд торгового финансирования Horizon Capital AG",
          "slug": "fond-torgovogo-finansirovaniya-horizon-capital-ag",
          "isBanned": false
        },
        {
          "description": "Инвестиция в одну из ведущих криптобирж мира с 76% ожидаемой доходности при выходе на IPO, запланированном на 2025 год.",
          "image": "https://s3.skyfort.capital/upload/Pictures/PreIPO-Kraken-7cd19999.webp",
          "title": "Pre-IPO Kraken",
          "slug": "pre-ipo-kraken",
          "isBanned": false
        },
        {
          "description": "Подбор структурных нот от ведущих глобальных банков по индивидуальному запросу клиента.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader12-dfd6d3f1.webp",
          "title": "Структурные продукты ",
          "slug": "product",
          "isBanned": false
        },
        {
          "description": "Участие в ведущих фондах VC/PE, инвестирующих в бизнесы на разных стадиях развития, с широкой индустриальной и географической диверсификацией.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-5-04e8316d.webp",
          "title": "Фонды прямых и венчурных инвестиций",
          "slug": "prymih",
          "isBanned": false
        },
        {
          "description": "Инвестиции в инструменты с доходностью в USD через fixed-income фонд «Standard Еврооблигации» под управлением казахстанской инвестиционной компании.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-1c9cb217.webp",
          "title": "Fixed income фонд в USD «Standard – Еврооблигации»",
          "slug": "standard",
          "isBanned": false
        }
      ]
    },
    {
      "tag": {
        "slug": "finansovoe-obrazovanie",
        "title": "Образование",
        "isMfo": false
      },
      "products": [
        {
          "description": "Executive MBA, или сокращенно EMBA, — это программа поствысшего образования для топ-менеджмента и бизнес-владельцев с опытом управления не менее 7 лет.\n\nПрограмма подойдет тем, кто добился высоких результатов как личных, так и профессиональных, и начинает задумываться о постановке более амбициозных задач — для их достижения ищет новые знания, вдохновение и окружение, старается перешагнуть на новую ступень или пробить стеклянный потолок.\n\nОбычная длительность EMBA — от 18 до 22 месяцев. Программа не предусматривает длительных периодов нахождения «вне офиса», поэтому каждый месяц необходимо выделять только от 5 до 7 дней на пребывание на кампусе (территории университета).\n\nEMBA всегда насыщена изучением материалов, решением кейсов в группе и выполнением практических заданий. То есть на такой программе самообучение будет занимать 60% от длительности программы.",
          "image": "https://s3.skyfort.capital/upload/pageheader18-d10fc59e.webp",
          "title": "Executive MBA",
          "slug": "executivemba",
          "isBanned": false
        },
        {
          "description": "Магистратура и программа MBA за рубежом подойдет тем, кто хочет занять ведущую роль в зарубежной компании: стать топ-менеджером, руководителем направления или запустить собственный стартап за границей. Выпускники таких программ также имеют преимущество на рынке труда, обладая международным образованием и опытом, ценным для работодателей в разных странах.\n\nDasha Ald project подберет программу обучения в магистратуре и поможет достичь любых карьерных целей.",
          "image": "https://s3.skyfort.capital/upload/pageheader17-b3c66d39.webp",
          "title": "Магистратура и MBA",
          "slug": "magistraturaimba",
          "isBanned": false
        },
        {
          "description": "Обучение ребенка в зарубежной школе — это возможность получить знания, необходимые для поступления в престижные  университеты мира, выучить иностранный язык на уровне носителя и открыть для себя целый мир. А еще, в зависимости от интересов — сделать первый шаг к корпоративной карьере или к развитию международного предпринимательства.",
          "image": "https://s3.skyfort.capital/upload/pageheader20-67bd924a.webp",
          "title": "Среднее образование для детей",
          "slug": "sredneeobrazovaniedlyadetei",
          "isBanned": false
        },
        {
          "description": "Разработанный совместно с экспертами wealth management курс: все об инструментах и лучших практиках управления благосостоянием обеспеченных клиентов.",
          "image": "https://s3.skyfort.capital/upload/productcard10-a840144f.webp",
          "title": "Курс \"управляющий капиталом\"",
          "slug": "upravlyayschii",
          "isBanned": true
        }
      ]
    },
    {
      "tag": {
        "slug": "nedvizhimost",
        "title": "Недвижимость",
        "isMfo": false
      },
      "products": [
        {
          "description": "Квартиры от надежных застройщиков на быстрорастущем рынке Вьетнама с доходностью в 30% + годовых в валюте, чеком от 100 тыс. долларов и удобной оплатой.",
          "image": "/img/categories/fondy_nedvizhimosti/product_card.webp",
          "title": "Недвижимость Вьетнама",
          "slug": "fondy_nedvizhimosti_tina-da",
          "isBanned": false
        },
        {
          "description": "Размещение средств в закрытом паевом инвестиционном фонде, включающем пай крупнейшего торгового центра Ульяновска с высокой посещаемостью и 100% заполнением площади под аренду.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader-2-e9428349.webp",
          "title": "Инвестиции в коммерческую недвижимость ЗПИФ “А-20”",
          "slug": "zpif",
          "isBanned": false
        }
      ]
    },
    {
      "tag": {
        "slug": "nalogovie-i-yuridicheskie-uslugi",
        "title": "Налоговые и юридические услуги",
        "isMfo": false
      },
      "products": [
        {
          "description": "Оптимизация налогов бизнеса в интересах собственника.",
          "image": "https://s3.skyfort.capital/upload/Pictures/productcard9-107e208c.webp",
          "title": "Корпоративные налоги",
          "slug": "korporativnie-nalogi",
          "isBanned": true
        },
        {
          "description": "Оптимизация личных налогов и подготовка налоговых деклараций в разных юрисдикциях.",
          "image": "https://s3.skyfort.capital/upload/Pictures/pageheader14-7ad647d1.webp",
          "title": "Личные налоги",
          "slug": "lichnie-nalogi",
          "isBanned": false
        }
      ]
    }
  ]

export default {
  components: {
    TheHeaderMenu
  },
  data() {
    return {
      isShowMenu: false,
      currentMenu: [],
    }
  },
  methods: {
    handleFamilyOfficeHover() {
      this.currentMenu = familyOfficeItems;
      this.isShowMenu = true;
  },

    handleMarketHover() {
      this.currentMenu = marketItems;
      this.isShowMenu = true;
  },
  }
}
</script>

<template>
    <div
        class="container_header"
        @mouseleave="this.isShowMenu=false"
      >
        <div class="new_header">
          <a href="/">
            <div class="logo">
              <img
                class="logo_img"
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
            <a href="/" target="_blank">
              <div class="nav">О нас</div>
            </a>
            <a href="https://app.skyfort.capital/mfo" @mouseenter="handleFamilyOfficeHover">
              <div class="nav">
                Семейный офис <img src="/icons/arrow_new_header.svg" alt="" />
              </div>
            </a>
            <a href="https://app.skyfort.capital" @mouseenter="handleMarketHover">
              <div class="nav">
                Маркетплейс <img src="/icons/arrow_new_header.svg" alt="" />
              </div>
            </a>
          </div>
          <div class="btns">
            <div class="profile_btn">Личный кабинет</div>
        </div>
    </div>
    <TheHeaderMenu :items="currentMenu" :isShow="isShowMenu"/>
    </div>
</template>


<style lang="scss">
.container_header {
  width: 100%;
  padding: 0 48px;
  margin: 0 auto;
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 100%;
  max-width: calc(1270px + 48px * 2);

  @media (max-width: 860px) {
    padding: 0 10px;
  }
}

.new_header {
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
  color: rgb(5, 46, 62);
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

@media (max-width: 860px) {
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