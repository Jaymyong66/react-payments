import{j as e}from"./jsx-runtime-BnIj46N_.js";import{r as N}from"./index-CsdIBAqE.js";import{I as f}from"./Input-BkHCwWpR.js";import{u as d}from"./styled-components.browser.esm-rQ5VywVy.js";import{a as x,O as w,C as O}from"./CardPreview-DvySP8KT.js";const I=d.h2`
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
  color: ${({theme:r})=>r.colors.inputError};
`;function C({message:r}){return e.jsx(A,{children:r})}C.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{message:{required:!0,tsType:{name:"string"},description:""}}};const g={CARD_NUMBER_LENGTH:"네 자리 수를 입력해주세요",CARD_DATE_LENGTH:"두 자리 수를 입력해주세요",CARD_NAME_LENGTH:"1자 ~ 15자의 이름을 입력해주세요",NOT_NUMBER:"숫자만 입력해주세요",NOT_MONTH:"1~12월 중 하나를 입력해주세요",NOT_YEAR:"유효한 년도를 입력해주세요",NOT_ALPHABET:"영문자만 입력해주세요"},h=(r,i)=>{const o={isError:!1,message:""};return r.map(p=>{const u=p(i);if(u.isError===!0){o.isError=u.isError,o.message=u.message;return}}),o},E=r=>r.length!==0&&!Number.isInteger(Number(r))?{isError:!0,message:g.NOT_NUMBER}:{isError:!1,message:""},b=r=>r.length!==x.NUMBER_LENGTH?{isError:!0,message:g.CARD_NUMBER_LENGTH}:{isError:!1,message:""},T=r=>r.length!==x.DATE_LENGTH?{isError:!0,message:g.CARD_DATE_LENGTH}:{isError:!1,message:""},L=r=>Number(r)<x.MONTH_START||Number(r)>x.MONTH_END?{isError:!0,message:g.NOT_MONTH}:{isError:!1,message:""},V=r=>Number(r)<x.VALID_YEAR?{isError:!0,message:g.NOT_YEAR}:{isError:!1,message:""},y=r=>{const i=w;return r.length!==0&&!i.test(r)?{isError:!0,message:g.NOT_ALPHABET}:{isError:!1,message:""}},B=r=>r.length<1&&r.length>x.NAME_LENGTH?{isError:!0,message:g.CARD_NAME_LENGTH}:{isError:!1,message:""},D=d.div`
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
`;function _({cardNumbers:r,onChangeCardInfo:i}){const[o,p]=N.useState(""),u=(a,s)=>{const t=[...r],n=E(s);t[a].value=s,t[a].isError=n.isError,p(n.message),i(t,"cardNumbers")},m=(a,s)=>{const t=[...r],n=h([E,b],s);t[a].value=s,t[a].isError=n.isError,p(n.message),i(t,"cardNumbers")};return e.jsxs(D,{children:[e.jsxs("div",{children:[e.jsx(I,{children:"결제할 카드 번호를 입력해 주세요"}),e.jsx(R,{children:"본인 명의의 카드만 결제 가능합니다."})]}),e.jsxs(H,{children:[e.jsx(v,{htmlFor:"cardNumber1",children:"카드 번호"}),e.jsx(Y,{children:r.map((a,s)=>e.jsx(f,{id:`cardNumber${s+1}`,ariaLabel:`카드번호${s+1}`,maxLength:4,placeholder:"1234",value:a.value,isError:a.isError,onChangeInput:t=>u(s,t),onBlurInput:t=>m(s,t)}))}),e.jsx(C,{message:o})]})]})}_.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"CardInfoValue"}],raw:"CardInfoValue[]"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue[], inputId: string) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"CardInfoValue"}],raw:"CardInfoValue[]"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const G=d.div`
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
`;function M({cardExpirationMonth:r,cardExpirationYear:i,onChangeCardInfo:o}){const[p,u]=N.useState(""),m=n=>{const l=r,c=E(n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationMonth")},a=n=>{const l=r,c=h([E,T,L],n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationMonth")},s=n=>{const l=i,c=E(n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationYear")},t=n=>{const l=i,c=h([E,T,V],n);l.value=n,l.isError=c.isError,u(c.message),o(l,"cardExpirationYear")};return e.jsxs(G,{children:[e.jsxs("div",{children:[e.jsx(I,{children:"카드 유효기간을 입력해 주세요"}),e.jsx(R,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),e.jsxs(S,{children:[e.jsx(v,{htmlFor:"cardExpirationMonth",children:"유효기간"}),e.jsxs(q,{children:[e.jsx(f,{id:"cardExpirationMonth",ariaLabel:"유효기간 월",maxLength:2,placeholder:"MM",value:r.value,isError:r.isError,onChangeInput:n=>m(n),onBlurInput:n=>a(n)}),e.jsx(f,{id:"cardExpirationYear",ariaLabel:"유효기간 연도",maxLength:2,placeholder:"YY",value:i.value,isError:i.isError,onChangeInput:n=>s(n),onBlurInput:n=>t(n)})]}),e.jsx(C,{message:p})]})]})}M.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDate",props:{cardExpirationMonth:{required:!0,tsType:{name:"CardInfoValue"},description:""},cardExpirationYear:{required:!0,tsType:{name:"CardInfoValue"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue, inputId: string) => void",signature:{arguments:[{type:{name:"CardInfoValue"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const F=d.div`
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
`;function j({cardOwnerName:r,onChangeCardInfo:i}){const[o,p]=N.useState(""),u=a=>{const s=r,t=a.toUpperCase(),n=y(t);s.value=t,s.isError=n.isError,p(n.message),i(s,"cardOwnerName")},m=a=>{const s=r,t=a.toUpperCase(),n=h([y,B],a);s.value=t,s.isError=n.isError,p(n.message),i(s,"cardOwnerName")};return e.jsxs(F,{children:[e.jsx(I,{children:"카드 소유자 이름을 입력해 주세요"}),e.jsxs(U,{children:[e.jsx(v,{htmlFor:"cardOwnerName",children:"소유자 이름"}),e.jsx($,{children:e.jsx(f,{id:"cardOwnerName",maxLength:15,placeholder:"JOHN DOE",value:r.value,isError:r.isError,onChangeInput:a=>u(a),onBlurInput:a=>m(a)})}),e.jsx(C,{message:o})]})]})}j.__docgenInfo={description:"",methods:[],displayName:"CardOwnerName",props:{cardOwnerName:{required:!0,tsType:{name:"CardInfoValue"},description:""},onChangeCardInfo:{required:!0,tsType:{name:"signature",type:"function",raw:"(inputValue: CardInfoValue, inputId: string) => void",signature:{arguments:[{type:{name:"CardInfoValue"},name:"inputValue"},{type:{name:"string"},name:"inputId"}],return:{name:"void"}}},description:""}}};const z=d.div`
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
`;function P(){const[r,i]=N.useState({cardNumbers:[{value:"",isError:!1},{value:"",isError:!1},{value:"",isError:!1},{value:"",isError:!1}],cardExpirationMonth:{value:"",isError:!1},cardExpirationYear:{value:"",isError:!1},cardOwnerName:{value:"",isError:!1}}),o=(p,u)=>{i(m=>({...m,[u]:p}))};return e.jsxs(z,{children:[e.jsx(O,{cardInformation:r}),e.jsxs(K,{children:[e.jsx(_,{cardNumbers:r.cardNumbers,onChangeCardInfo:o}),e.jsx(M,{cardExpirationMonth:r.cardExpirationMonth,cardExpirationYear:r.cardExpirationYear,onChangeCardInfo:o}),e.jsx(j,{cardOwnerName:r.cardOwnerName,onChangeCardInfo:o})]})]})}P.__docgenInfo={description:"",methods:[],displayName:"CardEnrollForm"};export{P as C};
