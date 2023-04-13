<template>
    <div class="h-screen w-screen overflow-hidden flex fixed items-center justify-center" style="background: #edf2f7;">
      <section class="min-h-screen w-screen flex items-stretch text-white ">
          <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style="background-image: url(https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);">
              <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
              <div class="w-full px-24 z-10">
                  <h1 class="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                  <p class="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
              </div>
          </div>
          <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style="background-color: #161616;">
              <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style="background-image: url(src/assets/domoresm.png);">
                  <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
              </div>
              <div class="w-full py-6 z-20">
                  <div class="flex justify-center items-center">
                    <img class="w-20 h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Wikimedia_logo_white.svg/640px-Wikimedia_logo_white.svg.png" alt="">
                  </div>
                  <p class="text-gray-100 py-4 text-xl font-semibold">
                      Bienvenido
                  </p>
                  <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                      <div class="pb-2 pt-4">
                          <input type="email" name="email" id="email" placeholder="Correo electronico" class="block w-full outline-none p-4 text-lg border-[0.1px] border-[#B9B9B9] rounded bg-[rgba(0,0,0,0.5)]">
                      </div>
                      <div class="pb-2 pt-4">
                          <input class="block w-full outline-none p-4 text-lg rounded border-[0.1px] bg-[rgba(0,0,0,0.5)] border-[#B9B9B9]" type="password" name="password" id="password" placeholder="Contraseña">
                      </div>
                      <div class="text-right text-gray-300 hover:underline hover:text-gray-100">
                          <a href="#">¿Olvidaste tu contraseña?</a>
                      </div>
                      <div class="px-4 pb-2 pt-4">
                          <button class="uppercase block w-full p-4 text-lg rounded-full bg-[#05C686] focus:outline-none">Iniciar Sesion</button>
                      </div>
  
                     
                  </form>
              </div>
          </div>
      </section>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  const errors = ref({});
  const form = ref({ email: "", password: "" });
  </script>
  