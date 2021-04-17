<template>
 <div class="all-content">
   <v-app>
     <v-app-bar
         app
         color="#ffffff"
         height="75"
     >
       <v-row>
         <v-col
          cols="auto"
          class="my-1 ml-10"
         >
           <img src="@/assets/logo/logo.svg" height="65" class="my-1" style="pointer-events: none;">
         </v-col>
         <v-spacer></v-spacer>
       </v-row>
     </v-app-bar>

     <v-content>
       <section id="hero">
         <v-row no-gutters>
           <v-img
               :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
               src="@/assets/landing.png"
           >
             <v-theme-provider>
               <v-container>
                 <v-row
                     align="start"
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
         <v-lazy
             v-model="isActive"
             :options="{
          threshold: .9
        }"
             min-height="200"
             transition="fade-transition"
         >
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
              align="middle"
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
         </v-lazy>

         <div class="py-12"></div>
       </section>
       <v-lazy
           v-model="isActive2"
           :options="{
          threshold: .9
        }"
           min-height="200"
           transition="fade-transition"
       >
         <section
             id="features"
             class="grey lighten-3"
         >
           <div class="py-12"></div>

           <v-container class="text-center">
             <h2 class="display-2 font-weight-bold mb-3">Наши особенности</h2>

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
                       class="justify-center font-weight-black text-uppercase"
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
       </v-lazy>

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

         <v-container>
           <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

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
           <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Зарегистрироваться</h2>

           <v-responsive
               class="mx-auto mb-12"
               width="56"
           >
             <v-divider class="mb-1"></v-divider>

             <v-divider></v-divider>
           </v-responsive>

           <v-theme-provider light>

             <v-row>
               <v-col cols="12">
                 <v-text-field
                     flat
                     label="Name*"
                     solo
                 ></v-text-field>
               </v-col>

               <v-col cols="12">
                 <v-text-field
                     flat
                     label="Email*"
                     solo
                 ></v-text-field>
               </v-col>

               <v-col cols="12">
                 <v-text-field
                     flat
                     label="Subject*"
                     solo
                 ></v-text-field>
               </v-col>

               <v-col cols="12">
                 <v-textarea
                     flat
                     label="Message*"
                     solo
                 ></v-textarea>
               </v-col>

               <v-col
                   class="mx-auto"
                   cols="auto"
               >
                 <v-btn
                     color="accent"
                     x-large
                 >
                   Submit
                 </v-btn>
               </v-col>
             </v-row>
           </v-theme-provider>
         </v-container>

         <div class="py-12"></div>
       </v-sheet>
     </v-content>

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
 </div>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    isActive: false,
    isActive2: false,
    articles: [
      {
        src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Статистические данные',
        text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
      },
      {
        src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        title: 'Разработанная модель классификаторов',
        text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
      },
      {
        src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
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
