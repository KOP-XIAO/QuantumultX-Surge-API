function Para(id) {
			var cnt=document.getElementById(id).value?id+"="+encodeURIComponent(document.getElementById(id).value):""
			return cnt
		}
function Output(id) {
	var cnt="https://dove.589669.xyz/all2quanx?"
	if(id!="QuantumultX"){
		cnt=id=="Surge"?"https://dove.589669.xyz/all2surge?":"https://dove.589669.xyz/all2clash?"
	}
	return cnt
}
function checked(id) {
	var cnt=document.getElementById(id).checked?id+"=1":""
	return cnt
}