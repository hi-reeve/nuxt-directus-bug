// import {
//     createDirectus,
//     readItem,
//     readItems,
//     rest,
//     type Query,
// } from "@directus/sdk";

// type Post = {
//     id: string;
//     title: string;
// };
// type Schema = {
//     posts: Post[];
// };

// type GetItemsOption<TKey extends keyof Schema> = {
//     collection: TKey;
//     query?: Query<Schema, Schema[TKey]> | undefined;
// };
// type GetItemOption<TKey extends keyof Schema> = GetItemsOption<TKey> & {
//     id: string;
// };
// export const useDirectus = () => {
//     const config = useRuntimeConfig();
//     const client = createDirectus<Schema>(config.public.directus.url, {
//         globals: {
//             fetch: $fetch,
//         },
//     }).with(rest());

//     const getItems = async <TKey extends keyof Schema>({
//         collection,
//         query,
//     }: GetItemsOption<TKey>) =>
//         //@ts-expect-error
//         await client.request(readItems(collection, query));

//     const getItem = async <TKey extends keyof Schema>({
//         collection,
//         id,
//         query,
//     }: GetItemOption<TKey>) =>
//         //@ts-expect-error
//         await client.request(readItem(collection, id, query));
//     return {
//         getItems,
//         getItem,
//     };
// };
