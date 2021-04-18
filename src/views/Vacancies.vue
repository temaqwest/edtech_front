<template>
  <v-card class="card-template container-trans mx-auto">
    <div class="header-gradient">
      <v-row
          align="start"
          justify="start"
      >
        <v-col cols="10">
          <h1 class="display-1"><v-icon x-large color="white" class="mr-3" >mdi-clipboard-list</v-icon>Мои вакансии</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="2">
          <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  class="add-btn radius12 mx-2 mb-2"
                  dark
                  tile
                  v-bind="attrs"
                  v-on="on"
              >
                Создать вакансию <v-icon medium>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card
                class="add-card"
                flat
                style="background-color: #D4D4D4;"
            >
              <div class="add-header header-gradient">
                <v-card-title>
                  <span class="headline white--text">Создать вакансию</span>
                </v-card-title>
              </div>
              <v-card-text>
                <v-container class="add-content mx-2 my-5">
                  <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                    >
                      <v-text-field
                          label="Название"
                          v-model="newVacName"
                          hint="Название"
                          required
                          rounded
                          solo
                          flat
                          height="65px"
                          class="text-field"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                    >
                      <v-text-field
                          label="Начало (2012-06-06)"
                          v-model="newVacDateStart"
                          hint="Начало"
                          required
                          rounded
                          solo
                          flat
                          height="65px"
                          class="text-field"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                    >
                      <v-text-field
                          label="Конец (2012-07-18)"
                          v-model="newVacDateEnd"
                          hint="Конец"
                          required
                          rounded
                          solo
                          flat
                          height="65px"
                          class="text-field"
                      ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                    >
                      <v-textarea
                          solo
                          flat
                          rounded
                          hint="Описание"
                          type="number"
                          min-height="65px"
                          class="text-field"
                          label="Описание стажировки/практики"
                          v-model="newVacDescription"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    dark
                    tile
                    class="radius12 px-5 py-3 close-form-btn"
                    @click="dialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                    dark
                    tile
                    class="radius12 px-5 py-3 create-form-btn"
                    @click="createVac()"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <v-container style="background-color: #D4D4D4;">
      <v-data-table
          style="background-color: #ffffff00;"
          :headers="headers"
          :items="myVacancies"
      >
        <template v-slot:item.dateStart="{ item }">
          {{ new Date(item.dateStart).toDateString() }}
        </template>
        <template v-slot:item.requiredSkills="{ item }">
          <v-chip
              class="mx-1"
            v-for="(p, i) in item.requiredSkills" :key="i"
          > {{p.name}}</v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              :alt="item"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              outlined
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
    <div class="footer-gradient">
    </div>
  </v-card>
</template>

<script>
import {createVacancies, getMyVacancies} from "@/api/internships";

export default {
  name: 'Vacancies',
  data() {
    return {
      myVacancies: [],
      newVacName: '',
      newVacDescription: '',
      newVacDateStart: '',
      newVacDateEnd: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Название',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Компания', value: 'organization.name' },
        { text: 'Создано', value: 'dateStart' },
        { text: 'Компетенции', value: 'requiredSkills' },
        { text: 'Действия', value: 'actions', sortable: false },
      ],
    }
  },
  methods: {
    async createVac() {
      this.newVacDateEnd = '2021-08-18T06:30:36.794Z';
      this.newVacDateStart = '2021-12-18T06:30:36.794Z';
      const data = {
        "description": this.newVacDescription,
        "name": this.newVacName,
        "organization": '/api/organizations/' + this.$store.state.user.user.organization.id,
        "internshipResponses": [],
        "dateStart": this.newVacDateStart,
        "dateEnd": this.newVacDateEnd
      };
      await createVacancies(data);
      console.log('Successfully created');
      this.dialog = false;
    }
  },
  async mounted() {
    const myvac = await getMyVacancies(this.$store.state.user.user.organization.id);
    this.myVacancies = myvac.data;
    console.log(new Date('2012/06/05').getTime())
  }
}
</script>

<style lang="scss" scoped>
.headline {
  color: #5B5294 !important;
}

.close-form-btn {
  background: transparent linear-gradient(180deg, #7d5294 0%, #355586 100%) 0% 0% no-repeat padding-box;
}

.create-form-btn {
  background: transparent linear-gradient(180deg, #5B5294 0%, #358649 100%) 0% 0% no-repeat padding-box;
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
