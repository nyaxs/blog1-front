<!--<style scoped>
    @import 'styles/common.css';
</style>
!-->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}

.layout {
  background: #f5f7f9;
  display: flex;
  flex-direction: column;
  height: 100%;
  height: 100%;
}
.layout-logo {
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
.layout-logo p {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}

.layout-login {
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
.layout-login p {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
.layout-nav {
  width: 65%;
  margin: 0 auto;
  margin-right: 4px;
}
.ivu-row {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  height: 100%;
}
.timeline-row {
  display: flex;
  align-items: flex-start;
}
.post-panel {
  width: 100%;
  height: 64px;
  background-color: #f5f7f9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-input {
  height: 64px;
}
.btn {
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: transparent;
  color: #515a6e;
  transition: color 0.2s linear, background-color 0.2s linear;
  width: 5em;
  height: 2em;
  font-size: 1.2em;
}
.btn:hover {
  color: #fec8c9;
  background-color: #847467;
}
.btn-insert {
  width: 3em;
  height: 2em;
  font-size: 1.2em;
  display: flex;
  justify-content: start;
  align-items: center;
}
.btn-post {
  width: 3em;
  height: 2.2em;
  font-size: 1.2em;
  display: flex;
  justify-content: end;
  align-items: center;
}
.btn-insert:hover {
  color: #fec8c9;
  background-color: #847467;
}
.filter-box {
  height: 40px;
  width: 100%;
  background-color: #f1bbba;
  margin-bottom: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.ivu-card {
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ivu-card-body {
  width: 100%;
  height: 100%;
}
.card-flow {
  height: 100%;
  width: 100%;
  font-size: 1.2em;
  margin-bottom: 2px;
  background-color: #fff;
}
.card-action {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
}
.user-operation {
  display: flex;
  flex-direction: column;
}
.ivu-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.layout-footer-center {
  flex: 0 0 auto;
  text-align: center;
}
.post-time{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 0.8em;
  font-weight: lighter;
}
.card-btn{
  font-size: 1em;
  font-weight: lighter;
}
.card-btn span{
  font-size: 0.9em;
}
</style>

<template>
  <div class="layout">
    <Layout>
      <Header>
        <div id="menu-horizontal">
          <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-logo">
              <p><router-link to="/home">(<ゝω・)☆喵克斯制药</router-link></p>
            </div>

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
            <div class="layout-login">
              <p><router-link to="/login">Login</router-link></p>
            </div>
          </Menu>
        </div>
      </Header>

      <Content class="content">
        <div class="user-operation">
          <div>
            <Row>
              <Col span="6"></Col>
              <Col span="12">
                <Row>
                  <Col span="24">
                    <div class="post-panel">
                      <Input
                        v-model="value8"
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 6 }"
                        placeholder="Talk some ξ( ✿＞◡❛)"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <div>
                      <Row type="flex" justify="start">
                        <Col span="2"
                          ><button
                            @click="getHotTalk"
                            type="text"
                            class="btn btn-insert"
                          >
                            图片
                          </button></Col
                        >
                        <Col span="2"
                          ><button
                            @click="getHotTalk"
                            type="text"
                            class="btn btn-insert"
                          >
                            标签
                          </button></Col
                        >
                        <Col span="2"
                          ><button
                            @click="getHotTalk"
                            type="text"
                            class="btn btn-insert"
                          >
                            emoij
                          </button></Col
                        >
                        <Col span="2" offset="16"
                          ><button
                            @click="getHotTalk"
                            type="text"
                            class="btn btn-post"
                          >
                            Nya
                          </button></Col
                        >
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col span="6"></Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span="24">
                <Row>
                  <Col span="6"></Col>
                  <Col span="12">
                    <Row>
                      <div class="filter-box">
                        <Col span="6"
                          ><button @click="getHotTalk" type="text" class="btn">
                            烫烫烫烫
                          </button></Col
                        >
                        <Divider type="vertical" />
                        <Col span="6"
                          ><button @click="getAllTalk" type="text" class="btn">
                            时间线上
                          </button></Col
                        >
                        <Divider type="vertical" />
                        <Col span="6"
                          ><button
                            @click="getSpecialTalk"
                            type="text"
                            class="btn"
                          >
                            特别关注
                          </button></Col
                        >
                        <Divider type="vertical" />
                        <Col span="6"
                          ><button @click="getLoveTalk" type="text" class="btn">
                            收藏喜欢
                          </button></Col
                        >
                      </div>
                    </Row>
                  </Col>
                  <Col span="6"></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <Row class="timeline-row">
            <Col span="6"></Col>
            <Col span="12">
              <div class="card-flow" v-for="item in talkList">
                <Row>
                  <Col span="4">头像</Col>
                  <Col span="20">
                    <Row>
                      <Col span="22">
                        <div>
                          <p>{{ item.niceName }}@{{ item.userName }}</p>
                        </div>
                        <Row class="post-time"
                          ><Col>
                            <p>{{ item.postTime }}</p>
                          </Col></Row
                        >
                      </Col>
                      <Col span="2"><Icon type="ios-arrow-dropdown"/></Col>
                    </Row>
                    <Row>
                      <Col span="24">
                        <div>{{ item.detail }}</div>

                        <div><img :src="item.talkImgs" /></div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span="12">
                        <div class="card-action">
                          <button
                            @click="getSpecialTalk"
                            type="text"
                            class="btn card-btn"
                          >
                            <Icon type="md-thumbs-up" size="16px"/><span>{{ item.upvoteCount }}</span>
                          </button>
                          <button
                            @click="getSpecialTalk"
                            type="text"
                            class="btn card-btn"
                          >
                            <Icon type="ios-text" size="16px"/><span>{{ item.commentCount }}</span>
                          </button>
                          <button
                            @click="getSpecialTalk"
                            type="text"
                            class="btn card-btn"
                          >
                            <Icon type="md-heart-outline" size="16px"/><span>{{
                              item.collectCount
                            }}</span>
                          </button>
                          <button
                            @click="getSpecialTalk"
                            type="text"
                            class="btn card-btn"
                          >
                            <Icon type="md-share-alt" size="16px"/><span>{{ item.transmitCount }}</span>
                          </button>
                        </div>
                      </Col>
                      <Col span="12"></Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span="6"></Col>
          </Row>
        </div>
      </Content>
      <Footer class="layout-footer-center"> &copy;2019 NyaxsProject</Footer>
    </Layout>
  </div>
</template>



<script>
export default {
  data() {
    return {
      theme1: "light",
      talkList: [
        {
          title: "狂人日记",
          detail: "这赵家的狗，何以多看了我两眼。",
          userName: "周树人",
          niceName: "鲁迅",
          avatar: "../../images/luxun-avatar.jpg",
          postTime: "09:55",
          talkImgs: "../../images/luxun-talk1.jpg",
          upvoteCount: 12,
          commentCount: 9,
          transmitCount: 3,
          collectCount: 6
        },
        {
          title: "强风吹袭",
          detail: "你喜欢跑步吗？不要突然停下来，再多跑一会吧。",
          userName: "清濑灰二",
          niceName: "灰二哥",
          avatar: "../../images/luxun-avatar.jpg",
          postTime: "09:55",
          talkImgs: "../../images/luxun-talk1.jpg",
          upvoteCount: 12,
          commentCount: 9,
          transmitCount: 3,
          collectCount: 6
        },
        {
          title: "刺杀骑士团长",
          detail:
            "假如表面似乎阴晦；有可能都到月球上去；不过是物理性反射罢了；远看，大部分事物都很美丽",
          userName: "小林绿子",
          niceName: "绿子",
          avatar: "../../images/luxun-avatar.jpg",
          postTime: "09:55",
          talkImgs: "../../images/luxun-talk1.jpg",
          upvoteCount: 12,
          commentCount: 9,
          transmitCount: 3,
          collectCount: 6
        }
      ]
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>