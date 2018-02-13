<template>
    <section class="section">
        <div class="container">

            <div class="columns is-multiline">
                <animal v-for="animal in animals" :key="animal.id" />
            </div>

        </div>
    </section>
</template>

<script>
    import Animal from './Animal'

    export default {
        components: {
            Animal
        },

        data () {
            return {
                animals: [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 },
                    { id: 5 },
                ]
            }
        }
    }
</script>