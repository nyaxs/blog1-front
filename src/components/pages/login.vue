<style scoped>
		li{
			border:1px solid transparent;
			margin-top: 30px;
			list-style: none;
			text-align: center;
		}
	input{
		height: 3em;
		width: 20em;
		border: 0;
		border-bottom: 3px solid #fec8c9;
		background-image: none;
		background:transparent;
		outline: none;
		text-align:center;
	}
	label{
		color: #515a6e;
	}
	.btn{
		outline: none;
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: transparent;
		color: #515a6e;
		transition: color .2s linear,background-color .2s linear;
		width: 4em;
		height: 2em;
		font-size: 1.5em;
	}
	.btn:hover{
		color: #fec8c9;
		background-color: #847467;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 1.5em;
		background-image: url('../../images/bg-login.jpg');
		background-repeat: no-repeat;
		background-size:cover;
	}

.ivu-row{
	height: 100%;
	width: 100%;
}
.ivu-col-span-8{
	display: flex;
	height: 70%;
	align-items: center;
	justify-content: center;
}
</style>


<template>        
<div class="container"><Row>
        <Col span="8"></Col>
        <Col span="8">
			<form>
				<ul>
					<li><input placeholder="UserName" v-model="name"/></li>
					<li><input  v-model="pwd" type="password" placeholder="PassWord"/></li> 
					<br>
					<li><button @click="isLogin" type="text" class="btn">Log In</Button></li>
				</ul>
					
			</form>
		</Col>
        <Col span="8"></Col>
    </Row>
		
	</div>
</template>
	<script>
		export default {
			data() {
				return {
					name:'',
					pwd:'',
					error:''
				}
			},
			computed: {
				user() {
					return this.$store.state.user
				}
			},
			methods:{
				isLogin:function() {
					this.$http.get('http://localhost:3002/users?username='+this.name+'&password='+this.pwd).then((response) => { 
						//这里在isLogin方法中先判断一下后台返回的是否为空值，如果不是然后提交后台返回的值。
						//注意这里是个难点，Vuex与Vue-Resource结合使用。 
						if(response.body != null & response.body.length > 0){ 
							this.$store.commit('isLogin',response.body[0]);
							this.name='';
							this.pwd= '';
							this.$router.push({ path: 'user' }); 
						}else{
							alert('请输入正确的用户名和密码！！！');
							this.name='';
							this.pwd= '';
						}
						
					}).then((error)=> this.error = error)
				}
			}
		}
	</script>