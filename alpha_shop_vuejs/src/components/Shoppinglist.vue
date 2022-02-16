<template>
  <div id="main">
    <h4>購物籃</h4>
    <div class="buyItem" v-for="item in shoppingData" :key="item.id">
      <img :src="item.url">
      <div class="itemContent">
        <div class="itemName"> {{item.name}} </div>
        <div class="itemPrice">$ {{item.price * item.number  | moneyDot}} </div>
        <div class="itemControl">
          <div class="minus1" @click="removeItem(item.id)"></div>
          <div class="itemNum"> {{item.number}} </div>
          <div class="plus1" @click="addItem(item.id)"></div>
        </div>
      </div>
    </div>
    <div class="divideLine"></div>
    <div class="shoppingFee">
      <div class="blocktitle">運費</div>
      <div class="blockprice"> {{shoppingFee > 0 ? shoppingFee : '免費'}} </div>
    </div>
    <div class="divideLine"></div>
    <div class="sum">
      <div class="blocktitle">小計</div>
      <div class="blockprice">$ {{finalSum | moneyDot}} </div>
    </div>
  </div>
</template>

<style scoped>
  #main { 
    border-radius: 8px;
    border: 1px black solid;
    padding: 32px 32px 24px 24px;
  }
  .divideLine {
    width: 100%;
    height: 2px;
    background-color: #e6e6eb;
  }
  .buyItem {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
  }
  .buyItem img{
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin-right: 24px;
  }
  .itemContent {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .itemName {
    flex: 70%;
  }
  .itemPrice {
    flex: 30%;
    text-align: right;
  }
  .itemControl{
    width: 60%;
    display: flex;
  }
  .itemControl > div {
    margin-right: 20px;
  }
  .minus1,
  .plus1 {
    flex: none;
    width: 26px;
    height: 26px;
    background-color: #f0f0f5;
    border-radius: 50%;
    text-align: center;
    position: relative;
  }
  .minus1::after {
    content: "\002D";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .plus1::after {
    content: "\002B";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .shoppingFee,
  .sum {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<script>
import Item1URL from './../images/shoplist1@2x.png'
import Item2URL from './../images/shoplist2@2x.png'

const dummyData = [
  {
    'id':1,
    'name':'破壞補丁修身牛仔褲',
    'price': 3999,
    'url': Item1URL,
    'number': 1
  },
  {
    'id':2,
    'name':'刷色直筒牛仔褲',
    'price': 1299,
    'url': Item2URL,
    'number': 1
  }
]

export default {
  props: {
    initialDeliver: {
      type: String
    }
  },
  data(){
    return{
      shoppingData: [],
      initialSum: 0,
      shoppingFee: 0,
      finalSum: 0
    }
  },
  created(){
    this.fetchShoppingData()
    this.calMoney()
  },
  methods: {
    fetchShoppingData(){
      this.shoppingData = [...dummyData]
    },
    addItem(itemId){
      this.shoppingData = this.shoppingData.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            number: item.number + 1
          }
        }
        return item
      })
      this.calMoney()
    },
    removeItem(itemId){
      this.shoppingData = this.shoppingData.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            number: ((item.number - 1 === 0) && (this.shoppingData.length ===1)) ? item.number : item.number - 1
          }
        }
        return item
      })
      this.calMoney()
      this.updateList()
    },
    calMoney(){
      let money = 0;
      this.shoppingData.forEach(el=>{
        money += el.number * el.price
      })
      this.initialSum = money
      
      this.finalSum = money + this.shoppingFee
      /*
      if(this.shoppingData.length>0){
        this.finalSum = money + this.shoppingFee
      }else{
        this.finalSum = 0
      }
      */
    },
    updateList(){ // 把數量0的項目從資料清單刪除
      this.shoppingData = this.shoppingData.filter(item=>item.number!==0)
    },
    updateData(){
      this.$emit('updateShopList', this.finalSum)
    }
  },
  filters: {
    moneyDot(n){ // 目標是金額修飾，譬如3000 -> 3,000
      const t = Math.floor(n/1000)
      const other = n-t*1000
      return t+','+other
    }
  },
  watch: {
    finalSum(){
      this.updateData()
    },
    initialDeliver(){
      this.shoppingFee = this.initialDeliver === '標準運送' ? 0 : 500
      this.calMoney()
    }
  }
}
</script>