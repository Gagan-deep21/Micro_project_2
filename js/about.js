const app = Vue.createApp({
    data() {
        return {
            heading_2: "About Nike",
            paragraph_1: "Nike, Inc. is a world leader in athletic footwear, apparel, and equipment. Our mission is to bring inspiration and innovation to every athlete* in the world. (*If you have a body, you are an athlete.)",
            paragraph_2: "Founded in 1964, Nike has grown to become one of the most recognized and trusted brands globally. Our commitment to quality, innovation, and performance has driven us to continuously evolve and set new standards in the industry.",
            gallery_images: [
                { src: "../images/image4.png", alt: "Nike Shoes" },
                { src: "../images/image5.png", alt: "Nike Innovation" },
                { src: "../images/image6.png", alt: "Nike Comfort" },
                { src: "../images/image7.png", alt: "Nike Shoes" },
                { src: "../images/image8.png", alt: "Nike Innovation" },
                { src: "images/image9.png", alt: "Nike Comfort" }
            ]
        };
    }
});
app.mount('#about_main');
