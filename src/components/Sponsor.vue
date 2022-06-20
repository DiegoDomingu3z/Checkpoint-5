<template>
<div class="sticky-top">
    <div class="col-md-12 py-3">
        <img class="img-fluid" :src="sponsor.tall" alt="">
    </div>
    
</div> 
    
</template>


<script>
export default {
    props: {sponsor: {type: Object, required: true} },
    setup(){
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>

</style>