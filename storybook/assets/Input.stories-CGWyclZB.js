import{j as o}from"./jsx-runtime-BnIj46N_.js";import{r as y}from"./index-CsdIBAqE.js";import{I as a}from"./Input-CaLpF0GJ.js";const b={component:a},e={args:{placeholder:"1234",maxLength:4,type:"string"},argTypes:{maxLength:{options:[4,2],control:{type:"radio"}},type:{options:["string","number"],control:{type:"radio"}}},render:({...n})=>o.jsx(a,{...n})},x=({...n})=>{const[u,g]=y.useState(""),d=t=>(g(t),!1),h=t=>t.length<4;return o.jsx(a,{type:n.type,maxLength:n.maxLength,placeholder:n.placeholder,onChange:d,onBlur:h,value:u})},r={args:{type:"string",maxLength:4,placeholder:"1234"},argTypes:{type:{options:["string","number"],control:{type:"radio"}},maxLength:{options:[4,2],control:{type:"radio"}}},render:({...n})=>o.jsx(x,{...n})};var s,p,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: "1234",
    maxLength: 4,
    type: "string"
  },
  argTypes: {
    maxLength: {
      options: [4, 2],
      control: {
        type: "radio"
      }
    },
    type: {
      options: ["string", "number"],
      control: {
        type: "radio"
      }
    }
  },
  render: ({
    ...args
  }) => <Input {...args} />
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,l,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: "string",
    maxLength: 4,
    placeholder: "1234"
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: {
        type: "radio"
      }
    },
    maxLength: {
      options: [4, 2],
      control: {
        type: "radio"
      }
    }
  },
  render: ({
    ...args
  }) => <InputWithHooks {...args} />
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const j=["DefaultInput","NumberInput"];export{e as DefaultInput,r as NumberInput,j as __namedExportsOrder,b as default};
