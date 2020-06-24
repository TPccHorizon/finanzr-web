<template>
    <v-app>
        <v-navigation-drawer
                color="secondary"
                v-model="primaryDrawer.model"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :permanent="primaryDrawer.type === 'permanent'"
                app
        >
            <v-list dense>

                <v-list-item link v-for="item in menuItems" :key="item.title">
                    <v-list-item-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="menu-text">
                            <router-link :to="item.link" class="menu-item">
                                <span class="text-large">{{ $t(item.title)}}</span>
                            </router-link>
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="primary"
                :clipped-left="primaryDrawer.clipped"
                dark
        >
            <v-toolbar-title>FINEnance</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container
                    class="fill-height background"
                    fluid
            >
                <v-row>
                    <v-col cols="12">
                        <v-row
                                :align="'start'"
                                :justify="'start'"
                                style="height: 500px;"
                        >
                            <router-view />
                        </v-row>
                    </v-col>
                </v-row>



            </v-container>
        </v-main>
        <v-footer
                color="primary"
                :inset="footer.inset"
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
            primaryDrawer: {
                model: 'Permanent',
                type: 'default (no property)',
                clipped: false,
                floating: false,
                mini: false
            },
            footer: {
                inset: true,
            },
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

    .menu-item {
        text-decoration: none;
    }
    .is-active {
        text-shadow: 2px 2px 5px #F3EADA;
        color: #F3EADA;
    }
</style>
