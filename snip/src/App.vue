<template>
  <div id="app">
    <router-view />
    <Header />
    <Title />
    <Cards id="mycards" />
    <DoneProjects />
    <Features />
    <Clients />
    <Reviews />
    <Articles />
    <News />
    <Footer />
  </div>
</template>

<script>

import Header from "./components/Header";
import Title from "./components/Title";
import Cards from "./components/Cards";
import DoneProjects from "./components/DoneProjects";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import News from "./components/News";

export default {
  name: 'app',
  components: {
    Footer,
    Articles,
    Reviews,
    Clients,
    Features,
    DoneProjects,
    Header,
    Title,
    Cards,
    News,
  },
  mounted() {
    window.onpopstate = function () {
      document.body.style.overflow = 'unset';
    }
  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  @import url('../bootstrap.css');

  #app {
    font-family: 'Open Sans', sans-serif !important;
  }

  #mycards {
    position: relative;
    top: -100px;
  }

  .bold_underlined {
    font-weight: bold;
    font-size: 20px;
    text-decoration: underline;
    text-decoration-color: green;

  }

  .smaller {
    font-size: 70%;
  }

  .clr-green {
    color: #24aa17;
  }

  .green-underline {
    text-decoration: underline;
    text-decoration-color: #24aa17;
  }


  .clearBoth {
    clear: both;
  }

</style>
