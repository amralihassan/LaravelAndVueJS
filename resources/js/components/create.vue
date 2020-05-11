<template>
    <div class="container">
       <form @submit.prevent="">
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" name="title"  placeholder="Enter title">
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Post</label>
                <textarea class="form-control" name="body" cols="30" rows="10"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
</template>
<script>
export default {
    name: "create"
};
</script>
