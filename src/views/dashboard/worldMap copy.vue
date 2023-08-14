<template>
  <div class="worldmap-content">
    <div id="world-map"></div>
  </div>
</template>
<script>
import { Scene } from '@antv/l7';
import { WorldLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { colors, WorldData } from './data'

export default {
  data() {
    return {};
  },
  mounted() {
    const scene = new Scene({
      id: 'world-map',
      map: new Mapbox({
        center: [ 116.2825, 39.9 ],
        pitch: 0,
        style: 'blank',
        zoom: 0,
        minZoom: 0,
        maxZoom: 5
      })
    });
    scene.on('loaded', () => {
      new WorldLayer(scene, {
        data: WorldData,
        joinBy: [ 'NAME_CHN', 'name' ],
        fill: {
          color: {
            field: 'num',
            values: colors
          }
        },
        stroke: '#ccc',
        label: {
          enable: true,
          textAllowOverlap: false,
          field: 'NAME_CHN'
        },
        popup: {
          enable: true,
          Html: props => {
            return `<span>${props.num}</span>`;
          }
        }
      });
    });


  }
};
</script>
<style lang="scss">
.worldmap-content {
  width: 48%;
  height: 400px;
  // border: 1px solid red;
  position: relative;
  #world-map {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    color: rgb(142, 165, 240);
  }
}
</style>