import{S as d,i as y}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const p="45272920-c2160489642e002ce9de87f86",m="https://pixabay.com/api/";async function h(s){const t=`${m}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");return e.json()}let i;function g(s){const t=document.querySelector(".gallery");t.innerHTML=s.map(e=>`
        <a href="${e.largeImageURL}" class="gallery__item">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery__image" />
            <div class="info">
                <p class="info-item"><b>Likes:</b> ${e.likes}</p>
                <p class="info-item"><b>Views:</b> ${e.views}</p>
                <p class="info-item"><b>Comments:</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
            </div>
        </a>
    `).join(""),i?i.refresh():i=new d(".gallery a")}function a(s,t="info"){y.show({message:s,position:"topRight",color:t})}function c(){const s=document.querySelector(".gallery");s.innerHTML=""}console.log("main.js loaded");const f=document.querySelector("#search-form"),b=f.querySelector('input[name="searchQuery"]'),l=document.querySelector(".loader");f.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(t===""){a("Please enter a search query","error"),c();return}l.style.display="block";try{const e=await h(t);l.style.display="none",e.hits.length===0?(a("Sorry, there are no images matching your search query. Please try again!","error"),c()):g(e.hits)}catch{l.style.display="none",a("An error occurred. Please try again later.","error"),c()}});
//# sourceMappingURL=commonHelpers.js.map
