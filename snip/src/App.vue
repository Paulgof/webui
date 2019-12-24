<template>
  <div id="app">
    <div id="success_message" class="alert alert-success" role="alert">
      <strong>Успех!</strong> Ваши данные успешно отправлены!
    </div>
    <div id="error_message" class="alert alert-danger" role="alert">
      <strong>Ошибка!</strong> Пожалуйста, отправьте данные ещё раз.
    </div>
    <ModalForm />
    <Header />
    <Title />
    <Cards id="mycards" />
    <DoneProjects />
    <Features />
    <Clients />
    <Reviews />
    <Articles />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Title from "@/components/Title";
import Cards from "@/components/Cards";
import DoneProjects from "./components/DoneProjects";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Reviews from "./components/Reviews";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import ModalForm from "./components/ModalForm";

export default {
  name: 'app',
  components: {
    ModalForm,
    Footer,
    Articles,
    Reviews,
    Clients,
    Features,
    DoneProjects,
    Header,
    Title,
    Cards,

  }
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  @import url('../bootstrap.css');

  #app {
    font-family: 'Open Sans', sans-serif;
  }

  #mycards {
    position: relative;
    top: -100px;
  }

  #success_message, #error_message {
    display: none;
    position: fixed;
    width: 100%;
    z-index: 1000;
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
