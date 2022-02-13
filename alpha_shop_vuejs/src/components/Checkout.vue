<template>
  <div class="main">
    <div id="stepper">
      <div class="step" :class="{active: currentStep === 1, checked: currentStep > 1}">
        <div class="step-circle"></div>
        <div class="step-label">寄送地址</div>
      </div>
      <div class="step" :class="{active: currentStep === 2, checked: currentStep > 2}">
        <div class="step-circle"></div>
        <div class="step-line"></div>
        <div class="step-label">運送方式</div>
      </div>
      <div class="step" :class="{active: currentStep === 3}">
        <div class="step-circle"></div>
        <div class="step-line"></div>
        <div class="step-label">付款資訊</div>
      </div>
    </div>
    <div id="form">
      <form action="#">
        <div class="form-content">
          <div class="part" v-show="currentStep === 1">
            <h3>寄送地址</h3>
            <div class="form_row">

              <div class="form__row">
                <div class="item1">
                  <label>稱謂</label>
                  <div class="select-wrap input__style">
                    <select v-model="formData.title">
                      <option :value="{content:'先生'}">先生</option>
                      <option :value="{content:'小姐'}">小姐</option>
                      <option :value="{content:'朋友'}">朋友</option>
                    </select>
                  </div>
                </div>
                <div class="item2">
                  <label>姓名</label>
                  <input placeholder="請輸入姓名" style="padding: 5px;" class="input__style" v-model="formData.name">
                </div>
              </div>
              <div class="form__row">
                <div class="item3">
                  <label>電話</label>
                  <input placeholder="請輸入電話" style="padding: 5px;" class="input__style" v-model="formData.tel">
                </div>
                <div class="item4">
                  <label>Email</label>
                  <input placeholder="請輸入電子郵件" style="padding: 5px;" class="input__style" v-model="formData.email">
                </div>
              </div>
              <div class="form__row">
                <div class="item5">
                  <label>縣市</label>
                  <div class="select-wrap input__style">
                    <select v-model="formData.city">>
                      <option :value="{content:'台中'}">台中</option>
                      <option :value="{content:'台北'}">台北</option>
                      <option :value="{content:'高雄'}">高雄</option>
                    </select>
                  </div>
                </div>
                <div class="item6">
                  <label>地址</label>
                  <input placeholder="請輸入地址" style="padding: 5px;" class="input__style" v-model="formData.address">
                </div>
              </div>
              <div class="divideLine"></div>
            </div>
          </div> 
          <div class="part" v-show="currentStep === 2">
            <h3>運送方式</h3>
            <div class="form__row">
              <div class="form__radio">
                <input type="radio" name="deliver" v-model="formData.deliver" :value="'標準運送'">
                <div class="deliverInfo">
                  <div class="deliver__method">標準運送</div>
                  <div class="deliver__price">免費</div>
                  <div class="deliver__duration">約3~7個工作天</div>
                </div>
              </div>
            </div>
            <div class="form__row">
              <div class="form__radio">
                <input type="radio" name="deliver" v-model="formData.deliver" :value="'DHL貨運'">
                <div class="deliverInfo">
                  <div class="deliver__method">DHL貨運</div>
                  <div class="deliver__price">$500</div>
                  <div class="deliver__duration">48小時內送達</div>
                </div>
              </div>
            </div>
            <div class="divideLine"></div>
          </div>
          <div class="part" v-show="currentStep === 3">
            <h3>付款方式</h3>
            <div class="form__row">
              <div class="item7">
                <label>持卡人姓名</label>
                <input placeholder="John Doe" style="padding: 5px;" class="input__style" v-model="formData.creditCardName">
              </div>
            </div>
            <div class="form__row">
              <div class="item8">
                <label>卡號</label>
                <input placeholder="1111 2222 3333 4444" style="padding: 5px;" class="input__style" maxlength="16" v-model="formData.creditCardNum">
              </div>
            </div>
            <div class="form__row">
              <div class="item9">
                <label>有效期限</label>
                <input placeholder="MM/YY" style="padding: 5px;" class="input__style" maxlength="4" v-model="formData.creditCardExpiredTime">
              </div>
              <div class="item10">
                <label>CVC/CCV</label>
                <input placeholder="123" style="padding: 5px;" class="input__style" maxlength="3" v-model="formData.creditCardSecretNum">
              </div>
            </div>
            <div class="divideLine"></div>
          </div>        
        </div>

        <div class="form-controlPanel">
          <button 
            class="btnleft btn" 
            @click.stop.prevent="prevStep"
            v-show="currentStep > 1"
          >
            ← 上一步
          </button>
          <button 
            class="btnright btn"
            @click.stop.prevent="nextStep"
          >          
            {{ currentStep === 3  ? '確認下單' : '下一步 →'}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  #stepper {
    display: flex;
  }
  .step {
    flex: 1;
    display: flex;
    text-align: center;
    position: relative;
  }
  .step-circle {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: black 2px solid;
    background-color: white;
    color: black;
  }
  .step:nth-child(1) .step-circle{
    background-color: black;
    color: white;
  }
  .step:nth-child(1) .step-circle::after {
    content: '1';
  }
  .step:nth-child(2) .step-circle::after {
    content: '2';
  }
  .step:nth-child(3) .step-circle::after {
    content: '3';
  }
  .step-label {
    margin-left: 5px;
  }
  .step-line {
    display: block;
    height: 3px;
    background-color: black;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(80% + 70px);
    left: calc(-80% + 70px);
  }
  .checked .step-circle{
    background-color: black;
    color: white;
  }
  #stepper>.checked .step-circle::after{
    content: "\2714";
  }

  /*form*/
  .form__row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .form__row label {
    font-size: 12px;
  }
  .form__row > div {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .form__row > div:nth-child(1) {
    padding-right: 50px;
  }
  .item1,
  .item5 {
    grid-column: 1 / 5;
  }
  .item2,
  .item6 {
    grid-column: 5 / 13;
  }
  .item3,
  .item9 {
    grid-column: 1 / 7;
  }
  .item4,
  .item10 {
    grid-column: 7 / 13;
  }
  .item7,
  .item8 {
    grid-column: 1 / 9;
  }


  .input__style {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    border: 1px solid black;
  }

  /* select */
  .select-wrap {
    position: relative;
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 6px;
  }
  .select-wrap::after {
    content: "\25BE";
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  select {
    -webkit-appearance: none;
    cursor: pointer;
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: none;
  }

  /* radio */
  .form__radio {
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    grid-column: 1 / 11;
    border-radius: 4px;
    align-items: center;
    height: 60px;
    margin: 10px;
  }
  .form__radio input {
    margin: 10px;
    width: 20px;
    height: 20px;
    -webkit-appearance: none;
    border-radius: 50%;
    border: black 1px solid;
    cursor: pointer;
  }
  .form__radio input:checked {
    box-shadow: inset 0 0 0 5px black;
  }
  .deliverInfo{
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .deliver__method {
    flex: 1;
    font-size: 14px;
  }
  .deliver__price {
    text-align: right;
    flex: 1;
    font-size: 12px;
  }
  .deliver__duration {
    flex: 100%;
    font-size: 12px;
  }

  /* form-controlPanel */
  .form-controlPanel{
    position: relative;
    margin-top: 20px;
  }
  .form-controlPanel .btn {
    width: 175px;
    height: 46px;
    border-radius: 8px;
    border: none;
  }
  .form-controlPanel .btnright {
    background-color: #f67599;
    color: white;
    position: absolute;
    right: 0;
  }
  .form-controlPanel .btnleft {
    background-color: white;
    color: black;
    position: absolute;
    left: 0;
  }

  .divideLine {
    width: 100%;
    height: 2px;
    background-color: #e6e6eb;
  }
</style>

<script>
export default {
  data(){
    return {
      currentStep: 1,
      formData: {
        'title': {},
        'name': '',
        'tel': '',
        'email': '',
        'city': {},
        'address': '',
        'deliver': '',
        'creditCardName': '',
        'creditCardNum': '',
        'creditCardExpiredTime': '',
        'creditCardSecretNum': ''
      }
    }
  },
  methods: {
    nextStep(){
      if (this.currentStep === 3) {
        this.$emit('after-submit')
        return
      }
      this.currentStep += 1
    },
    prevStep(){
      this.currentStep -= 1
    },
    updateData(){
      this.$emit('updateUserInfo', this.formData)
    }
  },
  watch: {
    formData: {
      handler(){
        this.updateData()
      },
      deep: true
    }
  }
}
</script>