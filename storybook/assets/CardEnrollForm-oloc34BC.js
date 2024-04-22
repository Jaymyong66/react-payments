import{u as d,j as r}from"./styled-components.browser.esm-CH1WOJFx.js";import{r as N}from"./index-CsdIBAqE.js";import{I as f}from"./Input-CI_2z5am.js";import{a as x,O as w,C as O}from"./CardPreview-C39Yh5WD.js";const I=d.h2`
  font-family: NotoSansKR, Regular;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
`,R=d.span`
  font-family: NotoSansKR, Regular;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: rgba(139, 149, 161, 1);
`,v=d.label`
  font-family: NotoSansKR, Regular;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: rgba(10, 13, 19, 1);
`,A=d.div`
  height: 14px;
  font-family: NotoSansKR, Regular;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13px;
  text-align: left;
  color: ${({theme:e})=>e.colors.inputError};
`;function C({message:e}){return r.jsx(A,{children:e})}C.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{message:{required:!0,tsType:{name:"string"},description:""}}};const g={CARD_NUMBER_LENGTH:"네 자리 수를 입력해주세요",CARD_DATE_LENGTH:"두 자리 수를 입력해주세요",CARD_NAME_LENGTH:"1자 ~ 15자의 이름을 입력해주세요",NOT_NUMBER:"숫자만 입력해주세요",NOT_MONTH:"1~12월 중 하나를 입력해주세요",NOT_YEAR:"유효한 년도를 입력해주세요",NOT_ALPHABET:"영문자만 입력해주세요"},h=(e,i)=>{const o={isError:!1,message:""};return e.map(p=>{const u=p(i);if(u.isError===!0){o.isError=u.isError,o.message=u.message;return}}),o},E=e=>e.length!==0&&!Number.isInteger(Number(e))?{isError:!0,message:g.NOT_NUMBER}:{isError:!1,message:""},b=e=>e.length!==x.NUMBER_LENGTH?{isError:!0,message:g.CARD_NUMBER_LENGTH}:{isError:!1,message:""},T=e=>e.length!==x.DATE_LENGTH?{isError:!0,message:g.CARD_DATE_LENGTH}:{isError:!1,message:""},L=e=>Number(e)<x.MONTH_START||Number(e)>x.MONTH_END?{isError:!0,message:g.NOT_MONTH}:{isError:!1,message:""},V=e=>Number(e)<x.VALID_YEAR?{isError:!0,message:g.NOT_YEAR}:{isError:!1,message:""},y=e=>{const i=w;return e.length!==0&&!i.test(e)?{isError:!0,message:g.NOT_ALPHABET}:{isError:!1,message:""}},B=e=>e.length<1&&e.length>x.NAME_LENGTH?{isError:!0,message:g.CARD_NAME_LENGTH}:{isError:!1,message:""},D=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=d.div`
  display: flex;
  gap: 10px;
`;function _({cardNumbers:e,onChangeCardInfo:i}){const[o,p]=N.useState(""),u=(a,s)=>{const t=[...e],n=E(s);t[a].value=s,t[a].isError=n.isError,p(n.message),i(t,"cardNumbers")},m=(a,s)=>{const t=[...e],n=h([E,b],s);t[a].value=s,t[a].isError=n.isError,p(n.message),i(t,"cardNumbers")};return r.jsxs(D,{children:[r.jsxs("div",{children:[r.jsx(I,{children:"결제할 카드 번호를 입력해 주세요"}),r.jsx(R,{children:"본인 명의의 카드만 결제 가능합니다."})]}),r.jsxs(H,{children:[r.jsx(v,{htmlFor:"cardNumber1",children:"카드 번호"}),r.jsx(Y,{children:e.map((a,s)=>r.jsx(f,{id:`cardNumber${s+1}`,ariaLabel:`카드번호${s+1}`,maxLength:4,placeholder:"1234",value:a.value,isError:a.isError,onChangeInput:t=>u(s,t),onBlurInput:t=>m(s,t)}))}),r.jsx(C,{message:o})]})]})}_.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"CardInfoValue"}],raw:"CardInfoValue[]"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue[], inputId: string) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"CardInfoValue"}],raw:"CardInfoValue[]"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const G=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,S=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,q=d.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function M({cardExpirationMonth:e,cardExpirationYear:i,onChangeCardInfo:o}){const[p,u]=N.useState(""),m=n=>{const l=e,c=E(n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationMonth")},a=n=>{const l=e,c=h([E,T,L],n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationMonth")},s=n=>{const l=i,c=E(n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationYear")},t=n=>{const l=i,c=h([E,T,V],n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationYear")};return r.jsxs(G,{children:[r.jsxs("div",{children:[r.jsx(I,{children:"카드 유효기간을 입력해 주세요"}),r.jsx(R,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),r.jsxs(S,{children:[r.jsx(v,{htmlFor:"cardExpirationMonth",children:"유효기간"}),r.jsxs(q,{children:[r.jsx(f,{id:"cardExpirationMonth",ariaLabel:"유효기간 월",maxLength:2,placeholder:"MM",value:e.value,isError:e.isError,onChangeInput:n=>m(n),onBlurInput:n=>a(n)}),r.jsx(f,{id:"cardExpirationYear",ariaLabel:"유효기간 연도",maxLength:2,placeholder:"YY",value:i.value,isError:i.isError,onChangeInput:n=>s(n),onBlurInput:n=>t(n)})]}),r.jsx(C,{message:p})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDate",props:{cardExpirationMonth:{required:!0,tsType:{name:"CardInfoValue"},description:""},cardExpirationYear:{required:!0,tsType:{name:"CardInfoValue"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue, inputId: string) => void",signature:{arguments:[{type:{name:"CardInfoValue"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const F=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,U=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=d.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;function j({cardOwnerName:e,onChangeCardInfo:i}){const[o,p]=N.useState(""),u=a=>{const s=e,t=a.toUpperCase(),n=y(t);s.value=t,s.isError=n.isError,p(n.message),i(s,"cardOwnerName")},m=a=>{const s=e,t=a.toUpperCase(),n=h([y,B],a);s.value=t,s.isError=n.isError,p(n.message),i(s,"cardOwnerName")};return r.jsxs(F,{children:[r.jsx(I,{children:"카드 소유자 이름을 입력해 주세요"}),r.jsxs(U,{children:[r.jsx(v,{htmlFor:"cardOwnerName",children:"소유자 이름"}),r.jsx($,{children:r.jsx(f,{id:"cardOwnerName",maxLength:15,placeholder:"JOHN DOE",value:e.value,isError:e.isError,onChangeInput:a=>u(a),onBlurInput:a=>m(a)})}),r.jsx(C,{message:o})]})]})}j.__docgenInfo={description:"",methods:[],displayName:"CardOwnerName",props:{cardOwnerName:{required:!0,tsType:{name:"CardInfoValue"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue, inputId: string) => void",signature:{arguments:[{type:{name:"CardInfoValue"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const z=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`,K=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;function P(){const[e,i]=N.useState({cardNumbers:[{value:"",isError:!1},{value:"",isError:!1},{value:"",isError:!1},{value:"",isError:!1}],cardExpirationMonth:{value:"",isError:!1},cardExpirationYear:{value:"",isError:!1},cardOwnerName:{value:"",isError:!1}}),o=(p,u)=>{i(m=>({...m,[u]:p}))};return r.jsxs(z,{children:[r.jsx(O,{cardInformation:e}),r.jsxs(K,{children:[r.jsx(_,{cardNumbers:e.cardNumbers,onChangeCardInfo:o}),r.jsx(M,{cardExpirationMonth:e.cardExpirationMonth,cardExpirationYear:e.cardExpirationYear,onChangeCardInfo:o}),r.jsx(j,{cardOwnerName:e.cardOwnerName,onChangeCardInfo:o})]})]})}P.__docgenInfo={description:"",methods:[],displayName:"CardEnrollForm"};export{P as C};
