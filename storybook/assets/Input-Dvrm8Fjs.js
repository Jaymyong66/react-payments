import{j as u}from"./jsx-runtime-BnIj46N_.js";import{r as f}from"./index-CsdIBAqE.js";import{u as c}from"./styled-components.browser.esm-rQ5VywVy.js";const h=c.input`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${t=>t.isError?t.theme.colors.inputError:t.theme.colors.input};

  border-radius: 2.6px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: ${({theme:t})=>t.colors.input};
  }
`,o=f.forwardRef(({id:t,type:r,maxLength:e,placeholder:p,value:i,ariaLabel:n,isError:a,onChange:s,onBlur:x,onFocus:l,...d},m)=>u.jsx(h,{id:t,ref:m,type:r||"text",maxLength:e,placeholder:p,value:i,"aria-label":n,isError:a,onChange:s,onBlur:x,onFocus:l,...d}));o.displayName="Input";o.__docgenInfo={description:"",methods:[],displayName:"Input"};export{o as I};
