/**  
 * Layui ES Module 统一入口  
 */  
  
// 导入核心  
import layui from './layui.js';  
  
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
import jquery from 'jquery';  
import component from './modules/component.js';  
import './css/layui.css';
import './css/modules/code.css'
import './css/modules/laydate.css'
import './css/modules/layer.css'
  
// 集成所有模块到 layui 对象  
// layui.lay = lay;  
// layui.layer = layer;  
// layui.laydate = laydate;  
// layui.laypage = laypage;  
// layui.laytpl = laytpl;  
// layui.form = form;  
// layui.upload = upload;  
// layui.dropdown = dropdown;  
// layui.transfer = transfer;  
// layui.tree = tree;  
// layui.table = table;  
// layui.treeTable = treeTable;  
// layui.tabs = tabs;  
// layui.element = element;  
// layui.rate = rate;  
// layui.colorpicker = colorpicker;  
// layui.slider = slider;  
// layui.carousel = carousel;  
// layui.flow = flow;  
// layui.util = util;  
// layui.code = code;  
// layui.jquery = jquery;  
// layui.$ = jquery;  
// layui.component = component;  

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

// 兼容性处理，和 iife 版保持行为一致
// 注册内置模块
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

export { 
  layui,
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
  jquery as $,
  component  
};