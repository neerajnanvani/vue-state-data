<template>
    <div v-if="user" 
        class="flex flex-row border-b border-gray-300 w-full px-2 py-3 text-gray-100">
        <p class="w-48">{{user.name}}</p>
        <p class="grow">{{user.email}}</p>
        <p class="grow">{{`${user.address.street}, ${user.address.city}`}}</p>
        <p class="w-30">{{user.company.name}}</p>
    </div>
</template>
<script>
export default{
    props: {
        user: {
            type: Object,
            default: null,
        }
    }
}
</script>