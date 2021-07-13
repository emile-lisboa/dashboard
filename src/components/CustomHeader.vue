<template>
<div class="bg-brand-main">
  <nav class="navbar">
      <div class="flex align-center jc-sb container">
          <div class="navbar-brand">
              <img src="../assets/images/logo_white.png" >
          </div>
          <div class="navbar-actions">
              <a href="#" class="text-brand-gray font-bold">Crie uma conta</a>
              <button class="btn m-reset bg-brand-gray text-brand-main font-bold">Entrar</button>
          </div>
      </div>
  </nav>
  <div class="container flex align-center jc-sb">
    <div class="">
      <h1 class="font-dark text-brand-gray">
        Tenha um feedback.
        E faça seus clientes mais felizes!
      </h1>
      <h2 class="font-regular text-brand-gray">
          Receba ideias, reclamações e feedbacks com um
          simples widget na página.
      </h2>
      <button class="btn bg-brand-gray text-brand-main font-bold">Crie uma conta grátis</button>
    </div>
    <div class="header-image">
      <img src="../assets/images/blue_balloons.png" >
    </div>
  </div>
</div>
</template>
<style lang="scss">
.navbar {
  width: 100%;
  padding-top: 2.6875rem;

  &-brand {
    img {
        width: 9.3125rem;
    }
  }

  &-actions {
      a:after {
        content: "";
        padding-right: 2.5625rem;
      }
  }
}

.header-image {
    img {
        width: 39.25rem;
        height: 39.25rem;
    }
}
</style>
