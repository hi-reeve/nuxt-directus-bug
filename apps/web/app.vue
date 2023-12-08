<script setup lang="ts">
const { getItems } = useDirectusItems();

const { data, error } = await useAsyncData("itemsss", () =>
    getItems({
        collection: "posts",
    })
);
const { data: dataClient } = await useAsyncData(
    "items-client",
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
