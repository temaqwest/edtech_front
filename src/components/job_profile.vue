<template>
  <v-card class="card-template container-trans mx-auto">
    <div class="header-gradient">
      <v-row
          align="start"
          justify="start"
      >
        <v-col cols="8">
          <h1 class="display-1"><v-icon x-large color="white" class="mr-3">mdi-briefcase</v-icon>Профиль аккаунта - работодателя</h1>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <v-container style="background-color: #D4D4D4;">
      <v-app style="background-color: #D4D4D4;">
        <v-layout row style="background-color: #D4D4D4;">
          <v-flex md4 style="background-color: #D4D4D4;">
            <v-app style="background-color: #D4D4D4;">
              <v-container>
                <v-flex>
                  <v-card class="ma-5 text-center mt-8" elevation="3">
                    <v-avatar size="70" class="mt-n7" elevation="3" style="border-radius:50%;">
                      <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7SCGMcJ-Ez3tIV7eIew4s_4oCfczsPJyPCW-oZe86fBC92qisfVUPgy34jdQVJLMoVM&usqp=CAU"></v-img>
                    </v-avatar>
                    <v-card-title class="layout justify-center"><strong>{{ this.$store.state.user.user.firstname }} {{ this.$store.state.user.user.lastname }}</strong></v-card-title>
                    <v-card-subtitle class="layout justify-center">{{ this.$store.state.user.user.organization.name }} / {{ this.$store.state.user.user.organization.city }}</v-card-subtitle>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title class="blue--text text--darken-1">Email</v-list-item-title>
                        <v-list-item-title class="blue--text text--darken-1">Рейтинг компании</v-list-item-title>
                        <v-list-item-title class="blue--text text--darken-1">Студентов <br> прикреплено</v-list-item-title>
                      </v-list-item>
                      <v-list-item class="mt-n5">
                        <v-list-item-subtitle>{{ this.$store.state.user.user.email }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ this.$store.state.user.user.organization.rating }} из <b>5</b></v-list-item-subtitle>
                        <v-list-item-subtitle> 34 </v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="ma-5 mt-6"  elevation="3">
                    <v-list-item two-line style="text-align:center;">
                      <v-list-item-content>
                        <v-list-item-title>Редактировать профиль</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title><v-icon left medium>mdi-feather</v-icon>Юридический адрес</v-list-item-title>
                            <v-list-item-subtitle>
                              {{ this.$store.state.user.user.organization.address }}
                            </v-list-item-subtitle>
                          </v-col>
                          <v-col cols="4">
                            <v-list-item-subtitle>
                              <v-btn text outlined small>Изменить</v-btn>
                            </v-list-item-subtitle>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title><v-icon left medium>mdi-feather</v-icon>Описание компании</v-list-item-title>
                            <v-list-item-subtitle>
                              {{ this.$store.state.user.user.organization.description }}
                            </v-list-item-subtitle>
                          </v-col>
                          <v-col cols="4">
                            <v-list-item-subtitle>
                              <v-btn text outlined small>Изменить</v-btn>
                            </v-list-item-subtitle>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset></v-divider>

                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="8">
                            <v-list-item-title><v-icon left medium>mdi-feather</v-icon>Название компании</v-list-item-title>
                            <v-list-item-subtitle>
                              {{ this.$store.state.user.user.organization.name }}
                            </v-list-item-subtitle>
                          </v-col>
                          <v-col cols="4">
                            <v-list-item-subtitle>
                              <v-btn text outlined small>Изменить</v-btn>
                            </v-list-item-subtitle>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-flex>
              </v-container>
            </v-app>
          </v-flex>
          <v-flex md8>
            <div class="rounded ma-11" style="box-shadow: 0px 4px 20px #bdbdbd; background-color: #ffffff;">
              <v-container>
                <v-flex pa-5>
                  <h2 style="color:#0D1E29;margin-bottom:10px;" class="text-center">Доли компетенций в сервисе</h2>
                </v-flex>
                <v-divider></v-divider>
                <div id="chart" style="max-width: 500px;">
                  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </div>
              </v-container>
            </div><v-app class="rounded ma-11" style="box-shadow: 0px 4px 20px #bdbdbd;min-height:90vh;">
              <v-container>
                <v-flex pa-5>
                  <h2 style="color:#0D1E29;margin-bottom:20px;">Мои последние вакансии</h2>
                </v-flex>
                <v-divider></v-divider>
                <div class="small" style="margin: 10px;">
                  <template v-for="(item, idx) in myLastVacancies">
                    <v-list-item three-line :key="idx">
                      <v-list-item-content>
                        <v-row>
                          <v-col cols="12">
                            <v-list-item-title><v-icon left medium>mdi-arrow-up-drop-circle-outline</v-icon>{{ item.name }}</v-list-item-title>
                            <v-list-item-subtitle>
                              {{ item.description }}
                            </v-list-item-subtitle>
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider inset :key="idx"></v-divider>
                  </template>
                </div>
              </v-container>
            </v-app>
          </v-flex>
        </v-layout>
      </v-app>
    </v-container>
    <div class="footer-gradient">
    </div>
  </v-card>
</template>

<script>
import apexchart from 'vue-apexcharts'
import {getMyVacancies} from "@/api/internships";

export default {
  name: 'job_profile',
  components: {
    apexchart,
  },
  data() {
    return {
      myLastVacancies: [],
      files: null,
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: ["IT-сектор", "Туризм", "Финансы и бухгалтерия", "Банки", "Строительство, недвижимость"],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  watch: {
    files(){
      setTimeout(()=> {
        this.files = null;
      }, 4000)
    }
  },
  methods: {

  },
  async mounted() {
    const myvac = await getMyVacancies(this.$store.state.user.user.organization.id);
    this.myLastVacancies = myvac.data;
  }
}
</script>

<style lang="scss" scoped>
.headline {
  color: #5B5294 !important;
}

.add-btn {
  background: transparent linear-gradient(180deg, #5B5294 0%, #3f3586 100%) 0% 0% no-repeat padding-box;
}

.sort-btn {
  background: transparent linear-gradient(180deg, #5B5294 20%, #3f3586 80%) 0% 0% no-repeat padding-box;
}

.abs-not {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.exp-content {
  background-color: #5B529430;
}

</style>
