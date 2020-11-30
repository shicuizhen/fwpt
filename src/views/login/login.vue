<template>
    <div class="login">
      <div class="bgi">
        <div>
          <i></i>
          <p>石家庄学院生活服务平台</p>
          <form action="">
            <input type="text">
            <input type="text">
            <button>登录</button>
            <button>还没注册？</button>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style scoped>
  .bgi{
    position: absolute;
  }
  .bgi div{
    border-top: 5px solid #1ABC9C;
  }
  .bgi p{
    color: #1ABC9C;
    font-size: 18px;

  }

</style>
