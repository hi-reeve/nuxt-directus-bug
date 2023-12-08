// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-directus"],
    runtimeConfig: {
        directus: {
            url: process.env.DIRECTUS_APP_URL,
        },
    },
    directus: {
        url: process.env.DIRECTUS_APP_URL,
    },
});
