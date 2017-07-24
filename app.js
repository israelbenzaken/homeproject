var contacts = [
	{
		id:1,
		name: "Friends",
		type: "Group",
		contacts: [
		{id:2, name: "Udi", type: "Contact"},
		{id:3, name: "Tommy", type: "Contact"},
		{
			id:6,
			name: "Old Friends",
			type: "Group",
			contacts: [
			{id:7, name: "Itay", type: "Contact"},
			]
		},
		]
	},
	{
		id:4,
		name: "Family",
		type: "Group",
		contacts: [
		{id:5, name: "Roni", type: "Contact"},
		]
	},
	{id: 8, name: "Ori", type: "Contact"},
	];

// build ul and li in load
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


