import{u as l,j as d}from"./styled-components.browser.esm-CH1WOJFx.js";const g=l.input`
  width: 100%;
  height: 15px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid
    ${e=>e.isError?e.theme.colors.inputError:e.theme.colors.input};

  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: ${({theme:e})=>e.colors.input};
  }
`;function m({id:e,type:n,maxLength:a,placeholder:o,value:s,ariaLabel:p,isError:u,onChangeInput:r,onBlurInput:i}){return d.jsx(g,{id:e,type:n||"text",maxLength:a,placeholder:o,value:s,"aria-label":p,isError:u,onChange:t=>{r&&r(t.target.value)},onBlur:t=>{i&&i(t.target.value)}})}m.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onChangeInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},onBlurInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""}},composes:["InputHTMLAttributes"]};export{m as I};
