<template>
    <div class="container" style="max-width:600px">
        <h2 class="text-tercen mt-5">ToDo App</h2>
        <div class="d-flex mt-5">
            <input type="text" v-model="task" placeholder="Enter Task" class="w-100 form-control">


        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Task</th>
                    <th scope="col" style="width:120px">Status</th>
                    <th scope="col" class="text-center">Edit</th>
                    <th scope="col" class="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <td><span :class="{ 'line-through': task.status === 'finished'}">
                        {{ task.name }}
                        </span>
                    </td>
                    <td>
                        <span
                            class="pointer select"
                            @click="changeStatus(index)"
                            :class="{
                                'text-danger': task.status==='to-do',
                                'text-success': task.status==='to-do',
                                'text-warning': task.status==='to-do'
                            }"
                        >
                     
                        </span>
                    </td>
                    <td>
                        <div @click="editTask(index)">
                            <span class="fa fa-pen pointer" style="cursor:pointer"></span>
                        </div>
                    </td>
                    <td>
                        <div @click="deleteTask(index)">
                            <span class="fa fa-trash" style="cursor:pointer"></span>
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
                    name: "c,hjhjkhjkg",
                    status: "finished",

                },
            ],
        };

    },
    methods:{
        capitalizeFirstChart(str){
            return str.chartAt(0).toUppercase()+str.slice(1);

        },
        changeStatus(index){
            let newIndex=this.statuses.indexOf(this.task[index].status)
            if(++newIndex>2) newIndex=0;
            this.tasks[index].status=this.statuses[newIndex];
        }
    }
}
</script>
<style scoped></style>