<template>
    <div>
        <navbar />
        <router-view></router-view>
    </div>
</template>
<script>
import navbar from "./components/navbar";
export default {
    name: "Main",
    components: {
        navbar
    }
};
</script>
