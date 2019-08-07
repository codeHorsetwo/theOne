<template>
    <div>
        <h2>注册</h2>
        <span>dddddddd</span>
        <router-link to="/register/user1"> 普通</router-link>
        <router-link to="/register/user2">测试</router-link>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped lang="scss">
    h2{
        color:deeppink;
        span{
            color:blue;
        }
    }
</style>