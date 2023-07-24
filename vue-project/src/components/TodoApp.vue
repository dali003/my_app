<template>
    <div class="container" style="max-width:600px">
        <h2 class="text-center mt-5">ToDo App</h2>
        <div class="d-flex mt-5">
            <input type="text" v-model="task" placeholder="Enter Task" class="w-100 form-control">


        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col" style="width:120px">Status</th>
                    <th scope="col" class="text-center">Edit</th>
                    <th scope="col" class="text-center">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task,index) in tasks" :key="index">
                    <td>{{task.name}}</td>
                    <td>to do </td>
                    <td>
                        <div>
                            <span class="fa fa-pen"></span>
                        </div>
                    </td>
                    <td>
                        <div>
                            <span class="fa fa-trash"></span>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TodoApp',
    props: {
        msg: String,


    },
    data() {
        return {
            task: "",
            editTask: null,
            Status: ["to-do", "in-progress", "finished"],
            tasks: [
                {
                    name: "s",
                    status: "to-do",
                },
                {
                    name: "l",
                    status: "in-progress",

                },
                {
                    name: "c",
                    status: "finished",

                },
            ],
        };

    }
}
</script>
<style scoped></style>