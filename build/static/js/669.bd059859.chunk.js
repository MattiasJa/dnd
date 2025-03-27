/*! For license information please see 669.bd059859.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhack2503=self.webpackChunkhack2503||[]).push([[669],{669:(i,t,s)=>{s.r(t),s.d(t,{FlowLayout:()=>g,flow:()=>a});class e{constructor(i){this._map=new Map,this._roundAverageSize=!1,this.totalSize=0,!0===i?.roundAverageSize&&(this._roundAverageSize=!0)}set(i,t){const s=this._map.get(i)||0;this._map.set(i,t),this.totalSize+=t-s}get averageSize(){if(this._map.size>0){const i=this.totalSize/this._map.size;return this._roundAverageSize?Math.round(i):i}return 0}getSize(i){return this._map.get(i)}clear(){this._map.clear(),this.totalSize=0}}function h(i){return"horizontal"===i?"width":"height"}class r{_getDefaultConfig(){return{direction:"vertical"}}constructor(i,t){this._latestCoords={left:0,top:0},this._direction=null,this._viewportSize={width:0,height:0},this.totalScrollSize={width:0,height:0},this.offsetWithinScroller={left:0,top:0},this._pendingReflow=!1,this._pendingLayoutUpdate=!1,this._pin=null,this._firstVisible=0,this._lastVisible=0,this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._sizeDim="height",this._secondarySizeDim="width",this._positionDim="top",this._secondaryPositionDim="left",this._scrollPosition=0,this._scrollError=0,this._items=[],this._scrollSize=1,this._overhang=1e3,this._hostSink=i,Promise.resolve().then((()=>this.config=t||this._getDefaultConfig()))}set config(i){Object.assign(this,Object.assign({},this._getDefaultConfig(),i))}get config(){return{direction:this.direction}}get items(){return this._items}set items(i){this._setItems(i)}_setItems(i){i!==this._items&&(this._items=i,this._scheduleReflow())}get direction(){return this._direction}set direction(i){(i="horizontal"===i?i:"vertical")!==this._direction&&(this._direction=i,this._sizeDim="horizontal"===i?"width":"height",this._secondarySizeDim="horizontal"===i?"height":"width",this._positionDim="horizontal"===i?"left":"top",this._secondaryPositionDim="horizontal"===i?"top":"left",this._triggerReflow())}get viewportSize(){return this._viewportSize}set viewportSize(i){const{_viewDim1:t,_viewDim2:s}=this;Object.assign(this._viewportSize,i),s!==this._viewDim2?this._scheduleLayoutUpdate():t!==this._viewDim1&&this._checkThresholds()}get viewportScroll(){return this._latestCoords}set viewportScroll(i){Object.assign(this._latestCoords,i);const t=this._scrollPosition;this._scrollPosition=this._latestCoords[this._positionDim];Math.abs(t-this._scrollPosition)>=1&&this._checkThresholds()}reflowIfNeeded(){(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||this._pendingReflow)&&(this._pendingReflow=!1,this._reflow())}set pin(i){this._pin=i,this._triggerReflow()}get pin(){if(null!==this._pin){const{index:i,block:t}=this._pin;return{index:Math.max(0,Math.min(i,this.items.length-1)),block:t}}return null}_clampScrollPosition(i){return Math.max(-this.offsetWithinScroller[this._positionDim],Math.min(i,this.totalScrollSize[h(this.direction)]-this._viewDim1))}unpin(){null!==this._pin&&(this._sendUnpinnedMessage(),this._pin=null)}_updateLayout(){}get _viewDim1(){return this._viewportSize[this._sizeDim]}get _viewDim2(){return this._viewportSize[this._secondarySizeDim]}_scheduleReflow(){this._pendingReflow=!0}_scheduleLayoutUpdate(){this._pendingLayoutUpdate=!0,this._scheduleReflow()}_triggerReflow(){this._scheduleLayoutUpdate(),Promise.resolve().then((()=>this.reflowIfNeeded()))}_reflow(){this._pendingLayoutUpdate&&(this._updateLayout(),this._pendingLayoutUpdate=!1),this._updateScrollSize(),this._setPositionFromPin(),this._getActiveItems(),this._updateVisibleIndices(),this._sendStateChangedMessage()}_setPositionFromPin(){if(null!==this.pin){const i=this._scrollPosition,{index:t,block:s}=this.pin;this._scrollPosition=this._calculateScrollIntoViewPosition({index:t,block:s||"start"})-this.offsetWithinScroller[this._positionDim],this._scrollError=i-this._scrollPosition}}_calculateScrollIntoViewPosition(i){const{block:t}=i,s=Math.min(this.items.length,Math.max(0,i.index)),e=this._getItemPosition(s)[this._positionDim];let h=e;if("start"!==t){const i=this._getItemSize(s)[this._sizeDim];if("center"===t)h=e-.5*this._viewDim1+.5*i;else{const s=e-this._viewDim1+i;if("end"===t)h=s;else{const i=this._scrollPosition;h=Math.abs(i-e)<Math.abs(i-s)?e:s}}}return h+=this.offsetWithinScroller[this._positionDim],this._clampScrollPosition(h)}getScrollIntoViewCoordinates(i){return{[this._positionDim]:this._calculateScrollIntoViewPosition(i)}}_sendUnpinnedMessage(){this._hostSink({type:"unpinned"})}_sendVisibilityChangedMessage(){this._hostSink({type:"visibilityChanged",firstVisible:this._firstVisible,lastVisible:this._lastVisible})}_sendStateChangedMessage(){const i=new Map;if(-1!==this._first&&-1!==this._last)for(let s=this._first;s<=this._last;s++)i.set(s,this._getItemPosition(s));const t={type:"stateChanged",scrollSize:{[this._sizeDim]:this._scrollSize,[this._secondarySizeDim]:null},range:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible},childPositions:i};this._scrollError&&(t.scrollError={[this._positionDim]:this._scrollError,[this._secondaryPositionDim]:0},this._scrollError=0),this._hostSink(t)}get _num(){return-1===this._first||-1===this._last?0:this._last-this._first+1}_checkThresholds(){if(0===this._viewDim1&&this._num>0||null!==this._pin)this._scheduleReflow();else{const i=Math.max(0,this._scrollPosition-this._overhang),t=Math.min(this._scrollSize,this._scrollPosition+this._viewDim1+this._overhang);this._physicalMin>i||this._physicalMax<t?this._scheduleReflow():this._updateVisibleIndices({emit:!0})}}_updateVisibleIndices(i){if(-1===this._first||-1===this._last)return;let t=this._first;for(;t<this._last&&Math.round(this._getItemPosition(t)[this._positionDim]+this._getItemSize(t)[this._sizeDim])<=Math.round(this._scrollPosition);)t++;let s=this._last;for(;s>this._first&&Math.round(this._getItemPosition(s)[this._positionDim])>=Math.round(this._scrollPosition+this._viewDim1);)s--;t===this._firstVisible&&s===this._lastVisible||(this._firstVisible=t,this._lastVisible=s,i&&i.emit&&this._sendVisibilityChangedMessage())}}const a=i=>Object.assign({type:g},i);function o(i){return"horizontal"===i?"marginLeft":"marginTop"}function n(i){return"horizontal"===i?"marginRight":"marginBottom"}function _(i){return"horizontal"===i?"xOffset":"yOffset"}function l(i,t){const s=[i,t].sort();return s[1]<=0?Math.min(...s):s[0]>=0?Math.max(...s):s[0]+s[1]}class c{constructor(){this._childSizeCache=new e,this._marginSizeCache=new e,this._metricsCache=new Map}update(i,t){const s=new Set;Object.keys(i).forEach((e=>{const r=Number(e);this._metricsCache.set(r,i[r]),this._childSizeCache.set(r,i[r][h(t)]),s.add(r),s.add(r+1)}));for(const e of s){const i=this._metricsCache.get(e)?.[o(t)]||0,s=this._metricsCache.get(e-1)?.[n(t)]||0;this._marginSizeCache.set(e,l(i,s))}}get averageChildSize(){return this._childSizeCache.averageSize}get totalChildSize(){return this._childSizeCache.totalSize}get averageMarginSize(){return this._marginSizeCache.averageSize}get totalMarginSize(){return this._marginSizeCache.totalSize}getLeadingMarginValue(i,t){return this._metricsCache.get(i)?.[o(t)]||0}getChildSize(i){return this._childSizeCache.getSize(i)}getMarginSize(i){return this._marginSizeCache.getSize(i)}clear(){this._childSizeCache.clear(),this._marginSizeCache.clear(),this._metricsCache.clear()}}class g extends r{constructor(){super(...arguments),this._itemSize={width:100,height:100},this._physicalItems=new Map,this._newPhysicalItems=new Map,this._metricsCache=new c,this._anchorIdx=null,this._anchorPos=null,this._stable=!0,this._measureChildren=!0,this._estimate=!0}get measureChildren(){return this._measureChildren}updateItemSizes(i){this._metricsCache.update(i,this.direction),this._scheduleReflow()}_getPhysicalItem(i){return this._newPhysicalItems.get(i)??this._physicalItems.get(i)}_getSize(i){return this._getPhysicalItem(i)&&this._metricsCache.getChildSize(i)}_getAverageSize(){return this._metricsCache.averageChildSize||this._itemSize[this._sizeDim]}_estimatePosition(i){const t=this._metricsCache;if(-1===this._first||-1===this._last)return t.averageMarginSize+i*(t.averageMarginSize+this._getAverageSize());if(i<this._first){const s=this._first-i;return this._getPhysicalItem(this._first).pos-(t.getMarginSize(this._first-1)||t.averageMarginSize)-(s*t.averageChildSize+(s-1)*t.averageMarginSize)}{const s=i-this._last;return this._getPhysicalItem(this._last).pos+(t.getChildSize(this._last)||t.averageChildSize)+(t.getMarginSize(this._last)||t.averageMarginSize)+s*(t.averageChildSize+t.averageMarginSize)}}_getPosition(i){const t=this._getPhysicalItem(i),{averageMarginSize:s}=this._metricsCache;return 0===i?this._metricsCache.getMarginSize(0)??s:t?t.pos:this._estimatePosition(i)}_calculateAnchor(i,t){return i<=0?0:t>this._scrollSize-this._viewDim1?this.items.length-1:Math.max(0,Math.min(this.items.length-1,Math.floor((i+t)/2/this._delta)))}_getAnchor(i,t){if(0===this._physicalItems.size)return this._calculateAnchor(i,t);if(this._first<0)return this._calculateAnchor(i,t);if(this._last<0)return this._calculateAnchor(i,t);const s=this._getPhysicalItem(this._first),e=this._getPhysicalItem(this._last),h=s.pos;if(e.pos+this._metricsCache.getChildSize(this._last)<i)return this._calculateAnchor(i,t);if(h>t)return this._calculateAnchor(i,t);let r=this._firstVisible-1,a=-1/0;for(;a<i;){a=this._getPhysicalItem(++r).pos+this._metricsCache.getChildSize(r)}return r}_getActiveItems(){0===this._viewDim1||0===this.items.length?this._clearItems():this._getItems()}_clearItems(){this._first=-1,this._last=-1,this._physicalMin=0,this._physicalMax=0;const i=this._newPhysicalItems;this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i,this._stable=!0}_getItems(){const i=this._newPhysicalItems;let t,s;if(this._stable=!0,null!==this.pin){const{index:i}=this.pin;this._anchorIdx=i,this._anchorPos=this._getPosition(i)}if(t=this._scrollPosition-this._overhang,s=this._scrollPosition+this._viewDim1+this._overhang,s<0||t>this._scrollSize)return void this._clearItems();null!==this._anchorIdx&&null!==this._anchorPos||(this._anchorIdx=this._getAnchor(t,s),this._anchorPos=this._getPosition(this._anchorIdx));let e=this._getSize(this._anchorIdx);void 0===e&&(this._stable=!1,e=this._getAverageSize());const h=this._metricsCache.getMarginSize(this._anchorIdx)??this._metricsCache.averageMarginSize,r=this._metricsCache.getMarginSize(this._anchorIdx+1)??this._metricsCache.averageMarginSize;0===this._anchorIdx&&(this._anchorPos=h),this._anchorIdx===this.items.length-1&&(this._anchorPos=this._scrollSize-r-e);let a=0;for(this._anchorPos+e+r<t&&(a=t-(this._anchorPos+e+r)),this._anchorPos-h>s&&(a=s-(this._anchorPos-h)),a&&(this._scrollPosition-=a,t-=a,s-=a,this._scrollError+=a),i.set(this._anchorIdx,{pos:this._anchorPos,size:e}),this._first=this._last=this._anchorIdx,this._physicalMin=this._anchorPos-h,this._physicalMax=this._anchorPos+e+r;this._physicalMin>t&&this._first>0;){let t=this._getSize(--this._first);void 0===t&&(this._stable=!1,t=this._getAverageSize());let s=this._metricsCache.getMarginSize(this._first);void 0===s&&(this._stable=!1,s=this._metricsCache.averageMarginSize),this._physicalMin-=t;const e=this._physicalMin;if(i.set(this._first,{pos:e,size:t}),this._physicalMin-=s,!1===this._stable&&!1===this._estimate)break}for(;this._physicalMax<s&&this._last<this.items.length-1;){let t=this._getSize(++this._last);void 0===t&&(this._stable=!1,t=this._getAverageSize());let s=this._metricsCache.getMarginSize(this._last);void 0===s&&(this._stable=!1,s=this._metricsCache.averageMarginSize);const e=this._physicalMax;if(i.set(this._last,{pos:e,size:t}),this._physicalMax+=t+s,!this._stable&&!this._estimate)break}const o=this._calculateError();o&&(this._physicalMin-=o,this._physicalMax-=o,this._anchorPos-=o,this._scrollPosition-=o,i.forEach((i=>i.pos-=o)),this._scrollError+=o),this._stable&&(this._newPhysicalItems=this._physicalItems,this._newPhysicalItems.clear(),this._physicalItems=i)}_calculateError(){return 0===this._first?this._physicalMin:this._physicalMin<=0?this._physicalMin-this._first*this._delta:this._last===this.items.length-1?this._physicalMax-this._scrollSize:this._physicalMax>=this._scrollSize?this._physicalMax-this._scrollSize+(this.items.length-1-this._last)*this._delta:0}_reflow(){const{_first:i,_last:t}=this;super._reflow(),(-1===this._first&&-1==this._last||this._first===i&&this._last===t)&&this._resetReflowState()}_resetReflowState(){this._anchorIdx=null,this._anchorPos=null,this._stable=!0}_updateScrollSize(){const{averageMarginSize:i}=this._metricsCache;this._scrollSize=Math.max(1,this.items.length*(i+this._getAverageSize())+i)}get _delta(){const{averageMarginSize:i}=this._metricsCache;return this._getAverageSize()+i}_getItemPosition(i){return{[this._positionDim]:this._getPosition(i),[this._secondaryPositionDim]:0,[_(this.direction)]:-(this._metricsCache.getLeadingMarginValue(i,this.direction)??this._metricsCache.averageMarginSize)}}_getItemSize(i){return{[this._sizeDim]:this._getSize(i)||this._getAverageSize(),[this._secondarySizeDim]:this._itemSize[this._secondarySizeDim]}}_viewDim2Changed(){this._metricsCache.clear(),this._scheduleReflow()}}}}]);
//# sourceMappingURL=669.bd059859.chunk.js.map