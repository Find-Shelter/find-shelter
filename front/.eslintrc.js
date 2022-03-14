module.exports = {
    env: {
        node: true,
    },
    extends: [
        // add more generic rulesets here, such as:
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/essential",
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        "vue/multi-word-component-names": "off",
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    },
};
