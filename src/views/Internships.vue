<template>
  <v-card class="card-template container-trans mx-auto">
    <div class="header-gradient">
      <v-row
          align="start"
          justify="start"
      >
        <v-col cols="8">
          <h1 class="display-1"><v-icon x-large color="white" class="mr-3" >mdi-clipboard-list</v-icon>Список стажировок</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-text-field
              label="По категориям"
              solo
              rounded
              height="35px"
              @input="filterByPrice(priceFil)"
              v-model="priceFil"
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn-toggle
              v-model="toggle"
              rounded
              dark
          >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    @click="sort('DESC')"
                    class="px-5 sort-btn"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon>mdi-sort</v-icon>
                </v-btn>
              </template>
              <span>По рейтингу (DESC)</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    @click="sort('ASC')"
                    class="px-5 sort-btn"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon>mdi-sort-ascending</v-icon>
                </v-btn>
              </template>
              <span>По рейтингу (ASC)</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    @click="sortByName"
                    class="px-5 sort-btn"
                    v-bind="attrs"
                    v-on="on"
                >
                  <v-icon>mdi-sort-alphabetical-ascending</v-icon>
                </v-btn>
              </template>
              <span>По алфавиту</span>
            </v-tooltip>
          </v-btn-toggle>
        </v-col>
        <v-spacer></v-spacer>
<!--        <v-col cols="auto">-->
<!--          <v-alert-->
<!--              :value="notification"-->
<!--              transition="scale-transition"-->
<!--              icon="mdi-plus-thick"-->
<!--              type="success"-->
<!--              color="#fff"-->
<!--              text-->
<!--          >Added to cart! <strong>Total: {{ bag.length }} items!</strong></v-alert>-->
<!--        </v-col>-->
      </v-row>
    </div>
    <v-container style="background-color: #D4D4D4;">
      <v-expansion-panels>
        <v-expansion-panel
            v-for="(item, idx) in this.$store.state.internship.internships"
            :key="idx"
        >
          <v-expansion-panel-header class="py-5">
           <v-row
            align="baseline"
           >
             <v-col
              cols="auto"
              lg="4"
             >
               <v-icon
                medium
                color="#5B5294"
               >
                 mdi-rename-box
               </v-icon>
               {{ item.name }}
             </v-col>
             <v-col
              cols="auto"
              lg="3"
             >
               <v-icon
                   medium
                   color="#5B5294"
               >
                 mdi-map-marker
               </v-icon>
               <strong>{{ item.organization.city }}</strong>/{{ item.organization.name }}
             </v-col>
             <v-col
              lg="2"
              cols="auto"
             >
               <v-icon
                   medium
                   color="#5B5294"
               >
                 mdi-feature-search
               </v-icon>
              <template v-for="(it, id) in item.requiredSkills">
                <v-chip
                    :key="id"
                    class="ma-2"
                >
                  {{ it.name }}
                </v-chip>
              </template>
             </v-col>
             <v-col
              lg="1"
              cols="auto"
             >
               <span>
               <v-icon
                   class="mr-2"
                   medium
                color="#5B5294"
               >
                 mdi-star-circle
               </v-icon>
                <strong>{{ item.organization.rating }}</strong>
               </span>
             </v-col>
           </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-4 exp-content">
            <h1 class="title my-2">Описание стажировки</h1>
            {{ item.description }}
            <h1 class="title  my-2">Адрес:</h1>
            {{ item.organization.address}}
            <h1 class="title  my-2">Агент:</h1>
            {{ item.organization.agentEmail}}<br>
            {{ item.organization.agentName}}<br>
            {{ item.organization.phone}}<br>
            Telegram: {{ item.organization.telegram}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    <div class="footer-gradient">
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Internships',
  data() {
    return {
      notification: false,
      toggle: undefined,
      bag: [],
      sortParam: null,
      selSort: [
        { name: 'By name', id: 'name', func: 'sortByName()' },
        { name: 'By Rating', id: 'price', func: 'sort()' },
      ],
      priceFil: null,
    }
  },
  methods: {
    sort(by) {
      this.$store.dispatch('products/getSortedByPriceProducts', by);
    },
    sortByName() {
      this.$store.dispatch('products/getSortedByNameProducts');
    },
    filterByPrice(priceFil) {
      this.$store.dispatch('products/getFilteredByPrice', priceFil);
    },
  },
  computed: {},
  mounted() {}
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
