const { createApp, ref } = Vue;

const generateImage = (prompt, loading) => {
  return new Promise((resolve, reject) => {
    fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const app = createApp({
  setup() {
    const prompt = ref(null);
    const lastPrompt = ref(null);
    const imageURL = ref(null);
    const loading = ref(false);
    return {
      prompt,
      imageURL,
      loading,
      lastPrompt,
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      this.lastPrompt = this.prompt;
      this.prompt = null;
      const resp = await generateImage(this.lastPrompt);
      this.imageURL = resp.image.substring(7);
      this.loading = false;
    },
  },
}).mount("#app");
