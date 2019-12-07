<template>
    <nav class="navbar justify-content-center p-0">
        <Dropdown v-bind:border="border" v-bind:m_v="'display: none'" />
        <span class="nav-link mr-3 smaller text-uppercase" v-bind:key="item.id" v-for="item in items">
            {{ item.name }}
        </span>
        <SearchBtn />
    </nav>
</template>

<script>
    import Dropdown from "@/components/Dropdown";
    import SearchBtn from "@/components/SearchBtn";

    export default {
        name: "Navbar",
        components: {
          Dropdown,
          SearchBtn
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        name: 'Услуги'
                    },
                    {
                        id: 2,
                        name: 'Реализованные проекты'
                    },
                    {
                        id: 3,
                        name: 'Статьи'
                    },
                    {
                        id: 4,
                        name: 'Клиенты'
                    },
                    {
                        id: 5,
                        name: 'О компании'
                    },
                    {
                        id: 6,
                        name: 'Контакты'
                    }
                ],
                border: 'border-left border-right'
            }
        }
    }
</script>

<style scoped>

</style>