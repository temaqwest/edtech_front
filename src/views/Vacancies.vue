<template>
  <v-card class="card-template container-trans mx-auto">
    <div class="header-gradient">
      <v-row
          align="start"
          justify="start"
      >
        <v-col cols="8">
          <h1 class="display-1"><v-icon x-large color="white" class="mr-3" >mdi-clipboard-list</v-icon>Мои вакансии</h1>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
    <v-container style="background-color: #D4D4D4;">
      <v-data-table
          :headers="headers"
          :items="myVacancies"
          class="elevation-1"
      >
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
              color="primary"
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
import {getMyVacancies} from "@/api/internships";

export default {
  name: 'Vacancies',
  data() {
    return {
      myVacancies: [],
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

  },
  async mounted() {
    const myvac = await getMyVacancies(this.$store.state.user.user.organization.id);
    this.myVacancies = myvac.data;
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
