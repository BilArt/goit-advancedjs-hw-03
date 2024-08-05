import{S as f,i as d}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const p="45272920-c2160489642e002ce9de87f86",y="https://pixabay.com/api/";async function m(s){const t=`${y}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");return e.json()}let i;function h(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(e=>`
        <a href="${e.largeImageURL}" class="gallery__item">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery__image" />
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${e.likes}</p>
                <p class="info-item"><b>Views:</b> ${e.views}</p>
                <p class="info-item"><b>Comments:</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </a>
    `).join(""),i?i.refresh():i=new f(".gallery a")}function a(s,t="info"){d.show({message:s,position:"topRight",color:t})}console.log("main.js loaded");const u=document.querySelector("#search-form"),g=u.querySelector('input[name="searchQuery"]'),c=document.querySelector(".loader");u.addEventListener("submit",async s=>{s.preventDefault();const t=g.value.trim();if(t===""){a("Please enter a search query","error");return}c.style.display="block";try{const e=await m(t);c.style.display="none",e.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!","error"):h(e.hits)}catch{c.style.display="none",a("An error occurred. Please try again later.","error")}});
//# sourceMappingURL=commonHelpers.js.map
