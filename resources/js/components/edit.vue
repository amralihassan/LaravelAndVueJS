<template>
    <div>
        <alert-success :form="form">Updated Succeessfully!</alert-success>
       <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" v-model="form.title" class="form-control" name="title"  placeholder="Enter title">
                <has-error :form="form" field="title"></has-error>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Post</label>
                <textarea v-model="form.body" class="form-control" name="body" cols="30" rows="5"></textarea>
                <has-error :form="form" field="body"></has-error>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
</template>
<script>
export default {
    name: "edit",
    data(){
        return {
            form : new Form({
                title : '',
                body : ''
            }),
            id : 0
        }
    },
    methods:{
        onSubmit(){
            this.form.put('/api/post/' + this.id);
        },
        loadPost(){
            axios.get('/api/post/' + this.id).then((res) => {
                this.form.fill(res.data.data)
            })
        }
    },
    created(){
        this.id = this.$route.params.id;
        this.loadPost();
    }

};
</script>
