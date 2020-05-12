<template>
    <div>
        <div class="card">
            <div class="card-header">
                posts
            </div>
            <div class="card-body p-0">
                <table v-if="posts.length > 0" class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="post in posts" :key="post.id">
                            <td>{{ post.id }}</td>
                            <td>{{ post.title }}</td>
                            <td>{{ post.body }}</td>
                            <td>
                                <router-link class="text-primary"  :to="'/post/edit/' + post.id"> Edit </router-link>
                                <a href="#" @click="onDelete(post.id, post.title)" class="text-danger"> Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p v-else class="text-center"> No posts</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            posts: {}
        };
    },
    methods: {
        loadPosts() {
            axios.get("/api/post").then((res) => {
                this.posts = res.data.data;
            });
        },
        onDelete(id, title) {
             if (confirm('Do you want to delete this post' + title)) {
                  axios.delete('api/post/'+id).then((res) => {
                  this.loadPosts();
              })
             }
        }
    },
    created() {
        this.loadPosts();
    }
};
</script>
