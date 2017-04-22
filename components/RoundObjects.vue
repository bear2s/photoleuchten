<template>
  <div class="transitionable round-objects">

    <div class="row middle-xs">
      <div class="col-xs-12">
        <pl-img fileName="r1" sizes="100v"></pl-img>
      </div>
    </div>

    <div class="row middle-xs" style="margin-top: 3rem">
      <div class="col-xs-4 center-xs">
        <pl-img fileName="r0" imgType="png" sizes="33vw"></pl-img>
      </div>
      <div class="col-xs-4 center-xs toggle-active" @click.stop="r7active = !r7active">
        <pl-img v-show="!r7active" fileName="r7" imgType="png" sizes="33vw"></pl-img>
        <pl-img v-show="r7active" fileName="r8" imgType="png" sizes="33vw"></pl-img>
      </div>
      <div class="col-xs-4">
        <pl-img fileName="r9" imgType="png" sizes="33vw"></pl-img>
      </div>
    </div>
    <div class="row middle-xs">
      <h3 class="col-xs-12 center-xs">Leuchte rund<br/>
        bespannt mit Japanpapier<br>
        Beleuchtung: RGB LED's mit Farbwechsel, dimmbar<br/>
        Rahmen Holz, Schlagmetall Kuper</h3>
      <div class="col-xs-12">
        <pl-img file-name="r3" sizes="100v"></pl-img>
      </div>
    </div>

    <div class="row middle-xs">
      <h3 class="col-xs-12 center-xs">Leuchte rund<br/>
        Fotodruck auf Acrylglas<br>
        Beleuchtung: LED's weiß dimmbar<br/>
        Rahmen Holz, Schlagmetall Kuper<br/>
        oxidiert
      </h3>
      <div class="col-xs-12">
        <pl-img file-name="r5" sizes="100v"></pl-img>
      </div>
    </div>

    <div class="row middle-xs" v-if="false">
      <div v-for="(item, i) in ['r4', 'r5']" :key="i" class="col-xs-6 col-sm-3">
        <pl-img :fileName="item" sizes="32vw"></pl-img>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        r7active: false
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
  .round-objects {
    margin-bottom: 30vh;
  }

  h3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .toggle-active{
    &:hover{
      cursor: pointer
    }
  }
</style>
