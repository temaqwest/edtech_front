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
        dark
        app
        class="navigator"
        color="#564444"
        v-model="drawer"
        :mobile-breakpoint="mobBreak"
    >
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
      <v-divider></v-divider>
      <v-list>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-icon large color="#C66651">mdi-account-circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Hello, <strong></strong></v-list-item-title>
            <v-list-item-subtitle>Logged in</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list
          nav
          rounded
      >
        <v-list-item
            class="px-5 mx-1"
            v-for="(navItem, idx) in navItems"
            :key="idx"
            :to="navItem.path"
            transition
        >
          <v-list-item-icon>
            <v-icon>{{ navItem.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ navItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="px-3 mx-1 mb-4">
          <v-btn
              block
              rounded
              class="logout-btn"
              @click="logout"
          >
            Sign out
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
        { title: "Products", icon: 'mdi-format-list-text', path: "/"},
        { title: "About", icon: "mdi-information", path: "/about"},
        { title: "Contact", icon: "mdi-message-question", path: "/contact"},
        { title: "Cart", icon: "mdi-cart", path: "/cart"},
      ],
    }
  },
  methods: {
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
  background: transparent linear-gradient(180deg, #C66651 0%, #b8412d 100%) 0% 0% no-repeat padding-box;
}

.app-header {
  background: transparent linear-gradient(180deg, #C66651 0%, #b8412d 100%) 0% 0% no-repeat padding-box;
}

</style>
