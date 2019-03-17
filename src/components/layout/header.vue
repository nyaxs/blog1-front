<!--<style scoped>
    @import 'styles/common.css';
</style>
!-->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
html,body{
    height: 100%;
    width:100%
}


.layout{
    background: #f5f7f9;
    display: flex;
    flex-direction: column;
    height: 100%;
     text-align: center;
}
.layout-logo{
    position: relative;
    width: 12%;
    height: 30px;
    background: #f5f7f9;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 1%;
}
.layout-logo p{
  position: relative;
      top: 50%;
      transform: translateY(-50%);
          text-align: center;
}

.layout-login{
    position: relative;
    width: 12%;
    height: 30px;
    background: #f5f7f9;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 24%;
}
.layout-login p{
  position: relative;
      top: 50%;
      transform: translateY(-50%);
          text-align: center;
}
.layout-nav{
    width: 65%;
    margin: 0 auto;
    margin-right: 4px;
}

.ivu-row{
  text-align:center;
}
.layout-footer-center{
    /*  width: 100%;
      height:80px;
      position:absolute;
      bottom:0px;
      left:0px;

    */
    flex: 0 0 auto;
      text-align: center;
}
.ivu-card{
  margin: 20px;
}
</style>

<template>

    <div class="layout">
          
        <Layout>
            <Header>
            <div id="menu-horizontal">
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"><p><router-link to="/home">(<ゝω・)☆喵克斯制药</router-link></p></div>
                    
                    <div class="layout-nav">
                         <MenuItem name="1" to="/home">
                             <Icon type="ios-home" />
                             Home
                         </MenuItem>
                         <MenuItem name="2">
                             <Icon type="ios-text" />
                             Talk
                         </MenuItem>
                         <Submenu name="3">
                             <template slot="title">
                                 <Icon type="ios-bulb" />
                                 Blog
                             </template>
                             <MenuItem name="3-1">Glitter Stars</MenuItem>
                             <MenuItem name="3-2">Immortal Idea</MenuItem>
                         </Submenu>
                         <MenuItem name="4">
                           <Icon type="md-color-wand" />
                             Luck
                         </MenuItem>
                    </div>
                    <div class="layout-login"><p><router-link to="/login">Login</router-link></p></div>
                </Menu>
                </div>
            </Header>
            
   
        </Layout>
       
    </div>
    
</template>



<script>
    export default {
        data () {
            return {
              theme1: 'light'
            }

        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>