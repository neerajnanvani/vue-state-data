<template class="bg-zinc-900 h-full w-full">
    <Layout>
      <router-view></router-view>
  </Layout>
</template>
<script>
import Layout from '@/components/layout.vue';
export default{
    components: {
        Layout
    },
    data() {
        return  {
            formBindings: [
                {
                    token: "PERSOME_NAME",
                    type: "text",
                    props: {
                        title: "Enter your name",
                        required: true,
                        placeholder: "e.g. John Doe"
                    }
                },
                {
                    token: "IS_PERSOME_MINOR",
                    type: "checkbox",
                    props: {
                        title: "Is the current person minor",
                        default: false,
                        required:true,
                    }
                },
                {
                    token: "PERSOME_DOB",
                    type: "date",
                    props: {
                        title: "Enter your DOB",
                        required: true,
                        placeholder: "e.g. 01/01/2000"
                    }
                },
                
            ]
        }
    },
    created() {
        this.$store.commit('changeFormInputs', this.formBindings);
    }
}
</script>