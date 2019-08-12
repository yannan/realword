<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account?</router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v[0] }}</li>
          </ul>
          <form @submit="doLogin">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "rlLogin",
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    async doLogin(e) {
      e.preventDefault();
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => this.$router.push({ name: "home" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.error
    })
  }
};
</script>
