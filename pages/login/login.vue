<template>
<div class="login">
<div class="content">
<a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 18 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="帐号"
      name="username"
      :rules="[{ required: true, message: '请输入帐号!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
      <a-button type="primary" html-type="submit" >登录</a-button>
    </a-form-item>
  </a-form>
</div>


</div>

</template>

<script setup>

//导入组合式api
import {$login} from '/api/login'
import {reactive} from 'vue';
import {message} from 'ant-design-vue'
//表单数据
const formState = reactive({
  username: '',
  password: '',
  remember: false,
});
const onFinish = values => {
  let {username,password,remember} = values
  $login({username,password})
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

</script>

<style >
.login{
    width:100vw;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(5,57,79),rgb(200,235,250));
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    padding: 20px;
    padding-bottom: 0;
    width:500px;
    border:1px solid #fff ;
    border-radius: 6px;
}
</style>