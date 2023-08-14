<template>
  <div class="dashboard-container">
    <!--   健康状态区域    -->
    <div class="dashboard-text"  style="margin-bottom: 40px">健康状态</div>
    <el-dropdown >
      <div class="urgency drop-down ">
        <div class="left" >
        <i class="el-icon-circle-close"></i>
        <span>紧急问题</span>
        </div>
        <div class="right" >
          <span>2</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in options1"
          :key="item.value"
        ><i class="el-icon-error"></i>{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown >
      <div class="important drop-down ">
        <div class="left" >
          <i class="el-icon-warning"></i>
          <span>重要问题</span>
        </div>
        <div class="right" >
          <span>3</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in options2"
          :key="item.value"
        ><i class="el-icon-error"></i>{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown >
      <div class="tip drop-down ">
        <div class="left" >
          <i class="el-icon-info"></i>
          <span>提示</span>
        </div>
        <div class="right" >
          <span>2</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in options3"
          :key="item.value"
        ><i class="el-icon-error"></i>{{ item.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-divider></el-divider>


    <!--   Apdex(应用性能指数T=4/0.5/0.2)区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">Apdex(应用性能指数T=4/0.5/0.2)</div>
    <el-tag type="primary" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
     <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">页面</div>
     <span><i class="el-icon-s-ticket" style="float: right;font-size: 40px"></i></span>
     <div style="font-size: 16px;margin-left: 15px;font-weight: bold">0.95</div>
    </el-tag>
    <el-tag type="primary" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
     <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">网络请求</div>
     <span><i class="el-icon-s-management" style="float: right;font-size: 40px"></i></span>
     <div style="font-size: 16px;margin-left: 15px;font-weight: bold">0.96</div>
    </el-tag>
    <el-tag type="primary" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
      <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">资源</div>
      <span><i class="el-icon-picture" style="float: right;font-size: 40px"></i></span>
      <div style="font-size: 16px;margin-left: 15px;font-weight: bold">0.97</div>
    </el-tag>
    <el-divider></el-divider>


    <!--  异常事件数量区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">异常事件数量</div>
    <div style="float: left">
      <div style="margin-top: 25px">
        <el-tag type="primary" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">异常</div>
          <span><i class="el-icon-warning" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1</div>
        </el-tag>
       </div>
       <div style="margin-top: 25px">
        <el-tag type="danger" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">资源</div>
          <span><i class="el-icon-picture" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1.5k</div>
        </el-tag>
       </div>
       <div style="margin-top: 25px">
        <el-tag type="warning" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">网络请求</div>
          <span><i class="el-icon-s-management" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">91</div>
        </el-tag>
       </div>
    </div>
    <div style="margin-left: 300px">
      <div class="dashboard-text">异常事件数量(包含PV)</div>
      <div id="container" style="height: 350px;width: 900px"></div>
    </div>
    <el-divider></el-divider>


    <!--   访客和地区区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">访客和地区</div>
    <div style="float: left">
      <div style="margin-top: 25px">
        <el-tag type="info" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">PV</div>
          <span><i class="el-icon-s-promotion" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1</div>
        </el-tag>
      </div>
      <div style="margin-top: 25px">
        <el-tag type="primary" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">UV</div>
          <span><i class="el-icon-s-custom" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1.5k</div>
        </el-tag>
      </div>
      <div style="margin-top: 25px">
        <el-tag type="success" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">国家和地区</div>
          <span><i class="el-icon-location" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">91</div>
        </el-tag>
      </div>
    </div>
    <div style="margin-left: 300px; position: relative">
      <div class="dashboard-text">访客分布</div>
      <Map></Map>
      <WorldMap style="position: absolute; right: 60px; bottom: 0"></WorldMap>
    </div>
    <el-divider></el-divider>


    <!--   网络请求区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">网络请求</div>
    <div style="float: left">
      <div style="margin-left: 20px;float: left">
        <div class="dashboard-text" >成功率</div>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
      </div>
      <div style="margin-left: 320px">
        <div class="dashboard-text">信任域比例</div>
        <el-progress type="circle" :percentage="77.03"></el-progress>
      </div>
      <div style="margin-top: 100px">
        <el-tag type="warning" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">请求（ms）</div>
          <span><i class="el-icon-upload" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">394.93ms</div>
        </el-tag>
        <el-tag type="warning" style="margin-right: 25px;height: 100px;width: 250px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">响应（ms）</div>
          <span><i class="el-icon-upload" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1.3ms</div>
        </el-tag>
      </div>
    </div>
    <div style="margin-left: 550px">
      <div class="dashboard-text">性能 (ms)</div>
      <div id="container2" style="height: 350px;width: 650px"></div>
    </div>
    <el-divider></el-divider>


    <!--   资源区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">资源</div>
    <div style="float: left">
      <div style="margin-left: 20px;float: left">
        <div class="dashboard-text" >成功率</div>
        <el-progress type="circle" :percentage="98.38"></el-progress>
      </div>
      <div style="margin-left: 320px">
        <div class="dashboard-text">信任域比例</div>
        <el-progress type="circle" :percentage="90.66"></el-progress>
      </div>
      <div style="margin-top: 100px">
        <el-tag type="danger" style="margin-right: 25px;height: 100px;width: 160px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">DNS</div>
          <span><i class="el-icon-picture" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">0ms</div>
        </el-tag>
        <el-tag type="danger" style="margin-right: 25px;height: 100px;width: 160px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">连接</div>
          <span><i class="el-icon-picture" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">1.84ms</div>
        </el-tag>
        <el-tag type="danger" style="margin-right: 25px;height: 100px;width: 160px" effect="dark">
          <div style="font-size: 16px;margin-top: 15px;margin-left: 15px;font-weight: bold">请求</div>
          <span><i class="el-icon-picture" style="float: right;font-size: 40px"></i></span>
          <div style="font-size: 16px;margin-left: 15px;font-weight: bold">50.66ms</div>
        </el-tag>
      </div>
    </div>
    <div style="margin-left: 560px">
      <div class="dashboard-text">性能 (ms)</div>
      <div id="container3" style="height: 350px;width: 650px"></div>
    </div>
    <el-divider></el-divider>


    <!--   异常类型和设备区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">异常类型和设备</div>
    <div style="margin-left: 20px;float: left">
      <!--  饼状图  -->
      <div class="dashboard-text">操作系统 (Top10)</div>
      <div id="container4" style="height: 350px;width: 550px"></div>
    </div>
    <div style="margin-left: 600px">
      <!--  饼状图  -->
      <div class="dashboard-text">浏览器 (Top10)</div>
      <div id="container5" style="height: 350px;width: 550px"></div>
    </div>
    <el-divider></el-divider>


    <!--  PV和DAU区域    -->
    <div class="dashboard-text" style="margin-bottom: 40px">PV和DAU</div>
    <div style="margin-left: 20px;float: left;margin-bottom: 100px">
      <!--  柱状图  -->
      <div class="dashboard-text">PV和DAU</div>
      <div id="container6" style="height: 350px;width: 550px"></div>
    </div>
    <div style="margin-left: 600px;margin-bottom: 100px">
      <!--  热力图  -->
      <div class="dashboard-text">PV</div>
      <div id="container7" style="height: 350px;width: 500px"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Line, Bar, Column , Area , Pie , Heatmap, G2} from '@antv/g2plot'
  import { uniq, findIndex } from '@antv/util';

  import Map from './map'
  import WorldMap from './worldMap'

  export default {
    name: 'Dashboard',
    components: {
      Map,
      WorldMap
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    },
    data() {
      return {
        options1: [{
          value: 'Beijing',
          label: '页面脚本有异常输出或错误'
        }, {
          value: 'Shanghai',
          label: '存在信任域外的数据请求'
        }],
        options2: [{
          value: 'Beijing',
          label: '存在信任域外的资源请求'
        }, {
          value: 'Shanghai',
          label: '网络请求-响应平均时间在今天上午9：45时异常增加（a=0.05）'
        }, {
          value: 'Shanghai',
          label: '资源请求平均时间在今天下午12.30时异常增加（a=0.05）'
        }],
        options3: [{
          value: 'Beijing',
          label: '近两周内PV在2021-01-28时异常增加（a=0.05）'
        }, {
          value: 'Shanghai',
          label: '近两周内DAU在2021-01-28时异常增加（a=0.05）'
        }],
        value: ''
      }
    },
    mounted() {

      //异常事件数量区域图
      fetch('../json/1.json')
        .then((res) => res.json())
        .then((data) => {
          const COLOR_PLATE_10 = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3',
          ];

          const container = document.getElementById('container');

          const line = new Line(container, {
            data,
            xField: 'time',
            yField: 'value',
            seriesField: 'category',
            smooth: true,
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
              },
            },
            color: COLOR_PLATE_10,
            point: {
              shape: ({ category }) => {
                return category === 'Gas fuel' ? 'square' : 'circle';
              },
              style: ({ year }) => {
                return {
                  r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
                };
              },
            },
          });
          line.render();
        });


      //访客和地区区域图
      fetch('../json/1.json')
        .then((res) => res.json())
        .then((data) => {
          const COLOR_PLATE_10 = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3',
          ];

          const container = document.getElementById('container1');

          const line = new Line(container, {
            data,
            xField: 'time',
            yField: 'value',
            seriesField: 'category',
            smooth: true,
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
              },
            },
            color: COLOR_PLATE_10,
            point: {
              shape: ({ category }) => {
                return category === 'Gas fuel' ? 'square' : 'circle';
              },
              style: ({ year }) => {
                return {
                  r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
                };
              },
            },
          });
          line.render();
        });


      //网络请求区域图
      fetch('../json/2.json')
        .then((res) => res.json())
        .then((data) => {
          const COLOR_PLATE_10 = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3',
          ];

          const container = document.getElementById('container2');

          const line = new Line(container, {
            data,
            xField: 'time',
            yField: 'value',
            seriesField: 'category',
            smooth: true,
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
              },
            },
            color: COLOR_PLATE_10,
            point: {
              shape: ({ category }) => {
                return category === 'Gas fuel' ? 'square' : 'circle';
              },
              style: ({ year }) => {
                return {
                  r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
                };
              },
            },
          });
          line.render();
        });


      //资源区域图
      fetch('../json/3.json')
        .then((res) => res.json())
        .then((data) => {
          const COLOR_PLATE_10 = [
            '#5B8FF9',
            '#5AD8A6',
            '#5D7092',
            '#F6BD16',
            '#E8684A',
            '#6DC8EC',
            '#9270CA',
            '#FF9D4D',
            '#269A99',
            '#FF99C3',
          ];

          const container = document.getElementById('container3');

          const line = new Line(container, {
            data,
            xField: 'time',
            yField: 'value',
            seriesField: 'category',
            smooth: true,
            yAxis: {
              label: {
                // 数值格式化为千分位
                formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
              },
            },
            color: COLOR_PLATE_10,
            point: {
              shape: ({ category }) => {
                return category === 'Gas fuel' ? 'square' : 'circle';
              },
              style: ({ year }) => {
                return {
                  r: Number(year) % 4 ? 0 : 3, // 4 个数据示一个点标记
                };
              },
            },
          });
          line.render();
        });


      //异常类型和设备区域饼状图1
      const OSData = [
        { type: 'Windows', value: 3 },
        { type: 'ios', value: 3 },
        { type: 'Android', value: 1 },
        { type: 'OS X', value: 1 }
      ];
      const piePlot = new Pie('container4', {
        appendPadding: 10,
        data: OSData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
      });
      piePlot.render();


      //异常类型和设备区域饼状图2
      const browserData = [
        { type: 'Baiduspider', value: 26 },
        { type: 'Chrome', value: 5 },
        { type: 'Safari', value: 2 },
        { type: 'WeChat', value: 1 },
      ];
      const piePlot1 = new Pie('container5', {
        appendPadding: 10,
        data: browserData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
      });
      piePlot1.render();


      //PV和DAU区域饼状图
      const columnData = [
        {
          name: 'PV',
          日期: '01-18',
          数值: 141,
        },
        {
          name: 'PV',
          日期: '01-20',
          数值: 154,
        },
        {
          name: 'PV',
          日期: '01-22',
          数值: 156,
        },
        {
          name: 'PV',
          日期: '01-24',
          数值: 162,
        },
        {
          name: 'PV',
          日期: '01-26',
          数值: 181,
        },
        {
          name: 'PV',
          日期:'01-28',
          数值: 250,
        },
        {
          name: 'PV',
          日期: '01-30',
          数值: 300,
        },
        {
          name: 'DAU',
          日期: '01-18',
          数值: 130,
        },
        {
          name: 'DAU',
          日期: '01-20',
          数值: 124,
        },
        {
          name: 'DAU',
          日期: '01-22',
          数值: 134,
        },
        {
          name: 'DAU',
          日期: '01-24',
          数值: 152,
        },
        {
          name: 'DAU',
          日期: '01-26',
          数值: 230,
        },
        {
          name: 'DAU',
          日期: '01-28',
          数值: 240,
        },
        {
          name: 'DAU',
          日期: '01-30',
          数值: 285,
        }
      ];
      const stackedColumnPlot = new Column('container6', {
        data: columnData,
        isGroup: true,
        xField: '日期',
        yField: '数值',
        seriesField: 'name',
        /** 设置颜色 */
        //color: ['#1ca9e6', '#f88c24'],
        /** 设置间距 */
        // marginRatio: 0.1,
        label: {
          // 可手动配置 label 数据标签位置
          position: 'middle', // 'top', 'middle', 'bottom'
          // 可配置附加的布局方法
          layout: [
            // 柱形图数据标签位置自动调整
            { type: 'interval-adjust-position' },
            // 数据标签防遮挡
            { type: 'interval-hide-overlap' },
            // 数据标签文颜色自动调整
            { type: 'adjust-color' },
          ],
        },
      });
      stackedColumnPlot.render();


      //PV和DAU区域热力图
      fetch('../json/4.json')
    .then((res) => res.json())
        .then((data) => {
          const heatmapPlot = new Heatmap(document.getElementById('container7'), {
            autoFit: false,
            data,
            xField: 'Month of Year',
            yField: 'District',
            colorField: 'PV',
            color: ['red', 'blue', 'yelow', 'darkred', 'lightblue'],
            meta: {
              'Month of Year': {
                type: 'cat',
              },
            },
          });
          heatmapPlot.render();
        });

    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      margin-bottom: 15px;
      font-size: 14px;
      font-weight: bold;
      line-height: 10px;
    }
  }
  .el-dropdown{
    margin: 0 12px;
    width: 240px;
    height: 40px;
    .drop-down{
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      padding: 8px 12px;
      transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        i{
          margin-right: 5px;
        }
      }
      .right{
        i{
          margin-left: 5px;
        }
      }
    }
    .urgency{
      border:1px solid rgb(233, 30, 99);
      color: rgb(233, 30, 99);
    }
    .important{
      border:1px solid rgb(255, 202, 40);
      color: rgb(255, 202, 40);
    }
    .tip{
      border:1px solid rgb(33, 150, 243);
      color: rgb(33, 150, 243);
    }
  }
  ::v-deep {
    .el-input__inner{
      &::placeholder {
        color: dodgerblue;
      }
    }
  }
</style>
