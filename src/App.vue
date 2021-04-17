<template>
 <div class="all-content">
   <v-app v-if="this.$route.name === 'Home'">
     <v-app-bar
         app
         dark
         height="78"
     >
       <v-row>
         <v-col
          cols="auto"
          class="my-1 ml-10"
         >
           <img src="@/assets/logo/logo_dark.svg" height="65" class="my-1" style="pointer-events: none;">
         </v-col>
         <v-spacer></v-spacer>
       </v-row>
     </v-app-bar>

     <v-main>
       <section id="hero">
         <v-row no-gutters>
           <v-img
               :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
               src="@/assets/landing.png"
           >
             <v-theme-provider>
               <v-container>
                 <v-row
                     class="white--text mx-auto"
                     style="margin-top:200px; width: 800px;"
                     justify="center"
                     no-gutters
                 >
                   <v-col
                       class="text-center"
                       cols="12"
                       tag="h1"
                       style="background-color: #ffffff90; color: #5B5294; padding: 30px;"
                   >
                      <span
                          :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                          class="font-weight-medium"
                      >
                    <img src="@/assets/Slice.svg" width="80px">  FlexCarrier
                    </span>
                   </v-col>
                   <v-col
                       class="white--text font-weight-thin text-center"
                       cols="12"
                       tag="h1"
                       style="background-color: #5B529480;  padding: 10px;"
                   >
                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                    >
                      Лучшие предложения
                    </span>
                   </v-col>
                   <v-col
                       class="white--text font-weight-light text-center"
                       cols="12"
                       tag="h1"
                       style="background-color: #5B529430;  padding: 10px;"
                   >
                     <span
                         :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-thin"
                    >
                      Самая большая база
                    </span>
                   </v-col>

                   <v-btn
                       class="align-self-end mt-6"
                       fab
                       outlined
                       dark
                       @click="$vuetify.goTo('#about-me')"
                   >
                     <v-icon>mdi-chevron-double-down</v-icon>
                   </v-btn>
                 </v-row>
               </v-container>
             </v-theme-provider>
           </v-img>
         </v-row>
       </section>

       <section id="about-me" style="background-color: #5B529470;">
         <div class="py-12"></div>
           <v-container class="text-center">
             <h2 style="color: #5B5294;" class="display-2 font-weight-bold mb-3">О нашей команде</h2>

             <v-responsive
                 class="mx-auto mb-8"
                 width="56"
             >
               <v-divider class="mb-1"></v-divider>

               <v-divider></v-divider>
             </v-responsive>

             <v-responsive
                 class="mx-auto title font-weight-light mb-8"
                 max-width="720"
                 style="color: #000;"
             >
               Привет! Мы команда "Bruh" из города Ставрополь. Больше всего нашу команду
               впечатляют кейсы, которые в первую очередь помогают решить известные нам самим проблемы.
               Как нам кажется, кейс, который мы выбрали от комании РосАтом как нельзя лучше подходит нам, так как мы сами являемся студентами и проблема
               трудоустройства, практик и стажировок известна нам не по наслышке. Мы предлагаем вам опробовать наш сервис, который <b>[мы искренне верим]</b> имеет большой потенциал
               и возможность масштабирования и постоянного модернизирования!
             </v-responsive>

             <v-row
              no-gutters
              justify="center"
              class="mb-10"
             >
               <v-col>
                 <v-avatar
                     class="elevation-12 mb-1 mx-2"
                     size="130"
                 >
                   <v-img src="@/assets/team/front.jpg"></v-img>
                 </v-avatar>
                 <br>
                 <span><b>Татевосян Артём</b></span><br>
                 <span>Front-End - разработчик</span>
               </v-col>
               <v-col>
                 <v-avatar
                     class="elevation-12 mb-1 mx-2"
                     size="130"
                 >
                   <v-img src="@/assets/team/back.jpg"></v-img>
                 </v-avatar>
                 <br>
                 <span><b>Булахов Никита</b></span><br>
                 <span>Back-End - разработчик</span>
               </v-col>
               <v-col>
                 <v-avatar
                     class="elevation-12 mb-1 mx-2"
                     size="130"
                 >
                   <v-img src="@/assets/team/ios.jpg"></v-img>
                 </v-avatar>
                 <br>
                 <span><b>Поляничев Артём</b></span><br>
                 <span>IOS - разработчик</span>
               </v-col>
               <v-col>
                 <v-avatar
                     class="elevation-12 mb-1 mx-2"
                     size="130"
                 >
                   <v-img src="@/assets/team/android.jpg"></v-img>
                 </v-avatar>
                 <br>
                 <span><b>Чеботарёв Кирилл</b></span><br>
                 <span>Android разработчик</span>
               </v-col>
               <v-col>
                 <v-avatar
                     class="elevation-12 mb-1 mx-2"
                     size="130"
                 >
                   <v-img src="@/assets/team/analyze.jpg"></v-img>
                 </v-avatar>
                 <br>
                 <span><b>Авдиенко Алла</b></span><br>
                 <span>Аналитик</span>
               </v-col>
             </v-row>
           </v-container>
         <div class="py-12"></div>
       </section>
         <section
             id="features"
             class="grey lighten-3"
         >
           <div class="py-12"></div>

           <v-container class="text-center">
             <h2 class="display-2 font-weight-bold mb-3" style="color: #000;">Наши особенности</h2>

             <v-responsive
                 class="mx-auto mb-12"
                 width="56"
             >
               <v-divider class="mb-1"></v-divider>

               <v-divider></v-divider>
             </v-responsive>

             <v-row>
               <v-col
                   v-for="({ icon, title, text }, i) in features"
                   :key="i"
                   cols="12"
                   md="4"
               >
                 <v-card
                     class="py-12 px-4"
                     color="grey lighten-5"
                     flat
                 >
                   <v-theme-provider dark>
                     <div>
                       <v-avatar
                           color="#5B5294"
                           size="88"
                       >
                         <v-icon
                             large
                             v-text="icon"
                         ></v-icon>
                       </v-avatar>
                     </div>
                   </v-theme-provider>

                   <v-card-title
                       class="justify-center font-weight-black"
                       v-text="title"
                   ></v-card-title>

                   <v-card-text
                       class="subtitle-1"
                       v-text="text"
                   >
                   </v-card-text>
                 </v-card>
               </v-col>
             </v-row>
           </v-container>

           <div class="py-12"></div>
         </section>
       <section id="stats">
         <v-parallax
             :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
             src="@/assets/stat.png"
         >
           <v-container fill-height>
             <v-row class="mx-auto">
               <v-col
                   v-for="[value, title] of stats"
                   :key="title"
                   cols="12"
                   md="3"
               >
                 <div class="text-center">
                   <div
                       class="display-3 font-weight-black mb-4"
                       v-text="value"
                   ></div>

                   <div
                       class="title font-weight-regular text-uppercase"
                       v-text="title"
                   ></div>
                 </div>
               </v-col>
             </v-row>
           </v-container>
         </v-parallax>
       </section>

       <section id="blog">
         <div class="py-12"></div>
         <v-container  style="color: #000;">
           <h2 class="display-2 font-weight-bold mb-3 text-center">Что мы предлагаем</h2>

           <v-responsive
               class="mx-auto mb-12"
               width="56"
           >
             <v-divider class="mb-1"></v-divider>

             <v-divider></v-divider>
           </v-responsive>

           <v-row>
             <v-col
                 v-for="({ src, text, title }, i) in articles"
                 :key="i"
                 cols="12"
                 md="4"
             >
               <v-img
                   :src="src"
                   class="mb-4"
                   height="275"
                   max-width="100%"
               ></v-img>

               <h3
                   class="font-weight-black mb-4 text-uppercase"
                   v-text="title"
               ></h3>

               <div
                   class="title font-weight-light mb-5"
                   v-text="text"
               ></div>

             </v-col>
           </v-row>
         </v-container>

         <div class="py-12"></div>
       </section>

       <v-sheet
           id="contact"
           color="#333333"
           dark
           tag="section"
           tile
       >
         <div class="py-12"></div>

         <v-container>
           <h2 class="display-2 font-weight-bold mb-3 text-center">Вступить</h2>

           <v-responsive
               class="mx-auto mb-12"
               width="56"
           >
             <v-divider class="mb-1"></v-divider>

             <v-divider></v-divider>
           </v-responsive>

           <v-theme-provider light>
             <v-row>
               <v-col cols="6"
               class="text-center">
                 <v-card color="#ffffff">
                   <v-img
                       src="https://regnum.ru/uploads/pictures/news/2019/10/23/regnum_picture_1571850452154204_normal.jpg"
                       height="200px"
                   ></v-img>
                   <div class="pa-5">
                     <h2 class="display-1 font-weight-bold mb-7">Вы представитель вуза?</h2>
                     <v-btn
                         rounded
                         dark
                         to="uni_reg"
                     >Зарегистрироваться</v-btn>
                   </div>
                 </v-card>
               </v-col>
               <v-col cols="6"
               class="text-center">
                 <v-card
                  color="#5B529460"
                 >
                   <v-img
                       src="https://work4u.com.ua/wp-content/uploads/2020/07/Job-Offer.jpg"
                       height="200px"
                   ></v-img>
                   <div class="pa-5">
                     <h2 class="display-1 font-weight-bold mb-7 white--text">Вы работодатель?</h2>
                     <v-btn
                         outlined
                         light
                         color="#ffffff"
                         rounded
                         to="job_reg"
                     >Зарегистрироваться</v-btn>
                   </div>
                 </v-card>
               </v-col>
             </v-row>
           </v-theme-provider>
         </v-container>

         <div class="py-12"></div>
       </v-sheet>
     </v-main>
     <v-footer
         class="justify-center"
         color="#292929"
         height="100"
     >
       <div class="title font-weight-light grey--text text--lighten-1 text-center">
         &copy; {{ (new Date()).getFullYear() }} — Bruh Team, EdTech Hackathon
       </div>
     </v-footer>
   </v-app>
   <v-app class="body" v-else>
<!--     <v-snackbar-->
<!--         v-model="$store.getters.isLoading"-->
<!--         timeout="-1"-->
<!--         rounded="pill"-->
<!--         color="#1e1e1e"-->
<!--     >-->
<!--       <v-row>-->
<!--         <v-col-->
<!--             cols="auto"-->
<!--         >-->
<!--           <v-progress-circular-->
<!--               indeterminate-->
<!--               color="#C66651"-->
<!--           ></v-progress-circular>-->
<!--         </v-col>-->
<!--         <v-col-->
<!--             cols="auto"-->
<!--         >-->
<!--           <h1 class="title">Loading</h1>-->
<!--         </v-col>-->
<!--       </v-row>-->
<!--     </v-snackbar>-->
     <Navigation></Navigation>
     <v-main>
       <v-container fluid>
         <router-view></router-view>
       </v-container>
     </v-main>
   </v-app>
 </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    articles: [
      {
        src: 'https://www.fonbuton.ru/wp-content/uploads/2020/08/1529333014_900_450_crop.jpg',
        title: 'Статистические данные',
        text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
      },
      {
        src: 'https://vinbazar.com/sites/default/files/imagecache/690x/2012/11/302484.jpg',
        title: 'Разработанная модель классификаторов',
        text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tVIv_A0SMkPhS1gtN4symgho5r1xAIGsRg&usqp=CAU',
        title: 'Объединеняет всех',
        text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
      },
    ],
    features: [
      {
        icon: 'mdi-account-group-outline',
        title: 'Статистические данные',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
      },
      {
        icon: 'mdi-update',
        title: 'Разработанная модель классификаторов',
        text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
      },
      {
        icon: 'mdi-shield-outline',
        title: 'Объединеняет всех',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
      },
    ],
    stats: [
      ['1С', 'Интеграция'],
      ['Умный', 'Подбор'],
      ['Стирает', 'Границы'],
      ['Чат', 'для всех'],
    ],
  }),
};
</script>

<style lang="scss">

.body {

}

.container {
  color: #fff;
  margin: 0;
}

.radius12 {
  border-radius: 12px !important;
}
.radius16 {
  border-radius: 16px !important;
}

.card-template {
  border-radius: 16px 16px 0 0 !important;
}

.header-gradient {
  border-radius: 16px 16px 0 0 !important;
  min-height: 90px;
  padding: 20px 30px;
  background: #5B5294;
  color: #fff;
}

.footer-gradient {
  border-radius: 0 0 16px 16px !important;
  min-height: 40px;
  padding: 20px 30px;
  background: #5B5294;
  color: #fff;
}

.container-trans {
  background-color: #3F3F3F86 !important;
}

.content-gradient {
  background: #5B5294;
}
.left-btn-template {
  border-radius: 16px 0 0 16px !important;

}
.right-btn-template {
  border-radius: 0 16px 16px 0 !important;
}

.button-group-template {
  background: #ffffff00 !important;
  border: none !important;
}

.v-sheet.v-snack__wrapper:not(.v-sheet--outlined) {
  border: 2px solid #5B5294 !important;
}
</style>

