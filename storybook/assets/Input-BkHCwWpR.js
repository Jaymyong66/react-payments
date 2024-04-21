import{j as l}from"./jsx-runtime-BnIj46N_.js";import{u as d}from"./styled-components.browser.esm-rQ5VywVy.js";const m=d.input`
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
`;function g({id:e,type:r,maxLength:a,placeholder:o,value:p,ariaLabel:s,isError:u,onChangeInput:n,onBlurInput:i}){return l.jsx(m,{id:e,type:r||"text",maxLength:a,placeholder:o,value:p,"aria-label":s,isError:u,onChange:t=>{n&&n(t.target.value)},onBlur:t=>{i&&i(t.target.value)}})}g.__docgenInfo={description:"",methods:[],displayName:"Input",props:{isError:{required:!0,tsType:{name:"boolean"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},onChangeInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""},onBlurInput:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string) => void",signature:{arguments:[{type:{name:"string"},name:"inputValue"}],return:{name:"void"}}},description:""}},composes:["InputHTMLAttributes"]};export{g as I};
