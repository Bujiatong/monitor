<template>
  <div class="map-content">
    <div id="map"></div>
  </div>
</template>
<script>
import { Scene } from '@antv/l7';
import { CountryLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';
import { ProvinceData, colors } from './data'

export default {
  data() {
    return {};
  },
  mounted() {
    const scene = new Scene({
  id: 'map',
  map: new Mapbox({
    center: [ 116.2825, 39.9 ],
    pitch: 0,
    style: 'blank',
    zoom: 3,
    minZoom: 0,
    maxZoom: 10
  })
});

    scene.on('loaded', () => {
  new CountryLayer(scene, {
    data: ProvinceData,
    joinBy: [ 'NAME_CHN', 'name' ],
    depth: 1,
    provinceStroke: '#3D76DD',
    cityStroke: '#EBCCB4',
    cityStrokeWidth: 0.5,
    fill: {
      color: {
        field: 'num',
        values: colors
      },
      activeColor: '#2196F3'
    },
    popup: {
      enable: true,
      Html: props => {
        return `<span>${props.name}： ${props.num}</span>`;
      }
    }
  });
});

  }
};
</script>
<style lang="scss">
.map-content {
  width: 48%;
  height: 400px;
  // border: 1px solid #000;
  position: relative;
  #map {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>