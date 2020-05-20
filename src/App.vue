<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    html, ul, li {
        margin: 0;
        padding: 0;
    }
    ul, li  {
        list-style: none;
    }
    html,body {
        touch-action: none;
    }
</style>
