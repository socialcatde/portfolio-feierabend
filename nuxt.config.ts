// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({

   modules: ['@nuxtjs/prismic'],
   prismic: { 
      endpoint: 'portolio-feierabend',
       clientConfig: {
         routes: [
             {
                 type: 'werk',
                 path: '/:uid'
             }
         ]
     }


},
   css: ["~/assets/css/styles.css"]

})
