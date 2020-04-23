export default class Sign {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <article id="headlineSign">
    <div id="signText" onclick="navigateTo('home')"><p>At</p> <h1>Majas Livingroom</h1></div>

     <svg version="1.1" class="svgSign" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 548 653" style="enable-background:new 0 0 548 653;" xml:space="preserve">

<g>
<desc  xmlns:shape="http://adobe.com/products/shape"></desc>
<g>
 
   <path class="sign signBackground" d="M543.9,382.2c-2.7,89.3-7.9,178.5-15.5,267.6c-69.6-6.4-139.7-4.2-209.6-4.1c-104.3,0.3-208.6-4-312.9-8.3
     C5.7,553,5.4,468.6,5.2,384.2c0-0.9,0-1.8,0.5-2.5c0.7-1,2.2-1.2,3.4-1.3c25.7-1.4,51.3-2.8,77-2.4c3.3,0,6.7,0.1,10,0.3
     c19.7,0.7,39.3,2.7,59,3.6c44.8,1.9,89.6-1.7,134.5-4c50.4-2.5,100.9-3.1,151.4-1.9C475.4,376.8,509.7,378.5,543.9,382.2z"/>
   <path class="sign" d="M285.9,372.3c87.3-3.4,174.8-2,262,4.2c-1.9,89.6-6.9,179.2-15,268.4c-0.1,1.8-0.3,3.7-1.3,5.1
     c-0.6,0.9-1.4,1.5-2.4,1.9l-0.8-2.1c7.6-89.1,12.8-178.3,15.5-267.6c-34.2-3.7-68.5-5.4-102.9-6.2c-50.5-1.2-101-0.6-151.4,1.9
     c-44.9,2.3-89.7,5.9-134.5,4c-19.7-0.9-39.3-2.9-59-3.6c-3.3-0.1-6.7-0.2-10-0.3l0.1-2.7c65.8,1.2,131.6,0.7,197.5-1.6
     c0-0.4,0-0.8-0.1-1.3L285.9,372.3z"/>
   <path class="sign" d="M285.9,372.3l-2.4,0.1c-7.3-123.9-7-248.2,0.9-372C284.9,124.4,285.4,248.4,285.9,372.3z"/>
   <path class="sign" d="M318.8,645.7c69.9-0.1,140-2.3,209.6,4.1l0.8,2.1c-2,1-4.6,1.1-6.9,1.1c-173.8-2.6-347.7-5.1-521.5-7.7
     c-0.2-90.8-0.4-181.7-0.6-272.6c28.6,1.2,57.3,2.1,85.9,2.6l-0.1,2.7c-25.7-0.5-51.3,0.9-77,2.4c-1.2,0.1-2.7,0.3-3.4,1.3
     c-0.5,0.7-0.5,1.6-0.5,2.5C5.4,468.6,5.7,553,5.9,637.4C110.2,641.7,214.5,646,318.8,645.7z"/>
 
</g>
</g>

</svg>
</article>

<!--
<article class="signAndText hide">
    <button id="signPrevious" name="" onclick="navigateTo(this.name)"><p>Go to</p> <h1>Previous Frame</h1></button>
    <button id="signNext" name="" onclick="navigateTo(this.name)"><p>Go to</p> <h1>the next frame</h1></button>
    
</article>-->




    `;
  }


}