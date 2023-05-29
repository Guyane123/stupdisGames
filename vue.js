const vm = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!",
        };
    },
});
vm.component("game", {
    props: ["name", "link", "description"],
    template: `
        <a href="" target='_blank'><div class='game'>
            <h2>{{ name }}</h2>
           <h4 class='description'>{{description}}</h4>
        </div></a>
    `,
});

vm.mount("#app");
