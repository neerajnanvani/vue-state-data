<template>
    <div class="my-10 mb-20 flex flex-col space-y-30">
        <input 
            class="mt-10 mb-20 border-gray-500 border rounded-lg mx-auto px-5 py-3 w-1/2 bg-gray-800 text-gray-200" 
            placeholder="Search the User" 
            v-model="searchText"
        />
        <SingleUser v-for="(user, index) in filteredUsers" :key="index" :user="user" />
    </div>
</template>
<script>
import SingleUser from '@/components/User/singleUser.vue';

export default{
    components: { SingleUser },
    data() {
        return {
            allUsers : [],
            searchText: "",
        }
    },
    /**
     * Fetch the users from the API
     */
    async created() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            this.allUsers = data;
            
        } catch(e) {
            alert(e);
        }
    },
    computed: {
        /**
         * Computed property to get users filtered by search text field
         */
        filteredUsers() {
            return this.allUsers.filter((user) => Object.values(user).join(" ").toLowerCase().includes(this.searchText.toLowerCase()));
        }
    }
}
</script>