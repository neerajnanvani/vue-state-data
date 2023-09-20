<template>
    <div class="flex flex-col justify-between mx-auto text-center mt-10 py-4 border-t-2 border-b-2 h-48 border-zinc-400">
        <div>

            <p>
                This is child component check data passing via inputting something in parent input field
            </p>
            
            <h3 class="font-semibold text-blue-300">
                Parent Input Value => 
                <span class="text-blue-700 font-bold">
                    {{modelValue}}
                </span> 
            </h3>
        </div>
       <div class="">
        <p class="mb-4">
            Click this button to check emit event in parent component
        </p>
           <button
                class="bg-green-400 border border-blue-600 px-3 py-1 rounded-md mx-2 text-black"
                @click="$emit('btnClicked', 'One')"
            > 
                One 
            </button>
            <button
                class="bg-green-400 border border-blue-600 px-3 py-1 rounded-md mx-2 text-black"
                @click="$emit('btnClicked', 'Two')"
            > 
                Two 
            </button>
            
        </div>
    </div>
</template>
<script>
export default{
    props: {
        modelValue: {
            type: String,
            default: "",
        }
    },
    emits: [
        'btnClicked'
    ]
}
</script>