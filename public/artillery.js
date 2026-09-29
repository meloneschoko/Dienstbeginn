(function renderArtillery(){
const data=window.artilleryData;
if(!data)return;
const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const date=value=>new Intl.DateTimeFormat("de-DE").format(new Date(value+"T12:00:00"));
const link=(url,label)=>`<a href="${esc(url)}" target="_blank" rel="noreferrer">${esc(label)} ↗</a>`;
const source=id=>link(data.sources[id][1],data.sources[id][0]);
const chip=text=>`<span class="artillery-status">${esc(text)}</span>`;
const figure=(id,eager=false)=>{
const im=data.images[id];return `<figure class="artillery-figure"><a href="${esc(im.path)}" target="_blank" rel="noreferrer" aria-label="${esc(im.alt)} – Bild vergrößern"><img src="${esc(im.path)}" width="${im.width}" height="${im.height}" loading="${eager?"eager":"lazy"}" decoding="async" alt="${esc(im.alt)}"></a><figcaption>${esc(im.caption)}<br>${esc(im.artist)} · ${link(im.licenseUrl||im.source,im.license)} · ${link(im.source,"Bildquelle")}</figcaption></figure>`;
};
const card=(title,body)=>`<article class="order-card"><h3>${esc(title)}</h3>${body}</article>`;
const dl=items=>`<dl class="artillery-facts">${items.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
const credits=()=>`<p class="artillery-date"><strong>Stand der Angaben:</strong> ${date(data.checkedOn)}</p><details class="order-card artillery-credits"><summary>Bildnachweise und Quellen</summary><h3>Öffentliche Fachquellen</h3><ul>${Object.keys(data.sources).map(k=>`<li>${source(k)}</li>`).join("")}</ul><h3>Bildnachweise</h3><ul>${Object.values(data.images).map(im=>`<li>${esc(im.caption)} ${esc(im.artist)} · ${link(im.source,"Original und Quelle")} · ${link(im.licenseUrl||im.source,im.license)}. ${esc(im.changes)} Abruf: ${date(im.retrieved)}.</li>`).join("")}</ul></details>`;
const staff=card("Aktuelle Dienstposten",`<p><strong>Zuletzt geprüft:</strong> ${data.staff.checkedOn?date(data.staff.checkedOn):"Aktualisierung ausstehend"}</p><dl class="artillery-facts">${data.staff.entries.map(e=>`<div><dt>${esc(e.role)}</dt><dd>${e.approved&&e.name?esc(e.name):"Aktualisierung ausstehend"}<small>${esc(e.assignment||"Batteriezuordnung noch zu bestätigen")}${e.approved&&e.checkedOn?" · geprüft am "+date(e.checkedOn):""}</small>${e.source?source(e.source):""}</dd></div>`).join("")}</dl>`);
document.querySelector("[data-artillery-unit]").innerHTML=`
<section class="order-card artillery-hero"><h3>RCH 155 (Remote Controlled Howitzer 155)</h3>${chip("Vorgesehen / in Einführung")}<p>Radgestützte Artillerie für die Mittleren Kräfte: Das neu aufgestellte Artilleriebataillon 215 in Augustdorf gehört zur Panzerbrigade 21 „Lipperland“ und damit zur 1. Panzerdivision.</p>${figure("rch155",true)}</section>
${card("Kurzprofil",dl(data.profile)+`<p>Die vorgesehene RCH 155 kombiniert das Fahrmodul des GTK Boxer mit einem automatisierten 155-Millimeter-Artilleriesystem. Die öffentlich genannte Reichweite von bis etwa 40 Kilometern ist system- und munitionsabhängig.</p><p>${chip("Perspektivisch geplant")} Unbemannte Systeme sollen künftig den Aufklärungs- und Wirkverbund ergänzen.</p>`)}
${card("Begriffe kurz erklärt",dl(data.terms))}
${staff}
<section aria-labelledby="artillery-timeline-title"><h3 id="artillery-timeline-title">Geschichte und Neuaufstellung</h3><ol class="artillery-timeline">${data.timeline.map(([year,title,text])=>`<li><span>${esc(year)}</span><div><h4>${esc(title)}</h4><p>${esc(text)}</p></div></li>`).join("")}</ol></section>
<div class="artillery-grid">${data.missions.map(([t,p])=>card(t,`<p>${esc(p)}</p>`)).join("")}</div>
<section aria-labelledby="artillery-gallery-title"><h3 id="artillery-gallery-title">Fahrzeuge und Systeme im Vergleich</h3><div class="artillery-grid">
${card("RCH 155",chip("Vorgesehen / in Einführung")+figure("rch155")+`<p>Für das Bataillon 215 vorgesehenes radgestütztes Hauptwaffensystem auf Boxer-Basis.</p>`)}
${card("GTK Boxer",chip("Aktuell eingeführt · Fahrzeugfamilie")+figure("boxer")+`<p>Das angepasste Boxer-Fahrmodul bildet die Plattform der RCH 155. Die gezeigte Transportvariante ist kein Nachweis über den Bestand des Bataillons 215.</p>`)}
${card("Panzerhaubitze 2000",chip("Aktuell eingeführt · Vergleichssystem")+figure("pzh2000")+`<p>Etabliertes Kettenfahrzeug der deutschen Rohrartillerie. Hier als technischer Vergleich dargestellt, nicht als reguläres Hauptsystem des neu aufgestellten Bataillons 215.</p>`)}
</div></section>${credits()}`;
document.querySelector("[data-artillery-general]").innerHTML=`
${card("Die Artillerietruppe des Heeres",`<p>Die Artillerie gehört zu den Kampfunterstützungstruppen. Sie unterstützt die Kampftruppe durch indirektes, weitreichendes Feuer gegen Punkt- und Flächenziele.</p><p>Zum System Artillerie gehören neben Geschützen und Raketenwerfern auch Beobachtung, Zielaufklärung, Führung, Datenübertragung und die Koordinierung der Feuerunterstützung.</p>`)}
<ol class="artillery-flow" aria-label="Zusammenspiel im System Artillerie"><li><strong>Aufklären</strong><span>Beobachtung, Radar und unbemannte Systeme liefern Informationen.</span></li><li><strong>Führen und koordinieren</strong><span>Informationen werden ausgewertet und Unterstützung abgestimmt.</span></li><li><strong>Wirken</strong><span>Geschütze und Raketenwerfer setzen angeordnete Feuerunterstützung um.</span></li></ol>
${card("Joint Fire Support Teams",`<p>Joint Fire Support Teams begleiten die Kampftruppe. Sie helfen, verfügbare boden- und luftgestützte Feuerunterstützung zu koordinieren und verbinden dabei unterschiedliche Fähigkeiten.</p>`)}
<section aria-labelledby="artillery-systems-title"><h3 id="artillery-systems-title">Fahrzeuge und Systeme</h3><div class="artillery-grid">${data.systems.map(s=>card(s.title,`${s.id?figure(s.id):'<div class="artillery-radar" aria-hidden="true">COBRA · ABRA<br>Aufklärung und Beobachtung</div>'}${dl([["Aufgabe",s.task],["Systemart",s.type]])}<p><strong>Status:</strong> ${chip(s.status)}</p><p>${source(s.source)}${s.id===null?" · "+source("abra"):""}</p>`)).join("")}</div></section>
<section aria-labelledby="artillery-locations-title"><h3 id="artillery-locations-title">Öffentliche Standorte und Verbände</h3><p>Garnisonsorte und öffentlich genannte Schwerpunkte. Aufbauvorhaben sind nicht mit vollständig eingeführten Fähigkeiten gleichzusetzen.</p><div class="artillery-grid artillery-locations">${data.locations.map(([name,city,system,id])=>card(name,dl([["Ort",city],["Hauptsystem / Schwerpunkt",system]])+`<p>${source(id)}</p>`)).join("")}</div><p>Für das Panzerartilleriebataillon 131 ist eine Verlegung nach Oberviechtach angekündigt; die geprüfte Verbandsübersicht nennt weiterhin Weiden. Die Übersicht führt deshalb Weiden als aktuellen Garnisonsort.</p><p>Die Verbände 455 und 95 werden in aktuellen Veröffentlichungen als Aufbauvorhaben beziehungsweise über neu gebildete Teilkräfte erwähnt. Ohne eindeutig bestätigten aktuellen Garnisonsort des Gesamtverbandes werden sie hier nicht als zusätzliche vollständige Standort-Einträge geführt.</p></section>${credits()}`;
const item=document.querySelector('.category-grid > a[href="#artilleriebataillon-215"]');
if(data.navigation.beforeHash){
const before=[...item.parentElement.children].find(e=>e.hash===data.navigation.beforeHash);
if(before)item.parentElement.insertBefore(item,before);
}
})();
