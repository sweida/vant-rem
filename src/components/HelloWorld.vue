<template>
  <div class="main">
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      class="header"
    />
    <section>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <!-- <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
      />-->
      <van-cell-group> 
        <van-field
          v-model="form.username"
          required
          clearable
          label="用户名"
          icon="question"
          placeholder="请输入用户名"
          @click-icon="$toast('question')"
        />
        <van-field
          v-model="form.password"
          label="密码"
          placeholder="请输入密码"
          required
        />

      </van-cell-group>
      <van-button type="primary" size="large" @click.native="gonext">默认按钮</van-button>
      <!-- <van-picker :columns="columns" @change="onChange" /> -->
    </section>
    <div class="text">
      这是一行字
    </div>


    <!-- <van-goods-action>
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn" />
      <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickMiniBtn" />
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
      <van-goods-action-big-btn text="立即购买" @click="onClickBigBtn" primary />
    </van-goods-action> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      // form2: JSON.parse(sessionStorage.getItem("form")),
      msg: 'Welcome to Your Vue.js App',
      chosenAddressId: '1',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  },
  created() {
    console.log(JSON.parse(sessionStorage.getItem("form")),11);
    console.log(sessionStorage.getItem("form"),22);
    if(sessionStorage.getItem("form")) {
      this.form = JSON.parse(sessionStorage.getItem("form"))
    }
  },
  methods: {
    // onAdd() {
    //   Toast('新增收货地址');
    // },
    // onEdit(item, index) {
    //   Toast('编辑收货地址:' + index);
    // },
    onChange(picker, value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    gonext() {
      sessionStorage.setItem('form', JSON.stringify(this.form))
      this.$router.push({path:'form'})
    },
    onClickMiniBtn() {
      // Toast('点击图标');
    },
    onClickBigBtn() {
      // Toast('点击按钮');
    }
  },
  // mounted () {
  //   document.addEventListener('touchstart', function () {}, false) // 消除ios:activeBUG
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  height: 100%;
}
.main{
  display: flex;
  flex-direction: column;

}
.header{

}
section{
  /* flex: 1; */
  height: 400px;
  overflow-y: scroll;
}

.text{
  font-size: .36rem
}
</style>
