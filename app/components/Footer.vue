<template>
  <div class="row mx-2 mt-5">
    <div class="logo w-full flex justify-center items-center">
      <MyLogo />
    </div>

    <div class="my-2 h-1 border-b border-b-neutral-700" />

    <div class="az-list flex my-2 items-center gap-3">
      <p class="text-primary font-bold text-sm">
        A-Z list
      </p>
      <p class="hidden sm:block text-primary font-bold text-sm">
        Searching anime order by alphabet name A to Z.
      </p>
    </div>

    <AZList />

    <div class="desclaimer mt-5 mb-2 flex flex-col justify-center items-center">
      <p class="text-sm text-center text-gray-500">
        Watanuki does not store any files on our server, <br>
        we only link to media that is hosted on 3rd party services.
      </p>
      <p class="mt-4 text-gray-500">
        © watanuki All rights reserved.
      </p>

      <div class="btns flex justify-center my-2 items-center gap-2">
        <NuxtLink
          to="https://github.com/yahyaMomin"
          target="_blank"
          class="text-gray-500 hover:text-white text-2xl"
        />

        <!-- Example of another button if needed -->
        <!--
        <NuxtLink
          to="https://t.me/Mst83din"
          target="_blank"
          class="text-gray-500 hover:text-blue-300 text-2xl"
        >
          <FaTelegram />
        </NuxtLink>
        -->
      </div>
    </div>
  </div>
</template>
