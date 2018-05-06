<template>
  <div id="test">
    <h1>{{ msg }}</h1>
    <h6>{{msg2}}</h6>
    <h2>this is my first vue</h2>
  </div>
</template>

<script>
export default {
    name: 'test',
    data () {
        return {
            msg : 'aaa',
            msg2 : 'bbb'
        }
    }
}
    var login = {
        URL : {
            getList : function() {
                return 'list';
            },
            getAll : function() {
                return 'all';
            }
        }
    }
</script>

<style lang="scss">
#test {
  font: outline;
}
</style>
