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
                         <MenuItem name="2" to="/talk">
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
            
            <Content :style="{padding: '0 50px'}">
              <div id="user-operation">
              <Row>
                <Col span="8"><Button type="primary" to="/user" long><h2>User</h2></Button></Col>
                <Col span="8"><Button type="primary" to="/e404" long><h2>Write</h2></Button></Col>
                <Col span="8"><Button type="primary" long><h2>Setting</h2></Button></Col>
              </Row>
              </div>
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Components</BreadcrumbItem>
                    <BreadcrumbItem>Layout</BreadcrumbItem>
                </Breadcrumb>
              
                <div id="card-timeline" >
                <div style="background:#eee;padding: 20px">

                        <Card :bordered="false" v-for="item in blogList">
                            <p slot="title">{{item.title}}</p>
                            <p>{{item.detail}} </p>
                        </Card>

                  </div>
                </div>
                <div >
                </div>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
       
    </div>
    
</template>



<script>
    export default {
        data () {
            return {
              theme1: 'light',
              blogList:[
                {title:'狂人日记',
                 detail:'这赵家的狗，何以多看了我两眼。'
              },
              {
                title:'强风吹袭',
                detail:'你喜欢跑步吗？不要突然停下来，再多跑一会吧。'
              },
              {
                title:'刺杀骑士团长',
                detail:'假如表面似乎阴晦；有可能都到月球上去；不过是物理性反射罢了；远看，大部分事物都很美丽'
              }
              ]
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