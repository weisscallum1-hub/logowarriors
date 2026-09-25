async function loadContent(){
  try{
    const response=await fetch('/content.json');
    if(!response.ok) throw new Error('content unavailable');
    const content=await response.json();
    document.querySelector('#collections').innerHTML=content.collections.map((item,index)=>`<article class="collection-card"><div class="collection-visual"><div class="collection-emblem" aria-hidden="true">${item.symbol}</div><span class="collection-label">${String(index+1).padStart(2,'0')} &nbsp; / &nbsp; ORIGINAL WORK</span></div><div class="collection-copy"><div><h3>${item.title}</h3><p>${item.theme} · ${item.note}</p></div><span class="collection-arrow" aria-hidden="true">↗</span></div></article>`).join('');
    document.querySelector('#listings').innerHTML=content.listings.map(item=>`<article class="listing-card ${item.featured?'featured-listing':''}"><span class="listing-kind">${item.kind}</span><h3>${item.name}</h3><p>${item.description}</p><small>${item.note}</small></article>`).join('');
    document.querySelector('#app-cards').innerHTML=content.apps.map(item=>`<article class="app-card"><div class="app-icon" aria-hidden="true">${item.symbol}</div><div><h3>${item.name}</h3><p>${item.description}</p><small>${item.status}</small></div><span class="app-arrow" aria-hidden="true">↗</span></article>`).join('');
    document.querySelectorAll('[data-email]').forEach(link=>{link.href=`mailto:${content.contactEmail}`;link.firstChild.textContent=content.contactEmail+' ';});
  }catch(error){console.error('Site content could not be loaded.',error)}
}
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');nav.classList.toggle('open',!expanded)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));
document.querySelector('#year').textContent=new Date().getFullYear();
loadContent();
