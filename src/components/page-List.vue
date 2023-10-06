<template>
  <div class="application">
    <div class="iconBar">
      <div class="double_arrow">
        <span @click="hideButton" class="material-symbols-outlined">double_arrow</span>
      </div>
      <div class="current">
        <button>※ 指定中</button>
      </div>
      <div class="searchBtn">
        <span class="material-symbols-outlined">
search
</span>
        <select class="id">
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
          <option>スズキ タロウ</option>
        </select>
      </div>
    </div>
    <div v-if="showContent" class="body">
      <div class="contact-side">
        <div class="list">
          <h4>スズキ タロウ</h4>
          <p>ID：12345678</p>
        </div>
        <div class="list">
          <p><span class="material-symbols-outlined">call</span>08024879087</p>
          <p>1980/01/01 43歳</p>
        </div>
      </div>
      <div class="patient-note">
        <p>患者メモ</p>
        <button>保存</button>
      </div>
      <div class="notes">
        <p>特徴：少し話が長め、接し方注意</p>
          <p>枠数：要２枠</p>
         <p> 11/23保険証忘れ、次回持参確認</p>
      </div>
      <div class="reservation">
        <p>過去予約 (123件)</p>
        <p>過去予約 (123件)</p>
      </div>
      <div class="input">
        <div class="info">
          <p>2023/11/23 (金) 11:00 </p>
          <router-link to="page-list">糖尿病代謝内科 門前 一郎</router-link>
          <p>採尿</p>
        </div>

        <div class="info">
          <p>2023/11/23 (金) 11:00 </p>
          <router-link to="page-list">糖尿病代謝内科 門前 一郎</router-link>
          <p>採尿</p>
        </div>

        <div class="info">
          <p>2023/11/23 (金) 11:00 </p>
          <router-link to="page-list">糖尿病代謝内科 門前 一郎</router-link>
          <p>採尿</p>
        </div>

        <div class="info">
          <p>2023/11/23 (金) 11:00 </p>
          <router-link to="page-list">糖尿病代謝内科 門前 一郎</router-link>
          <p>採尿</p>
        </div>

        <div class="info">
          <p>2023/11/23 (金) 11:00 </p>
          <router-link to="page-list">糖尿病代謝内科 門前 一郎</router-link>
          <p>採尿</p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      showContent:false
    };
  },
  methods:{
    hideButton(){
      this.showContent=!this.showContent
    }
  }
}
</script>
<style>
.application{
  display: flex;
  flex-direction: column;
  width:40%;
  padding: 20px;
  margin: auto;

}
.iconBar{
  display: flex;
  flex-direction: row;
  gap: 6%;
  align-items: center;
  height: 40px;
  padding: 20px;
}
.double_arrow{
  background-color: #d9d9d9;
  width: 7%;
  border-radius: 5px;
  height: 33px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.current button{
  background-color: #25357d;
  color: #ffffff;
  width: 120%;
  height: 31px;
  border-radius: 3px;
  border:none;
  cursor: pointer;
}
.searchBtn{
  background-color: white;
  border: 2px solid#343463;
  height: 44px;
  width: 55%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 4px;
  cursor: pointer;
}
.id{
  background-color: white;
  border: none;
  height: 44px;
  width: 35%;
  border-radius: 10px;

}
.body{
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow:  0px 2px 6px 0px rgba(0,0,0,0.5);
}
.contact-side{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.list{
  font-size: 1.15rem;
}
.list p{
  display: flex;
  align-items: center;
}
.patient-note{
  display: flex;
  gap: 4%;
  font-size: 1.15rem;
  align-items: center;
}
.patient-note button{
  color: #ffffff;
  width: 11%;
  background: cornflowerblue;
  border: none;
  border-radius: 10px;
  height: 40px;
  font-size: 1rem;
  cursor: pointer;
}
.notes{
  padding: 12px;
  border: 2px solid grey;
  height: 121px;
  border-radius: 7px;
}
.reservation{
  display: flex;
  height: 100px;
  font-size: 1.25rem;
}
.reservation p{
  display: flex;
  margin: auto;
}
.info{
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(0,0,0,0.5);
}
.input{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>