<template>
    <div>
        <h3>foot而{{name}}</h3>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'my-footer',
        data: () => {
            return {
                name: 'footer'
            }
        },
        created: function(){
            console.log('footer 初始化了')
        }
    }
</script>