<template>
    <div>
        <h2>登良路</h2>
        <button @click="show">点击</button>
    </div>
</template>

<script>
    import {Toast} from  'mint-ui'
    export default {
        name: "login",
        data(){
            return {
                msg:'ok',
                toastIns:null
            }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                this.show();
                setTimeout( () => {
                    //提示消失
                    this.toastIns.close();
                },4000)
            },
            show(){
                this.toastIns = Toast({
                    message:"提示",
                    position:'top',
                    iconClass:'glyphicon glyphicon-ok',
                    duration:-1,
                    className:'mm'
                })
            }
        }
    }
</script>

<style scoped>
h2{
    color:red;
}
</style>