<template>
  <section id="home" class="bg-white dark:bg-gray-900">
    <div
      class="flex flex-col-reverse md:grid max-w-7xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl dark:text-white"
          data-i18n-html="hero_title"
        >
          Modern Apps.<br />Powerful SaaS.<br />Built for Success.
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          data-i18n="hero_desc"
        >
          We specialize in crafting mobile and web applications tailored for modern startups. We
          help you build, launch, and scale your digital products with robust code and intuitive
          UI/UX.
        </p>
        <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            data-track="hero_get_started"
            class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-blue-600 border border-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span data-i18n="hero_get_started">Get Started</span>
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#portfolio"
            data-track="hero_view_work"
            class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 md:mb-0 md:ml-2 text-sm font-medium text-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <span data-i18n="hero_view_work">View Our Work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              class="w-5 h-5 ml-2 -mr-1"
            >
              <path
                fill="currentColor"
                d="M20 6c.58 0 1.05.2 1.42.59c.38.41.58.86.58 1.41v11c0 .55-.2 1-.58 1.41c-.37.39-.84.59-1.42.59H4c-.58 0-1.05-.2-1.42-.59C2.2 20 2 19.55 2 19V8c0-.55.2-1 .58-1.41C2.95 6.2 3.42 6 4 6h4V4c0-.58.2-1.05.58-1.42C8.95 2.2 9.42 2 10 2h4c.58 0 1.05.2 1.42.58c.38.37.58.84.58 1.42v2zM4 8v11h16V8zm10-2V4h-4v2z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="lg:mt-0 lg:col-span-5 w-full flex justify-center mb-8 md:mb-0">
        <img
          src="/images/hero.png"
          alt="hero image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          class="w-full h-auto object-contain object-center"
        />
      </div>
    </div>
  </section>
</template>
