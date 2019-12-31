for(let item in topics){
	console.log(item);
	console.log(to[item]);

}

const topicList = document.querySelector("#topicList");
topicList.innerHTML = "Hello";

//create item
const item = document.createElement("div");
item.innerHTML="Hello";
topicList.appendChild(item);

//create item
const rule = document.createElement("hr");
topicList.appendChild(rule);

//create item
const rule=document.createElement("label");
item.appendChild(label);

//create item
const checkbox =document.createElement("input");
checkbox.setAttribute("type","checkbox");
checkbox.setAttribute("name","topics");
label.appendChild(input);

//create label text
const labelText = document.createTextNode("HTML");
label.appendChild(labelText);

//create  metadata
const metadata = document.createElement("div");
metadata.innerHTML="Question Mastered:32/100";
metadata.ClassList.add("metadata");
progress.setAttribute("value",34);
progress.setAttribute("max",100);
item.appendChild(progress);
