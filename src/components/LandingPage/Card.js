import React from "react"
import event1 from "./event1.jpg"
import event2 from "./event2.jpg"
import event3 from "./event3.jpg"

import './Card.css'
import Lottie from "lottie-react"
import Robot from './Robot.json'

// import { PRODUCTS } from "./eventassets"

const Card = () => {
    return (
        // <div>
        <div className="cards">
            <div className="card 1">
                <img src={event1} alt="" className="cardImage" />
                {/* <Lottie animationData={Robot}/> */}
                <div className="about-card">
                    <h1>EVENT 1</h1>
                    <span>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</span>
                </div>
            </div>
            <div className="card 2">
                <img src={event2} alt="" className="cardImage" />
                <div className="about-card">
                    <h1>EVENT 2</h1>
                    <span>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</span>
                </div>
            </div>
            <div className="card 3">
                <img src={event3} alt="" className="cardImage" />
                <div className="about-card">
                    <h1>EVENT 3</h1>
                    <span>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.​</span>
                </div>
            </div>

            {/* <section data-v-5e6923b3="" class="VueCarousel"><div class="VueCarousel-wrapper"><div role="listbox" class="VueCarousel-inner" style="transform: translate(0px, 0px); transition: transform 0.5s ease 0s; flex-basis: 312.5px; visibility: visible; height: auto;">
    
                    <div data-v-5e6923b3="" tabindex="-1" class="VueCarousel-slide VueCarousel-slide-active" data-index="0">
                            
                    <div data-v-5e6923b3="" class="slider-post"><div data-v-5e6923b3="" class="post-date">01 Nov</div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/build-an-x-clone-w-nuxt-ui-f6dd09cbf578?source=rss----99ddd8223b51---4" target="_blank" class="post-image" style="background-image: url(&quot;https://cdn-images-1.medium.com/max/1024/1*JTBwsHVOVVPMwfyOyh_hAw.jpeg&quot;);"></a></div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/build-an-x-clone-w-nuxt-ui-f6dd09cbf578?source=rss----99ddd8223b51---4" target="_blank" class="post-title"><h2 data-v-5e6923b3="">Build an X clone w/ Nuxt UI</h2></a></div><div data-v-5e6923b3="" class="author mt-2">Author: Vue Mastery</div><div data-v-5e6923b3="" class="read-more"><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/build-an-x-clone-w-nuxt-ui-f6dd09cbf578?source=rss----99ddd8223b51---4" target="_blank" class="btn btn-primary">Read the rest</a></div></div></div>

                    <div data-v-5e6923b3="" tabindex="-1" class="VueCarousel-slide VueCarousel-slide-active" data-index="1">
                        
                    <div data-v-5e6923b3="" class="slider-post"><div data-v-5e6923b3="" class="post-date">13 Oct</div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-2-603f593fcbc6?source=rss----99ddd8223b51---4" target="_blank" class="post-image" style="background-image: url(&quot;https://cdn-images-1.medium.com/max/1024/1*92rfqe0Pk7ITQNUmOdsJDA.png&quot;);"></a></div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-2-603f593fcbc6?source=rss----99ddd8223b51---4" target="_blank" class="post-title"><h2 data-v-5e6923b3="">Nuxt 3 Performance Pt 2</h2></a></div><div data-v-5e6923b3="" class="author mt-2">Author: Vue Mastery</div><div data-v-5e6923b3="" class="read-more"><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-2-603f593fcbc6?source=rss----99ddd8223b51---4" target="_blank" class="btn btn-primary">Read the rest</a></div></div></div>

                    <div data-v-5e6923b3="" tabindex="-1" class="VueCarousel-slide" data-index="2">
                        
                    <div data-v-5e6923b3="" class="slider-post"><div data-v-5e6923b3="" class="post-date">13 Oct</div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-1-vue-mastery-7de1318e663e?source=rss----99ddd8223b51---4" target="_blank" class="post-image" style="background-image: url(&quot;https://cdn-images-1.medium.com/max/1024/1*hwy0E4q_1JQRBKcHv_XQvw.png&quot;);"></a></div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-1-vue-mastery-7de1318e663e?source=rss----99ddd8223b51---4" target="_blank" class="post-title"><h2 data-v-5e6923b3="">Nuxt 3 Performance Pt 1 | Vue Mastery</h2></a></div><div data-v-5e6923b3="" class="author mt-2">Author: Vue Mastery</div><div data-v-5e6923b3="" class="read-more"><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/nuxt-3-performance-pt-1-vue-mastery-7de1318e663e?source=rss----99ddd8223b51---4" target="_blank" class="btn btn-primary">Read the rest</a></div></div></div>

                    <div data-v-5e6923b3="" tabindex="-1" class="VueCarousel-slide" data-index="3">
                        
                    <div data-v-5e6923b3="" class="slider-post">   
                    <div data-v-5e6923b3="" class="post-date">01 Sep</div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/exploring-the-nuxt-3-devtools-d4829ccf10bc?source=rss----99ddd8223b51---4" target="_blank" class="post-image" style="background-image: url(&quot;https://cdn-images-1.medium.com/max/1024/1*kzaGVgwsWSOg0Sz_6cxB5g.jpeg&quot;);"></a></div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/exploring-the-nuxt-3-devtools-d4829ccf10bc?source=rss----99ddd8223b51---4" target="_blank" class="post-title"><h2 data-v-5e6923b3="">Exploring the Nuxt 3 DevTools</h2></a></div><div data-v-5e6923b3="" class="author mt-2">Author: Vue Mastery</div><div data-v-5e6923b3="" class="read-more"><a data-v-5e6923b3="" href="https://medium.com/vue-mastery/exploring-the-nuxt-3-devtools-d4829ccf10bc?source=rss----99ddd8223b51---4" target="_blank" class="btn btn-primary">Read the rest</a></div></div></div>

                    <div data-v-5e6923b3="" tabindex="-1" class="VueCarousel-slide" data-index="4">
                        
                    <div data-v-5e6923b3="" class="slider-post"><div data-v-5e6923b3="" class="post-date">21 Sep</div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/js-dojo/work-with-vite-and-nx-af2e5a7558cb?source=rss----ee1a14b301d---4" target="_blank" class="post-image" style="background-image: url(&quot;https://cdn-images-1.medium.com/max/905/1*lMqnGaZxWJQT4bv5p-aSJQ.jpeg&quot;);"></a></div><div data-v-5e6923b3=""><a data-v-5e6923b3="" href="https://medium.com/js-dojo/work-with-vite-and-nx-af2e5a7558cb?source=rss----ee1a14b301d---4" target="_blank" class="post-title"><h2 data-v-5e6923b3="">Work with Vite and NX</h2></a></div><div data-v-5e6923b3="" class="author mt-2">Author: David Meir-Levy</div><div data-v-5e6923b3="" class="read-more"><a data-v-5e6923b3="" href="https://medium.com/js-dojo/work-with-vite-and-nx-af2e5a7558cb?source=rss----ee1a14b301d---4" target="_blank" class="btn btn-primary">Read the rest</a></div></div></div></div></div> 

                    <div data-v-438fd353="" class="VueCarousel-pagination" style=""><ul data-v-438fd353="" role="tablist" class="VueCarousel-dot-container">
                    <li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="true" class="VueCarousel-dot VueCarousel-dot--active" style="margin-top: 20px; padding: 10px;">
                    <button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 0" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(0, 0, 0);"></button></li>
                    <li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 1" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 2" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li>
                    <li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 3" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li>
                    <li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 4" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 5" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 6" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 7" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 8" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li><li data-v-438fd353="" aria-hidden="false" role="presentation" aria-selected="false" class="VueCarousel-dot" style="margin-top: 20px; padding: 10px;"><button data-v-438fd353="" type="button" role="button" aria-label="`Item ${index}`" title="Item 9" tabindex="0" class="VueCarousel-dot-button" style="width: 10px; height: 10px; background: rgb(239, 239, 239);"></button></li></ul></div>

                </section> */}


        

        </div>
        // </div>
    );
}

 
export default Card

