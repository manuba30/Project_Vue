    <template>
    <section class="space-y-6">
        
        <assignmentList :assignments="filteredAssignments.inProgress" title="In progress"></assignmentList>
        <assignmentList :assignments="filteredAssignments.completed" title="completed"></assignmentList>
        
        
    <form @submit.prevent="add">
        <div class="border-border-gray-600 text-black">
            <input v-model="newAssignment" placeholder="New assignment..." class="text-black" />
            <button type="submit" class="bg-white">add</button>
        </div>
    </form>
    </section>
</template>
<script>
import assignmentList from "./assignmentList.vue"

export default {
    components: { 
        assignmentList
    },
    data() {
        return {
            assignments:[
                {name : "finish project", complete : false, id : 1},
                {name : "Read chapter 4", complete : false, id : 2},
                {name : "turn in homework", complete : false, id : 3},
            ],

            newAssignment : ``
        }
    },
    computed : {
        filteredAssignments () {
            return {
                inProgress : this.assignments.filter(assignment => !assignment.complete),
                completed : this.assignments.filter(assignment => assignment.complete)
            };
        }
    },

    methods : { 
        add(){
            this.assignments.push({
                name : this.newAssignment,
                complete : false,
                id : this.assignments.length + 1
            });

            this.assignment = ``;
        }
    }
}
</script>