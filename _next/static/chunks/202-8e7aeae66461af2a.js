(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[202],{1860:(e,t,r)=>{"use strict";r.d(t,{Gk:()=>y,Q2:()=>v,v7:()=>f,Um:()=>_});var l=r(5155),n=r(5822),s=r(5055),o=r(9757),i=r(2465),a=r(1066),c=r(2115),d=r(1178),u=r(9110),h=r(994);function p(){return(0,l.jsxs)("svg",{width:"32",height:"33",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M20 26.0002H5L7.14285 12.0715L20 6.04834V26.0002Z",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.jsx)("path",{d:"M20 6.04834L25 10.1126L27 26.0002H20",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.jsx)("path",{d:"M16.5239 9.79013L16.5239 8.00974C16.5239 6.20552 15.2184 4.60759 13.3811 5.08582C10.9769 5.71158 10.2382 8.1223 10.2382 11.4349L10.2382 12.4651",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})]})}var g=r(5202),x=r(7290);function m(e){let{product:t,game:r}=e,{addProductToCard:n}=(0,g.Ay)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.wn,{children:[t.bonuses.map(e=>(0,l.jsx)(b,{bonus:e,is_active:r.is_active})),(0,l.jsx)(i.fh,{before:(0,l.jsx)("img",{alt:t.title,src:t.image_url,style:{maxHeight:50,padding:"Кристаллы"===t.title?0:5}}),disabled:!r.is_active,style:{background:"var(--tg-theme-section-bg-color)"},multiline:!0,subtitle:"Кристаллы"===t.title?t.title.replace("Кристаллы","Гемы"):t.description,children:(0,l.jsx)("span",{className:d.A.className,style:{fontSize:14},children:"Кристаллы"===t.title?t.description:t.title})}),(0,l.jsxs)(i.$n,{style:{fontFamily:"Roboto,Monaco"},stretched:!0,before:(0,l.jsx)(p,{}),onClick:()=>n(r.title,t),children:[(0,x.OX)(t.price.rub_total_e2),"\xa0",t.ribbons?(0,l.jsx)(i.Ex,{mode:"primary",type:"number",style:{borderRadius:4,margin:5,color:"var(--tg-theme-button-color)",backgroundColor:"var(--tg-theme-button-text-color)"},children:t.ribbons.startsWith("+")&&t.ribbons.endsWith("%")?t.ribbons.replace("+","-"):t.ribbons}):null]})]})})}function j(e){var t;let{product:r,game:s}=e,{addProductToCard:u}=(0,g.Ay)(),h=(0,x.Se)(null!==(t=r.countdown)&&void 0!==t?t:0,2," ","$$TIME","Истек","минута");return"CARD"===r.display_as?(0,l.jsx)(m,{product:r,game:s}):"PAIR_CARD"===r.display_as?(0,l.jsxs)("div",{style:{display:"flex",gap:10,width:"100%"},children:[(0,l.jsx)(i.wn,{style:{width:"100%"},children:(0,l.jsx)(m,{product:r.left,game:s})}),(0,l.jsx)(i.wn,{style:{width:"100%"},children:(0,l.jsx)(m,{product:r.right,game:s})})]}):"CARD_WITH_SECTIONS"===r.display_as?(0,l.jsxs)(i.Zp,{style:{marginTop:10,width:"100%",background:"var(--tg-theme-section-bg-color)"},children:[(0,l.jsx)(c.Fragment,{children:(0,l.jsxs)(a.d,{readOnly:!0,disabled:!s.is_active,className:d.A.className,multiline:!0,style:{fontSize:14,background:"var(--tg-theme-header-bg-color)"},children:[(0,l.jsx)("p",{className:d.A.className,children:r.title}),void 0!==r.countdown?(0,l.jsx)(i.vu,{readOnly:!0,style:{marginTop:10},children:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,l.jsx)(o.g,{icon:n.a$,style:{margin:1}}),(0,l.jsx)("span",{children:h})]})}):null]})},".0"),r.sections.map(e=>(0,l.jsx)(i.fh,{disabled:!s.is_active,before:(0,l.jsx)("img",{src:e.image_url,style:{maxHeight:40,margin:10}}),style:{background:"var(--tg-theme-section-bg-color)"},description:e.description,children:(0,l.jsx)("span",{className:d.A.className,style:{fontSize:12,color:"var(--tgui--text_color)"},children:e.title})})),(0,l.jsxs)(i.$n,{style:{fontFamily:"Roboto,Monaco",borderRadius:"0 0 12px 12px"},disabled:!s.is_active,stretched:!0,before:(0,l.jsx)(p,{}),onClick:()=>u(s.title,r),children:[(0,x.OX)(r.price.rub_total_e2),"\xa0",r.ribbons?(0,l.jsx)(i.Ex,{mode:"primary",type:"number",style:{borderRadius:4,margin:5,color:"var(--tg-theme-button-color)",backgroundColor:"var(--tg-theme-button-text-color)"},children:r.ribbons.startsWith("+")&&r.ribbons.endsWith("%")?r.ribbons.replace("+","-"):r.ribbons}):null]})]}):void l.Fragment}function b(e){let{bonus:t,is_active:r}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.fh,{before:(0,l.jsx)("img",{style:{maxHeight:20},src:t.image_url}),style:{background:"var(--tg-theme-section-bg-color)"},disabled:!r,children:(0,l.jsxs)("span",{className:d.A.className,style:{fontSize:10},children:[t.label.replace("кристаллов","гемов"),"\xa0\xa0",(0,l.jsx)("span",{style:{fontSize:12,backgroundColor:"var(--tg-theme-button-color)",padding:4,color:"var(--tg-theme-text-color)",borderRadius:5,fontWeight:"var(--tgui--font_weight--accent2)"},children:"Бонус"})]})})})}function f(){let{cardCheckout:e,removeProductFromCard:t}=(0,g.Ay)();return(0,l.jsx)(i.wn,{header:"Корзина",children:null==e?void 0:e.map(e=>(0,l.jsx)(i.fh,{before:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:20},children:[(0,l.jsx)(i.Ex,{type:"number",children:e.quantity}),(0,l.jsx)("img",{alt:"Dog",src:e.product.image_url,style:{maxHeight:40,padding:10}})]}),style:{background:"var(--tg-theme-section-bg-color)"},after:(0,l.jsx)(i.K0,{onClick:()=>t(e.product.product_id),size:"l",mode:"bezeled",style:{padding:10},children:(0,l.jsx)(o.g,{color:"var(--tg-theme-hint-color)",size:"lg",icon:s.yLS})}),multiline:!0,children:(0,l.jsx)("span",{className:d.A.className,style:{fontSize:10},children:e.product.title})}))})}function v(){let{cardCheckout:e}=(0,g.Ay)(),t=[];return(null==e||e.map(e=>{e.product.bonuses.map(e=>{t.push((0,l.jsx)(b,{bonus:e,is_active:!0}))})}),t.length>0)?(0,l.jsx)(i.wn,{header:"Бонусы",children:t}):null}function y(){var e;let{cardCheckout:t,totalCost:r}=(0,g.Ay)(),[n,s]=(0,c.useState)(!1),[o,a]=(0,c.useState)(0);return((0,c.useEffect)(()=>{let e=0;for(let r of null!=t?t:[])e+=r.quantity;a(e)}),null!==(e=null==t?void 0:t.length)&&void 0!==e&&e)?(0,l.jsx)(i.RT,{vertical:"bottom",style:{zIndex:100},children:(0,l.jsxs)(i.nD,{expanded:n,onChange:()=>{s(!n)},children:[(0,l.jsx)(h.X,{style:{background:"var(--tg-theme-section-bg-color)"},children:(0,l.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[(0,l.jsx)(p,{}),(0,l.jsx)("span",{children:(0,x.OX)(r)}),(0,l.jsx)(i.Ex,{mode:"primary",type:"number",children:o})]})}),(0,l.jsx)(u.u,{style:{backgroundColor:"var(--tg-theme-secondary-bg-color)"},children:(0,l.jsxs)(i.B8,{children:[(0,l.jsx)(f,{}),(0,l.jsx)(v,{})]})})]})}):null}function _(){let{games:e}=(0,g.Ay)();return(0,l.jsxs)("div",{style:{paddingTop:40,paddingBottom:60},children:[(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),e?e.map(e=>(0,l.jsxs)(i.B8,{children:[(0,l.jsxs)("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[(0,l.jsx)("img",{src:e.image_url,style:{maxHeight:40}}),(0,l.jsx)(i.hE,{style:{color:"var(--tgui--text_color)"},className:d.A.className,children:e.title})]}),(0,l.jsx)(i.cG,{}),e.products.map(t=>(0,l.jsx)(j,{product:t,game:e},"PAIR_CARD"===t.display_as?t.left.product_id:t.product_id))]},e.title)):(0,l.jsxs)(i.B8,{children:[(0,l.jsx)(i.EA,{visible:!0,children:(0,l.jsx)(i.fh,{subtitle:"That's live",children:"Hello!!!!"})}),(0,l.jsx)(i.cG,{}),[,,,].fill(0).map(e=>(0,l.jsx)(i.EA,{visible:!0,children:(0,l.jsxs)(i.wn,{children:[(0,l.jsx)(i.fh,{subtitle:"That's live",children:"Hello!!!!"}),(0,l.jsx)(i.fh,{subtitle:"That's live",children:"Hello!!!!"})]})}))]}),(0,l.jsx)(i.B8,{children:(0,l.jsx)(i.HL,{style:{color:"var(--tg-theme-hint-color)"},children:"Все игровые товары будут доставлены на аккаунт моментально. Для этого нужно выполнить вход в свой Supercell ID аккаунт."})}),(0,l.jsx)("br",{})]})}},6452:(e,t,r)=>{"use strict";r.d(t,{A:()=>x});var l=r(5155),n=r(6966),s=r(8867),o=r(6845),i=r(6555),a=r(5105),c=r(4563),d=r(9216),u=r(2259),h=r.n(u),p=r(2115),g=r(2465);let x=p.forwardRef((e,t)=>{let{label:r="Enter your pin",pinCount:u=4,className:x,value:m=[],cellColor:j,onChange:b,registerBackspace:f,...v}=e,y=Math.max(2,u),{handleClickValue:_,handleClickBackspace:w,setInputRefByIndex:C,value:k,handleButton:S}=(0,n.z)({value:m,onChange:b,pinCount:y});return(0,p.useEffect)(()=>{null==f||f(w)},[]),(0,l.jsxs)("section",{ref:t,className:(0,s.x)(h().wrapper,h()["wrapper--ios"],x),style:{backgroundColor:"var(--tgui--secondary_bg_color)"},...v,children:[(0,l.jsxs)("header",{className:h().header,style:{backgroundColor:"var(--tgui--secondary_bg_color)"},children:[(0,l.jsx)(g.$j,{className:h().title,weight:"2",children:r}),(0,l.jsx)("div",{className:h().cellsWrapper,children:Array.from({length:y}).map((e,t)=>(0,l.jsx)(o.C,{ref:e=>{e&&(console.log(123),e.style.backgroundColor=null!=j?j:"var(--tg-theme-link-color)"),C(t,e)},isTyped:t<k.length,value:k[t]||"",onKeyDown:e=>S(t,e.key),autoFocus:0===t,tabIndex:-1,readOnly:!0,style:{backgroundColor:"red"}},t))})]}),(0,l.jsx)("div",{className:h().buttonWrapper,style:{backgroundColor:"var(--tgui--secondary_bg_color)"},children:(0,d.L)(n.p,3).map(e=>(0,l.jsx)("div",{className:h().row,children:e.map(e=>{let t=e,r=()=>_(Number(e));return e===a.D.BACKSPACE&&(r=()=>w(),t=(0,l.jsx)(c.E,{className:h().backspaceIcon})),(0,l.jsx)(i.O,{onClick:r,style:{backgroundColor:"var(--tgui--bg_color)"},children:t},e)})},e.toString()))})]})})},3950:(e,t,r)=>{"use strict";r.d(t,{VI:()=>g,zS:()=>p});var l=r(5155),n=r(5822),s=r(9757),o=r(2465),i=r(2115),a=r(9697),c=r(9110),d=r(994),u=r(5202);function h(){let{selectedSupercellProfile:e,allSupercellProfiles:t,setIsEnterEmailModalOpened:r}=(0,u.Ay)();return null==t?void 0:t.map(t=>(0,l.jsx)(o.fh,{Component:"label",style:{backgroundColor:"var(--tg-theme-section-bg-color)"},before:(0,l.jsxs)("div",{style:{display:"flex",gap:10,alignItems:"center"},children:[(0,l.jsx)(o.nx,{defaultChecked:t.account_email===(null==e?void 0:e.account_email),name:"account",value:"2"}),(0,l.jsx)("img",{src:t.avatar_url,style:{height:60,borderRadius:"50%",padding:10}})]}),description:t.account_email,children:t.nickname},t.profile_id))}function p(){let{setIsEnterEmailModalOpened:e}=(0,u.Ay)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.wn,{header:"Выберите аккаунт",children:[(0,l.jsx)(h,{}),(0,l.jsx)(o.xM,{before:(0,l.jsx)(a.B,{}),onClick:()=>e(!0),children:"Подключить новый аккаунт"})]})})}function g(){let{selectedSupercellProfile:e,setIsEnterEmailModalOpened:t}=(0,u.Ay)(),[r,a]=(0,i.useState)(!1);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.RT,{vertical:"top",style:{zIndex:100},children:e?(0,l.jsxs)(o.nD,{expanded:r,onChange:()=>{a(!r)},children:[(0,l.jsx)(d.X,{style:{background:"var(--tg-theme-section-bg-color)"},children:(0,l.jsxs)("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[(0,l.jsx)("img",{src:e.avatar_url,style:{height:40,borderRadius:"50%"}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:e.nickname}),(0,l.jsx)("p",{style:{fontSize:"var(--tgui--caption1--font_size)",color:"var(--tg-theme-hint-color)"},children:e.account_email})]})]})}),(0,l.jsxs)(c.u,{style:{backgroundColor:"var(--tg-theme-secondary-bg-color)"},children:[(0,l.jsx)(o.B8,{children:(0,l.jsx)(p,{})}),(0,l.jsx)("br",{})]})]}):(0,l.jsx)(o.fh,{style:{background:"var(--tg-theme-section-bg-color)"},before:(0,l.jsx)(s.g,{icon:n.X46,size:"xl"}),multiline:!0,description:"Войдите в аккаунт Supercell ID, чтобы увидеть персональные предложения",onClick:()=>t(!0)})})})}},1178:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var l=r(7722);let n=r.n(l)()},5202:(e,t,r)=>{"use strict";r.d(t,{IK:()=>f,Ay:()=>v});var l=r(5155),n=r(2115),s=r(7290),o=r(2465),i=r(7170),a=r(7666),c=r(8875),d=r(1740),u=r(6452);function h(e){let{open:t,setOpen:r,enteredEmail:d}=e,{setIsEnterEmailModalOpened:h,refreshSupercellProfiles:p}=v(),[g,x]=(0,n.useState)([]),[m,j]=(0,n.useState)(!1),[b,f]=(0,n.useState)("var(--tg-theme-link-color)"),[y,_]=(0,n.useState)("Введите код из пиьсма");return(0,n.useEffect)(()=>{6!==g.length||m?f("var(--tg-theme-link-color)"):(j(!0),_("Проверяем код"),(0,s._C)("/approve-code",{method:"POST",body:JSON.stringify({email:d,code:g.map(e=>e.toString()).join("")})}).then(e=>e.json()).then(e=>{"ERR"===e.status?(window.Telegram.WebApp.showAlert(e.content.err_alert),"INVALID_CODE"===e.content.err_kind?_("Неверный код"):_("Произошла ошибка"),f("var(--tg-theme-destructive-text-color)")):(r(!1),h(!1),p()),j(!1)}).catch(e=>{console.log(e)}))},[g]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.aF,{header:(0,l.jsx)(a.r,{after:(0,l.jsx)(i.O,{children:(0,l.jsx)(c.i,{style:{color:"var(--tgui--plain_foreground)"}})}),children:"Вход в аккаунт"}),open:t,style:{zIndex:1e3,background:"var(--tg-theme-secondary-bg-color)"},nested:!0,onOpenChange:e=>r(e),children:[(0,l.jsx)("div",{children:(0,l.jsx)(u.A,{value:g,pinCount:6,color:"",onChange:e=>x(e),cellColor:b,label:(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5},children:[(0,l.jsx)("span",{style:{alignSelf:"start"},children:y}),m?(0,l.jsx)(o.y$,{style:{alignSelf:"center"},size:"s"}):null]})})}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]})})}function p(e){let{open:t,setOpen:r,setCodeModalOpen:u}=e,{isEnterCodeModalOpened:p,setIsEnterCodeModalOpened:g}=v(),[x,m]=(0,n.useState)(""),[j,b]=(0,n.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.aF,{header:(0,l.jsx)(a.r,{after:(0,l.jsx)(i.O,{children:(0,l.jsx)(c.i,{style:{color:"var(--tgui--plain_foreground)"}})}),children:"Вход в аккаунт"}),open:t,style:{zIndex:1e3,background:"var(--tg-theme-secondary-bg-color)"},nested:!0,onOpenChange:e=>r(e),children:[(0,l.jsxs)(o.B8,{children:[(0,l.jsx)(o.wn,{header:"Введите E-Mail",footer:(0,l.jsxs)(o.wn.Footer,{children:[(0,l.jsx)("span",{children:"Укажите E-Mail от вашего Supecell ID, чтобы войти в свой игровой аккаунт"}),j?(0,l.jsxs)("p",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"Подождите немного, отправляем вам код на почту..."})]}):null]}),children:(0,l.jsx)(o.pd,{value:x,onChange:e=>m(e.target.value),placeholder:"example@example.com"})}),(0,l.jsx)(o.$n,{stretched:!0,disabled:!(0,d.isValid)(x),loading:j,onClick:()=>{b(!0),(0,s._C)("/send-code",{method:"POST",body:JSON.stringify({email:x})}).then(e=>e.json()).then(e=>{"ERR"===e.status?window.Telegram.WebApp.showAlert(e.content.err_alert):u(!0),b(!1)}).catch(e=>{console.log(e)})},children:"Войти в аккаунт"})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{})]}),(0,l.jsx)(h,{open:p,setOpen:g,enteredEmail:x})]})}var g=r(3950),x=r(1860);function m(){return(0,l.jsxs)("svg",{width:"24",height:"30",fill:"none",viewBox:"0 0 97 120",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M0 26.12l14.532 25.975v15.844L.017 93.863 0 26.12z",fill:"#5B57A2"}),(0,l.jsx)("path",{d:"M55.797 42.643l13.617-8.346 27.868-.026-41.485 25.414V42.643z",fill:"#D90751"}),(0,l.jsx)("path",{d:"M55.72 25.967l.077 34.39-14.566-8.95V0l14.49 25.967z",fill:"#FAB718"}),(0,l.jsx)("path",{d:"M97.282 34.271l-27.869.026-13.693-8.33L41.231 0l56.05 34.271z",fill:"#ED6F26"}),(0,l.jsx)("path",{d:"M55.797 94.007V77.322l-14.566-8.78.008 51.458 14.558-25.993z",fill:"#63B22F"}),(0,l.jsx)("path",{d:"M69.38 85.737L14.531 52.095 0 26.12l97.223 59.583-27.844.034z",fill:"#1487C9"}),(0,l.jsx)("path",{d:"M41.24 120l14.556-25.993 13.583-8.27 27.843-.034L41.24 120z",fill:"#017F36"}),(0,l.jsx)("path",{d:"M.017 93.863l41.333-25.32-13.896-8.526-12.922 7.922L.017 93.863z",fill:"#984995"})]})}function j(e){let{open:t,setOpen:r}=e,{totalCost:n,selectedSupercellProfile:d,cardCheckout:u}=v();return(0,l.jsx)(o.aF,{header:(0,l.jsx)(a.r,{after:(0,l.jsx)(i.O,{children:(0,l.jsx)(c.i,{style:{color:"var(--tgui--plain_foreground)"}})}),children:"Оплата покупки"}),open:t,style:{zIndex:1e3,background:"var(--tg-theme-secondary-bg-color)"},nested:!0,onOpenChange:e=>r(e),children:(0,l.jsxs)(o.B8,{children:[(0,l.jsx)(x.v7,{}),(0,l.jsx)(x.Q2,{}),(0,l.jsx)(g.zS,{}),(0,l.jsxs)(o.wn,{header:"Оплатить покупку",footer:(0,l.jsx)(o.wn.Footer,{children:"Купленные товары будут доставлены на аккаунт моментально"}),children:[(0,l.jsx)(o.fh,{style:{background:"var(--tg-theme-section-bg-color)"},after:(0,l.jsx)("span",{style:{color:"var(--tg-theme-hint-color)"},children:(0,s.OX)(n)}),children:"Итого"}),(0,l.jsx)(o.$n,{before:(0,l.jsx)(m,{}),onClick:()=>{(0,s._C)("/create-payment-url",{method:"POST",body:JSON.stringify({profile_id:null==d?void 0:d.profile_id,cart:null==u?void 0:u.map(e=>({product_id:e.product.product_id,game:e.game,quantity:e.quantity}))})}).then(e=>e.json()).then(e=>{"ERR"===e.status||r(!1)}).catch(e=>{console.log(e)})},style:{backgroundColor:"white",color:"black"},stretched:!0,disabled:void 0===d,children:"СБП"})]})]})})}let b=n.createContext({selectedSupercellProfile:void 0,allSupercellProfiles:void 0,refreshSupercellProfiles:()=>{},isEnterEmailModalOpened:!1,setIsEnterEmailModalOpened:e=>{},isEnterCodeModalOpened:!1,setIsEnterCodeModalOpened:e=>{},games:void 0,cardCheckout:void 0,setCardCheckout:e=>{},totalCost:0,addProductToCard:(e,t)=>{},removeProductFromCard:e=>{}});function f(e){let[t,r]=(0,n.useState)(void 0),[o,i]=(0,n.useState)(void 0),[a,c]=(0,n.useState)(!1),[d,u]=(0,n.useState)(!1),[h,g]=(0,n.useState)(!1),[x,m]=(0,n.useState)(void 0),[f,v]=(0,n.useState)(void 0),[y,_]=(0,n.useState)(0);(0,n.useEffect)(()=>{h||window.Telegram.WebApp.MainButton.setParams({text:"Перейти к оплате"})}),(0,n.useEffect)(()=>{a||d||h?window.Telegram.WebApp.MainButton.hide():y&&window.Telegram.WebApp.MainButton.show()}),(0,n.useEffect)(()=>{w(null==t?void 0:t.profile_id)},[t]);let w=e=>{(0,s._C)("/fetch-games",{method:"POST",body:JSON.stringify({profile_id:e})}).then(e=>e.json()).then(e=>{"ERR"===e.status?window.Telegram.WebApp.showAlert(e.content.err_alert):m(e.content.games)}).catch(e=>{console.log(e)})},C=()=>{(0,s._C)("/fetch-profiles",{method:"POST"}).then(e=>e.json()).then(e=>{"ERR"===e.status?window.Telegram.WebApp.showAlert(e.content.err_alert):(console.log(e.content),i(e.content.profiles),r(e.content.profiles[0]))}).catch(e=>{console.log(e)})};return n.useEffect(()=>{C()},[]),(0,l.jsxs)(b.Provider,{value:{selectedSupercellProfile:t,allSupercellProfiles:o,refreshSupercellProfiles:C,isEnterEmailModalOpened:a,setIsEnterEmailModalOpened:c,isEnterCodeModalOpened:d,setIsEnterCodeModalOpened:u,games:x,cardCheckout:f,setCardCheckout:v,totalCost:y,addProductToCard:(e,t)=>{let r=null!=f?f:[],l=!0;for(let e of r)if(e.product.product_id===t.product_id){e.quantity+=1,l=!1;break}l&&r.push({quantity:1,product:t,game:e}),v(r);let n=0;for(let e of r)n+=e.quantity*(e.product.price.rub_total_e2/100);_(100*n),window.Telegram.WebApp.MainButton.setParams({text:"Оплатить покупку",has_shine_effect:!0}),window.Telegram.WebApp.MainButton.onClick(()=>g(!0)),n&&window.Telegram.WebApp.MainButton.show()},removeProductFromCard:e=>{let t=null!=f?f:[];for(let r of t)r.product.product_id===e&&(r.quantity-=1,0===r.quantity&&(t=t.filter(t=>t.product.product_id!==e)));console.log(t),v(t);let r=0;for(let e of t)r+=e.quantity*(e.product.price.rub_total_e2/100);_(100*r),r||(g(!1),window.Telegram.WebApp.MainButton.hide())}},children:[e.children,(0,l.jsx)(p,{open:a,setOpen:c,setCodeModalOpen:u}),(0,l.jsx)(j,{open:h,setOpen:g})]})}function v(){return n.useContext(b)}},7290:(e,t,r)=>{"use strict";r.d(t,{OX:()=>i,Se:()=>a,_C:()=>o});var l=r(1097),n=r(2115),s=r(2818);function o(e,t){var r,l,n,o,i;let a=null!==(o=null==t?void 0:t.headers)&&void 0!==o?o:new Headers;return a.set("Authorization",s.env.NEXT_PUBLIC_IS_DEV?"tma-nocheck ".concat(null===(r=window.Telegram)||void 0===r?void 0:r.WebApp.initData):"tma ".concat(null===(l=window.Telegram)||void 0===l?void 0:l.WebApp.initData)),a.set("X-Start-Param",null!==(i=null===(n=window.Telegram)||void 0===n?void 0:n.WebApp.initDataUnsafe.start_param)&&void 0!==i?i:"empty"),fetch(function(e){let t=s.env.NEXT_PUBLIC_IS_DEV?"https://pupercell-api-dev.wonky-dev.tw1.su":"https://api.pupercell-store.ru";return"".concat(t).concat(e)}(e),{...t,headers:a}).catch(e=>{var t;null===(t=window.Telegram)||void 0===t||t.WebApp.showAlert("Ошибка доступа к серверу. Попробуйте позже")})}function i(e){return"₽".concat((e/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))}function a(e,t,r,s,o,i){let[a,c]=(0,n.useState)(""),d=()=>{let n=new Date(e).getTime()/1e3-Date.now()/1e3,o=Math.floor(n/86400),a=Math.floor(n%86400/3600),d=Math.floor(n%86400%3600/60);var u=[];0!=o&&u.length<t&&u.push("".concat(o).concat((0,l.td)(o,"д","д","д"))),0!=a&&u.length<t&&u.push("".concat(a).concat((0,l.td)(a,"ч","ч","ч"))),0!=d&&u.length<t&&u.push("".concat(d).concat((0,l.td)(d,i,"м","м"))),0===u.length&&u.push("1 ".concat(i)),c(s.replace("$$TIME",u.join(r)))},u=setInterval(()=>{let t=new Date(e).getTime()/1e3;Date.now()/1e3<t?d():(clearInterval(u),c(o))},1e3);return a}},2259:e=>{e.exports={wrapper:"InlinePinInput_wrapper__U3Pgk",header:"InlinePinInput_header__eOVgE","wrapper--ios":"InlinePinInput_wrapper--ios__dy5Gx",title:"InlinePinInput_title__v4L3h",cellsWrapper:"InlinePinInput_cellsWrapper__rPhB4",buttonWrapper:"InlinePinInput_buttonWrapper__7Xja2",row:"InlinePinInput_row__B41dD",backspaceIcon:"InlinePinInput_backspaceIcon__rnRFO"}}}]);