const seed = {
requirements: [
{id:"REQ-CTRL-001",name:"Camera-relative movement",priority:"Must",status:"Planned",detail:"Player movement follows camera yaw; diagonal movement is normalized."},
{id:"REQ-CTRL-002",name:"Sprint and stamina",priority:"Must",status:"Planned",detail:"Sprint drains stamina; zero stamina blocks sprint until recovery rules allow it."},
{id:"REQ-INT-001",name:"Auxiliary power interaction",priority:"Must",status:"Planned",detail:"Panel prompt appears in range and activation changes power state once."},
{id:"REQ-MSN-001",name:"Objective progression",priority:"Must",status:"Planned",detail:"HUD objective advances exactly once when power is restored."},
{id:"REQ-AI-001",name:"Drone state machine",priority:"Must",status:"Planned",detail:"Patrol, investigate, pursue, search, and return transitions are repeatable."},
{id:"REQ-LVL-001",name:"Reachable level",priority:"Must",status:"Planned",detail:"All mandatory objectives are reachable without softlock."},
{id:"REQ-AUD-001",name:"Critical audio cues",priority:"Should",status:"Planned",detail:"Panel and drone alert use distinct, non-clipping audio feedback."},
{id:"REQ-UI-001",name:"Readable objective and prompt",priority:"Must",status:"Planned",detail:"HUD remains legible and prompts appear only for valid targets."},
{id:"REQ-NAR-001",name:"Anomalous ending reply",priority:"Must",status:"Planned",detail:"Final voice line and subtitle trigger once after transmission."},
{id:"REQ-TECH-001",name:"Packaged build smoke test",priority:"Must",status:"Planned",detail:"Clean launch, complete mission, and restart on target machine."}
],
sequences:[
{id:"SEQ-001",name:"Arrival & orientation",priority:"Must",status:"Planned",detail:"Docking Airlock · establish mood, controls, and immediate objective."},
{id:"SEQ-002",name:"Restore auxiliary power",priority:"Must",status:"Planned",detail:"Service Corridor · teach interaction and environmental reading."},
{id:"SEQ-003",name:"Security drone encounter",priority:"Must",status:"Planned",detail:"Service Corridor · evade or disable the drone."},
{id:"SEQ-004",name:"Open relay chamber",priority:"Must",status:"Planned",detail:"Unlock the route to the main objective."},
{id:"SEQ-005",name:"Transmit warning",priority:"Must",status:"Planned",detail:"Relay Chamber · activate communications console."},
{id:"SEQ-006",name:"Anomalous response",priority:"Must",status:"Planned",detail:"Deliver the narrative hook and complete the mission."}
],
assets:[
{id:"AST-CHR-001",name:"Field Operator character",priority:"Must",status:"Planned",detail:"Model, materials, skeleton, locomotion and interaction clips."},
{id:"AST-ENV-001",name:"Docking Airlock kit",priority:"Must",status:"Planned",detail:"Modular environment, collision, material instances."},
{id:"AST-ENV-002",name:"Service Corridor kit",priority:"Must",status:"Planned",detail:"Main traversal and drone encounter space."},
{id:"AST-ENV-003",name:"Relay Chamber kit",priority:"Must",status:"Planned",detail:"Console focal point, environment and lighting."},
{id:"AST-PROP-001",name:"Auxiliary power panel",priority:"Must",status:"Planned",detail:"Interactable, OFF/ON material states, SFX."},
{id:"AST-PROP-002",name:"Relay console",priority:"Must",status:"Planned",detail:"Activation states, display material, transmission feedback."},
{id:"AST-AI-001",name:"Security drone",priority:"Must",status:"Planned",detail:"Mesh, rig, sensor light, AI states."},
{id:"AST-AUD-001",name:"Power panel SFX",priority:"Must",status:"Planned",detail:"Clear activation sound that plays once."},
{id:"AST-BGM-001",name:"Station tension loop",priority:"Should",status:"Planned",detail:"Seamless loop that does not mask critical cues."},
{id:"AST-VO-001",name:"Final anomalous reply",priority:"Must",status:"Planned",detail:"Voice line and matching subtitle."}
],
qa:[
{id:"TST-001",name:"Camera-relative movement",priority:"Must",status:"Not Run",detail:"Move forward, rotate camera, move forward again; direction follows camera yaw."},
{id:"TST-002",name:"Sprint stamina behavior",priority:"Must",status:"Not Run",detail:"Drain to zero, release sprint, verify lockout and recovery."},
{id:"TST-003",name:"Power panel interaction",priority:"Must",status:"Not Run",detail:"Prompt appears in range; activation updates state once."},
{id:"TST-004",name:"Objective progression",priority:"Must",status:"Not Run",detail:"HUD changes to next objective exactly once."},
{id:"TST-005",name:"Drone state transitions",priority:"Must",status:"Not Run",detail:"Trigger detection and break line of sight; observe state transitions."},
{id:"TST-006",name:"Full level traversal",priority:"Must",status:"Not Run",detail:"Complete three playthroughs without softlock."},
{id:"TST-007",name:"Audio event feedback",priority:"Should",status:"Not Run",detail:"Panel and drone alert cues are distinct and do not clip."},
{id:"TST-008",name:"UI readability",priority:"Must",status:"Not Run",detail:"Test prompts and objective at target resolution."},
{id:"TST-009",name:"Ending trigger",priority:"Must",status:"Not Run",detail:"Final voice and subtitle trigger once after transmission."},
{id:"TST-010",name:"Packaged build smoke test",priority:"Must",status:"Not Run",detail:"Launch clean build, finish slice, and restart."}
],
gates:[
{id:"GATE-01",name:"Design ready",priority:"Must",status:"Planned",detail:"Story, scope, sequence list, requirements and risks approved."},
{id:"GATE-02",name:"Graybox complete",priority:"Must",status:"Planned",detail:"Full loop playable with placeholder assets."},
{id:"GATE-03",name:"Feature complete",priority:"Must",status:"Planned",detail:"All Must requirements implemented; no blocker/critical bugs."},
{id:"GATE-04",name:"Content and polish",priority:"Must",status:"Planned",detail:"Assets, audio, lighting, post-processing and performance validated."},
{id:"GATE-05",name:"Release candidate",priority:"Must",status:"Planned",detail:"Must tests pass; packaged build and release notes verified."}
]};
const labels={requirements:["TRACEABILITY","Requirements"],sequences:["SCREENPLAY","Sequence list"],assets:["CONTENT PIPELINE","Asset register"],qa:["VALIDATION","QA tests"],gates:["MILESTONES","Production gates"]};
let data=load();let active="requirements";let editing=null;
const $=s=>document.querySelector(s);
function load(){try{return JSON.parse(localStorage.getItem("uvs_data"))||structuredClone(seed)}catch(e){return structuredClone(seed)}}
function save(){localStorage.setItem("uvs_data",JSON.stringify(data));render()}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function slug(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
function renderMetrics(){let all=Object.values(data).flat(),done=all.filter(x=>["Pass","Complete","Approved","Done"].includes(x.status)).length;$("#metrics").innerHTML=[["TRACKED ITEMS",all.length,"Across all workstreams"],["COMPLETED",done,all.length?Math.round(done/all.length*100)+"% of tracked items":"0%"],["MUST-HAVE",all.filter(x=>x.priority==="Must").length,"Scope-critical items"],["QA PASSED",data.qa.filter(x=>x.status==="Pass").length,data.qa.length+" test cases"]].map(x=>`<div class="metric"><span>${x[0]}</span><strong>${x[1]}</strong><em>${x[2]}</em></div>`).join("")}
function render(){renderMetrics();let [ey,title]=labels[active];$("#sectionEyebrow").textContent=ey;$("#sectionTitle").textContent=title;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===active));let filter=$("#statusFilter").value,query=$("#searchInput").value.toLowerCase();let rows=data[active].filter(x=>(!filter||x.status===filter)&&Object.values(x).join(" ").toLowerCase().includes(query));let statuses=[...new Set(data[active].map(x=>x.status))];$("#statusFilter").innerHTML='<option value="">All statuses</option>'+statuses.map(s=>`<option ${s===filter?'selected':''}>${esc(s)}</option>`).join("");if(!rows.length){$("#tableWrap").innerHTML='<div class="empty">No matching items. Add an item or clear the filters.</div>';return}$("#tableWrap").innerHTML=`<table><thead><tr><th>ID</th><th>Name</th><th>Priority</th><th>Status</th><th>Notes / acceptance</th><th>Actions</th></tr></thead><tbody>${rows.map(x=>`<tr><td class="id">${esc(x.id)}</td><td><b>${esc(x.name)}</b></td><td>${esc(x.priority||"—")}</td><td><span class="pill ${slug(x.status)}">${esc(x.status)}</span></td><td>${esc(x.detail)}</td><td><div class="row-actions"><button data-edit="${esc(x.id)}">Edit</button><button data-delete="${esc(x.id)}">Delete</button></div></td></tr>`).join("")}</tbody></table>`}
function openEditor(item){editing=item?.id||null;$("#dialogTitle").textContent=editing?"Edit item":"Add item";let fields=[["id","ID","text"],["name","Name","text"],["priority","Priority","select",["Must","Should","Could"]],["status","Status","select",active==="qa"?["Not Run","Pass","Fail","Blocked"]:["Planned","In Progress","Blocked","Complete","Approved"]],["detail","Notes / acceptance","textarea"]];$("#formFields").innerHTML=fields.map(([key,label,type,opts])=>`<div class="field ${key==="detail"?"full":""}"><label for="f_${key}">${label}</label>${type==="select"?`<select id="f_${key}" name="${key}">${opts.map(o=>`<option ${item?.[key]===o?"selected":""}>${o}</option>`).join("")}</select>`:type==="textarea"?`<textarea id="f_${key}" name="${key}" rows="3">${esc(item?.[key]||"")}</textarea>`:`<input id="f_${key}" name="${key}" value="${esc(item?.[key]||"")}" ${key==="id"?"required":""}>`}</div>`).join("");$("#itemDialog").showModal()}
$("#itemForm").addEventListener("submit",e=>{if(e.submitter?.id!=="saveBtn")return;e.preventDefault();let item={};["id","name","priority","status","detail"].forEach(k=>item[k]=$(`#f_${k}`).value.trim());if(!item.id||!item.name)return;let arr=data[active],idx=arr.findIndex(x=>x.id===editing);if(idx>=0)arr[idx]=item;else if(arr.some(x=>x.id===item.id)){alert("That ID already exists in this section.");return}else arr.unshift(item);$("#itemDialog").close();save()});
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.tab;$("#searchInput").value="";$("#statusFilter").value="";render()}));
$("#addBtn").addEventListener("click",()=>openEditor(null));$("#searchInput").addEventListener("input",render);$("#statusFilter").addEventListener("change",render);
$("#tableWrap").addEventListener("click",e=>{let edit=e.target.closest("[data-edit]"),del=e.target.closest("[data-delete]");if(edit){openEditor(data[active].find(x=>x.id===edit.dataset.edit))}if(del&&confirm("Delete this item?")){data[active]=data[active].filter(x=>x.id!==del.dataset.delete);save()}});
$("#exportBtn").addEventListener("click",()=>{let blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="uvs_dashboard_backup.json";a.click();URL.revokeObjectURL(url)});
$("#resetBtn").addEventListener("click",()=>{if(confirm("Reset all dashboard data to the original demo data? This cannot be undone.")){data=structuredClone(seed);save()}});
render();
