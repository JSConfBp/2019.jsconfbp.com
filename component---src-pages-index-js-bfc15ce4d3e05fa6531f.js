(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{432:function(a,e,t){"use strict";t.r(e);var c=t(0),A=t.n(c),s=t(109),n=t(454),i=t(443),d=t(457),b=(t(108),t(448),t(55)),l=t(456),o=t(418),r=t.n(o),f=function(a){return A.a.createElement("ul",{className:r.a.speaker_list},a.data.allMdx.edges.filter(function(a){return"speakers"===a.node.parent.sourceInstanceName}).sort(function(a,e){var t=a.node.frontmatter.order,c=e.node.frontmatter.order;return t?c?t-c:-1:1}).map(function(a){var e=a.node;return A.a.createElement("li",{key:e.id,className:r.a.updates_list_item},A.a.createElement(b.a,{className:r.a.speaker_link,to:"/"+e.parent.sourceInstanceName+"/"+e.parent.name},A.a.createElement(l.a,{className:r.a.speaker_list_image,image:e.frontmatter.image,color:e.frontmatter.color}),A.a.createElement("span",{className:r.a.name},e.frontmatter.name),A.a.createElement("span",{className:r.a.title},e.frontmatter.title)))}),A.a.createElement("li",{key:"the-mc",className:r.a.updates_list_item},A.a.createElement("a",{className:r.a.speaker_link,href:"https://twitter.com/paul_v_m"},A.a.createElement(l.a,{className:r.a.speaker_list_image,image:"paul_vm",color:"blue"}),A.a.createElement("span",{className:r.a.name},"Paul Verbeek-Mast"),A.a.createElement("span",{className:r.a.title},"Master of Ceremony"))))},g=t(472),m=(t(76),t(110),t(488),t(8),t(107),t(475),t(474),t(388)),p=t.n(m);t.d(e,"query",function(){return w});e.default=function(a){return A.a.createElement(n.a,null,A.a.createElement(i.a,{image:"social_card_home2.jpg"}),A.a.createElement("div",null,A.a.createElement("div",{className:p.a.home},A.a.createElement("div",{className:p.a.homeContent},A.a.createElement("h1",{className:p.a.title},"JSConf Budapest 2019"),A.a.createElement("span",{className:p.a.date},"26-27th September"),A.a.createElement(s.a,{block:!0,fill:!0,href:"https://ti.to/jsconf-bp/jsconf-budapest-2019"},"Tickets from €311"))),A.a.createElement("div",{className:p.a.updates},A.a.createElement("div",{className:p.a.updates_content},A.a.createElement("h1",{className:p.a.home_heading},"Speakers"),A.a.createElement(f,{data:a.data}))),A.a.createElement("div",{className:p.a.updates},A.a.createElement("div",{className:p.a.updates_content},A.a.createElement("h1",{className:p.a.home_heading},"Updates"),A.a.createElement(d.a,{data:a.data}))),A.a.createElement("div",{className:p.a.updates},A.a.createElement("div",{className:p.a.updates_content},A.a.createElement(g.a,null)))))};var w="3865816901"},448:function(a,e,t){"use strict";var c=t(25),A=t(60),s=t(57),n=t(56),i=[].sort,d=[1,2,3];c(c.P+c.F*(n(function(){d.sort(void 0)})||!n(function(){d.sort(null)})||!t(449)(i)),"Array",{sort:function(a){return void 0===a?i.call(s(this)):i.call(s(this),A(a))}})},449:function(a,e,t){"use strict";var c=t(56);a.exports=function(a,e){return!!a&&c(function(){e?a.call(null,function(){},1):a.call(null)})}},454:function(a,e,t){"use strict";var c=t(455),A=t(0),s=t.n(A),n=t(2),i=t.n(n),d=t(436),b=t.n(d),l=t(55),o=t(387),r=t.n(o),f=t(437),g=t(439),m=function(a){return s.a.createElement(l.b,{query:"1024188509",render:function(e){return s.a.createElement("div",{className:r.a.grid2},s.a.createElement(b.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]},s.a.createElement("html",{lang:"en"})),s.a.createElement(g.a,{transparent:!0,classNames:a.headerClassNames}),s.a.createElement("main",{className:[r.a.main].concat(a.mainClassNames).join(" ")},a.children),s.a.createElement("footer",{className:r.a.footer},s.a.createElement(f.a,null)))},data:c})};m.propTypes={children:i.a.node.isRequired,mainClassNames:i.a.array},m.defaultProps={mainClassNames:[]},e.a=m},455:function(a){a.exports={data:{site:{siteMetadata:{title:"JSConf Budapest 2019",keywords:"jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community",description:"JSConf Budapest 2019, September 26-27, Budapest, Hungary. Tickets from €311, including free workshops, inclusive catering and barista coffee!"}}}}},457:function(a,e,t){"use strict";t(108),t(448);var c=t(0),A=t.n(c),s=t(55),n=t(389),i=t.n(n);e.a=function(a){return A.a.createElement("ul",{className:i.a.updates_list},a.data.allMdx.edges.filter(function(a){return"updates"===a.node.parent.sourceInstanceName}).sort(function(a,e){var t=new Date(a.node.frontmatter.date),c=new Date(e.node.frontmatter.date);return t>c?-1:t<c?1:0}).slice(0,3).map(function(a){var e=a.node;return A.a.createElement("li",{key:e.id,className:i.a.updates_list_item},A.a.createElement("span",{className:i.a.date},e.frontmatter.date),A.a.createElement(s.a,{className:i.a.title,to:"/"+e.parent.sourceInstanceName+"/"+e.parent.name},e.frontmatter.title),A.a.createElement("p",{className:i.a.lead},e.frontmatter.lead," "),A.a.createElement(s.a,{to:"/"+e.parent.sourceInstanceName+"/"+e.parent.name},"Read more →"))}))}},458:function(a,e,t){"use strict";t(438)("big",function(a){return function(){return a(this,"big","","")}})},459:function(a){a.exports={data:{source:{edges:[{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVQoz2NgWHWGAQxWnWFkgAJP/0BlHx9faR9fPyEgVgdiFiDWBWJOIFYCyikB1SjA1DOtOMkINYMBZhgTmN75QEG8d6ljgLv7JG9f/wk+Pn4zgQaAcB8QTwIaNBFIzwfKLfX3cJ8n1zLTg2HvM0Ww3tVnIWYAGWDTmZafkGfYcKVHr7DOzNfLa563r99sIG4BGhABxDXevr5V3j5+24DsWKCBsX5eXqXmaQWODJuudQD1KiPMWgU3UBFoYL9BXjXIwBlATQnePr41QAOCgS5dBKQrgXgFEGcC5dKABtaYp+bbMmy82gPUq4rsOCAD5uX7KuK9S1yBXp7q7effCdQ8D4hnAfF0IJ4NxMuAOMnLzz8x0M21SLWmL4Lh6AcllGCDB+TK08iRogIML2WgN5uBBpgCvc4OpHWAWMzH15fXx9uHxz0oVPA/VD3b4kNMUIeBnQllAMGWm4yqNb1wg4EGSDIQAFxzdyFiGGgWAKvSkdNUr4KvAAAAAElFTkSuQmCC",aspectRatio:2.8368794326241136,src:"/static/375d0074c6b2c73099eafeb9da242b90/af144/EPAM_LOGO_Primary.png",srcSet:"/static/375d0074c6b2c73099eafeb9da242b90/7c0ed/EPAM_LOGO_Primary.png 200w,\n/static/375d0074c6b2c73099eafeb9da242b90/647de/EPAM_LOGO_Primary.png 400w,\n/static/375d0074c6b2c73099eafeb9da242b90/af144/EPAM_LOGO_Primary.png 800w",srcWebp:"/static/375d0074c6b2c73099eafeb9da242b90/c6096/EPAM_LOGO_Primary.webp",srcSetWebp:"/static/375d0074c6b2c73099eafeb9da242b90/1932c/EPAM_LOGO_Primary.webp 200w,\n/static/375d0074c6b2c73099eafeb9da242b90/f4957/EPAM_LOGO_Primary.webp 400w,\n/static/375d0074c6b2c73099eafeb9da242b90/c6096/EPAM_LOGO_Primary.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAC4jAAAuIwF4pT92AAABMklEQVQY042QzytEURTHL2VvOaZx73n3TlNM7FhYyLORkimlaIwUs5qQEjVSZMNmBmFiPYmFsGBlp9RsSBaj/Npb+Bt83vMWsnLr877nfu8955531O6jX9m57+tSv5Yz0qj+rP96anAiXcjkO0y8udVwYcVp6Y0ux2EZpp02TaGnxRIX8SatloboXhrWIRsW1DF9Z1r0CEbdalMlYc0aSZBcw9vAOyE+RYX9A/EqeglH0AnvnG2it07kUPGpwQDmDOY5FGAePkleQks8cMP5AfEHLMIeXMEFfjlozEuYGI29BS3XYYyDOTTgC8bhCXLR7yzQeY8z5gUdZb8FeeJh9JXcXNKTbj/TVlRhN1pSP7OSM3QqeJEZ+cRV2If2aF5DcAzbFLOhJ5Kl4HUq6c1WnvvL3/gVVs9kRPrqAAAAAElFTkSuQmCC",aspectRatio:3.393397524071527,src:"/static/46b7524f93fb1011597381a60e5b5383/af144/iseeq_logo.png",srcSet:"/static/46b7524f93fb1011597381a60e5b5383/7c0ed/iseeq_logo.png 200w,\n/static/46b7524f93fb1011597381a60e5b5383/647de/iseeq_logo.png 400w,\n/static/46b7524f93fb1011597381a60e5b5383/af144/iseeq_logo.png 800w,\n/static/46b7524f93fb1011597381a60e5b5383/ba299/iseeq_logo.png 1200w,\n/static/46b7524f93fb1011597381a60e5b5383/9ecf6/iseeq_logo.png 1600w,\n/static/46b7524f93fb1011597381a60e5b5383/a417a/iseeq_logo.png 2400w,\n/static/46b7524f93fb1011597381a60e5b5383/93472/iseeq_logo.png 2467w",srcWebp:"/static/46b7524f93fb1011597381a60e5b5383/c6096/iseeq_logo.webp",srcSetWebp:"/static/46b7524f93fb1011597381a60e5b5383/1932c/iseeq_logo.webp 200w,\n/static/46b7524f93fb1011597381a60e5b5383/f4957/iseeq_logo.webp 400w,\n/static/46b7524f93fb1011597381a60e5b5383/c6096/iseeq_logo.webp 800w,\n/static/46b7524f93fb1011597381a60e5b5383/b6424/iseeq_logo.webp 1200w,\n/static/46b7524f93fb1011597381a60e5b5383/7a72d/iseeq_logo.webp 1600w,\n/static/46b7524f93fb1011597381a60e5b5383/c5845/iseeq_logo.webp 2400w,\n/static/46b7524f93fb1011597381a60e5b5383/38808/iseeq_logo.webp 2467w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQoz2NgAAJFBXM+G0urCbZW1mtMjW2VQGIeLjZM5iaWDEBxRmtLMA3DjNYWlow2lpYgcUYQ3wZCg+UZdLXNRZ3srW4BDftvaWbx387a4geQbc1ALpg7yTmlosDxv72N008vD7/vxTne/6f32M8CyQX5WosAbZUBYqAPLNmBLuMGssWBLuMH0iJQLAqUEwbSgiB1DGvmuyxLiHL8393Z//vk8ZN/Z0zp/t/XbHbbxtJmLVDBFCCeDMQbgYatt7awWmtjYbUEyN4MNHQ3FM+yAYlbWq0E4jkMC6ZY9U/qTvrfWN/6s6Wp/fesqXX/Z/ZZH9HVsU6wt7FKBCpKA+IooCuSgQZlAtlZQJwCNCgFSJcCcYi1pVUOSAyIcxhqiu2tU+Md/pubmP83MTT7Hxvh8L+iwD6fgRKgrWWRYWtl9QSIPxkbWnUwMBhygcQ1NSyYILEMj0kmaOwyWUNoBkgKgMW2FSMAxAyC0a1fKbwAAAAASUVORK5CYII=",aspectRatio:2.682897862232779,src:"/static/7b9424652dd7f6638b3091c6768a5a43/af144/js-kongress-munich-logo.png",srcSet:"/static/7b9424652dd7f6638b3091c6768a5a43/7c0ed/js-kongress-munich-logo.png 200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/647de/js-kongress-munich-logo.png 400w,\n/static/7b9424652dd7f6638b3091c6768a5a43/af144/js-kongress-munich-logo.png 800w,\n/static/7b9424652dd7f6638b3091c6768a5a43/ba299/js-kongress-munich-logo.png 1200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/9ecf6/js-kongress-munich-logo.png 1600w,\n/static/7b9424652dd7f6638b3091c6768a5a43/87342/js-kongress-munich-logo.png 2259w",srcWebp:"/static/7b9424652dd7f6638b3091c6768a5a43/c6096/js-kongress-munich-logo.webp",srcSetWebp:"/static/7b9424652dd7f6638b3091c6768a5a43/1932c/js-kongress-munich-logo.webp 200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/f4957/js-kongress-munich-logo.webp 400w,\n/static/7b9424652dd7f6638b3091c6768a5a43/c6096/js-kongress-munich-logo.webp 800w,\n/static/7b9424652dd7f6638b3091c6768a5a43/b6424/js-kongress-munich-logo.webp 1200w,\n/static/7b9424652dd7f6638b3091c6768a5a43/7a72d/js-kongress-munich-logo.webp 1600w,\n/static/7b9424652dd7f6638b3091c6768a5a43/6bd92/js-kongress-munich-logo.webp 2259w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAC4jAAAuIwF4pT92AAAEB0lEQVQ4y42Uf2xTVRTH31qU/QT2SwY0W9s9tsEWAkGj/b2Nres2tpaWDtpC1x9bTEwwEUXNyIKIiD8SFUMkkkwwmcHowqIIMRID2R9IlD+IKGMdG7AhbM6xMUDY9t77eu5zb6uJQV9ycs5995zPPefecy/HzXwLM42KySWmGTI59dMb1EmG17NyTO2aXMsJTZ7lBNmfqZOeeYPmPI+nGLIV/6QFc7GcLt/KZTxhSmD2Uo1Zm5puPLhipW0kHKjB/je96Dziw/cdAZz60o/j7X4ceNuL6NZaFJfYRtPSjYcWLzXzLHZRlimBsWQg+3KWmR/L563drS+5ETsbxPRgVMTt5incik6TLWCkSRjtDk1jqGlK/C0q9v4QxGuveMAXWPvTs02JfydnmQNyXH6Kw15xi4Ih3YwK4z1hSbgRlY5+7MW+VqfUtt8j1VRV4vCHHmnyekRiizBfd719hOMKFirVxgHzkmsdlYPjsQju9UXE8VhYwnATPj3gwe5X67Hr5XoEGqrQ/2MQD65FpLtXwuJ4TwQbXfYhSmbBvwC1yZTBjYneCP68SsCeMBjw2OEG7Ni2HmM0fqvVCY/Tjj8uhRhUvEO+NB7+X8CJ3jD27nSiuqoCH73jxnt7XHjhuVqWEYYvhvCQAWMKkH808H5/RCQoLp7Zgm/aN2FyIIKhnxvx+SEvrlLJBJO3ZeK/MqQ9nAWyDKksYLQZXV/5ZMFYM5vDnVh4xueRQH2yo7JiYOzyXIYMSCctl3jzQiOoXeR/bI75jHZH4KpjQG2qDNTLQIuq80iDisYJRkP5hamBZgYRfv8lJJ/o+e8COHfSLwuz+84F5QXIR3x4rQnrytZdYTBqJ5VWb1HNXRlu7fyiFbaulu1OhPwOwWQsB41RUGTF8kIra2BZ6IaAzQV9DmHni07QrfqJ455KjL96JUT+gHQvaSlzsUkkkVjwekeltHWzA+FANV23avg2VqHR75DIF9k5ZtmXxdC4j/T7VO1aVnIV/RjU86UgPc0X2KDnrUIWQWl1rFlTqmisXl0qsYwzsk0S+YjMl2IEXb6sJ0lCSpZP6vkyMGieznK3uKQM7+52CR1tXvE4tc3pYz7p1BebJdZCHZ94RepJYdWqcuRqLff0vI22ooIBg/Flu0lOk3hovzTk+PWObS6M/BpmrTJ1ptMnnTy6SSJ7+vblMFq2b2ALf8svt+ZSTB3JWZLGeGBK3Olwzz9by81LMuyiQ7m/p8WNS11bpOvng+K+VjdWFtsezEs27F2iMavjY3R6S/Lse6hoEjWtPHv0aRlGLQUfZK9MXY0d9Ki2pSwy8so8VaJiMVr2bCl9GAfjlInCIhsXnwGBHPNTDU5lvGSZWV1QaP3HI62bif0LQw5LjT7IG48AAAAASUVORK5CYII=",aspectRatio:1.044155844155844,src:"/static/09c2f6caaca642f2a9b6c0bab36660e8/af144/jsleague-logo-flat.png",srcSet:"/static/09c2f6caaca642f2a9b6c0bab36660e8/7c0ed/jsleague-logo-flat.png 200w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/647de/jsleague-logo-flat.png 400w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/af144/jsleague-logo-flat.png 800w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/ba299/jsleague-logo-flat.png 1200w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/06beb/jsleague-logo-flat.png 1206w",srcWebp:"/static/09c2f6caaca642f2a9b6c0bab36660e8/c6096/jsleague-logo-flat.webp",srcSetWebp:"/static/09c2f6caaca642f2a9b6c0bab36660e8/1932c/jsleague-logo-flat.webp 200w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/f4957/jsleague-logo-flat.webp 400w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/c6096/jsleague-logo-flat.webp 800w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/b6424/jsleague-logo-flat.webp 1200w,\n/static/09c2f6caaca642f2a9b6c0bab36660e8/8bfbc/jsleague-logo-flat.webp 1206w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA9klEQVQY02P4Eaz8/5Of0vve1SyXO84y/G/cyeAZxPCftazTj7u4uJi9qKhIDogZGQgAoFoNIGZl+O4r9f63l/TNrlXM+8t3M/yvP8VgWpTZnFZcmp8OVJAFxL1AbAY01B6IHYFsFyi2AmI9oJgdEPsD2YuBdBODyrRzV+WnXjl4cbP0qnc7GB5/P8BgFpvW7l5aUrAQqKgPZCBQ4UwgHQDE1UBcA8RlQDwDiCdD2ROBuAGI6xgY1v77z7Dkx6f7WxWu/T/D8P//TkYvBp0X/DXl2RZABfpAw0C0JZD2ANLqQKwNZPsAsTkQuwL5nkBsA8RKIJcDAPlego0aXOjNAAAAAElFTkSuQmCC",aspectRatio:4.64245810055866,src:"/static/3d20d62fab1d26e91bd57645f7e84187/af144/microsoft.png",srcSet:"/static/3d20d62fab1d26e91bd57645f7e84187/7c0ed/microsoft.png 200w,\n/static/3d20d62fab1d26e91bd57645f7e84187/647de/microsoft.png 400w,\n/static/3d20d62fab1d26e91bd57645f7e84187/af144/microsoft.png 800w,\n/static/3d20d62fab1d26e91bd57645f7e84187/d157e/microsoft.png 831w",srcWebp:"/static/3d20d62fab1d26e91bd57645f7e84187/c6096/microsoft.webp",srcSetWebp:"/static/3d20d62fab1d26e91bd57645f7e84187/1932c/microsoft.webp 200w,\n/static/3d20d62fab1d26e91bd57645f7e84187/f4957/microsoft.webp 400w,\n/static/3d20d62fab1d26e91bd57645f7e84187/c6096/microsoft.webp 800w,\n/static/3d20d62fab1d26e91bd57645f7e84187/af4e3/microsoft.webp 831w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABfUlEQVQoz2NgQAOXhKMZLghHgdlXhWMYd4iEMsLkysVdGZvEPMDsOjF3BqLASeFIMH1NKAZu0BmxGJk94hHSMH6nmBeYjpWwJ87QK0BXgsA73ni2cyJR8/eJhP1YIRL4fZKYz6xsQXtmkFwz1KUEAci7x4UjwJrOikTVXRSJ+79cLOjfFAm//53iPv/zJJzLQHIl4i7MqeKOhA0EuobBTdISzN4lErp3jVDg/wPFU36tzur8lSXq+D9cwm4bSK5VzIMxUMKGsIFrRIIYJon6MIHYi8UC5swTCfg/2T79R51V3I9wCfv/TpKWU0By7pJWTI6SFsR5u1/MGxwhE8V8FGvF3G9lCjv8DxKx/m8vaXHVUMpEBiRnJWnGSJRhO0VCwTQweYA1JIjb80dKOcS6SltFa0ka8YLErCXNwXIeElaEDVwqGsAwU9QXzO4S88JwhRXUMDugd20kzYnzMtCbDBESdmB2sbgLY7SEHTMwzJgtoN50AUaauaQZA10AABmXYLtspRjCAAAAAElFTkSuQmCC",aspectRatio:1.7777777777777777,src:"/static/9fd31a88ab8350c5a9f8643533c7e74e/af144/mito.png",srcSet:"/static/9fd31a88ab8350c5a9f8643533c7e74e/7c0ed/mito.png 200w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/647de/mito.png 400w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/af144/mito.png 800w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/ba299/mito.png 1200w",srcWebp:"/static/9fd31a88ab8350c5a9f8643533c7e74e/c6096/mito.webp",srcSetWebp:"/static/9fd31a88ab8350c5a9f8643533c7e74e/1932c/mito.webp 200w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/f4957/mito.webp 400w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/c6096/mito.webp 800w,\n/static/9fd31a88ab8350c5a9f8643533c7e74e/b6424/mito.webp 1200w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAwklEQVQY03XRTwsBQRjH8Xld3oUzyYVIKYfFhRJpvQJykz8lyc0bcFEuLs5egeJA7FrrO/qpTfbwaWaeeZ5ndmaNMSb84xmZv2L2DziKjQXKNQ9c4eGmDZtwVszOL7hLqGZlNDHTAd8600IGBSV1sUUKNSyRU84aK8xVV8UCWa0/DetwUVJxWkaKDTS2scdOjXpw1DyPhG5kGuLqdEejTepgg6SaTNHHEGN98QRFVHAyuruvBw0ib+H//AQv8vhhjOAN6oxaODj/qIYAAAAASUVORK5CYII=",aspectRatio:3.503205128205128,src:"/static/138f48e798193a0d4ca5dfda309dbca9/af144/mozilla.png",srcSet:"/static/138f48e798193a0d4ca5dfda309dbca9/7c0ed/mozilla.png 200w,\n/static/138f48e798193a0d4ca5dfda309dbca9/647de/mozilla.png 400w,\n/static/138f48e798193a0d4ca5dfda309dbca9/af144/mozilla.png 800w,\n/static/138f48e798193a0d4ca5dfda309dbca9/ea28c/mozilla.png 1093w",srcWebp:"/static/138f48e798193a0d4ca5dfda309dbca9/c6096/mozilla.webp",srcSetWebp:"/static/138f48e798193a0d4ca5dfda309dbca9/1932c/mozilla.webp 200w,\n/static/138f48e798193a0d4ca5dfda309dbca9/f4957/mozilla.webp 400w,\n/static/138f48e798193a0d4ca5dfda309dbca9/c6096/mozilla.webp 800w,\n/static/138f48e798193a0d4ca5dfda309dbca9/09e95/mozilla.webp 1093w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQY02PYeDosaNXR0Krlh0NbN5wKS15/IlySgRIwb0/oAu/KgEq30oDm+sXBLdsvhIeBxGPjox0io2K0IyKjmYFYEMjmAWIWIOYAYgMg1gVikYioaAYgzQTEKkDMyzB7Z+jS4pmhWXlTQoO714TO2nA21JWBIZslKia6BaigCIjjgLgmMjImCYjTgYYnAXEkUCwJiBOBuCkyKjocSOcC5ZMZ4jsCFk/ZElw3f29IQ/60wCkBtf5eIBdGxETrABUZA7EREDsCsSLQIFMgnQ/EJkBDDIFYH8j2BqmLAKmLjNFj0In3C7TK8qu1zfXvMEz2S1aP8sMbhiCv45MHAEtAZgdS6kafAAAAAElFTkSuQmCC",aspectRatio:3.981042654028436,src:"/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/af144/risingstack.png",srcSet:"/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/7c0ed/risingstack.png 200w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/647de/risingstack.png 400w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/af144/risingstack.png 800w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/ecb65/risingstack.png 840w",srcWebp:"/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/c6096/risingstack.webp",srcSetWebp:"/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/1932c/risingstack.webp 200w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/f4957/risingstack.webp 400w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/c6096/risingstack.webp 800w,\n/static/f65de9a46c5b2ea00f7e5b94c14f5ab8/38a47/risingstack.webp 840w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAq0lEQVQoz7XQwQoBURTG8TEKo5QtWYwZE5kRC3kD63kTbMaCWIhkocTKRvKk/re+qbtgx6lfc+ac07e4jvPHKqOCIlz1nuY1VDUv6d7TjZkX7KD8J8UVT1xwwAY7ZJjhjDUW2pvdHhNluHbgFC889DWhS4WdMMcNK9wVfsQWYzswrxgJAnQxQIghRtr56Ok21k0f9U9v2FBAC0200UGkPlKgr5BQffIt8Cf1BnoEFLA/Sq0wAAAAAElFTkSuQmCC",aspectRatio:2.67,src:"/static/1a93510d544630a07bcc960c629d9759/af144/sinnerschrader.png",srcSet:"/static/1a93510d544630a07bcc960c629d9759/7c0ed/sinnerschrader.png 200w,\n/static/1a93510d544630a07bcc960c629d9759/647de/sinnerschrader.png 400w,\n/static/1a93510d544630a07bcc960c629d9759/af144/sinnerschrader.png 800w,\n/static/1a93510d544630a07bcc960c629d9759/2c1c1/sinnerschrader.png 801w",srcWebp:"/static/1a93510d544630a07bcc960c629d9759/c6096/sinnerschrader.webp",srcSetWebp:"/static/1a93510d544630a07bcc960c629d9759/1932c/sinnerschrader.webp 200w,\n/static/1a93510d544630a07bcc960c629d9759/f4957/sinnerschrader.webp 400w,\n/static/1a93510d544630a07bcc960c629d9759/c6096/sinnerschrader.webp 800w,\n/static/1a93510d544630a07bcc960c629d9759/dfdc4/sinnerschrader.webp 801w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5ElEQVQoz2NgAILz568zBPhmgpgMC+atZayp7mdYtHA94////8Fix46eYyAagDRtWb8ZzN6wficjTAwEjuzdC+ZrAfHXr1/BYhzSBnAamY0Btm3eB9Z8/tJd/RnT1vFeuvpQB8TPyihg5FU0ZWST1ANpZEQ2CN0CdhAb5JpD+46CDfv08ZPUhK7pJ48cPl42uWf6yRsXL2ri8hm7pD7IEA4MF4IM3LZlBzOIfe/unclNtZP/Z6Q3/8tMrvp/7syZFUBhRm4ZA0leeWMhoEZ5IBaGGhLDIa3vAaRZIHx9hAs3bYIYeOfOncmNDbP/21qnfIuOqvx/9/bt2cziOkGcMgZbgXgyUPMqIF4IxFOAeDnQkAtAWhlqASPchYcPHwUb+PzF8zmL563+Xxif+7mttuv/zVu3VzEIqRsDDZsDxPkcMvrhQEMKgHgBEPtADNc3gBkIciXYwKtXrzOBBP/8/Zk8ferS/1Hecf8ba/v+P3ryuBwkbu8dxYoUCUFAbInEZwPRnDL6YG/DXWlslgR28oKFO1yzc3pOtHcuDkWPCEgM6zOhRwTQ9aiRAgMR0dWM6IZcvnUFSLIw8Mgbg12B7D2oBajpEmTgs2cv4IZPmrQC7IL8/E4mmGXHT5xjWL5uM1EJGgBlAMrpKRnkJAAAAABJRU5ErkJggg==",aspectRatio:1.760233918128655,src:"/static/787404fa46b1e52e950241134badbc90/8bc63/snyk-logo-black.png",srcSet:"/static/787404fa46b1e52e950241134badbc90/7c0ed/snyk-logo-black.png 200w,\n/static/787404fa46b1e52e950241134badbc90/647de/snyk-logo-black.png 400w,\n/static/787404fa46b1e52e950241134badbc90/8bc63/snyk-logo-black.png 602w",srcWebp:"/static/787404fa46b1e52e950241134badbc90/30bac/snyk-logo-black.webp",srcSetWebp:"/static/787404fa46b1e52e950241134badbc90/1932c/snyk-logo-black.webp 200w,\n/static/787404fa46b1e52e950241134badbc90/f4957/snyk-logo-black.webp 400w,\n/static/787404fa46b1e52e950241134badbc90/30bac/snyk-logo-black.webp 602w",sizes:"(max-width: 602px) 100vw, 602px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAsElEQVQY043QwQsBQRTH8Z1dHCT/gr2xOcqRkkQ4SFki5UKhOFDkxNnJf+w7+W1ta5VXn97sm+bNvHWcTxjlnDGmBt/5P8yvjTxWaOKBjupt9FDBEnP0latpjVzlLgLcMVHDEs544YAbjvq2lw6jydIaDuCr4QktlHVohj2mcsEaI+x07mv8IhZqZkcKVR9rvcFVtnqxff2Tfx4kG0aLAhqox2rZ5EixsHuu53mZqPAGpSYUzAZqQ8EAAAAASUVORK5CYII=",aspectRatio:3.2979591836734694,src:"/static/13f84c26e49051a8532a8562b1665d2d/af144/supercharge_logo17-with-text.png",srcSet:"/static/13f84c26e49051a8532a8562b1665d2d/7c0ed/supercharge_logo17-with-text.png 200w,\n/static/13f84c26e49051a8532a8562b1665d2d/647de/supercharge_logo17-with-text.png 400w,\n/static/13f84c26e49051a8532a8562b1665d2d/af144/supercharge_logo17-with-text.png 800w,\n/static/13f84c26e49051a8532a8562b1665d2d/85ec6/supercharge_logo17-with-text.png 808w",srcWebp:"/static/13f84c26e49051a8532a8562b1665d2d/c6096/supercharge_logo17-with-text.webp",srcSetWebp:"/static/13f84c26e49051a8532a8562b1665d2d/1932c/supercharge_logo17-with-text.webp 200w,\n/static/13f84c26e49051a8532a8562b1665d2d/f4957/supercharge_logo17-with-text.webp 400w,\n/static/13f84c26e49051a8532a8562b1665d2d/c6096/supercharge_logo17-with-text.webp 800w,\n/static/13f84c26e49051a8532a8562b1665d2d/d1a49/supercharge_logo17-with-text.webp 808w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABNUlEQVQoz32SsUoEMRCGd7UUPSwOEUQsrTbgG1gkT2FlYa/YiQgH4nlwjSCIaCFYayVY2IqVIIidIFjYWGWfwG+STG53RQMf/2V2Mv9MckVtXCGrrlzB7ylfuVJU4+zTdxuVuI+5qG3l5KXJ3RULWzGIYNY+R1HiXpsSbRYjsAFD2Ia54p/lMWp2phOFLrQYCbe4StFz2GekNQwHxBbYz6A9dIe8K/SSoqvoinSfi/rJZpg6vObAFroHJ/ABD/AJb/AOX/ANT/CC8UG6gmkZWTvE2Z6hm3CI+zGF14ndsB+FQpW7Ry/gFZ7Z35HziO7Ga2DaOr+im+XwEYljPpzKOMloGXphZEOOsfPoIvTDv8K4pV/3qGOnYD+bmPar/rXkYSeP0jjcKVyqmSR3KOvwyjZ/1w5/AGvoyPNGwHHZAAAAAElFTkSuQmCC",aspectRatio:2.1666666666666665,src:"/static/4604e21495fa01aedfb558ea5c7726d9/af144/twilio-logo-red.png",srcSet:"/static/4604e21495fa01aedfb558ea5c7726d9/7c0ed/twilio-logo-red.png 200w,\n/static/4604e21495fa01aedfb558ea5c7726d9/647de/twilio-logo-red.png 400w,\n/static/4604e21495fa01aedfb558ea5c7726d9/af144/twilio-logo-red.png 800w,\n/static/4604e21495fa01aedfb558ea5c7726d9/ba299/twilio-logo-red.png 1200w,\n/static/4604e21495fa01aedfb558ea5c7726d9/67d8d/twilio-logo-red.png 1300w",srcWebp:"/static/4604e21495fa01aedfb558ea5c7726d9/c6096/twilio-logo-red.webp",srcSetWebp:"/static/4604e21495fa01aedfb558ea5c7726d9/1932c/twilio-logo-red.webp 200w,\n/static/4604e21495fa01aedfb558ea5c7726d9/f4957/twilio-logo-red.webp 400w,\n/static/4604e21495fa01aedfb558ea5c7726d9/c6096/twilio-logo-red.webp 800w,\n/static/4604e21495fa01aedfb558ea5c7726d9/b6424/twilio-logo-red.webp 1200w,\n/static/4604e21495fa01aedfb558ea5c7726d9/7a36d/twilio-logo-red.webp 1300w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQI12N4J1fx7K1c+fZbCkUODEDwXq6CSd7AjoUBB5A3tGMGYnGgGhCbA4jloeIgzMZQrREew2VkESNoZJWoaGCXKmdoGwPEPkBJSyAG8W2AOARoQA0QVwFxgZyBbSRQzAEoHwbEWUBsB8QgPQ4MYobWnQoGdklAwzqBivqBGtqAOB4ouRDI7wXS04AGTAXSxUA6AYirgewMII4DqssD0tlAHA3EyUD10wGBkjM1WYlbmwAAAABJRU5ErkJggg==",aspectRatio:6.85,src:"/static/1b1a6eb7d67976126d0688fe4ddc9447/af144/vacuumlabs.png",srcSet:"/static/1b1a6eb7d67976126d0688fe4ddc9447/7c0ed/vacuumlabs.png 200w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/647de/vacuumlabs.png 400w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/af144/vacuumlabs.png 800w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/4fd33/vacuumlabs.png 822w",srcWebp:"/static/1b1a6eb7d67976126d0688fe4ddc9447/c6096/vacuumlabs.webp",srcSetWebp:"/static/1b1a6eb7d67976126d0688fe4ddc9447/1932c/vacuumlabs.webp 200w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/f4957/vacuumlabs.webp 400w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/c6096/vacuumlabs.webp 800w,\n/static/1b1a6eb7d67976126d0688fe4ddc9447/1730f/vacuumlabs.webp 822w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQY0y2Qv0sCUBSF39AgRYs0ZOG71/ckl1Aa2msIbXEJEWlQIQdJsx9CDUUFDU0tRuQqtPZH9Ue4BN2+Jz74OOe+e3gcnvubdSpuecpRsgWv21F0PYpsRq9ZfAWasAaSctGzE/ELL7qBv4SI33L2Wbffx9LEXt1KLl/UosgbizseO0A/0Hv0GA5hyjyGIf4G+jw+CF6f8Ffcj5w9B7PrjNnQ0bSaKalcBC+pZZdACr8HkRZzm7mPfsE+7JH7hjz+CGbsV509FH7mPVdL9XdUTqk+SYEgOkBvoQEd7s/RMZzB7uIrvJ4sM6ltFV7+AUipQjJUkYmgAAAAAElFTkSuQmCC",aspectRatio:5.47239263803681,src:"/static/ce80a2a40bdfd92d99d779c7f8d636c3/af144/zalando.png",srcSet:"/static/ce80a2a40bdfd92d99d779c7f8d636c3/7c0ed/zalando.png 200w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/647de/zalando.png 400w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/af144/zalando.png 800w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/b27f0/zalando.png 892w",srcWebp:"/static/ce80a2a40bdfd92d99d779c7f8d636c3/c6096/zalando.webp",srcSetWebp:"/static/ce80a2a40bdfd92d99d779c7f8d636c3/1932c/zalando.webp 200w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/f4957/zalando.webp 400w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/c6096/zalando.webp 800w,\n/static/ce80a2a40bdfd92d99d779c7f8d636c3/6e99a/zalando.webp 892w",sizes:"(max-width: 800px) 100vw, 800px"}}}},{node:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABR0lEQVQY02Mou/H2Wc3Dr/8annz7W3Xnw8viSy8CGaBA3yWEUcfWl0nbxpcJRMOwtq0PI5TNCBe3AYn7MjJUXn/9P2jqur/2TUv/pO67+b/q7sfHrrXTODXN3PQZyAHu3cv+uthq/JuULvyvdsmE/yX3/3wo3rpTQtPcfZqOnV8V0HU6QBeUALE9EJcBcY6OrY8i0EXlQLY1VKxM28anHuhyW4b63Rf+XTu06P//T1P+HXh44n/GlU8fWg8ekQIaOBloYDdQ8Vqg4hYgvQSI24HsLCC9AOi9NiC9GIjrQBhoWAHQ8laGGW///b/y6/+fa9///5nw4v//oisvnpz8/59Fy9IzGGhgBlCxNBCnA10EdI2PCtAgeSBtBNScDBS3AGJlHRsfJaBFUkBxE4a8Sy/e5F16/r/i6vP/+ZdffKi8/iaIgQIAAGJBmvTNcvXBAAAAAElFTkSuQmCC",aspectRatio:3.62882096069869,src:"/static/d0bf7d0f4f86e08c101442c505fb8994/af144/bonomi.png",srcSet:"/static/d0bf7d0f4f86e08c101442c505fb8994/7c0ed/bonomi.png 200w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/647de/bonomi.png 400w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/af144/bonomi.png 800w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/d157e/bonomi.png 831w",srcWebp:"/static/d0bf7d0f4f86e08c101442c505fb8994/c6096/bonomi.webp",srcSetWebp:"/static/d0bf7d0f4f86e08c101442c505fb8994/1932c/bonomi.webp 200w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/f4957/bonomi.webp 400w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/c6096/bonomi.webp 800w,\n/static/d0bf7d0f4f86e08c101442c505fb8994/af4e3/bonomi.webp 831w",sizes:"(max-width: 800px) 100vw, 800px"}}}}]}}}},472:function(a,e,t){"use strict";t(458),t(108),t(435);var c=t(0),A=t.n(c),s=t(55),n=t(8),i=t.n(n),d=(t(76),t(110),t(459)),b=t(107),l=t.n(b),o=function(a){var e=a.image,t=a.className,c=void 0===t?"":t;return A.a.createElement(s.b,{query:"1666836110",render:function(a){return a.source.edges.filter(function(a){return a.node.childImageSharp.fluid.src.includes(e)}).map(function(a,t){var s=a.node;return A.a.createElement(l.a,{className:c,fluid:s.childImageSharp.fluid,key:e})})},data:d})},r={big:[{name:"Mozilla",level:"big",link:"https://mozilla.com",image:"mozilla"}],med:[{name:"Twilio",level:"med",link:"https://twilio.com",image:"twilio-logo-red"},{name:"SuperCharge",level:"med",link:"https://supercharge.io/",image:"supercharge_logo17-with-text"},{name:"EPAM",level:"med",link:"https://www.epam.com/",image:"EPAM_LOGO_Primary"},{name:"Mito",level:"med",link:"https://mito.hu/",image:"mito"},{name:"Bonomi",level:"med",link:"https://bonomi.io/",image:"bonomi"},{name:"RisingStack",level:"med",link:"https://risingstack.com/",image:"risingstack"},{name:"Vacuumlabs",level:"med",link:"https://vacuumlabs.com/",image:"vacuumlabs"},{name:"Microsoft",level:"med",link:"https://microsoft.com/",image:"microsoft"}],sm:[{name:"Snyk",level:"sm",link:"https://snyk.io",image:"snyk-logo-black"}],scholarship:[{name:"SinnerSchrader",level:"scholarship",link:"https://sinnerschrader.com",image:"sinnerschrader"},{name:"Zalando",level:"scholarship",link:"https://jobs.zalando.com/tech/",image:"zalando"}],partners:[{name:"JSKongress",link:"https://js-kongress.com/",image:"js-kongress-munich-logo"},{name:"JSLeague",link:"https://www.jsleague.ro/",image:"jsleague-logo-flat"},{name:"IseeQ",link:"https://iseeq.co/",image:"iseeq_logo"}]},f=t(390),g=t.n(f),m=function(a){var e=a.link,t=a.image,c=a.name;return A.a.createElement("a",{href:e,title:c},A.a.createElement(o,{className:g.a.image,image:t,title:c}))};e.a=function(a){return A.a.createElement(A.a.Fragment,null,A.a.createElement("h1",{className:g.a.sponsor_subtitle},"Sponsors"),A.a.createElement("ul",{className:g.a.sponsor_list},r.big.map(function(a){return A.a.createElement("li",{className:g.a["sponsor_"+a.level],key:a.name},A.a.createElement(m,a))})),A.a.createElement("ul",{className:i()(g.a.sponsor_list,g.a.sponsor_list_medium)},r.med.map(function(a){return A.a.createElement("li",{className:g.a["sponsor_"+a.level],key:a.name},A.a.createElement(m,a))})),A.a.createElement("ul",{className:g.a.sponsor_list},r.sm.map(function(a){return A.a.createElement("li",{className:g.a["sponsor_"+a.level],key:a.name},A.a.createElement(m,a))})),A.a.createElement("h1",{className:g.a.sponsor_subtitle},"Scholarship Sponsors"),A.a.createElement("ul",{className:g.a.sponsor_list},r.scholarship.map(function(a){return A.a.createElement("li",{className:g.a.sponsor_scholarship,key:a.name},A.a.createElement(m,a))})),A.a.createElement("h1",{className:g.a.sponsor_subtitle},"Partners"),A.a.createElement("ul",{className:g.a.sponsor_list},r.partners.map(function(a){return A.a.createElement("li",{className:g.a.sponsor_partner,key:a.name},A.a.createElement(m,a))})))}},488:function(a){a.exports={data:{source:{edges:[{node:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAGma+ErheR0iItBT//EABwQAAICAgMAAAAAAAAAAAAAAAABAgMSEzEzQf/aAAgBAQABBQLWa3k6ifEHlYz2Paz/xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAEDAQE/AQyHJ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAABIUEQESD/2gAIAQEABj8CKeJeiHfP/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAERITFRsf/aAAgBAQABPyF5xKk9tLyeCbwhcg6Bfgij2GYaDaf/2gAMAwEAAgADAAAAEGwHPP/EABYRAQEBAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxClGh//xAAXEQEBAQEAAAAAAAAAAAAAAAABECEx/9oACAECAQE/EF2PZ//EABwQAQADAAMBAQAAAAAAAAAAAAEAESFBUWExsf/aAAgBAQABPxA6rF3x7MJzsrH0EvaoeMvFOwYnIN1zl+RW5MWgsA4B9It5/9k=",aspectRatio:1,src:"/static/8fee1c2c9fce13db043fc6053b07dc5f/8539d/paul_vm.jpg",srcSet:"/static/8fee1c2c9fce13db043fc6053b07dc5f/d278e/paul_vm.jpg 200w,\n/static/8fee1c2c9fce13db043fc6053b07dc5f/8539d/paul_vm.jpg 400w",sizes:"(max-width: 400px) 100vw, 400px"}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-bfc15ce4d3e05fa6531f.js.map