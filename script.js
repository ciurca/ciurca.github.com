// @raduciurca Github project aggregator
function pageTimeout() {
		document.getElementsByClassName("pageloader is-active")[0].setAttribute('class', 'pageloader');
}

setTimeout(pageTimeout, 3000);

$.getJSON("https://spreadsheets.google.com/feeds/list/15Qd-UuHy5Ze8zSmGaB9yv2BEpWiKAnAU3DM6BwTtxLY/od6/public/full?alt=json", data => {
		data.feed.entry.forEach(e => {
				var temp = document.getElementById('templateCard');
				var clon = temp.content.cloneNode(true);
				clon.getElementById('titleCard').innerHTML = e['gsx$title']['$t'];
				clon.getElementById('subtitleCard').innerHTML = e['gsx$subtitle']['$t'];
				clon.getElementById('footerCard').innerHTML += `<a href='${e['gsx$github']['$t']}' class="card-footer-item" target="_blank" id="linkId">Github</a>`
				if (e['gsx$site']['$t'] != ''){
						clon.getElementById('footerCard').innerHTML += `<a href='${e['gsx$site']['$t']}' class="card-footer-item" target="_blank" id="linkId">Site</a>`
				}
				document.getElementById("cardsList").appendChild(clon);
});
});
