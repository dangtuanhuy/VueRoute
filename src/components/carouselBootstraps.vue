<template>
  <div>
    <b-container class="bv-example-row">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
        <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/id/1042/1024/480"></b-carousel-slide>
        <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
</style>
