<template>
    <form @submit.prevent="submitForm">
        <div v-if="allInputFields.length" class="flex flex-col text-gray-200">
            <div v-for="field in allInputFields" :key="field.token" class="my-4 mx-auto">
                <label> {{ field?.props?.title }} </label>
                <input 
                    v-model="modelEveryField[field.token]" 
                    :type="field.type"  
                    :placeholder="field?.props?.placeholder"
                    :class="[errorFields[field.token] ? 'border-red-600' : 'border-gray-700',  'mx-4 border rounded-md px-3 py-1 bg-gray-800 accent-gray-800']" 
                /> 
            </div>

            <button 
                class="border border-zinc-800 bg-zinc-800 w-fit mx-auto px-3 py-1 rounded-md"
            >
                Submit
            </button>
        </div>
    </form>
</template>
<script>
export default{
    data() {
        return {
            modelEveryField: {},
            errorFields: {},
        }
    },
    computed: {
        /**
         * Computed property to get all input fields schma via store
         */
        allInputFields() {
            return this.$store.getters.getFormInputs;
        }
    },
    /**
     * Call Reset model value method to bind values
     */
    created() {
        this.resetModelValues();
    },
    methods: {
        /**
         * Method to reset the vals to normal state
         */
        resetModelValues() {
            this.allInputFields.forEach((input) => {
                // attach v-model bind vals for all inputs
                this.modelEveryField[input.token] = input?.props?.default ?? ""
                this.errorFields[input.token] = false;
            });
        },
        /**
         * Method to handle form values as per requirement
         */
        submitForm() {
            let error = false;
            this.allInputFields.forEach((input)=> {

                // check for errors based on required prop
                let isMandatory = input?.props?.required ?? false;

                if(isMandatory && !this.modelEveryField[input.token]) {
                    error = true;
                    this.errorFields[input.token] = true;
                    alert(`Please fill form ${input.type} field`)
                } else {
                    this.errorFields[input.token] = false;
                }
            })

            // if no error than show a alert and reset fields
            if(!error) {
                alert("ALL data posted. Thanks !");
                this.resetModelValues();
            }
        }
    }
}
</script>