<template>
  <div class="about-me">
    <div class="about-me-header">
      <h1>Good {{ timeOfDay }}!</h1>
      <p>My name is Jj</p>
    </div>
    <div class="about-me-content">
      <div class="about-me-image">
        <img
          src="../../../../../assets/images/personal/FacebookImageFamily.jpg"
          alt="Jj"
        />
      </div>
      <div class="about-me-text">
        <p>
          I’m a father, a husband, and a dreamer. Life is a delightful blend of
          these roles, and I embrace each one with open arms. My journey into
          the world of development began with a simple wish: to create something
          that would bring joy to others, just like the video games that lit up
          my childhood.
        </p>

        <p>
          Back in 2015, I held my two-year-old daughter, the woman who would
          later become my wife, and set out to learn the art of coding. Unity
          and C# became my companions, and I dreamed of building the next
          “Crossy Road.” But life, as it often does, led me down unexpected
          paths. Around 2019, I found myself drawn to web development. The
          allure of creating digital spaces where ideas could flourish captured
          my imagination.
        </p>

        <p>
          Fast forward to 2022—I landed my first job as a full-stack web
          developer. The learning curve was steep, but I reveled in it. The
          company had a diverse clientele, and every project taught me something
          new. I soaked up knowledge like a sponge, fueled by curiosity and a
          desire to craft elegant solutions.
        </p>
        <p>
          Today, my passion for coding burns brighter than ever. Whether it’s a
          sleek web app or a quirky game, I dive in with enthusiasm. If you ask
          my wife, daughter, and now {{ ericsAge }}-year-old son, probably a
          little too much enthusiasm, and guess what? I’m still dreaming. Not
          just for myself, but for others too. Somewhere out there, someone
          might be where I once stood—yearning to break into this fascinating
          world of bits and bytes. If I can guide them, inspire them, or simply
          share a laugh over a coding challenge, I consider it a win.
        </p>

        <p>
          As Morpheus wisely said, “You take the blue pill—the story ends. You
          wake up in your bed and believe whatever you want. You take the red
          pill—you stay in Wonderland, and I show you how deep the rabbit hole
          goes.” So, here’s to the red pill—the one that keeps us in Wonderland.
          Let’s explore the rabbit hole together, uncovering hidden gems and
          creating magic along the way. And remember, the truth lies not just in
          the destination but in the journey itself.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  computed: {
    timeOfDay() {
      const date = new Date();
      const hours = date.getHours();
      if (hours < 12) {
        return "Morning";
      } else if (hours < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    },
    ericsAge() {
      const date = new Date();
      const ericsBirthday = new Date(2018, 12, 31);
      return date.getFullYear() - ericsBirthday.getFullYear();
    },
  },
};
</script>
