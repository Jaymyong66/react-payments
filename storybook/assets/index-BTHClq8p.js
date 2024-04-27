import{j as e}from"./jsx-runtime-BnIj46N_.js";import{u as n}from"./styled-components.browser.esm-rQ5VywVy.js";import{t as u}from"./theme-BObh79Wh.js";const O={NUMBER_LENGTH:4,DATE_LENGTH:2,NAME_LENGTH:15,MONTH_START:1,MONTH_END:12,VALID_YEAR:24,CVC_LENGTH:3,PASSWORD_LENGTH:2},U=/^[A-Z\s]*$/,l={VISA:4,MASTER_START:51,MASTER_END:55},i={BC_CARD:{name:"BC카드",color:"rgba(240, 70, 81, 1)"},SHINHAN_CARD:{name:"신한카드",color:"rgba(0, 70, 255, 1)"},KAKAOBANK_CARD:{name:"카카오뱅크",color:"rgba(255, 230, 0, 1)"},HYUNDAIC_CARD:{name:"현대카드",color:"rgba(0, 0, 0, 1)"},WOORI_CARD:{name:"우리카드",color:"rgba(0, 123, 200, 1)"},LOTTE_CARD:{name:"롯데카드",color:"rgba(237, 28, 36, 1)"},HANA_CARD:{name:"하나카드",color:"rgba(0, 148, 144, 1)"},KOOKMIN_CARD:{name:"국민카드",color:"rgba(106, 96, 86, 1)"}},h=n.div`
  position: relative;
  width: 212px;
  height: 132px;
  background: rgba(213, 213, 213, 1);
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.cardPreviewText};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`,N=n.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 24px;
  width: 100%;
  min-height: 24px;
  background-color: rgba(203, 186, 100, 1);
`,f=n.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
  min-width: 38px;
`;function g({cardCVC:r}){return e.jsx(h,{children:e.jsx(N,{children:e.jsx(f,{children:r})})})}g.__docgenInfo={description:"",methods:[],displayName:"CardPreviewBack",props:{cardCVC:{required:!0,tsType:{name:"string"},description:""}}};const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAA5CAYAAABK3Rc8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAabSURBVHgB7ZxfSFtXHMdPgn+i2FgR19HOVn0wFbuiUMuq9GGdbgqjOtfWwShrGR1shXW0+weDPbi9DCy0g3WjtIh0g9mx1XYPdn/qVooKOlDULE36oLV0rA2SxMX/Mdn53uTGc8+9V/PnPPThfEBy/5zcm/O9v9/3/M5NvBbCMDIysjkvL+9UOBxuoatVRGLGqNVq7QmFQl0VFRVT6kaLuuB2uyFgZ05ODgQl2dnZJDMzk0i0rKysKH8zMzOEijlJN512OBw92KeIGRPyWlFRESkoKCCSxICg9C9CF1shqMXlcpXQkP2jsLCwhP4RSXL4fD7i9Xp98/PzZRl0/RhNZylkiiCTg8FgAR1n3qNBaW2WQqYHxhiq40ErXa7KyMggktSx2Wx4qYKYJCsri0hSRw1GK5EIQ4opECmmQKSYApFiCkSKKRAppkCkmAKRYgpEiikQKaZApJgCSfh20YN//GRgaHrdNvl2G2k8UJ7UMYq35ZPamh2G+2r3bifFWzdrts3+t0i+7xknTve/xHn3MQnMLirnfWZrPtm1c4tyfrwagff23vLotre17CYiSFjM/E02peM3b90jvX1u2vmAYbvPPmogJ47WGO7r+OoO6b4+rtl2/vOXCaHNu6lAHRfuaPb91Pm6Rkzsv3hliIqypGmHzzJx9xG52echV6+PkaFfTurOHaFfLrQe/05px2KhX9xUUvHNLkAyJJzmdiomIqj943oy/OvJWEfzde3QWTMG/uKikr5fjYqB4fu69moHEVH1hy4rYvJC8lSaiILj80IqUJEHh9fPuERJ2TMh7O8/vqkTFFGCzvN094yRBw+10dx4wBFf5jta6diiXEAAEQ2F4MC3g7V7dui2IyoRsUbg2zCnZ+NjJ0Jat9iR+ogsPj3RcYjN0m3QmbdidgD/4yOuLvb+AL0wF68Ma89rzyad5w/Fz4GLh3PCKip3PqU7D/yYtxfN53U9AWKC2prtum0YGFgxlcGFS6W25t2KB4MJ12PdMVRRnAYRiWOzx1ctiL+AKryQ9k3ZmovndD9SLoiaCamSdmkEj8KHY5lwawXAwMPT1vJsfNnILyvXGRDgcbhAicCnOKyg/cMGXbtEbGQj0hYTqc6PhANDa+Kg07192nIEPstGES8+e0yji+Wn5VDNixfIqU9+3lBU3quRDbAmzTEj0WxKFyFFOzuQAHYQQu3I++H77+yPL8MT+Y6wvgdhP2DasyB9ISrv2SpKVN7QevWR5mj1UMfYk6hBSIiYuwxMfzoWDR1fazuKqGx6Ya2wN/NElhNH92ouAA/EbDh8WVdF8F6NmhJejVwv3qadDLDZlCpCxETn+VSESPBCvhyKtl0z+gmD9DIa1CBm55evGta2YJyOyKw3IyrPchGL4yLN4ZvP7dGew6ykSwZhc/M6TgCkLvyKh4+wweEpXRuz2UgTtRNMGM7RWZORqFdvjMcF4cshCHjk4Nq00Wjk7x9Kr3gX9lOOfTUldKC5F183mnKqkcEy4eb8kinWzXiNDiAozusPX9L4Mfw3QNfxfn6eD19ErdttVrxHoiUSa0HJIkzMJnqD4dMvfouvG83d25q1NxQQPbwN8GKbYdYun9qNkuLf6AelgQ2mjU53eoOQMDHROb4Y1uxn5uEqRrVdHZN+x9/9QYk0tcBX0z862xnTnQvnQFT2D+m9OhHSnaML/cUWPM0sjYxGY6MPv4/x3v7haFk1kEAn4Yln3t6vROWlb/U3W8wGLjaDYBNYN2u7EULFhCeaiWlk+HxkssW60Xx9Pc7Qi4XIn37o13g3gMdi0OKB8I7as2vniURLpFTvbwq9095oYt7sPJyFjzi2WA/MJiYkPBL3RBH5RuUQasuXnjcfVNjPhUHq7zRmQkIjE5HVTm8O8/UaP/AADD586rMlESLZM3iapvp9pcxSByt4Iu4aVTqeViYLbMRDOKzzBbnZCI32+AzsDCydm8QWt9sdKSsrI/IHr6mD/76YnJyMyC/UBCLFFIgUUyBSTIFIMQUixRSIFFMgUkyBSDEFIsUUCMT0Ly8vE0nqhEIh5dVqsVhGl5YSv9Ul0bO4uEjvWEX+tK6urt4OBoNEkjo+ny9Cg7LLarPZzi0sLEzhEQmS5Ik9q2MqHA7ftpaWlvqpqq/QjX4paHJ4vV6I6aP6teIpMvGnx3g8niqa99fwiAm73U5yc3OJRA+NQMUjA4GA8vQYCFleXj6KfRa+scvlOkYbvEEXS4jEjCk812hubq6ruro6/sux/wEB0uxutkePDgAAAABJRU5ErkJggg==",M="data:image/png;base64,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",I=r=>Number(r[0])===l.VISA?v:Number(r.slice(0,2))>=l.MASTER_START&&Number(r.slice(0,2))<=l.MASTER_END?M:"",E=r=>r===i.BC_CARD.name?i.BC_CARD.color:r===i.SHINHAN_CARD.name?i.SHINHAN_CARD.color:r===i.KAKAOBANK_CARD.name?i.KAKAOBANK_CARD.color:r===i.HYUNDAIC_CARD.name?i.HYUNDAIC_CARD.color:r===i.WOORI_CARD.name?i.WOORI_CARD.color:r===i.LOTTE_CARD.name?i.LOTTE_CARD.color:r===i.HANA_CARD.name?i.HANA_CARD.color:r===i.KOOKMIN_CARD.name?i.KOOKMIN_CARD.color:u.cardThemeColor.default,j=n.div`
  width: 212px;
  height: 132px;
  background: ${r=>r.cardCompanyColor};
  border-radius: 4px;
  color: ${({theme:r})=>r.colors.cardPreviewText};
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
`,D=n.div`
  padding: 8px 12px 0;
  display: flex;
  justify-content: space-between;
`,w=n.div`
  width: 36px;
  height: 22px;
  background: ${({theme:r})=>r.colors.cardPreviewICColor};
  border: 0.5px solid ${({theme:r})=>r.colors.cardPreviewICBorder};
  border-radius: 4px;
`,b=n.img`
  width: 36px;
  height: 22px;
`,k=n.div`
  display: flex;
  flex-direction: column;
  padding: 14px 25px 12px 17px;
  gap: 8px;
`,x=n.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 20px;
  gap: 10px;
`,t=n.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
  min-width: 38px;
`,C=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,m=n.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({theme:r})=>r.colors.cardPreviewText};
`;function R({cardNumbers:r,cardCompany:s,cardExpirationMonth:a,cardExpirationYear:d,cardOwnerName:p}){const o=I(r[0]);return e.jsxs(j,{cardCompanyColor:E(s),children:[e.jsxs(D,{children:[e.jsx(w,{}),o&&e.jsx(b,{src:o})]}),e.jsxs(k,{children:[e.jsxs(x,{children:[e.jsx(t,{children:r[0]}),e.jsx(t,{children:r[1]}),e.jsx(C,{children:Array.from({length:r[2].length}).map((A,c)=>e.jsx(m,{},c))}),e.jsx(C,{children:Array.from({length:r[3].length}).map((A,c)=>e.jsx(m,{},c))})]}),e.jsx(x,{children:e.jsxs("div",{children:[e.jsx(t,{children:a}),a.length===2&&"/",e.jsx(t,{children:d})]})}),e.jsx(x,{children:e.jsx(t,{children:p})})]})]})}R.__docgenInfo={description:"",methods:[],displayName:"CardPreviewFront",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},cardCompany:{required:!0,tsType:{name:"string"},description:""},cardExpirationMonth:{required:!0,tsType:{name:"string"},description:""},cardExpirationYear:{required:!0,tsType:{name:"string"},description:""},cardOwnerName:{required:!0,tsType:{name:"string"},description:""}}};function y({cardNumbers:r,cardCompany:s,cardExpirationMonth:a,cardExpirationYear:d,cardOwnerName:p,cardCVC:o,previewStatus:A}){return e.jsxs(e.Fragment,{children:[A==="front"&&e.jsx(R,{cardNumbers:r,cardCompany:s,cardExpirationMonth:a,cardExpirationYear:d,cardOwnerName:p}),A==="back"&&e.jsx(g,{cardCVC:o})]})}y.__docgenInfo={description:"",methods:[],displayName:"CardPreview",props:{cardNumbers:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},cardCompany:{required:!0,tsType:{name:"string"},description:""},cardExpirationMonth:{required:!0,tsType:{name:"string"},description:""},cardExpirationYear:{required:!0,tsType:{name:"string"},description:""},cardOwnerName:{required:!0,tsType:{name:"string"},description:""},cardCVC:{required:!0,tsType:{name:"string"},description:""},previewStatus:{required:!0,tsType:{name:"union",raw:'"front" | "back"',elements:[{name:"literal",value:'"front"'},{name:"literal",value:'"back"'}]},description:""}}};export{y as C,U as O,O as a,i as b};
