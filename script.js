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
          this.numEmail.push(resp.data.response)
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((resp) => {
            console.log(resp.data.response);
          });
      },
    },
  }).mount("#app");
}
