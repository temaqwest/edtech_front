<template>
  <div>
    <v-app-bar
        v-if="isMobile()"
        dark
        flat
        app
        class="app-header"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $router.currentRoute.name }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        height="97%"
        light
        app
        class="navigator"
        color="#d4d4d4"
        v-model="drawer"
        :mobile-breakpoint="mobBreak"
    >
      <div class="nav-header-gradient">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-img
                  src="@/assets/logo/logo_dark.svg"
                  height="66px"
                  contain
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item two-line>
            <v-icon x-large color="#5b5294" class="mr-3" v-if="this.$store.state.user.user.role === 'ROLE_UNIVERSITY'">mdi-school</v-icon>
            <v-icon x-large color="#5b5294" class="mr-3" v-else>mdi-briefcase</v-icon>

          <v-list-item-content>
            <v-list-item-title>Привет,</v-list-item-title>
            <v-list-item-title><strong>{{ this.$store.state.user.user.firstname }} {{ this.$store.state.user.user.lastname }}</strong></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
          nav
          rounded
      >
        <v-list-item
            class="px-5 mx-1"
            to="/internships"
            transition
        >
          <v-list-item-icon>
            <v-icon>mdi-format-list-text</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Стажировки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            class="px-5 mx-1"
            to="/"
            transition
        >
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>О нас</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            class="px-5 mx-1"
            to="/vacancies"
            transition
            v-if="this.$store.state.user.user.role === 'ROLE_ORGANIZATION'"
        >
          <v-list-item-icon>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Мои вакансии</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            class="px-5 mx-1"
            to="/profile"
            transition
        >
          <v-list-item-icon>
            <v-icon>mdi-align-vertical-bottom</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Мой профиль</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="px-3 mx-1 mb-4">
          <v-btn
              block
              rounded
              dark
              class="logout-btn"
              @click="logout()"
          >
            Выход
            <v-icon small>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  data: function () {
    return {
      drawer: null,
      mobBreak: 960,
      navItems: [
        { title: "Стажировки", icon: 'mdi-format-list-text', path: "/internships", role: true},
        { title: "Практики", icon: 'mdi-format-list-text', path: "/practice", role: true},
        { title: "Мой профиль", icon: "mdi-information", path: "/profile", role: true},
        { title: "Мои вакансии", icon: "mdi-message-question", path: "/vacancies", role: this.$store.state.user.user.role === 'ROLE_ORGANIZATION'},
      ],
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
      this.$router.push('/');
    },
    isMobile() {
      return this.$vuetify.breakpoint.width < this.mobBreak;
    }
  },
}
</script>

<style lang="scss" scoped>

.navigator {
  margin: 10px 0;
  border-radius: 0 16px 16px 0 !important;
}

.logout-btn {
  background: transparent linear-gradient(180deg, #5B5294 0%, #3f3586 100%) 0% 0% no-repeat padding-box;
}

.app-header {
  background: transparent linear-gradient(180deg, #5B5294 0%, #3f3586 100%) 0% 0% no-repeat padding-box;
}

</style>
