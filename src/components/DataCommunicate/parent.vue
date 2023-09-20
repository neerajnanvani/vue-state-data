<template>
    <div class="flex flex-col items-center my-20 text-gray-100">
        <label>
           Parent component input
        </label>
        <input 
            class="mt-2 border-2 border-zinc-400 rounded-md bg-gray-700" 
            v-model="inputVal" 
        />
        <div class="mt-5">
            <h3 class="font-semibold">
                Child Component Button Cicked => 
                <span class="font-bold text-red-200">
                    {{ childBtn ?? 'null' }}
                </span>
            </h3>
        </div>
        <Child v-model="inputVal" @btnClicked="childBtnClicked" />
    </div>
</template>
<script>
import Child from '@/components/DataCommunicate/child.vue';

export default{
    data() {
        return {
            inputVal: "",
            childBtn: null,
        };
    },
    components: { Child },
    methods: {
        /**
         * Method to change child btn name on child component emit
         * 
         * @param {string} btnName - the name of button from child component
         */
        childBtnClicked(btnName) {
            this.childBtn = btnName;
        }
    }
}
</script>