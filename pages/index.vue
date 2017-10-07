<template>
  <div class="container">

    <div class="row middle-xs">
      <div class="col-xs-12 end-xs">
        <h2>{{$t('home.headline')}}</h2>
      </div>
    </div>

    <div class="row middle-xs">
      <div class="col-xs-12">
        <pl-img fileName="q0" imgType="png" sizes="99vw" :quality="85"></pl-img>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    transition: 'slide-left',
    name: 'app'
  }
</script>
