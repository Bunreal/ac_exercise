<template>
  <div>
    <header>
      <div>
        <!-- component: navbar -->
        <Navbar />
      </div>
    </header>
    <div id="mainBlock">
      <div>
        <h2>結帳</h2>
        <div id="left">
          <!-- component: checkout -->
          <Checkout @after-submit="showModel" @updateUserInfo="updateUserInfo"/>
        </div>
        <div id="right">
          <!-- component: shoppinglist -->
          <Shoppinglist @updateShopList="updateShopList" :initialDeliver="allData.deliver"/>
        </div>

      </div>
    </div>
    <div id="modal" v-show="modalData">
      <div id="coverShadow" @click="cancelModel"></div>
      <div id="content" v-html="modalData"></div>
    </div>
  </div>
</template>

<style scoped>
  header {
    position: relative;
    width: 100%;
    height: 100px;
  }
  header > div {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
  #mainBlock {
    position: relative;
    width: 100%;
  }
  #mainBlock > div {
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  #left {
    grid-column: 1 / 7;
  }
  #right {
    grid-column: 8 / 13;
  }
  #content{
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    padding: 50px;
    border: 2px solid black;
    border-radius: 10px;
  }
  #coverShadow{
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
    position: fixed;
  }

</style>

<script>
import Navbar from './components/Navbar.vue'
import Checkout from './components/Checkout.vue'
import Shoppinglist from './components/Shoppinglist.vue'

let STORAGE_KEY = 'ALPHA_SHOP_alldata'

export default {
  components: {
    Navbar,
    Checkout,
    Shoppinglist
  },
  data(){
    return {
      modalData:'',
      allData: {
        title: '',
        name: '',
        tel: '',
        email: '',
        city: '',
        address: '',
        deliver: '',
        creditCardName: '',
        creditCardNum: 0,
        creditCardExpiredTime: 0,
        creditCardSecretNum: 0,
        totalPrice: 0
      }
    }
  },
  methods:{
    showModel(){      
      this.modalData = this.printData(this.allData)
    },
    cancelModel(){
      this.modalData = ''
    },
    printData(data){ // 將data變成好看一點的
      let printContent = ''
      Object.keys(data).map((key) => {
        //return [key, data[key]]
        printContent += `${key}: ${data[key]? data[key] : '沒有輸入'}<br>`
      })
      return printContent
    },
    updateUserInfo(data){
      this.allData.title = data.title.content
      this.allData.name = data.name
      this.allData.tel = data.tel
      this.allData.email = data.email
      this.allData.city = data.city.content
      this.allData.address = data.address
      this.allData.deliver = data.deliver
      this.allData.creditCardName = data.creditCardName
      this.allData.creditCardNum = data.creditCardNum
      this.allData.creditCardExpiredTime = data.creditCardExpiredTime
      this.allData.creditCardSecretNum = data.creditCardSecretNum
    },
    updateShopList(data){
      this.allData.totalPrice = data
    },
    saveStorage() {
      console.log('saveStorage')  //測試完可刪
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.allData))
    }
  },
  watch: {
    allData: {
      handler(){
        this.saveStorage()
      },
      deep: true
    }
  }
}
</script>
