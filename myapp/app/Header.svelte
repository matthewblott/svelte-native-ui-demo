<actionBar title="{title}" >
  {#if isAndroid}
  <navigationButton icon="~/images/menu.png" on:tap="{toggleDrawer}" />
  {:else}
  <actionItem icon="~/images/menu.png" ios.position="left" on:tap="{toggleDrawer}" />
  {/if}
  <slot></slot>
</actionBar>

<script>
  import { toggleDrawer } from './Nav.ts'
  import { isAndroid } from "@nativescript/core"
  export let title = ""
</script>