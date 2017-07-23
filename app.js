contacts = require('./contacts.js');
console.log(contacts);

// build ul and li in load
function init(){
	var ul = document.createElement('ul');
	ul.setAttribute('class','list_contacts');
	contacts.forEach(function(entry) {
		var li = document.createElement('li');
		li.setAttribute('id',entry.id);
		li.setAttribute('type',entry.type);
		li.innerHTML += entry.name;
		if (entry.type == "Group") {
			li.setAttribute('onclick','BuildChildren(this)');
			li.setAttribute('class','close');
		}
		ul.appendChild(li);
	});
	document.getElementById("ph").appendChild(ul);
}


// get Object
function getObjects(obj, key, val) {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getObjects(obj[i], key, val));
		} else if (i == key && obj[key] == val) {
			objects.push(obj);
		}
	}
	return objects;
}


// build children if exists
function BuildChildren(build_children) {
	var obj = getObjects(contacts, 'id', build_children.id); // Returns an array of matching objects
	if (obj[0].type == "Group") {
		if (build_children.getAttribute('class') == "open") {
			var elem = document.getElementsByClassName(build_children.id);
			build_children.parentNode.removeChild(elem[0]);
			build_children.setAttribute('class','close');
			return;
		}
		else{
			build_children.setAttribute('class','open');
			var ul = document.createElement('ul');
			ul.setAttribute('class',build_children.id);
			obj[0].contacts.forEach(function(entry2) {
				var li = document.createElement('li');
				li.setAttribute('id',entry2.id);
				if (entry2.type == "Group") {
					li.setAttribute('onclick','BuildChildren(this)');
				}
				li.setAttribute('type',entry2.type);
				li.innerHTML += entry2.name;
				ul.appendChild(li);
			});
			var link = document.getElementById(build_children.id);
			link.parentNode.insertBefore(ul, link.nextSibling);
			return;
		}
		
	}

}