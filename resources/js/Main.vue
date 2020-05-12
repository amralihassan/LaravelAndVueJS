<template>
    <div>
        <navbar />
        <div class="container">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
import navbar from "./components/navbar";
import index from "./components/index";
export default {
    name: "Main",
    components: {
        navbar,
        index
    }
};
</script>
