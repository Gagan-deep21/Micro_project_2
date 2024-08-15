const app = Vue.createApp({
    data() {
        return {
            heading_2: "Contact Us",
            contact_paragraph: "If you have any questions, feedback, or inquiries, feel free to reach out to us using the form below. We’d love to hear from you!",
            form_action: "#",
            form_method: "post",
            form_labels: {
                name: "Name:",
                email: "Email:",
                message: "Message:"
            },
            submit_button_text: "Send Message"
        };
    },
    methods:{
        on_btn_click(){
            alert("FORM SUBMITTED!");
        }
    }
});
app.mount('#contact_main');
