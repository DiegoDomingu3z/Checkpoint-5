<template>
    <div class="col-md-12 p-3">
        <div class="bg-light elevation-3">
            <div class="row">
                <div class="col-md-4">
                 <img class="img-fluid" :src="post.creator.picture" alt="">   
                </div>
                <div class="col-md-8">
                    {{post.body}}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {post: {type: Object, required: true}},
    setup(){
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>