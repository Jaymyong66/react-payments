import{j as n}from"./jsx-runtime-BnIj46N_.js";import{r as l}from"./index-CsdIBAqE.js";import{a as i,b as X,O as Z,C as ee}from"./index-BTHClq8p.js";import{I as y}from"./Input-Dvrm8Fjs.js";import{u as s}from"./styled-components.browser.esm-rQ5VywVy.js";import{u as ne}from"./index-CEA_F9vQ.js";const q=e=>e.map(t=>t.validateMessage).find(t=>t!==""),De=s.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`,M=s.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
`,A=s.span`
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: rgba(139, 149, 161, 1);
`,B=s.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: rgba(10, 13, 19, 1);
`,te=s.div`
  height: 14px;
  font-family: NotoSansKR, Regular;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: ${({theme:e})=>e.colors.inputError};
`;function R({message:e}){return l.useEffect(()=>{},[e]),n.jsx(te,{children:e})}R.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{message:{required:!0,tsType:{name:"string"},description:""}}};const re=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ae=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,se=s.div`
  display: flex;
  gap: 10px;
`;function Y({cardNumbers:e}){const t=q(e);return n.jsxs(re,{children:[n.jsxs("div",{children:[n.jsx(M,{children:"결제할 카드 번호를 입력해 주세요"}),n.jsx(A,{children:"본인 명의의 카드만 결제 가능합니다."})]}),n.jsxs(ae,{children:[n.jsx(B,{htmlFor:"cardNumber1",children:"카드 번호"}),n.jsx(se,{children:e.map((r,o)=>n.jsx(y,{ref:e[o].ref,id:`cardNumber${o+1}`,ariaLabel:`카드번호${o+1}`,maxLength:i.NUMBER_LENGTH,placeholder:"1234",value:r.value,isError:r.validateMessage!=="",onChange:r.onChange,onBlur:r.onBlur},`cardNumber${o+1}`))}),n.jsx(R,{message:t||""})]})]})}Y.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"CardNumbersType"},description:""}}};const oe=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,ie=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,le=s.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function k({cardExpirationMonth:e,cardExpirationYear:t}){const r=q([e,t]);return n.jsxs(oe,{children:[n.jsxs("div",{children:[n.jsx(M,{children:"카드 유효기간을 입력해 주세요"}),n.jsx(A,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),n.jsxs(ie,{children:[n.jsx(B,{htmlFor:"cardExpirationMonth",children:"유효기간"}),n.jsxs(le,{children:[n.jsx(y,{id:"cardExpirationMonth",ref:e.ref,ariaLabel:"유효기간 월",maxLength:i.DATE_LENGTH,placeholder:"MM",value:e.value,isError:e.validateMessage!=="",onChange:e.onChange,onBlur:e.onBlur}),n.jsx(y,{id:"cardExpirationYear",ref:t.ref,ariaLabel:"유효기간 연도",maxLength:i.DATE_LENGTH,placeholder:"YY",value:t.value,isError:t.validateMessage!=="",onChange:t.onChange,onBlur:t.onBlur})]}),n.jsx(R,{message:r||""})]})]})}k.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDate",props:{cardExpirationMonth:{required:!0,tsType:{name:"UseInputReturn"},description:""},cardExpirationYear:{required:!0,tsType:{name:"UseInputReturn"},description:""}}};const de=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,ue=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ce=s.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function z({cardOwnerName:e}){return n.jsxs(de,{children:[n.jsx(M,{children:"카드 소유자 이름을 입력해 주세요"}),n.jsxs(ue,{children:[n.jsx(B,{htmlFor:"cardOwnerName",children:"소유자 이름"}),n.jsx(ce,{children:n.jsx(y,{id:"cardOwnerName",ref:e.ref,maxLength:i.NAME_LENGTH,placeholder:"JOHN DOE",value:e.value,isError:e.validateMessage!=="",onChange:e.onChange,onBlur:e.onBlur})}),n.jsx(R,{message:e.validateMessage||""})]})]})}z.__docgenInfo={description:"",methods:[],displayName:"CardOwnerName",props:{cardOwnerName:{required:!0,tsType:{name:"UseInputReturn"},description:""}}};const pe=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
`,fe=s.select`
  width: 100%;
  height: 30px;
  border: 1px solid ${({theme:e})=>e.colors.input};
  border-radius: 2.6px;
`;s.option``;function W({cardCompany:e}){const t=Object.values(X).map(r=>r.name);return n.jsxs(pe,{children:[n.jsxs("div",{children:[n.jsx(M,{children:"카드사를 선택해 주세요"}),n.jsx(A,{children:"현재 국내 카드사만 가능합니다."})]}),n.jsxs(fe,{ref:e.ref,name:"cardCompany",onChange:e.onChange,defaultValue:"",children:[n.jsx("option",{value:"",disabled:!0,children:"카드사를 선택해주세요."},"default"),t.map(r=>n.jsx("option",{value:r,children:r},r))]})]})}W.__docgenInfo={description:"",methods:[],displayName:"CardCompanySelect",props:{cardCompany:{required:!0,tsType:{name:"CardCompanyType"},description:""}}};const he=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`,ge=s.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`,xe=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,Ce=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,me=s.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function K({cardCVC:e,handlePreviewOnFocus:t,handlePreviewOnBlur:r}){return n.jsxs(xe,{children:[n.jsx(M,{children:"CVC"}),n.jsxs(Ce,{children:[n.jsx(B,{htmlFor:"cardCVC",children:"CVC"}),n.jsx(me,{children:n.jsx(y,{id:"cardCVC",ref:e.ref,maxLength:i.CVC_LENGTH,placeholder:"123",value:e.value,isError:e.validateMessage!=="",onChange:e.onChange,onBlur:o=>{e.onBlur(o),r()},onFocus:t})}),n.jsx(R,{message:e.validateMessage||""})]})]})}K.__docgenInfo={description:"",methods:[],displayName:"CardCVC",props:{cardCVC:{required:!0,tsType:{name:"UseInputReturn"},description:""},handlePreviewOnFocus:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handlePreviewOnBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const N={CARD_NUMBER_LENGTH:"네 자리 수를 입력해주세요",CARD_DATE_LENGTH:"두 자리 수를 입력해주세요",CARD_CVC_LENGTH:"세 자리 수를 입력해주세요",CARD_NAME_LENGTH:"1자 ~ 15자의 이름을 입력해주세요",CARD_PASSWORD_LENGTH:"비밀번호 앞 두자리 수를 입력해주세요",NOT_NUMBER:"숫자만 입력해주세요",NOT_MONTH:"1~12월 중 하나를 입력해주세요",NOT_YEAR:"유효한 년도를 입력해주세요",NOT_ALPHABET:"영문자 대문자만 입력해주세요",EMPTY_INPUT:"값을 입력해주세요"},d=e=>e.length!==0&&!Number.isInteger(Number(e))?N.NOT_NUMBER:"",T=e=>e.length!==i.NUMBER_LENGTH?N.CARD_NUMBER_LENGTH:"",b=e=>e.length!==i.DATE_LENGTH?N.CARD_DATE_LENGTH:"",G=e=>Number(e)<i.MONTH_START||Number(e)>i.MONTH_END?N.NOT_MONTH:"",P=e=>Number(e)<i.VALID_YEAR?N.NOT_YEAR:"",V=e=>{const t=Z;return e.length!==0&&!t.test(e)?N.NOT_ALPHABET:""},F=e=>e.length<1&&e.length>i.NAME_LENGTH?N.CARD_NAME_LENGTH:"",U=e=>e.length!==i.CVC_LENGTH?N.CARD_CVC_LENGTH:"",$=e=>e.length!==i.PASSWORD_LENGTH?N.CARD_PASSWORD_LENGTH:"",E=(e="",t={})=>{const[r,o]=l.useState(e),[g,u]=l.useState(""),x=l.useRef(null),{validateOnChange:C,validateOnBlur:a}=t,c=l.useCallback(v=>{const p=v.target.value;if(C){for(const m of C){const f=m(p);if(f!==""){o(p),u(f);return}}o(p),u("")}},[C]),h=l.useCallback(v=>{const p=v.target.value;if(p===""){u(N.EMPTY_INPUT);return}if(a)for(const m of a){const f=m(p);if(f!==""){u(f);return}}},[a]);return{value:r,ref:x,onChange:c,onBlur:h,validateMessage:g}},ve=(e="")=>{const[t,r]=l.useState(e),o=l.useRef(null);return{value:t,ref:o,onChange:u=>{const x=u.target.value;r(x)}}},Ne=(e,{cardNumbers:t,cardCompany:r,cardExpirationMonth:o,cardExpirationYear:g,cardOwnerName:u,cardCVC:x,cardPassword:C})=>{l.useEffect(()=>{var a;e[0]&&!e[1]&&t.every(c=>c.value==="")&&((a=t[0].ref.current)==null||a.focus())},[e,t]),l.useEffect(()=>{t.forEach((a,c)=>{var h;a.value.length===i.NUMBER_LENGTH&&c<t.length-1&&((h=t[c+1].ref.current)==null||h.focus())})},[t[0].value,t[1].value,t[2].value,t[3].value]),l.useEffect(()=>{var a;t[3].value.length===i.NUMBER_LENGTH&&((a=r.ref.current)==null||a.focus())},[r.value,o.ref,e[1]]),l.useEffect(()=>{var a;r.value!==""&&((a=o.ref.current)==null||a.focus())},[r.value,o.ref,e[2]]),l.useEffect(()=>{var a;o.value.length===i.DATE_LENGTH&&((a=g.ref.current)==null||a.focus())},[o.value]),l.useEffect(()=>{var a;g.value.length===i.DATE_LENGTH&&((a=u.ref.current)==null||a.focus())},[g.value,u.ref,e[3]]),l.useEffect(()=>{var a;x.value.length===i.CVC_LENGTH&&((a=C.ref.current)==null||a.focus())},[x.value,C.ref,e[5]])},Ee={CONFIRM:"/confirm"},Te=()=>{const[e,t]=l.useState([!0,!1,!1,!1,!1,!1,!1]),[r,o]=l.useState(!1),g=ne(),u=E("",{validateOnChange:[d,T],validateOnBlur:[d,T]}),x=E("",{validateOnChange:[d,T],validateOnBlur:[d,T]}),C=E("",{validateOnChange:[d,T],validateOnBlur:[d,T]}),a=E("",{validateOnChange:[d,T],validateOnBlur:[d,T]}),c=[u,x,C,a],h=ve(),v=E("",{validateOnChange:[d,G,b],validateOnBlur:[d,G,b]}),p=E("",{validateOnChange:[d,P,b],validateOnBlur:[d,P,b]}),m=E("",{validateOnChange:[V,F],validateOnBlur:[V,F]}),f=E("",{validateOnChange:[d,U],validateOnBlur:[d,U]}),w=E("",{validateOnChange:[d,$],validateOnBlur:[d,$]}),Q=_=>{_.preventDefault(),g(Ee.CONFIRM,{state:{cardCompany:h.value,firstCardNumber:c[0].value}})},j=_=>{const O=[...e];O[_]=!0,t(O)};return l.useEffect(()=>{const _=c.every(L=>L.value.length===i.NUMBER_LENGTH&&L.validateMessage===""),O=h.value!=="",H=[v,p].every(L=>L.value.length===i.DATE_LENGTH&&L.validateMessage===""),D=m.value!==""&&m.validateMessage==="",S=f.value!==""&&f.validateMessage==="",I=w.value!==""&&w.validateMessage==="";!e[1]&&_&&j(1),!e[2]&&O&&j(2),!e[3]&&H&&j(3),!e[4]&&D&&j(4),!e[5]&&S&&j(5),!e[6]&&I&&j(6),e[6]&&_&&O&&H&&D&&S&&I&&o(!0),e[6]&&!(_&&O&&H&&D&&S&&I)&&o(!1)},[e,c,h,v,p,m,f,w]),Ne(e,{cardNumbers:c,cardCompany:h,cardExpirationMonth:v,cardExpirationYear:p,cardOwnerName:m,cardCVC:f,cardPassword:w}),{step:e,cardNumbers:c,cardCompany:h,cardExpirationMonth:v,cardExpirationYear:p,cardOwnerName:m,cardCVC:f,cardPassword:w,isCompleted:r,handleSubmit:Q}},_e=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,je=s.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Oe=s.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function J({cardPassword:e}){return n.jsxs(_e,{children:[n.jsx(M,{children:"비밀번호를 입력해 주세요"}),n.jsx(A,{children:"앞의 2자리를 입력해주세요"}),n.jsxs(je,{children:[n.jsx(B,{htmlFor:"cardPassword",children:"비밀번호 앞 2자리"}),n.jsx(Oe,{children:n.jsx(y,{id:"cardPassword",ref:e.ref,type:"password",maxLength:i.PASSWORD_LENGTH,placeholder:"",value:e.value,isError:e.validateMessage!=="",onChange:e.onChange,onBlur:e.onBlur})}),n.jsx(R,{message:e.validateMessage||""})]})]})}J.__docgenInfo={description:"",methods:[],displayName:"CardPassword",props:{cardPassword:{required:!0,tsType:{name:"UseInputReturn"},description:""}}};const ye=s.button`
  width: 100%;
  height: 52px;
  background-color: ${e=>e.theme.colors.button};
  font-family: NotoSansKR, Regular;
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: 0;
  cursor: "pointer";
  transition: opacity 0.3s ease;

  &:hover {
    opacity: "0.6";
  }
`,Me=s(ye)`
  position: fixed;
  width: 376px;
  bottom: 0px;
  background-color: ${e=>e.disabled?e.theme.colors.input:e.theme.colors.button};
  cursor: ${e=>e.disabled?"default":"pointer"};

  &:hover {
    opacity: ${e=>e.disabled?"default":"0.6"};
  }
`;function Re(){const[e,t]=l.useState("front"),{step:r,cardNumbers:o,cardCompany:g,cardExpirationMonth:u,cardExpirationYear:x,cardOwnerName:C,cardCVC:a,cardPassword:c,isCompleted:h,handleSubmit:v}=Te(),p=()=>{t("back")},m=()=>{t("front")};return n.jsxs(he,{children:[n.jsx(ee,{cardNumbers:o.map(f=>f.value),cardCompany:g.value,cardExpirationMonth:u.value,cardExpirationYear:x.value,cardOwnerName:C.value,cardCVC:a.value,previewStatus:e}),n.jsxs(ge,{onSubmit:v,children:[r[5]&&n.jsx(J,{cardPassword:c}),r[4]&&n.jsx(K,{cardCVC:a,handlePreviewOnFocus:p,handlePreviewOnBlur:m}),r[3]&&n.jsx(z,{cardOwnerName:C}),r[2]&&n.jsx(k,{cardExpirationMonth:u,cardExpirationYear:x}),r[1]&&n.jsx(W,{cardCompany:g}),r[0]&&n.jsx(Y,{cardNumbers:o}),n.jsx(Me,{type:"submit",disabled:!h,style:{display:r[6]?"block":"none"},children:"확인"})]})]})}Re.__docgenInfo={description:"",methods:[],displayName:"CardEnrollForm"};export{ye as B,Re as C,De as T};
