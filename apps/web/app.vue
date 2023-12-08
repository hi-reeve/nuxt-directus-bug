<script setup lang="ts">
const { getItems } = useDirectusItems();

const { data, error } = useAsyncData("items", () =>
    getItems({
        collection: "posts",
    })
);
</script>

<template>
    <div>
        <pre>{{ data }}</pre>
        <p>{{ error }}</p>
    </div>
</template>
