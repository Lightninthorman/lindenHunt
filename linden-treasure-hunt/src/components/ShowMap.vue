<template lang="html">
    <div class="">
        <h1>{{map.title}}</h1>
        <button type="button" name="button" @click="$emit('back',false)">Back</button>
    </div>
</template>

<script>
export default {
    name:"showMap",
    props:["map"]
}
</script>

<style lang="css" scoped>
</style>
