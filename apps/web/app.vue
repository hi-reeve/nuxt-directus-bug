<script setup lang="ts">
import axios from "axios";
const { getItems } = useDirectusItems();

const { data, error } = await useAsyncData("itemssszzz", () =>
    getItems({
        collection: "posts",
    })
);
const config = useRuntimeConfig();
const { data: fetchData, error: errorFetch } = await useAsyncData(
    "item-fetchqqq",
    () => $fetch(`${config.public.directus.url}/items/posts`)
);
const { data: fetchDataNative, error: errorFetchNative } = await useAsyncData(
    "item-fetch-nativewww",
    async () =>
        (await fetch(`${config.public.directus.url}/items/posts`)).json()
);
const { data: axiosData, error: errorAxios } = await useAsyncData(
    "item-axioseee",
    async () =>
        (await axios.get(`${config.public.directus.url}/items/posts`)).data
);

const { data: dataClient } = await useAsyncData(
    "items-clientttt",
    () =>
        getItems({
            collection: "posts",
        }),
    {
        server: false,
    }
);
</script>

<template>
    <div>
        <div>
            axios
            <pre>{{ axiosData }}</pre>
            <p>{{ errorAxios }}</p>
        </div>
        <div>
            fetch native
            <pre>{{ fetchDataNative }}</pre>
            <p>{{ errorFetchNative }}</p>
        </div>
        <div>
            o-fetch
            <pre>{{ fetchData }}</pre>
            <p>{{ errorFetch }}</p>
        </div>
        <div>
            Server
            <pre>{{ data }}</pre>
            <p>{{ error }}</p>
        </div>
        <div>
            Client
            <pre>{{ dataClient }}</pre>
        </div>
    </div>
</template>
