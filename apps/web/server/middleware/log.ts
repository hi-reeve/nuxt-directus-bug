export default defineEventHandler(event => {
    console.log(`new request: ${event._path}`);
});
