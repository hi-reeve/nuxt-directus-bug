// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-directus"],
    runtimeConfig: {
        public: {
            directus: {
                url: process.env.DIRECTUS_APP_URL,
            },
        },
    },
});
