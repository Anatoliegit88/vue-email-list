const { createApp } = Vue;

createApp({
  data() {
    return {
      numEmail: [],
    };
  },
  created() {
    this.getEmails();
  },
  methods: {
    getEmails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            this.numEmail.push(resp.data.response);
          });
      }
    },
  },
}).mount("#app");
