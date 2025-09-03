/**  
 * Layui ES Module 统一入口  
 */  
  
// 导入核心  
import layui from './core.js';  
  
// 导入所有模块  
import lay from './modules/lay.js';  
import layer from './modules/layer.js';  
import laydate from './modules/laydate.js';  
import laypage from './modules/laypage.js';  
import laytpl from './modules/laytpl.js';  
import form from './modules/form.js';  
import upload from './modules/upload.js';  
import dropdown from './modules/dropdown.js';  
import transfer from './modules/transfer.js';  
import tree from './modules/tree.js';  
import table from './modules/table.js';  
import treeTable from './modules/treeTable.js';  
import tabs from './modules/tabs.js';  
import element from './modules/element.js';  
import rate from './modules/rate.js';  
import colorpicker from './modules/colorpicker.js';  
import slider from './modules/slider.js';  
import carousel from './modules/carousel.js';  
import flow from './modules/flow.js';  
import util from './modules/util.js';  
import code from './modules/code.js';  
import {default as jquery, default as $} from 'jquery';  
import component from './modules/component.js';  
import './css/layui.css';
import './css/modules/code.css'
import './css/modules/laydate.css'
import './css/modules/layer.css'

const modules = {
  lay,  
  layer,  
  laydate,  
  laypage,  
  laytpl,  
  form,  
  upload,  
  dropdown,  
  transfer,  
  tree,  
  table,  
  treeTable,
  tabs,
  element,
  rate,
  colorpicker,
  slider,
  carousel,
  flow,
  util,
  code,
  jquery,
  component,
}

// 兼容性处理
// esm 版会导致 tree shake 失效，所以只用于 global 版
for (const key in modules) {
  layui.define(function(exports){
    exports(key, modules[key]);
  })
}
layui['layui.all'] = 'layui.all';
window.lay = lay;
window.layer = layer;
layui.$ = jquery; 

export default layui;  