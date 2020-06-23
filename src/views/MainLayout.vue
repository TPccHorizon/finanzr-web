<template>
    <v-app>
        <v-navigation-drawer
                color="secondary"
                v-model="drawer"
                app
        >
            <v-list dense>

                <v-list-item link v-for="item in menuItems" :key="item.title">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="menu-text">
                            <span class="text-large">{{item.title}}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>FINEnance</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container
                    class="fill-height background"
                    fluid
            >
                <h1>TEST</h1>
            </v-container>
        </v-main>
        <v-footer
                color="primary"
                app
        >
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import menuItems from "@/utils/menu-items";
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            menuItems
        }),
    }
</script>

<style scoped lang="scss">
    @import "src/sass/variables.scss";
    .background {
        background-color: #F3EADA;
    }

    .glow-text {
        text-shadow: 2px 2px 5px #00C6BF;
        color: #00C6BF;
    }

    .text-large {
        font-size: large;
    }

    .menu-text {
        color: #F3EADA;
    }

    .menu-text:focus {
        text-shadow: 2px 2px 5px #00C6BF;
        color: #00C6BF;
    }
</style>
