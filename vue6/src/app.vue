<template>
    <div>
        主页面
        <router-link to="/login">登录</router-link>

        <router-link to="/register">注册</router-link>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>