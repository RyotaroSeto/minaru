<template>
  <main>
    <section class="mv" ref="targetContentTop">
      <div class="secwrap_b">
        <div class="img"><div class="imgwrapmv page concept"></div></div>
        <div class="ttl">
          <h1><span>CONCEPT</span></h1>
        </div>
      </div>
    </section>
    <section class="concept">
      <div class="secwrap">
        <!-- <div class="ttl"><h2><span>CONCEPT</span></h2></div> -->
        <div class="body">
          <div class="txt center txt1">
            <p class="lead">
              <span
                >何千何万と形を変える折り紙のように、<br />髪にもいくつものデザインを。</span
              >
            </p>
            <div class="dec dec1">
              <img
                src="/../image/concept2.png"
                alt="HAIR SALON ORIGAMIのコンセプト"
                title=""
              />
            </div>
          </div>

          <div class="txt left">
            <p>
              <span
                >赤を選べば、きれいなチューリップ。<br />青を選べば、元気なイルカ。<br />白い飛行機は空をどこまでも飛んでいきました。</span
              >
            </p>
          </div>
          <div class="img right">
            <div class="imgwrap i1"></div>
            <div class="dec dec2">
              <img src="/../image/concept1.png" alt="宇都宮の美容室" title="" />
            </div>
          </div>

          <div class="txt right">
            <p>
              <span
                >子供の頃、折り紙の袋の中から、<br />好きな色を決めて、好きなものを作るワクワクや<br />完成した時に誰かに見せる喜びとドキドキ。</span
              >
            </p>
          </div>
          <div class="img left">
            <div class="imgwrap i2"></div>
            <div class="dec dec3">
              <img src="/../image/concept3.png" alt="HAIR SALON" title="" />
            </div>
          </div>
          <div class="txt right">
            <p>
              <span
                >あの頃、大切な折り紙を大事に大事に<br
                  class="show_sp"
                />折ってなにかを作ったように、<br />私たちは大切な髪を<br
                  class="show_sp"
                />大事に大事にデザインいたします。</span
              >
            </p>
          </div>
          <div class="txt center txt2">
            <p class="lead"><span>今日はどんなスタイルにしよう。</span></p>
            <div class="dec dec4">
              <img
                src="/../image/concept2.png"
                alt="色とりどりのヘアデザインを"
                title=""
              />
            </div>
          </div>
          <div class="img b center">
            <div class="imgwrap i3"></div>
          </div>
          <div class="txt center">
            <p>
              <span
                >鏡に映る自分の姿が昨日と少しでも違ったら、<br />きっといつもよりちょっといいことがあるはず。<br /><br />皆さまの毎日に、いくつものデザインを。</span
              >
            </p>
            <div class="logo">
              <img
                src="/../image/minaru_ver.png"
                alt="MINARU LOGO"
                title=""
                onerror="this.src='/../image/logo.png'"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bnr">
      <div class="secwrap">
        <div class="to_reserve top">
          <div class="body">
            <a href="/reserve">
              <p><span>RESERVE</span></p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="totop"></div>
    <div class="totopsp">
      <div class="icon" @click="targetContentTop"></div>
      <p><span>TOP</span></p>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    targetContentTop() {
      this.$refs.targetContentTop.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },
  },
};
</script>
