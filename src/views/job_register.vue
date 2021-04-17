<template>
  <div class="auth_block">
    <v-card
        class="login-card mx-auto mt-10"
        max-width="500"
        v-if="login_page"
    >
      <div class="login-header header-gradient">
        <v-row
            align="center"
            justify="start"
        >
          <v-col
              cols="auto"
          >
            <h1 class="title">Войти</h1>
          </v-col>
          <v-col
              cols="auto"
          >
            <v-icon x-large dark>mdi-login-variant</v-icon>
          </v-col>
        </v-row>
      </div>
      <div class="login-content pa-8">
        <v-form>
          <v-text-field
              v-model="username"
              label="Логин"
              required
              solo
              height="65px"
              class="text-field title font-weight-normal"
          ></v-text-field>
          <v-text-field
              v-model="password"
              label="Пароль"
              type="password"
              required
              solo
              height="65px"
              class="text-field title font-weight-normal"
          ></v-text-field>
          <v-btn
              dark
              block
              tile
              color="#5B5294"
              class="radius12 px-5 py-3 login-btn"
              @click="signIn()"
          >
            Войти
          </v-btn>
          <v-row align="center" class="my-3">
            <v-divider class="ml-5 mr-2" color="#5B5294"></v-divider> ИЛИ <v-divider color="#5B5294" class="ml-2 mr-5"></v-divider>
          </v-row>
          <v-btn
              dark
              block
              color="#5B5294"
              tile
              class="radius12 px-5 py-3 login-btn"
              @click="register_page = true"
          >
            Зарегистрироваться?
          </v-btn>
        </v-form>
      </div>
    </v-card>
    <v-card
        class="login-card mx-auto mt-10"
        max-width="800"
        v-if="register_page"
    >
      <div class="login-header header-gradient">
        <v-row
            align="center"
            justify="start"
        >
          <v-col
              cols="auto"
          >
            <h1 class="title">Регистрация</h1>
          </v-col>
          <v-col
              cols="auto"
          >
            <v-icon dark x-large>mdi-login-variant</v-icon>
          </v-col>
        </v-row>
      </div>
      <div class="login-content pa-8">
        <v-form>
         <v-row>
           <v-col>
             <v-text-field
                 v-model="username"
                 label="Логин"
                 required
                 solo
                 height="65px"
                 class="text-field title font-weight-normal"
                 hint="Ваш логин"
             ></v-text-field>
             <v-text-field
                 v-model="password"
                 label="Пароль"
                 type="password"
                 required
                 solo
                 height="65px"
                 hint="Ваш пароль"
                 class="text-field title font-weight-normal"
             ></v-text-field>
             <v-text-field
                 v-model="email"
                 label="Почта"
                 type="email"
                 required
                 solo
                 height="65px"
                 hint="Ваша почта"
                 class="text-field title font-weight-normal"
             ></v-text-field>
             <v-text-field
                 v-model="phone"
                 label="Контактный номер"
                 type="tel"
                 required
                 solo
                 hint="Контактный номер"
                 height="65px"
                 class="text-field title font-weight-normal"
             ></v-text-field>
           </v-col>
           <v-col>
             <v-text-field
                 v-model="fio"
                 label="ФИО представителя"
                 required
                 solo
                 hint="Ваше ФИО"
                 height="65px"
                 class="text-field title font-weight-normal"
             ></v-text-field>
             <v-text-field
                 v-model="ur_address"
                 label="Юридический Адрес"
                 type="text"
                 required
                 solo
                 hint="Юридический адрес"
                 height="65px"
                 class="text-field title font-weight-normal"
             ></v-text-field>
             <v-text-field
                 v-model="city"
                 label="Город"
                 type="text"
                 required
                 solo
                 hint="Укажите ваш городы"
                 height="65px"
                 class="text-field title font-weight-normal"
             ></v-text-field><v-text-field
                 v-model="company"
                 label="Название компании"
                 type="text"
                 required
                 solo
                 hint="Укажите название компании"
                 height="65px"
                 class="text-field title font-weight-normal"
             ></v-text-field>
           </v-col>
         </v-row>
          <v-btn
              dark
              block
              tile
              color="#5B5294"
              class="radius12 px-5 py-3 login-btn"
          >
            Зарегистрироваться
          </v-btn>
          <v-row align="center" class="my-3">
            <v-divider class="ml-5 mr-2" color="#5B5294"></v-divider> ИЛИ <v-divider color="#5B5294" class="ml-2 mr-5"></v-divider>
          </v-row>
          <v-btn
              dark
              block
              tile
              color="#5B5294"
              class="radius12 px-5 py-3 login-btn"
              @click="register_page = false"
          >
            Войти?
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </div>
</template>

<script>

// import axios from "axios";

import {getUsers} from "@/api/users";

export default {
  name: 'JobReg',
  data() {
    return {
      urFaceSelect: '',
      urFaceList: [],
      username: '',
      password: '',
      email: '',
      phone: '',
      fio: '',
      ur_address: '',
      company: '',
      city: '',
      allUsers: null,
      login_page: true,
      register_page: false,
    }
  },
  methods: {
    // async doSearch() {
    //   console.log(this.urFaceSelect)
    //   const search = await axios.get('https://www.rusprofile.ru/ajax.php');
    //   console.log(search)
    // },
    async signIn() {
      const result = await getUsers();
      this.allUsers = result.data;
      console.log(this.allUsers)
      this.allUsers.forEach(res => {
        if(res.email === this.username) {
          if(res.roles[0] === "ROLE_ORGANIZATION") {
            const user = {
              username: this.username,
              email: res.email,
              firstname: res.firstname,
              lastname: res.lastname,
              internshipResponses: res.internshipResponses,
              university: [{
                description: '',
                address: '',
                name: '',
                rating: '',
              }],
              role: res.roles[0],
              organization: res?.organization,
            };
            this.$store.dispatch('user/login', user);
          } else {
            const user = {
              username: this.username,
              email: res.email,
              firstname: res.firstname,
              lastname: res.lastname,
              internshipResponses: res.internshipResponses,
              university: res?.university,
              role: res.roles[0],
              organization: res?.organization,
            };
            this.$store.dispatch('user/login', user);
          }
        }
      })
      this.$router.push('/internships');
    }
  },
  watch: {
    register_page() {
      if(this.register_page === true) {
        this.login_page = false;
      } else {
        this.login_page = true;
        this.register_page = false;
      }
    }
  }
}
</script>

<style scoped lang="scss">

.login-header {
  min-height: 94px;
  margin: 0 auto;
  padding: 25px 30px;
  color: #fff;
}

.btn-mar {
  margin-right: 2px;
}

.login-card {
  border-radius: 16px !important;

}

.login-content {
  background-color: #d4d4d4;
}

.text-field {
  border-radius: 16px !important;
}

.login-btn {

}

</style>