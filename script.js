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
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log(resp.data.response);
        });
    },
  },
}).mount("#app");
