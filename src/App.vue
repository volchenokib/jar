<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
        <v-list>
            <v-list-tile v-for="item in menuItems" v-bind:key="item.title" v-bind:to="item.link">
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{item.title}}</v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-toolbar app class="accent" dark>
      <v-toolbar-side-icon class ="hidden-sm-and-up" v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">Jar</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class ="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" v-bind:key="item.title" v-bind:to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content app>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: null,
      menuItems: [
        {icon:'supervisor_account', title: 'Agencies', link:'/agencies'},
        {icon:'room', title: 'In-House', link:'in-house'},
        {icon:'person', title: 'Features', link:'/features'},
        {icon:'person', title: 'Join', link:'/join'},
        {icon:'person', title: 'Blog', link:'/blog'},
        {icon:'person', title: 'More', link:'/more'},
        {icon:'lock_open', title: 'Log in', link:'/login'},
      ]
    }
  }
}
</script>
