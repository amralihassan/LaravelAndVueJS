<template>
    <div>
        <alert-success :form="form">Created Succeessfully!</alert-success>
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
    name: "create",
    data(){
        return {
            form : new Form({
                title : '',
                body : ''
            })
        }
    },
    methods:{
        onSubmit(){
            this.form.post('/api/post').then((response) => {

            }).catch((err) => {

            })
        }
    }

};
</script>
