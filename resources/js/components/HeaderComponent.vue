<template>
  <div>
    <header class="header-minaru">
      <div class="header_wrap">
        <div class="img">
          <router-link to="/"
            ><img src="/../image/minaru_ver.png" @click="home" />
          </router-link>
        </div>
        <nav class="gnav">
          <ul class="ul_minaru">
            <li>
              <router-link to="/">
                <span class="cover"></span
                ><span class="text" @click="home">ホーム</span>
              </router-link>
            </li>
            <li>
              <router-link to="/concept">
                <span class="cover"></span
                ><span class="text" @click="classChange">コンセプト</span>
              </router-link>
            </li>
            <li>
              <router-link to="/menu"
                ><span class="cover"></span
                ><span class="text" @click="classChange">メニュー</span>
              </router-link>
            </li>
            <li>
              <router-link to="/style"
                ><span class="cover"></span
                ><span class="text" @click="classChange">スタイル</span>
              </router-link>
            </li>
            <li>
              <router-link to="/info"
                ><span class="cover"></span
                ><span class="text" @click="classChange">サロン情報</span>
              </router-link>
            </li>
            <li>
              <router-link to="/reserve"
                ><span class="cover"></span
                ><span class="text" @click="classChange">ご予約</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <a href="javascript:void(0);" id="menubtn" @click="isActive=!isActive" v-bind:class='{active:isActive}'>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </a>

    <div id="popupnav" v-bind:class='{active:isActive}'>
      <div class="base"></div>
      <nav class="gnav">
        <div class="logo">
          <a href="/"
            ><img
              src="/../image/minaru.png"
              onerror="this.src='/../image/logo.png'"
              alt="MINARU"
          /></a>
        </div>
        <div class="hr"></div>
        <ul>
          <li>
            <a href="/" class=""
              ><span class="cover"></span><span class="text">ホーム</span></a
            >
          </li>
          <li>
            <a href="/concept/" class=""
              ><span class="cover"></span
              ><span class="text">コンセプト</span></a
            >
          </li>
          <li>
            <a href="/menu/" class=""
              ><span class="cover"></span><span class="text">メニュー</span></a
            >
          </li>
          <li>
            <a href="/style/" class=""
              ><span class="cover"></span><span class="text">スタイル</span></a
            >
          </li>
          <li>
            <a href="/info/" class=""
              ><span class="cover"></span
              ><span class="text">サロン情報</span></a
            >
          </li>
          <li>
            <a href="/reserve/" class=""
              ><span class="cover"></span><span class="text">ご予約</span></a
            >
          </li>
          <li>
            <p class="sns">
              <a
                href="https://www.instagram.com/minaru154/"
                target="_blank"
                ><img src="/../image/in.svg" alt="MINARU"
              /></a>
            </p>
          </li>
        </ul>
        <div class="btn">
          <button class="ftbtn">
            <a href="tel:0286584654" class="tel"><span>028-658-4654</span></a>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$emit("pageChange", "top");
    },
    classChange() {
      this.$emit("pageChange", "page");
    },
  },
  data() {
    return {
      page: "",
      isActive: false
    };
  },
};
</script>
