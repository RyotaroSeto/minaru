<template>
  <main>
    <section class="mv" ref="targetContentTop">
      <div class="secwrap_b">
        <div class="img"><div class="imgwrap"></div></div>
        <div id="slide">
          <div class="triming t"></div>
          <div class="triming b"></div>
          <div class="slide_wrap">
            <ul style="margin-top: 30px">
              <li class="text_b">
                <div class="ci_wrap">
                  <img
                    src="/../image/mv1.jpg"
                    alt="minaru Hair Salon"
                    title=""
                    width="1560"
                    height="887"
                    class="ci pic"
                  />
                </div>
              </li>
              <li>
                <div class="ci_wrap">
                  <img
                    src="/../image/mv2.jpg"
                    alt="minaru Hair Salon"
                    title=""
                    width="1560"
                    height="887"
                    class="ci pic"
                  />
                </div>
              </li>
              <li>
                <div class="ci_wrap">
                  <img
                    src="/../image/mv3.jpg"
                    alt="minaru Hair Salon"
                    title=""
                    width="1560"
                    height="887"
                    class="ci pic"
                  />
                </div>
              </li>
              <li>
                <div class="ci_wrap">
                  <img
                    src="/../image/mv4.jpg"
                    alt="minaru Hair Salon"
                    title=""
                    width="1560"
                    height="887"
                    class="ci pic"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="scroll">
          <img
            src="/../image/scroll.svg"
            alt="SCROLL"
            onerror="this.src='/../image/scroll.png'"
            @click="moveToScroll"
          />
          <p class="cap"><span>scroll</span></p>
        </div>
      </div>
    </section>
    <section class="concept" ref="targetContent">
      <div class="secwrap">
        <a href="/concept">
          <div class="img">
            <div class="imgwrap"></div>
          </div>
          <div class="txt">
            <h2><span>コンセプト</span></h2>
            <p class="lead">
              <span
                >何千何万と形を変える折り紙のように、<br />髪にもいくつものデザインを。</span
              >
            </p>
            <div class="btn">
              <button class="btn1">
                <div class="a">
                  <span
                    >MORE<br class="show_pctb" />
                    DETAIL</span
                  >
                </div>
              </button>
            </div>
          </div>
        </a>
      </div>
    </section>
    <section>
      <div class="secwrap"><div class="hr"></div></div>
    </section>
    <section class="menu">
      <div class="secwrap">
        <div class="ttl">
          <h2><span>メニュー</span></h2>
        </div>
        <div class="body">
          <ul class="row r2">
            <li>
              <a href="/menu">
                <div class="liwrap">
                  <div class="img">
                    <div class="imgwrap">
                      <img
                        class="img1"
                        src="/../image/menu3.png"
                        alt="CUT + SHAMPOO"
                      />
                      <img
                        class="img2"
                        src="/../image/menu4.png"
                        alt="¥4200(tax)"
                      />
                    </div>
                  </div>
                  <div class="txt">
                    <h3><span>CUT + SHAMPOO</span></h3>
                    <p><span>¥4,200(+tax)~</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/menu">
                <div class="liwrap">
                  <div class="img">
                    <div class="imgwrap">
                      <img
                        class="img1"
                        src="/../image/menu5.png"
                        alt="CUT + COLOR"
                      />
                      <img class="img2" src="/../image/menu3.png" alt="¥8400" />
                    </div>
                  </div>
                  <div class="txt">
                    <h3><span>CUT + COLOR</span></h3>
                    <p><span>¥8,400(+tax)~</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/menu">
                <div class="liwrap">
                  <div class="img">
                    <div class="imgwrap">
                      <img
                        class="img1"
                        src="/../image/menu5.png"
                        alt="CUT + PERM"
                      />
                      <img class="img2" src="/../image/menu3.png" alt="¥8200" />
                    </div>
                  </div>
                  <div class="txt">
                    <h3><span>CUT + PERM</span></h3>
                    <p><span>¥8,200(+tax)~</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="/menu">
                <div class="liwrap">
                  <div class="img">
                    <div class="imgwrap">
                      <img
                        class="img1"
                        src="/../image/menu3.png"
                        alt="CUT + STRAIGHT"
                      />
                      <img class="img2" src="/../image/menu4.png" alt="¥4200" />
                    </div>
                  </div>
                  <div class="txt">
                    <h3><span>CUT + STRAIGHT</span></h3>
                    <p><span>¥4,200(+tax)~</span></p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="btn">
            <button class="btn1">
              <a href="/menu"
                ><span
                  >MORE<br class="show_pctb" />
                  DETAIL</span
                ></a
              >
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="secimg">
      <div class="secwrap">
        <div class="img">
          <div class="imgwrap"></div>
        </div>
      </div>
    </section>
    <section class="saloninfo">
      <div class="secwrap">
        <a href="/info">
          <div id="slide2">
            <div class="slide_wrap">
              <ul>
                <li class="si_pic1">
                  <div class="ci_wrap">
                    <img
                      src="/../image/top_saloninfo1.jpg"
                      alt="遊び心のある壁紙と黒板。"
                      title=""
                      width="1560"
                      height="887"
                      class="ci pic"
                    />
                  </div>
                </li>
                <li class="si_pic2">
                  <div class="ci_wrap">
                    <img
                      src="/../image/top_saloninfo2.jpg"
                      alt="北欧家具で落ち着く内装になっています。"
                      title=""
                      width="1560"
                      height="887"
                      class="ci pic"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="txt">
            <h2><span>サロン情報</span></h2>
            <p>
              <span
                >黒板を使用した遊び心ある壁紙。<br />北欧家具を基調としたインテリア。<br />お子様はファミリールームでのびのびと。<br />温かみのあるサロンでリラックスしてください。</span
              >
            </p>
          </div>
          <div class="btn">
            <button class="btn1">
              <div class="a">
                <span
                  >MORE<br class="show_pctb" />
                  DETAIL</span
                >
              </div>
            </button>
          </div>
        </a>
      </div>
    </section>
    <section>
      <div class="secwrap"><div class="hr"></div></div>
    </section>
    <section class="style r4" style="margin-bottom: 50px">
      <div class="secwrap_b">
        <a href="/style">
          <div class="ttl">
            <h2><span>スタイル</span></h2>
          </div>
          <div class="body">
            <div class="img show_pctb">
              <img src="/../image/style.png" alt="MINARUのスタイル" />
            </div>
            <div class="img show_sp">
              <img src="/../image/style_sp.png" alt="MINARUのスタイル" />
            </div>
            <div class="btn">
              <button class="btn1">
                <div class="a">
                  <span
                    >MORE<br class="show_pctb" />
                    DETAIL</span
                  >
                </div>
              </button>
            </div>
          </div>
        </a>
      </div>
    </section>
    <div class="totop"></div>
    <div class="totopsp">
      <div class="icon" @click="moveToScrollTop"></div>
      <p><span>TOP</span></p>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    moveToScroll() {
      this.$refs.targetContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
    moveToScrollTop() {
      this.$refs.targetContentTop.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
  },
};
</script>
