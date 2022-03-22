import fetch from "node-fetch";
import randomstring from "randomstring";

async function bullshit(){
	while(true){
	var t = await fetch("https://mon-compte-ameli.info/nouvelle/carte", {
		method: "GET",
		credentials: "same-origin",
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0"
		}
	});
	console.log(t.status + " GOT");
	t = await fetch("https://mon-compte-ameli.info/nouvelle/carte/actions/avoir.php", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
			"Accept": "*/*",
			"Accept-Language": "en-GB,en;q=0.5",
			"Accept-Encoding": "gzip, deflate, br",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: {
			transport: randomstring.generate()
		}
	});
	console.log(t.status + " POSTED");
	}
}

async function bullshit2(){
while(true){
	var t = await fetch("https://mon-compte-ameli.info/nouvelle/carte", {
		method: "GET",
		credentials: "same-origin",
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0"
		}
	});
	console.log(t.status + " GOT 2");
	t = await fetch("https://mon-compte-ameli.info/nouvelle/carte/actions/card.php", {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0",
			"Accept": "*/*",
			"Accept-Language": "en-GB,en;q=0.5",
			"Accept-Encoding": "gzip, deflate, br",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: {
			input_cc_name: randomstring.generate(),
			input_cc_num: randomstring.generate(),
			input_cc_exp: randomstring.generate(),
			input_cc_cvv: randomstring.generate()
		}
	});
	console.log(t.status + " POSTED 2");
}
};

bullshit();
bullshit2();