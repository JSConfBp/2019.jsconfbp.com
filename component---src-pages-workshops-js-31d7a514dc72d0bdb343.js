(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{425:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(435),i=a(421),o=a.n(i),l=a(437),c=(a(106),a(439),a(104)),d=a(448),u=a(422),m=a.n(u),f=function(e){return"workshops"===e.node.parent.sourceInstanceName},p=function(e,t){var a=new Date(e.node.frontmatter.date),n=new Date(t.node.frontmatter.date);return a>n?-1:a<n?1:0},h=function(e){return r.a.createElement("ul",{className:m.a.workshop_list},e.data.allMdx.edges.filter(f).sort(p).map(function(e){var t=e.node;return r.a.createElement("li",{key:t.id,className:m.a.workshop_list_item},console.log(t.frontmatter),r.a.createElement("h3",{className:m.a.workshop_title},r.a.createElement(c.a,{to:"/"+t.parent.sourceInstanceName+"/"+t.parent.name},t.frontmatter.title," by ",t.frontmatter.company)),r.a.createElement("span",{className:m.a.workshop_date},r.a.createElement("span",{className:m.a.workshop_date_day},"24",r.a.createElement("sup",null,"th")),r.a.createElement("span",{className:m.a.workshop_date_month},"Sep")),r.a.createElement("p",{className:m.a.workshop_lead},t.frontmatter.short_description," "),r.a.createElement("div",{className:m.a.workshop_link},r.a.createElement(c.a,{to:"/"+t.parent.sourceInstanceName+"/"+t.parent.name},"Read more →")),r.a.createElement("div",{className:m.a.workshop_register},r.a.createElement(d.a,{id:t.frontmatter.workshop_id,disabled:t.frontmatter.disabled})))}))};a.d(t,"query",function(){return g});var g="1609993543";t.default=function(e){return r.a.createElement(s.a,null,r.a.createElement(l.a,{image:"social_card_workshops.jpg"}),r.a.createElement("div",{className:o.a.workshops},r.a.createElement("h1",{className:o.a.typo},"Workshops"),r.a.createElement("p",{className:o.a.typo},r.a.createElement("strong",null,"These workshops are FREE for every ticket holder of JSConf Budapest or a Combo ticket with CSSConf Budapest.")),r.a.createElement("p",{className:o.a.typo},"The workshops have limited seats, so be sure to"," ",r.a.createElement("a",{href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},"get your ticket"),"before they fill up! We'll open them slowly, so everyone have a chance to pick a workshop they like."),r.a.createElement("p",{className:o.a.typo},"You will be able to register to a workshop using the ID on your ticket. If will be possible to switch the workshop you've picked later, if there is a free seat available on another workshop."),r.a.createElement(h,{data:e.data})))}},428:function(e,t,a){"use strict";a(433)("link",function(e){return function(t){return e(this,"a","href",t)}})},430:function(e,t,a){"use strict";a(428);var n=a(0),r=a.n(n),s=a(104),i=a(375),o=a.n(i);t.a=function(){return r.a.createElement("div",null,r.a.createElement("p",{className:o.a.text},"JSConf Budapest welcomes everybody, please"," ",r.a.createElement("em",{className:o.a.emphasize},"be nice to each other"),"."),r.a.createElement("ul",{className:o.a.list},r.a.createElement("li",{className:o.a.item},r.a.createElement(s.a,{className:o.a.link,to:"/about"},"About")),r.a.createElement("li",{className:o.a.item},r.a.createElement(s.a,{className:o.a.link,to:"/code-of-conduct"},"Code Of Conduct")),r.a.createElement("li",{className:o.a.item},r.a.createElement(s.a,{className:o.a.link,to:"/privacy-policy"},"Privacy Policy")),r.a.createElement("li",{className:o.a.item},r.a.createElement(s.a,{className:o.a.link,to:"/impressum"},"Impressum"))))}},431:function(e,t,a){"use strict";var n=a(1);t.__esModule=!0,t.default=void 0;var r,s=n(a(18)),i=n(a(29)),o=n(a(105)),l=n(a(3)),c=n(a(0)),d=n(a(2)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+i+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,s=e.style,i=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},u,{onLoad:i,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,s=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)((0,i.default)(a))),a.handleRef=a.handleRef.bind((0,i.default)((0,i.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,s=void 0===r?{}:r,i=e.imgStyle,o=void 0===i?{}:i,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,E=e.backgroundColor,w=e.Tag,v=e.itemProp,y=this.state.imgLoaded||!1===this.state.fadeIn,S=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:y?1:0,transition:S?"opacity 0.5s":"none"},o),k="boolean"==typeof E?"lightgray":E,A={transitionDelay:"0.5s"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},S&&A,o,m),I={title:t,alt:this.state.isVisible?"":a,style:C,className:f};if(p){var R=p;return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),k&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},S&&A)}),R.base64&&c.default.createElement(b,(0,l.default)({src:R.base64},I)),R.tracedSVG&&c.default.createElement(b,(0,l.default)({src:R.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(h){var O=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},s);return"inherit"===s.display&&delete B.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},k&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:k,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},S&&A)}),O.base64&&c.default.createElement(b,(0,l.default)({src:O.base64},I)),O.tracedSVG&&c.default.createElement(b,(0,l.default)({src:O.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var y=E;t.default=y},432:function(e,t,a){"use strict";var n=a(18),r=a.n(n),s=a(0),i=a.n(s),o=a(104),l=a(376),c=a.n(l),d=a(434),u=a(431),m=a.n(u),f=function(e){return i.a.createElement(o.b,{query:"3370271720",render:function(e){return i.a.createElement(m.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:d})},p=function(e){var t=e.menuOpen;return i.a.createElement(o.a,{className:[c.a.logo,t?c.a.logo_menu_open:""].join(" "),to:"/"},i.a.createElement(f,{className:c.a.inner}))},h=(a(428),a(377)),g=a.n(h),b=a(378),E=a.n(b),w=function(){return i.a.createElement("div",{className:E.a.buy},i.a.createElement("a",{className:E.a.ticket,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},i.a.createElement("div",{className:E.a.inner},i.a.createElement("span",{className:E.a.label},"Tickets"))))},v=function(e){var t=e.open,a=[g.a.nav];return t&&a.push(g.a.nav__open),i.a.createElement("nav",{className:a.join(" ")},i.a.createElement("ul",null,i.a.createElement("li",{className:g.a.item},i.a.createElement(o.a,{className:g.a.link,to:"/scholarship-program"},"Scholarship")),i.a.createElement("li",{className:g.a.item},i.a.createElement(o.a,{className:g.a.link,to:"/schedule"},"Schedule")),i.a.createElement("li",{className:g.a.item},i.a.createElement("a",{className:g.a.link,href:"/sponsoration"},"Sponsorship")),i.a.createElement("li",{className:g.a.item},i.a.createElement(o.a,{className:g.a.link,to:"/venue"},"Venue")),i.a.createElement("li",{className:g.a.item},i.a.createElement(o.a,{className:g.a.link,to:"/workshops"},"Workshops")),i.a.createElement("li",{className:g.a.item},i.a.createElement(o.a,{className:g.a.link,to:"/code-of-conduct"},"Code of Conduct")),i.a.createElement("li",{className:[g.a.item,g.a.item_ticketButton].join(" ")},i.a.createElement(w,null))))},y=a(379),S=a.n(y),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={menuOpen:!1},a}r()(t,e);var a=t.prototype;return a.menuButtonClick=function(e){var t=this.state.menuOpen;this.setState({menuOpen:!t})},a.render=function(){var e=this,t=this.state.menuOpen,a=this.props,n=a.transparent,r=a.classNames,s=void 0===r?[]:r,o=[S.a.header].concat(s),l=[S.a.menu_button];return n&&(o.push(S.a.header_transparent),l.push(S.a.menu_button_transparent)),t&&(o.push(S.a.header__nav__open),l.push(S.a.menu_button_open)),i.a.createElement("header",{className:o.join(" ")},i.a.createElement("svg",{onClick:function(t){return e.menuButtonClick(t)},className:l.join(" "),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 283.426 283.426"},i.a.createElement("path",{d:"M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z"})),i.a.createElement(p,{menuOpen:t}),i.a.createElement("span",{className:S.a.date},"2019 September 26-27"),i.a.createElement(v,{open:t}))},t}(i.a.Component);t.a=N},433:function(e,t,a){var n=a(25),r=a(55),s=a(46),i=/"/g,o=function(e,t,a,n){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},434:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEMUlEQVQ4y3VTa1CUZRj9fnSZfqRpaRdgga0BZrkIu4Iksuyy7X67kDiVmk5T+UebqZmmX2UFgxYXk3QaRVJBBASS2CjH0RjM2YFuBtVUgi7M7rKssCALLCwsrCCcnvf9WAKrb+b58b2X85znnPMKI+VlCH4nrrpxuOEQ5lwG3Ok1wty+E0dabiAptxXJ+e0wlh3AqKdq6XzAW48JuwE+x/NU2byEm1EhCJR/jvMdNqhym6HKb0PtlQOo+DkTuvoXMI9pnLZ4EH+4AFsbtHBb1Zgbb0RgvAkTNjUBiitKcMXIUfFGBrqclXB3GuGyb4M1V4vCPYnINOdgcm4B8JtRalEjs9YId48RfocO4zYdB/A5jCtK+GRvAvRNL2Jmbha424iJk2lwquLhUipQnbcDY2OV8Ns0mOkVUfU9NbQSIMkxYZcA7gUVTvxRDs05Aw22gFtV51FTYyFx/MBUAFWWkyi9mo47TunwdK+4AuA/GTJxv3ZcQP+xg+iKi8LG9y6j/FcfLjm+gqZOC+05EXU/SGBe+/8DrQCs+GUMhTlvwqaKQUqeBXl73sdAexoGbKRZtxF91uXCG/9lRLABN6WhpRNJ736LTfmtKNr+Dkqz9qEv9Rn4Ow3wu0xkgIgZGnmy9x92XpvI//190tq4bRlg3q796FZG4zdFNGyVpfAU6dCTIIf3OnV2SodHug28gkzm3CaM9ohwX9dzYPYf3BMSC66heOtbmPzsKA0/D9/gTrhLkuH9XY+pWyaMWA3Ylh0Dkz4awzcp8P0mnD6aAmWiHGFhMr5+xZyOaZfUXIjL7UBJUzE5a+bp9/Vuh8+lp9AaMUUMPQS4IT4S0VERmCI2lm/UWLM2FBuVcux9LQ5rHw3F67tjOSAf+eOGIjqowXB3BoaHzsDn3E1gOi4+A2CAyaqnERcbiVkarawkBfc9+CSOH0qmgXJwrTkD/X/qeXMOWP/jcxDrROhrDahuy6R4EPVF54IMVUlyDuin/5bGdM4wcYMcx4qTcfuGAbidtWSMECCAI9+J+JQq4DTRohQNdoAzJN2YXgk09jBdniFdP9qvxONPhOGBh55CrCISZ49vQoDWuYbSC5Bq0mFcAmORYA4OdUmAjBEzhV3ESDZ+upyBt/clQCaT4bF1oWhu2IK7gyYIKwMq6TA7YIK9Q8cvs+KAFCUWncFOPVovqIHRbGAhB6fI8ftJ04PEmjUSgoEMBpZlqv7UswgPl6HwQyWPyLr1odBporiGr+xQcGcLPlDiYl0aXn1ZwQGZWfBkSYBBUDZqgHLWdlHNY/Hw6hBeERHh+PLMZn7h0hdbuOuraH3VIyFYvSYEu15ScOZMc+Hexz2+yJK9AvPZzagpS8VfrVoeaLbHdGKXGbvq0lQeakZmum8xNssZBp8Pd5jGW6A4YDhrycHle/ND0h5rwNcX7/4NQRZa/Gk/sbsAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png",srcSet:"/static/9b2311e55234671d5594d0954be3b213/e22c9/logo2.png 75w,\n/static/9b2311e55234671d5594d0954be3b213/d3809/logo2.png 150w,\n/static/9b2311e55234671d5594d0954be3b213/fdbb0/logo2.png 300w,\n/static/9b2311e55234671d5594d0954be3b213/647de/logo2.png 400w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},435:function(e,t,a){"use strict";var n=a(436),r=a(0),s=a.n(r),i=a(2),o=a.n(i),l=a(429),c=a.n(l),d=a(104),u=a(380),m=a.n(u),f=a(430),p=a(432),h=function(e){return s.a.createElement(d.b,{query:"724794514",render:function(t){return s.a.createElement("div",{className:m.a.grid2},s.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:t.site.siteMetadata.keywords}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(p.a,null),s.a.createElement("main",{className:[m.a.main].concat(e.mainClassNames).join(" ")},e.children),s.a.createElement("footer",{className:m.a.footer},s.a.createElement(f.a,null)))},data:n})};h.propTypes={children:o.a.node.isRequired,mainClassNames:o.a.array},h.defaultProps={mainClassNames:[]},t.a=h},436:function(e){e.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary"}}}}},437:function(e,t,a){"use strict";var n=a(438),r=a(0),s=a.n(r),i=a(104),o=a(429),l=a.n(o);t.a=function(e){return s.a.createElement(i.b,{query:"3814168137",render:function(t){var a=t.site.siteMetadata,n=a.title,r=a.twitter,i=a.siteUrl,o=a.description;return s.a.createElement(l.a,{meta:[{name:"og:type",content:"website"},{name:"og:title",content:e.title||n},{name:"og:description",content:e.description||o},{name:"og:site_name",content:n},{name:"og:url",content:i},{name:"og:image",content:i+"/social-cards/"+e.image},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:r},{name:"twitter:creator",content:r},{name:"twitter:title",content:e.title||n},{name:"twitter:description",content:e.description||o},{name:"twitter:url",content:i},{name:"twitter:image",content:i+"/social-cards/"+e.image}]})},data:n})}},438:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://jsconfbp.com",title:"JSConf Budapest 2019",description:"JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary",twitter:"@jsconfbp"}}}}},439:function(e,t,a){"use strict";var n=a(25),r=a(57),s=a(56),i=a(55),o=[].sort,l=[1,2,3];n(n.P+n.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!a(446)(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),r(e))}})},446:function(e,t,a){"use strict";var n=a(55);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},448:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(107),i=a(383),o=a.n(i);t.a=function(e){e.id;var t=e.disabled,a=void 0!==t&&t;return r.a.createElement(s.a,{block:!0,fill:!0,color:"red",disabled:!0,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019",className:o.a.ticket_button},a?"Open Soon":"Register Now")}}}]);
//# sourceMappingURL=component---src-pages-workshops-js-31d7a514dc72d0bdb343.js.map