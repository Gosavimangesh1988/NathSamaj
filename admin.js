/* ===================== MOCK DATA (demo/sample only, resets on reload) ===================== */
let USERS = [
  {id:1,first:"Ram",last:"Nath",email:"ram.nath@nathsamaj.org",role:2,roleName:"Admin",active:true,joined:"2023-02-10"},
  {id:2,first:"Meena",last:"Nath",email:"meena.nath@nathsamaj.org",role:3,roleName:"ContentManager",active:true,joined:"2023-04-18"},
  {id:3,first:"Suresh",last:"Nathwani",email:"suresh.n@nathsamaj.org",role:4,roleName:"EventManager",active:true,joined:"2023-06-02"},
  {id:4,first:"Kavita",last:"Nathrao",email:"kavita.r@nathsamaj.org",role:5,roleName:"MatrimonyModerator",active:false,joined:"2024-01-15"},
  {id:5,first:"Amit",last:"Nath",email:"amit.nath@gmail.com",role:6,roleName:"Member",active:true,joined:"2024-03-22"},
  {id:6,first:"Priya",last:"Nathani",email:"priya.n@gmail.com",role:6,roleName:"Member",active:true,joined:"2024-05-09"},
];
const ROLES = {1:"SuperAdmin",2:"Admin",3:"ContentManager",4:"EventManager",5:"MatrimonyModerator",6:"Member"};

let MEMBERS = [
  {id:1,name:"Amit Nath",city:"Pune",occ:"Software Engineer",mobile:"+91 98765 11111",email:"amit.nath@gmail.com",joined:"2024-03-22",status:"Active"},
  {id:2,name:"Priya Nathani",city:"Nashik",occ:"Bank Officer",mobile:"+91 98765 22222",email:"priya.n@gmail.com",joined:"2024-05-09",status:"Active"},
  {id:3,name:"Rahul Nathayya",city:"Mumbai",occ:"Bank Manager",mobile:"+91 98765 33333",email:"rahul.n@gmail.com",joined:"2024-06-14",status:"Active"},
  {id:4,name:"Sneha Nath",city:"Nagpur",occ:"Staff Nurse",mobile:"+91 98765 44444",email:"sneha.n@gmail.com",joined:"2024-07-01",status:"Pending"},
  {id:5,name:"Vikas Nathrao",city:"Pune",occ:"Chartered Accountant",mobile:"+91 98765 55555",email:"vikas.n@gmail.com",joined:"2024-08-19",status:"Active"},
];

let EVENTS = [
  {id:1,title:"Maha Shivratri Mahotsav",type:"Religious",date:"2026-08-14T18:00",endDate:"",location:"Nath Samaj Bhavan, Pune",status:"Upcoming",maxReg:500,fee:0,organizer:"Ram Nath Ji",organizerContact:"+91 98765 11111",desc:"Our grandest annual celebration featuring traditional aarti and cultural performances.",published:true,regOpen:true},
  {id:2,title:"Free Community Health Camp",type:"Social",date:"2026-08-03T09:00",endDate:"",location:"Community Hall, Nashik",status:"Upcoming",maxReg:300,fee:0,organizer:"Mohan Nath Ji",organizerContact:"+91 98765 66666",desc:"Free general check-ups, eye screening and blood tests by volunteer doctors.",published:true,regOpen:true},
  {id:3,title:"Guru Gorakhnath Jayanti",type:"Religious",date:"2026-09-05T17:30",endDate:"",location:"Nath Mandir, Mumbai",status:"Upcoming",maxReg:0,fee:0,organizer:"Committee Office",organizerContact:"info@nathsamaj.org",desc:"Special prayers and bhajan sandhya to commemorate the birth anniversary of Gorakshanath.",published:true,regOpen:false},
  {id:4,title:"Annual Cultural Program 2025",type:"Cultural",date:"2025-12-20T18:30",endDate:"",location:"Shivaji Auditorium, Pune",status:"Completed",maxReg:600,fee:100,organizer:"Meena Nath",organizerContact:"+91 98765 22222",desc:"An evening of classical dance, folk music and drama.",published:true,regOpen:false},
  {id:5,title:"Youth Sports Meet",type:"Sports",date:"2026-07-28T08:00",endDate:"",location:"Community Sports Ground, Nagpur",status:"Ongoing",maxReg:200,fee:0,organizer:"Suresh Nathwani",organizerContact:"+91 98765 33333",desc:"A weekend of cricket, kabaddi and athletics for community youth.",published:true,regOpen:false},
  {id:6,title:"Matrimonial Meet & Greet",type:"Social",date:"2026-08-24T16:00",endDate:"",location:"Grand Hall, Nashik",status:"Upcoming",maxReg:150,fee:200,organizer:"Kavita Nathrao",organizerContact:"+91 98765 77777",desc:"An informal gathering for registered matrimony profiles and their families.",published:false,regOpen:true},
];

let NEWS = [
  {id:1,title:"NathSamaj Launches New Scholarship Program for 2026-27",category:"Education",date:"2026-07-20",summary:"Expanded scholarship scheme covering school, college and vocational courses.",published:true},
  {id:2,title:"Grand Success of Annual Convention 2026",category:"Community",date:"2026-07-10",summary:"Over 3,000 members gathered in Pune for the three-day annual convention.",published:true},
  {id:3,title:"New Community Hall Inaugurated in Nashik",category:"Infrastructure",date:"2026-06-28",summary:"A new 5,000 sq. ft. community hall inaugurated for the Nashik chapter.",published:true},
  {id:4,title:"Health Camp Serves 500+ Families Across Two Cities",category:"Welfare",date:"2026-06-15",summary:"Free medical camps in Pune and Nashik served over 500 families.",published:true},
  {id:5,title:"Youth Wing Announces Skill Development Workshops",category:"Education",date:"2026-06-02",summary:"Free weekend workshops on digital marketing and interview skills.",published:false},
];

let ALBUMS = [
  {id:1,name:"Maha Shivratri 2025",cover:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500&auto=format&fit=crop",count:4,published:true},
  {id:2,name:"Annual Convention 2026",cover:"https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop",count:4,published:true},
  {id:3,name:"Community Health Camp",cover:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500&auto=format&fit=crop",count:4,published:true},
  {id:4,name:"Youth Sports Meet",cover:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500&auto=format&fit=crop",count:4,published:false},
];

let MATRIMONY = [
  {id:1,name:"Amit Nath",gender:"Male",age:29,city:"Pune",occ:"Software Engineer",status:"Approved",submitted:"2026-05-10"},
  {id:2,name:"Priya Nathani",gender:"Female",age:26,city:"Nashik",occ:"Bank Officer",status:"Approved",submitted:"2026-05-14"},
  {id:3,name:"Rahul Nathayya",gender:"Male",age:31,city:"Mumbai",occ:"Bank Manager",status:"Approved",submitted:"2026-05-20"},
  {id:4,name:"Sneha Nath",gender:"Female",age:24,city:"Nagpur",occ:"Staff Nurse",status:"Pending",submitted:"2026-07-22"},
  {id:5,name:"Vikas Nathrao",gender:"Male",age:28,city:"Pune",occ:"Chartered Accountant",status:"Pending",submitted:"2026-07-25"},
  {id:6,name:"Kavita Nath",gender:"Female",age:27,city:"Aurangabad",occ:"School Teacher",status:"Approved",submitted:"2026-06-02"},
];

let DONATIONS = [
  {id:1,donor:"Rajesh Nathani",email:"rajesh.n@gmail.com",amount:5000,method:"UPI",campaign:"Student Scholarship Fund",status:"Completed",date:"2026-07-25"},
  {id:2,donor:"Sunita Nath",email:"sunita.n@gmail.com",amount:2000,method:"UPI",campaign:"General",status:"Completed",date:"2026-07-24"},
  {id:3,donor:"Deepak Nathrao",email:"deepak.r@gmail.com",amount:10000,method:"Bank Transfer",campaign:"Nashik Community Hall",status:"Completed",date:"2026-07-20"},
  {id:4,donor:"Anita Nathwani",email:"anita.w@gmail.com",amount:1000,method:"UPI",campaign:"Flood Relief",status:"Pending",date:"2026-07-29"},
  {id:5,donor:"Mahesh Nath",email:"mahesh.n@gmail.com",amount:500,method:"Cash",campaign:"General",status:"Completed",date:"2026-07-18"},
  {id:6,donor:"Radha Nathayya",email:"radha.n@gmail.com",amount:2500,method:"UPI",campaign:"Student Scholarship Fund",status:"Failed",date:"2026-07-15"},
];

let BANNERS = [
  {id:1,title:"Maha Shivratri Mahotsav 2026",subtitle:"Join thousands of devotees for our grandest annual celebration",img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500&auto=format&fit=crop",order:1,active:true},
  {id:2,title:"5000+ Families, One Community",subtitle:"Connecting the Nath Sampradaya across India and beyond",img:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=500&auto=format&fit=crop",order:2,active:true},
  {id:3,title:"Support Our Welfare Initiatives",subtitle:"Your donation funds scholarships, health camps and relief",img:"https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=500&auto=format&fit=crop",order:3,active:false},
];

let CMS_PAGES = [
  {id:1,title:"About Us",slug:"about-us",updated:"2026-06-10",content:"NathSamaj is a vibrant community rooted in the ancient Nath tradition..."},
  {id:2,title:"Privacy Policy",slug:"privacy-policy",updated:"2026-02-01",content:"This privacy policy describes how NathSamaj collects and uses member data..."},
  {id:3,title:"Terms of Service",slug:"terms-of-service",updated:"2026-02-01",content:"By using this portal you agree to the following terms..."},
  {id:4,title:"Membership Guidelines",slug:"membership-guidelines",updated:"2026-04-15",content:"Guidelines for new members joining the NathSamaj community..."},
];

let BOARD_POSTS = [
  {id:1,type:"Job Opportunity",title:"Accountant Required — Mid-size Manufacturing Firm, Pune",by:"Suresh Nathwani",date:"2026-07-20",status:"Approved"},
  {id:2,type:"Matrimonial",title:"Match Sought for Nashik-based Groom, 30 yrs",by:"Ashok Nathwani",date:"2026-07-18",status:"Approved"},
  {id:3,type:"Lost & Found",title:"Found: Gold Chain near Community Hall, Pune",by:"Radha Nath",date:"2026-07-26",status:"Approved"},
  {id:4,type:"Accommodation",title:"2BHK Flat Available for Rent — Community Members Preferred",by:"Ganesh Nathrao",date:"2026-07-27",status:"Pending"},
  {id:5,type:"Business",title:"Community Directory of Businesses — Submissions Open",by:"Committee Office",date:"2026-07-10",status:"Approved"},
  {id:6,type:"Announcement",title:"Blood Donation Drive — Volunteers Needed",by:"Welfare Committee",date:"2026-07-29",status:"Pending"},
];

let INQUIRIES = [
  {id:1,name:"Ganesh Patil",email:"ganesh.p@gmail.com",mobile:"+91 90000 11111",subject:"Membership enquiry",message:"Hello, I recently moved to Pune and would like to know the process to register as a NathSamaj member. Please guide me on the documents required.",date:"2026-07-29T10:15",read:false},
  {id:2,name:"Shweta Deshmukh",email:"shweta.d@gmail.com",mobile:"",subject:"Venue booking for family function",message:"We would like to enquire about booking the community hall for a family function in September. Could you share the availability and charges?",date:"2026-07-28T16:40",read:false},
  {id:3,name:"Manoj Kale",email:"manoj.k@gmail.com",mobile:"+91 90000 22222",subject:"Donation receipt not received",message:"I made a donation of ₹2,000 last week via UPI but haven't received a receipt yet. Could you please check and send it across?",date:"2026-07-27T09:05",read:true},
  {id:4,name:"Anita Joshi",email:"anita.j@gmail.com",mobile:"",subject:"Scholarship application query",message:"My son is in 11th grade and I wanted to check if he is eligible for the education scholarship. What is the last date to apply?",date:"2026-07-25T14:22",read:true},
];

let SEVA_MANDALS = [
  {id:1,name:"Pune Central Seva Mandal",region:"Pune Region",year:"2026",
    members:[
      {id:1,name:"Shri Ram Nath Ji",role:"president",desig:"President",city:"Pune",mobile:"+91 98765 11111"},
      {id:2,name:"Smt. Meena Nath",role:"secretary",desig:"General Secretary",city:"Pune",mobile:"+91 98765 22222"},
      {id:3,name:"Shri Suresh Nath Ji",role:"treasurer",desig:"Treasurer",city:"Pune",mobile:"+91 98765 33333"},
      {id:4,name:"Shri Ganesh Nathrao",role:"member",desig:"Event Coordinator",city:"Pune",mobile:"+91 98765 44444"},
    ]},
  {id:2,name:"Nashik Seva Mandal",region:"Nashik Region",year:"2026",
    members:[
      {id:5,name:"Shri Mohan Nath Ji",role:"president",desig:"President",city:"Nashik",mobile:"+91 98765 66666"},
      {id:6,name:"Smt. Kavita Nathrao",role:"secretary",desig:"Secretary",city:"Nashik",mobile:"+91 98765 77777"},
    ]},
];

let SETTINGS = {
  siteName:"NathSamaj Community Portal",
  contactEmail:"info@nathsamaj.org",
  contactPhone:"+91 98765 43210",
  address:"NathSamaj Bhavan, Main Road, Pune – 411 001",
  facebook:"https://facebook.com/nathsamaj",
  instagram:"https://instagram.com/nathsamaj",
  youtube:"https://youtube.com/@nathsamaj",
  upiId:"nathsamaj@upi",
};

/* ===================== STATE ===================== */
let idSeq = 1000;
let state = {
  loggedIn:false,
  adminName:'',
  sidebarOpen:true,
  mobileSidebarOpen:false,
  section:'dashboard',
  modal:null,      // {type:'event'|'user'|..., item:{...}}
  usersSearch:'',
  membersSearch:'',
  donationsPage:1,
  inquiriesPage:1,
  activeSevaMandal:1,
  boardFilter:'All',
};

/* ===================== HELPERS ===================== */
function fmtDate(d){if(!d)return '—';const dt=new Date(d);return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});}
function fmtDateTime(d){const dt=new Date(d);return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})+', '+dt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}
function inr(n){return '₹'+Number(n||0).toLocaleString('en-IN');}
function escapeHtml(s){const d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toastT);window._toastT=setTimeout(()=>t.classList.remove('show'),2600);}
function nextId(){return ++idSeq;}

function openModal(type,item){state.modal={type,item:item?JSON.parse(JSON.stringify(item)):{}};render();}
function closeModal(){state.modal=null;render();}
function setSection(s){state.section=s;state.mobileSidebarOpen=false;render();window.scrollTo({top:0});}
function toggleSidebar(){
  if(window.innerWidth<=820){state.mobileSidebarOpen=!state.mobileSidebarOpen;}
  else{state.sidebarOpen=!state.sidebarOpen;}
  render();
}
function demoLogin(){
  const name = document.getElementById('loginId').value;
  state.loggedIn = true;
  state.adminName = name ? name.split('@')[0] : 'Admin';
  toast('Welcome, '+state.adminName+'!');
  render();
}
function logout(){state.loggedIn=false;state.section='dashboard';toast('Logged out');render();}

/* ===================== SIDEBAR CONFIG ===================== */
const NAV_ITEMS = [
  {id:'dashboard',icon:'📊',label:'Dashboard'},
  {id:'users',icon:'👥',label:'Users'},
  {id:'members',icon:'🧑‍🤝‍🧑',label:'Members'},
  {id:'events',icon:'🎉',label:'Events'},
  {id:'news',icon:'📰',label:'News'},
  {id:'gallery',icon:'🖼️',label:'Gallery'},
  {id:'matrimony',icon:'💍',label:'Matrimony'},
  {id:'donations',icon:'🙏',label:'Donations'},
  {id:'banners',icon:'🖼',label:'Banners'},
  {id:'cms',icon:'📝',label:'CMS Pages'},
  {id:'posts',icon:'📋',label:'Community Posts'},
  {id:'contact',icon:'✉️',label:'Contact Inquiries'},
  {id:'sevamandal',icon:'🙏',label:'Seva Mandal'},
  {id:'settings',icon:'⚙️',label:'Settings'},
];
const SECTION_TITLES = Object.fromEntries(NAV_ITEMS.map(n=>[n.id,n.label]));

/* ===================== ROOT RENDER ===================== */
function render(){
  const app = document.getElementById('app');
  if(!state.loggedIn){ app.innerHTML = renderLogin(); return; }
  app.innerHTML = `
  <div class="admin-shell">
    <aside class="admin-sidebar ${state.sidebarOpen?'':'collapsed'} ${state.mobileSidebarOpen?'mobile-open':''}">
      <div class="sidebar-header"><span class="sidebar-logo">🕉️</span>${(state.sidebarOpen||state.mobileSidebarOpen)?'<span class="sidebar-title">NathSamaj Admin</span>':''}</div>
      <nav class="sidebar-nav">
        ${NAV_ITEMS.map(n=>`<a class="sidebar-link ${state.section===n.id?'active':''}" onclick="setSection('${n.id}')" href="#"><span class="s-icon">${n.icon}</span>${(state.sidebarOpen||state.mobileSidebarOpen)?`<span>${n.label}</span>`:''}</a>`).join('')}
      </nav>
      <div class="sidebar-footer">
        <a class="sidebar-link" href="index.html"><span class="s-icon">🏠</span>${(state.sidebarOpen||state.mobileSidebarOpen)?'<span>Main Site</span>':''}</a>
        <button class="sidebar-link sidebar-logout" onclick="logout()"><span class="s-icon">🚪</span>${(state.sidebarOpen||state.mobileSidebarOpen)?'<span>Logout</span>':''}</button>
      </div>
    </aside>
    <div class="admin-main">
      <header class="admin-topbar">
        <button class="sidebar-toggle" onclick="toggleSidebar()">☰</button>
        <span class="admin-topbar-title">${SECTION_TITLES[state.section]||'Admin Panel'}</span>
        <span class="admin-user">${escapeHtml(state.adminName)}</span>
      </header>
      <div class="admin-body" id="adminBody">${renderSection()}</div>
    </div>
  </div>
  ${state.modal?renderModal():''}
  `;
}

function renderLogin(){
  return `<div class="admin-login-wrap"><div class="admin-login-card">
    <div class="admin-login-icon">🕉️</div>
    <h4 class="text-brown fw-bold mb-1">NathSamaj Admin</h4>
    <p class="text-muted-ns small mb-4">Sign in to manage the community portal</p>
    <div class="mb-3 text-start"><label class="form-label">Email</label><input type="text" class="ns-input" id="loginId" placeholder="admin@nathsamaj.org"></div>
    <div class="mb-4 text-start"><label class="form-label">Password</label><input type="password" class="ns-input" id="loginPw" placeholder="••••••••"></div>
    <button class="btn-saffron w-100 justify-content-center" onclick="demoLogin()">Login</button>
    <p class="text-muted-ns small mt-3 mb-0">Demo only — any email/password will log you in.</p>
    <p class="mt-3"><a href="index.html" class="text-saffron small">← Back to main site</a></p>
  </div></div>`;
}

function renderSection(){
  const map = {
    dashboard:renderDashboard, users:renderUsers, members:renderMembers, events:renderEvents,
    news:renderNews, gallery:renderGallery, matrimony:renderMatrimony, donations:renderDonations,
    banners:renderBanners, cms:renderCms, posts:renderPosts, contact:renderContact,
    sevamandal:renderSevaMandal, settings:renderSettings,
  };
  return (map[state.section]||renderDashboard)();
}

/* ===================== DASHBOARD ===================== */
function renderDashboard(){
  const stats = [
    ['👥',USERS.length,'Total Users'],
    ['🧑\u200d🤝\u200d🧑',MEMBERS.length,'Members'],
    ['🎉',EVENTS.length,'Events'],
    ['📰',NEWS.length,'News Articles'],
    ['💍',MATRIMONY.length,'Matrimony Profiles'],
    ['🙏',DONATIONS.length,'Donations'],
    ['💰',inr(DONATIONS.filter(d=>d.status==='Completed').reduce((s,d)=>s+d.amount,0)),'Total Raised'],
    ['🖼️',ALBUMS.reduce((s,a)=>s+a.count,0),'Gallery Items'],
  ];
  const quick = [
    ['users','👥','Manage Users'],['members','🧑‍🤝‍🧑','Manage Members'],['events','🎉','Manage Events'],
    ['news','📰','Manage News'],['gallery','🖼️','Manage Gallery'],['matrimony','💍','Matrimony Profiles'],
    ['donations','🙏','View Donations'],['banners','🖼','Manage Banners'],['cms','📝','CMS Pages'],
  ];
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">Dashboard Overview</h3><p class="text-muted-ns small">Welcome to NathSamaj Admin Panel</p></div>
  <div class="row g-4 mb-5">
    ${stats.map(([icon,val,label])=>`
    <div class="col-sm-6 col-lg-3"><div class="admin-card admin-stat-card">
      <div class="stat-icon">${icon}</div><div class="admin-stat-value">${val}</div><div class="admin-stat-label">${label}</div>
    </div></div>`).join('')}
  </div>
  <h5 class="text-brown fw-bold mb-3">Quick Actions</h5>
  <div class="row g-3">
    ${quick.map(([s,icon,label])=>`
    <div class="col-6 col-md-4 col-lg-3"><a class="quick-action-card" onclick="setSection('${s}')" href="#">
      <span class="qa-icon">${icon}</span><span class="qa-label">${label}</span>
    </a></div>`).join('')}
  </div>
  <h5 class="text-brown fw-bold mb-3 mt-5">Recent Contact Inquiries</h5>
  <div class="admin-card">
    <div class="table-responsive"><table class="ns-table"><thead><tr><th></th><th>Name</th><th>Subject</th><th>Received</th></tr></thead><tbody>
    ${INQUIRIES.slice(0,4).map(i=>`<tr class="${!i.read?'unread-row':''}"><td>${!i.read?'<span class="unread-dot"></span>':''}</td><td class="${!i.read?'fw-bold':''}">${escapeHtml(i.name)}</td><td>${escapeHtml(i.subject)}</td><td class="text-muted-ns">${fmtDateTime(i.date)}</td></tr>`).join('')}
    </tbody></table></div>
  </div>`;
}

/* ===================== USERS ===================== */
function renderUsers(){
  const filtered = USERS.filter(u=>!state.usersSearch || (u.first+' '+u.last+' '+u.email).toLowerCase().includes(state.usersSearch.toLowerCase()));
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Users Management</h3><p class="text-muted-ns small mb-0">Manage system users and roles</p></div>
    <button class="btn-saffron" onclick="openModal('user',{})"><i class="bi bi-plus-lg"></i> Add User</button>
  </div>
  <div class="admin-card">
    <div class="d-flex gap-3 mb-4"><input type="text" class="ns-input" placeholder="Search users..." style="max-width:280px;" value="${escapeHtml(state.usersSearch)}" oninput="state.usersSearch=this.value;render();"></div>
    <div class="table-responsive"><table class="ns-table">
      <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        ${filtered.map(u=>`
        <tr>
          <td class="fw-600">${escapeHtml(u.first)} ${escapeHtml(u.last)}</td>
          <td>${escapeHtml(u.email)}</td>
          <td><span class="badge-saffron">${u.roleName}</span></td>
          <td><span class="status-dot ${u.active?'active':''}"></span>${u.active?'Active':'Inactive'}</td>
          <td>${fmtDate(u.joined)}</td>
          <td><div class="d-flex gap-2">
            <button class="action-btn" title="Edit" onclick='openModal("user",${JSON.stringify(u)})'><i class="bi bi-pencil"></i></button>
            <button class="action-btn" title="${u.active?'Deactivate':'Activate'}" onclick="toggleUserActive(${u.id})"><i class="bi ${u.active?'bi-toggle-on':'bi-toggle-off'}"></i></button>
          </div></td>
        </tr>`).join('')}
        ${filtered.length===0?`<tr><td colspan="6" class="text-center text-muted-ns py-4">No users found.</td></tr>`:''}
      </tbody>
    </table></div>
  </div>`;
}
function toggleUserActive(id){const u=USERS.find(x=>x.id===id);u.active=!u.active;toast((u.active?'Activated ':'Deactivated ')+u.first+' '+u.last);render();}
function saveUser(){
  const it = state.modal.item;
  const first=document.getElementById('mFirst').value, last=document.getElementById('mLast').value, email=document.getElementById('mEmail').value;
  if(!first||!last||!email){toast('Please fill required fields');return;}
  const roleId = +document.getElementById('mRole').value;
  if(it.id){
    Object.assign(USERS.find(u=>u.id===it.id),{first,last,email,role:roleId,roleName:ROLES[roleId]});
    toast('User updated');
  } else {
    USERS.push({id:nextId(),first,last,email,role:roleId,roleName:ROLES[roleId],active:true,joined:new Date().toISOString().slice(0,10)});
    toast('User created');
  }
  closeModal();
}

/* ===================== MEMBERS ===================== */
function renderMembers(){
  const filtered = MEMBERS.filter(m=>!state.membersSearch || m.name.toLowerCase().includes(state.membersSearch.toLowerCase()));
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Members Management</h3><p class="text-muted-ns small mb-0">Manage community member directory</p></div>
    <button class="btn-saffron" onclick="openModal('member',{})"><i class="bi bi-plus-lg"></i> Add Member</button>
  </div>
  <div class="admin-card">
    <div class="d-flex gap-3 mb-4"><input type="text" class="ns-input" placeholder="Search members..." style="max-width:280px;" value="${escapeHtml(state.membersSearch)}" oninput="state.membersSearch=this.value;render();"></div>
    <div class="table-responsive"><table class="ns-table">
      <thead><tr><th>Name</th><th>City</th><th>Occupation</th><th>Mobile</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead>
      <tbody>
        ${filtered.map(m=>`
        <tr>
          <td class="fw-600">${escapeHtml(m.name)}</td><td>${m.city}</td><td>${m.occ}</td><td>${m.mobile}</td>
          <td><span class="badge-${m.status==='Active'?'saffron':'brown'}">${m.status}</span></td>
          <td>${fmtDate(m.joined)}</td>
          <td><div class="d-flex gap-2">
            <button class="action-btn" title="Edit" onclick='openModal("member",${JSON.stringify(m)})'><i class="bi bi-pencil"></i></button>
            <button class="action-btn text-danger" title="Delete" onclick="deleteMember(${m.id})"><i class="bi bi-trash"></i></button>
          </div></td>
        </tr>`).join('')}
        ${filtered.length===0?`<tr><td colspan="7" class="text-center text-muted-ns py-4">No members found.</td></tr>`:''}
      </tbody>
    </table></div>
  </div>`;
}
function deleteMember(id){if(!confirm('Delete this member?'))return;MEMBERS=MEMBERS.filter(m=>m.id!==id);toast('Member deleted');render();}
function saveMember(){
  const it=state.modal.item;
  const name=document.getElementById('mName').value, city=document.getElementById('mCity').value, occ=document.getElementById('mOcc').value,
        mobile=document.getElementById('mMobile').value, email=document.getElementById('mEmail2').value;
  if(!name){toast('Please enter a name');return;}
  if(it.id){Object.assign(MEMBERS.find(m=>m.id===it.id),{name,city,occ,mobile,email});toast('Member updated');}
  else{MEMBERS.push({id:nextId(),name,city,occ,mobile,email,joined:new Date().toISOString().slice(0,10),status:'Pending'});toast('Member added');}
  closeModal();
}

/* ===================== EVENTS ===================== */
function renderEvents(){
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Events Management</h3><p class="text-muted-ns small mb-0">Create and manage community events</p></div>
    <button class="btn-saffron" onclick="openModal('event',{status:'Upcoming',type:'Cultural',published:true,regOpen:true})"><i class="bi bi-plus-lg"></i> Add Event</button>
  </div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Title</th><th>Type</th><th>Date</th><th>Location</th><th>Status</th><th>Published</th><th>Actions</th></tr></thead>
    <tbody>
      ${EVENTS.map(e=>`
      <tr>
        <td class="fw-600">${escapeHtml(e.title)}</td>
        <td><span class="badge-saffron">${e.type}</span></td>
        <td>${fmtDate(e.date)}</td>
        <td>${e.location}</td>
        <td><span class="badge-brown">${e.status}</span></td>
        <td><span class="status-dot ${e.published?'active':''}"></span>${e.published?'Yes':'Draft'}</td>
        <td><div class="d-flex gap-2">
          <button class="action-btn" title="Edit" onclick='openModal("event",${JSON.stringify(e)})'><i class="bi bi-pencil"></i></button>
          <button class="action-btn text-danger" title="Delete" onclick="deleteEvent(${e.id})"><i class="bi bi-trash"></i></button>
        </div></td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>`;
}
function deleteEvent(id){if(!confirm('Delete this event?'))return;EVENTS=EVENTS.filter(e=>e.id!==id);toast('Event deleted');render();}
function saveEvent(){
  const it=state.modal.item;
  const title=document.getElementById('eTitle').value;
  if(!title){toast('Title is required');return;}
  const data = {
    title,
    type:document.getElementById('eType').value,
    status:document.getElementById('eStatus').value,
    date:document.getElementById('eDate').value,
    endDate:document.getElementById('eEndDate').value,
    location:document.getElementById('eLocation').value,
    maxReg:+document.getElementById('eMaxReg').value||0,
    fee:+document.getElementById('eFee').value||0,
    organizer:document.getElementById('eOrganizer').value,
    organizerContact:document.getElementById('eOrgContact').value,
    desc:document.getElementById('eDesc').value,
    published:document.getElementById('ePublished').checked,
    regOpen:document.getElementById('eRegOpen').checked,
  };
  if(it.id){Object.assign(EVENTS.find(e=>e.id===it.id),data);toast('Event updated');}
  else{EVENTS.push({id:nextId(),...data});toast('Event created');}
  closeModal();
}

/* ===================== NEWS ===================== */
function renderNews(){
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">News Management</h3><p class="text-muted-ns small mb-0">Publish and manage news articles</p></div>
    <button class="btn-saffron" onclick="openModal('news',{category:'Community',published:true})"><i class="bi bi-plus-lg"></i> Add Article</button>
  </div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Title</th><th>Category</th><th>Date</th><th>Published</th><th>Actions</th></tr></thead>
    <tbody>
      ${NEWS.map(a=>`
      <tr>
        <td class="fw-600">${escapeHtml(a.title)}</td>
        <td><span class="badge-saffron">${a.category}</span></td>
        <td>${fmtDate(a.date)}</td>
        <td><span class="status-dot ${a.published?'active':''}"></span>${a.published?'Yes':'Draft'}</td>
        <td><div class="d-flex gap-2">
          <button class="action-btn" title="Edit" onclick='openModal("news",${JSON.stringify(a)})'><i class="bi bi-pencil"></i></button>
          <button class="action-btn text-danger" title="Delete" onclick="deleteNews(${a.id})"><i class="bi bi-trash"></i></button>
        </div></td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>`;
}
function deleteNews(id){if(!confirm('Delete this article?'))return;NEWS=NEWS.filter(a=>a.id!==id);toast('Article deleted');render();}
function saveNews(){
  const it=state.modal.item;
  const title=document.getElementById('nTitle').value;
  if(!title){toast('Title is required');return;}
  const data={title,category:document.getElementById('nCategory').value,summary:document.getElementById('nSummary').value,published:document.getElementById('nPublished').checked};
  if(it.id){Object.assign(NEWS.find(a=>a.id===it.id),data);toast('Article updated');}
  else{NEWS.push({id:nextId(),date:new Date().toISOString().slice(0,10),...data});toast('Article published');}
  closeModal();
}

/* ===================== GALLERY ===================== */
function renderGallery(){
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Gallery Albums</h3><p class="text-muted-ns small mb-0">Manage photo albums</p></div>
    <button class="btn-saffron" onclick="openModal('album',{published:true})"><i class="bi bi-plus-lg"></i> Add Album</button>
  </div>
  <div class="admin-card"><div class="row g-3">
    ${ALBUMS.map(al=>`
    <div class="col-md-6 col-lg-4"><div class="gallery-admin-card">
      <div class="gallery-thumb"><img src="${al.cover}" alt="${escapeHtml(al.name)}"></div>
      <div class="gallery-info">
        <h6 class="fw-bold text-brown mb-1">${escapeHtml(al.name)}</h6>
        <p class="small text-muted-ns mb-2">${al.count} photos · ${al.published?'Published':'Draft'}</p>
        <div class="d-flex gap-2">
          <button class="action-btn" onclick='openModal("album",${JSON.stringify(al)})'><i class="bi bi-pencil"></i></button>
          <button class="action-btn text-danger" onclick="deleteAlbum(${al.id})"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div></div>`).join('')}
  </div></div>`;
}
function deleteAlbum(id){if(!confirm('Delete this album?'))return;ALBUMS=ALBUMS.filter(a=>a.id!==id);toast('Album deleted');render();}
function saveAlbum(){
  const it=state.modal.item;
  const name=document.getElementById('alName').value;
  if(!name){toast('Album name is required');return;}
  const data={name,published:document.getElementById('alPublished').checked};
  if(it.id){Object.assign(ALBUMS.find(a=>a.id===it.id),data);toast('Album updated');}
  else{ALBUMS.push({id:nextId(),cover:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500&auto=format&fit=crop",count:0,...data});toast('Album created');}
  closeModal();
}

/* ===================== MATRIMONY ===================== */
function renderMatrimony(){
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">Matrimony Profiles</h3><p class="text-muted-ns small mb-0">Review and moderate matrimony profile submissions</p></div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Name</th><th>Gender</th><th>Age</th><th>City</th><th>Occupation</th><th>Status</th><th>Submitted</th><th>Actions</th></tr></thead>
    <tbody>
      ${MATRIMONY.map(p=>`
      <tr>
        <td class="fw-600">${escapeHtml(p.name)}</td><td>${p.gender}</td><td>${p.age}</td><td>${p.city}</td><td>${p.occ}</td>
        <td><span class="badge-${p.status==='Approved'?'saffron':p.status==='Pending'?'brown':'brown'}">${p.status}</span></td>
        <td>${fmtDate(p.submitted)}</td>
        <td><div class="d-flex gap-2">
          ${p.status!=='Approved'?`<button class="action-btn" title="Approve" onclick="setMatrimonyStatus(${p.id},'Approved')"><i class="bi bi-check-lg"></i></button>`:''}
          ${p.status!=='Rejected'?`<button class="action-btn text-danger" title="Reject" onclick="setMatrimonyStatus(${p.id},'Rejected')"><i class="bi bi-x-lg"></i></button>`:''}
        </div></td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>`;
}
function setMatrimonyStatus(id,status){const p=MATRIMONY.find(x=>x.id===id);p.status=status;toast(p.name+' marked as '+status);render();}

/* ===================== DONATIONS ===================== */
function renderDonations(){
  const total = DONATIONS.filter(d=>d.status==='Completed').reduce((s,d)=>s+d.amount,0);
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">Donations</h3><p class="text-muted-ns small mb-0">Track and manage community donations</p></div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Donor</th><th>Email</th><th>Amount</th><th>Method</th><th>Campaign</th><th>Status</th><th>Date</th></tr></thead>
    <tbody>
      ${DONATIONS.map(d=>`
      <tr>
        <td class="fw-600">${escapeHtml(d.donor)}</td><td>${d.email}</td>
        <td class="fw-bold text-saffron">${inr(d.amount)}</td><td>${d.method}</td><td>${d.campaign}</td>
        <td><span class="status-dot ${d.status==='Completed'?'active':''}"></span>${d.status}</td>
        <td>${fmtDate(d.date)}</td>
      </tr>`).join('')}
    </tbody>
  </table></div>
  <div class="d-flex justify-content-between align-items-center mt-3">
    <span class="fw-bold text-brown">Total Completed: ${inr(total)} (${DONATIONS.length} donations)</span>
  </div>
  </div>`;
}

/* ===================== BANNERS ===================== */
function renderBanners(){
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Homepage Banners</h3><p class="text-muted-ns small mb-0">Manage hero slider banners</p></div>
    <button class="btn-saffron" onclick="openModal('banner',{order:BANNERS.length+1,active:true})"><i class="bi bi-plus-lg"></i> Add Banner</button>
  </div>
  <div class="admin-card"><div class="row g-3">
    ${BANNERS.map(b=>`
    <div class="col-md-6 col-lg-4"><div class="banner-admin-card">
      <div class="banner-preview"><img src="${b.img}" alt="${escapeHtml(b.title)}">
        <span class="banner-order">${b.order}</span><span class="banner-active ${b.active?'on':''}">${b.active?'Active':'Inactive'}</span>
      </div>
      <div class="banner-info">
        <h6 class="fw-bold text-brown mb-1">${escapeHtml(b.title)}</h6>
        <p class="small text-muted-ns mb-2">${escapeHtml(b.subtitle||'')}</p>
        <div class="d-flex gap-2">
          <button class="action-btn" onclick='openModal("banner",${JSON.stringify(b)})'><i class="bi bi-pencil"></i></button>
          <button class="action-btn text-danger" onclick="deleteBanner(${b.id})"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    </div></div>`).join('')}
  </div></div>`;
}
function deleteBanner(id){if(!confirm('Delete this banner?'))return;BANNERS=BANNERS.filter(b=>b.id!==id);toast('Banner deleted');render();}
function saveBanner(){
  const it=state.modal.item;
  const title=document.getElementById('bTitle').value;
  if(!title){toast('Title is required');return;}
  const data={title,subtitle:document.getElementById('bSubtitle').value,order:+document.getElementById('bOrder').value||1,active:document.getElementById('bActive').checked};
  if(it.id){Object.assign(BANNERS.find(b=>b.id===it.id),data);toast('Banner updated');}
  else{BANNERS.push({id:nextId(),img:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500&auto=format&fit=crop",...data});toast('Banner added');}
  closeModal();
}

/* ===================== CMS PAGES ===================== */
function renderCms(){
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">CMS Pages</h3><p class="text-muted-ns small mb-0">Edit static content pages shown on the main site</p></div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Page Title</th><th>Slug</th><th>Last Updated</th><th>Actions</th></tr></thead>
    <tbody>
      ${CMS_PAGES.map(p=>`
      <tr>
        <td class="fw-600">${escapeHtml(p.title)}</td><td class="text-muted-ns">/${p.slug}</td><td>${fmtDate(p.updated)}</td>
        <td><button class="action-btn" onclick='openModal("cms",${JSON.stringify(p)})'><i class="bi bi-pencil"></i> Edit</button></td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>`;
}
function saveCms(){
  const it=state.modal.item;
  Object.assign(CMS_PAGES.find(p=>p.id===it.id),{title:document.getElementById('cTitle').value,content:document.getElementById('cContent').value,updated:new Date().toISOString().slice(0,10)});
  toast('Page updated');closeModal();
}

/* ===================== COMMUNITY POSTS ===================== */
function renderPosts(){
  const tabs=['All','Job Opportunity','Matrimonial','Lost & Found','Accommodation','Business','Announcement'];
  const filtered = BOARD_POSTS.filter(p=>state.boardFilter==='All'||p.type===state.boardFilter);
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">Community Board Posts</h3><p class="text-muted-ns small mb-0">Moderate member-submitted notices and posts</p></div>
  <div class="d-flex gap-2 flex-wrap mb-3">${tabs.map(t=>`<button class="btn-outline-saffron ${state.boardFilter===t?'':''}" style="${state.boardFilter===t?'background:var(--saffron);color:#fff;':''}" onclick="state.boardFilter='${t}';render();">${t}</button>`).join('')}</div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Title</th><th>Type</th><th>Submitted By</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
    <tbody>
      ${filtered.map(p=>`
      <tr>
        <td class="fw-600">${escapeHtml(p.title)}</td><td><span class="badge-saffron">${p.type}</span></td><td>${p.by}</td><td>${fmtDate(p.date)}</td>
        <td><span class="badge-${p.status==='Approved'?'saffron':'brown'}">${p.status}</span></td>
        <td><div class="d-flex gap-2">
          ${p.status!=='Approved'?`<button class="action-btn" title="Approve" onclick="setPostStatus(${p.id},'Approved')"><i class="bi bi-check-lg"></i></button>`:''}
          <button class="action-btn text-danger" title="Remove" onclick="deletePost(${p.id})"><i class="bi bi-trash"></i></button>
        </div></td>
      </tr>`).join('')}
      ${filtered.length===0?`<tr><td colspan="6" class="text-center text-muted-ns py-4">No posts in this category.</td></tr>`:''}
    </tbody>
  </table></div></div>`;
}
function setPostStatus(id,status){const p=BOARD_POSTS.find(x=>x.id===id);p.status=status;toast('Post '+status.toLowerCase());render();}
function deletePost(id){if(!confirm('Remove this post?'))return;BOARD_POSTS=BOARD_POSTS.filter(p=>p.id!==id);toast('Post removed');render();}

/* ===================== CONTACT INQUIRIES ===================== */
function renderContact(){
  const unread = INQUIRIES.filter(i=>!i.read).length;
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Contact Inquiries</h3><p class="text-muted-ns small mb-0">Messages submitted via the Contact Us form</p></div>
    ${unread>0?`<span class="badge-saffron">${unread} unread</span>`:''}
  </div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th></th><th>Name</th><th>Email</th><th>Subject</th><th>Received</th><th>Actions</th></tr></thead>
    <tbody>
      ${INQUIRIES.map(i=>`
      <tr class="${!i.read?'unread-row':''}">
        <td>${!i.read?'<span class="unread-dot" title="Unread"></span>':''}</td>
        <td class="${!i.read?'fw-bold':''}">${escapeHtml(i.name)}</td>
        <td class="text-muted-ns">${i.email}</td>
        <td>${escapeHtml(i.subject||'—')}</td>
        <td class="text-muted-ns">${fmtDateTime(i.date)}</td>
        <td><div class="d-flex gap-2">
          <button class="action-btn" title="View" onclick="openInquiry(${i.id})"><i class="bi bi-eye"></i></button>
          ${!i.read?`<button class="action-btn" title="Mark as read" onclick="markRead(${i.id})"><i class="bi bi-check2"></i></button>`:''}
        </div></td>
      </tr>`).join('')}
      ${INQUIRIES.length===0?`<tr><td colspan="6" class="text-center text-muted-ns py-4">No inquiries yet.</td></tr>`:''}
    </tbody>
  </table></div></div>
  ${state.openInquiry?renderInquiryModal():''}`;
}
function markRead(id){const i=INQUIRIES.find(x=>x.id===id);i.read=true;toast('Marked as read');render();}
function openInquiry(id){state.openInquiry=INQUIRIES.find(x=>x.id===id);if(state.openInquiry)state.openInquiry.read=true;render();}
function closeInquiry(){state.openInquiry=null;render();}
function renderInquiryModal(){
  const i=state.openInquiry;
  return `<div class="modal-backdrop" onclick="closeInquiry()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><div><h5 class="mb-0">${escapeHtml(i.subject||'No Subject')}</h5><p class="text-muted-ns small mb-0 mt-1">from ${escapeHtml(i.name)}</p></div>
      <button class="modal-close" onclick="closeInquiry()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="inquiry-meta mb-4">
        <div class="meta-row"><span class="meta-lbl">Name</span><span>${escapeHtml(i.name)}</span></div>
        <div class="meta-row"><span class="meta-lbl">Email</span><a href="mailto:${i.email}" class="text-saffron">${i.email}</a></div>
        ${i.mobile?`<div class="meta-row"><span class="meta-lbl">Phone</span><span>${i.mobile}</span></div>`:''}
        <div class="meta-row"><span class="meta-lbl">Received</span><span>${fmtDateTime(i.date)}</span></div>
      </div>
      <div class="message-box">${escapeHtml(i.message)}</div>
      <div class="mt-4"><a href="mailto:${i.email}?subject=Re: ${encodeURIComponent(i.subject||'')}" class="btn-saffron"><i class="bi bi-reply"></i> Reply via Email</a></div>
    </div>
  </div></div>`;
}

/* ===================== SEVA MANDAL ===================== */
function renderSevaMandal(){
  const mandal = SEVA_MANDALS.find(m=>m.id===state.activeSevaMandal);
  return `
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div><h3 class="text-brown fw-bold mb-1">Seva Mandal Management</h3><p class="text-muted-ns small mb-0">Manage committee members for each mandal</p></div>
    <button class="btn-saffron" onclick="openModal('sevamember',{role:'member'})"><i class="bi bi-plus-lg"></i> Add Member</button>
  </div>
  <div class="d-flex gap-2 flex-wrap mb-3">
    ${SEVA_MANDALS.map(m=>`<button class="btn-outline-saffron" style="${state.activeSevaMandal===m.id?'background:var(--saffron);color:#fff;':''}" onclick="state.activeSevaMandal=${m.id};render();">${m.name}</button>`).join('')}
  </div>
  <div class="admin-card"><div class="table-responsive"><table class="ns-table">
    <thead><tr><th>Name</th><th>Role</th><th>Designation</th><th>City</th><th>Mobile</th><th>Actions</th></tr></thead>
    <tbody>
      ${mandal.members.map(m=>`
      <tr>
        <td class="fw-600">${escapeHtml(m.name)}</td>
        <td><span class="badge-saffron">${m.role}</span></td>
        <td>${m.desig||'—'}</td><td>${m.city||'—'}</td><td>${m.mobile||'—'}</td>
        <td><div class="d-flex gap-2">
          <button class="action-btn" onclick='openModal("sevamember",${JSON.stringify(m)})'><i class="bi bi-pencil"></i></button>
          <button class="action-btn text-danger" onclick="deleteSevaMember(${m.id})"><i class="bi bi-trash"></i></button>
        </div></td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>`;
}
function deleteSevaMember(id){
  if(!confirm('Remove this member?'))return;
  const mandal=SEVA_MANDALS.find(m=>m.id===state.activeSevaMandal);
  mandal.members=mandal.members.filter(m=>m.id!==id);
  toast('Member removed');render();
}
function saveSevaMember(){
  const it=state.modal.item;
  const name=document.getElementById('smName').value;
  if(!name){toast('Name is required');return;}
  const data={name,role:document.getElementById('smRole').value,desig:document.getElementById('smDesig').value,city:document.getElementById('smCity').value,mobile:document.getElementById('smMobile').value};
  const mandal=SEVA_MANDALS.find(m=>m.id===state.activeSevaMandal);
  if(it.id){Object.assign(mandal.members.find(m=>m.id===it.id),data);toast('Member updated');}
  else{mandal.members.push({id:nextId(),...data});toast('Member added');}
  closeModal();
}

/* ===================== SETTINGS ===================== */
function renderSettings(){
  const s=SETTINGS;
  return `
  <div class="mb-4"><h3 class="text-brown fw-bold mb-1">Site Settings</h3><p class="text-muted-ns small mb-0">Manage global configuration for the community portal</p></div>
  <div class="admin-card" style="max-width:640px;">
    <div class="row g-3">
      <div class="col-12"><label class="form-label">Site Name</label><input type="text" class="ns-input" id="sName" value="${escapeHtml(s.siteName)}"></div>
      <div class="col-md-6"><label class="form-label">Contact Email</label><input type="email" class="ns-input" id="sEmail" value="${escapeHtml(s.contactEmail)}"></div>
      <div class="col-md-6"><label class="form-label">Contact Phone</label><input type="text" class="ns-input" id="sPhone" value="${escapeHtml(s.contactPhone)}"></div>
      <div class="col-12"><label class="form-label">Address</label><input type="text" class="ns-input" id="sAddress" value="${escapeHtml(s.address)}"></div>
      <div class="col-md-6"><label class="form-label">Facebook URL</label><input type="text" class="ns-input" id="sFb" value="${escapeHtml(s.facebook)}"></div>
      <div class="col-md-6"><label class="form-label">Instagram URL</label><input type="text" class="ns-input" id="sIg" value="${escapeHtml(s.instagram)}"></div>
      <div class="col-md-6"><label class="form-label">YouTube URL</label><input type="text" class="ns-input" id="sYt" value="${escapeHtml(s.youtube)}"></div>
      <div class="col-md-6"><label class="form-label">UPI ID (for donations)</label><input type="text" class="ns-input" id="sUpi" value="${escapeHtml(s.upiId)}"></div>
      <div class="col-12 mt-2"><button class="btn-saffron" onclick="saveSettings()">Save Settings</button></div>
    </div>
  </div>`;
}
function saveSettings(){
  SETTINGS = {
    siteName:document.getElementById('sName').value, contactEmail:document.getElementById('sEmail').value,
    contactPhone:document.getElementById('sPhone').value, address:document.getElementById('sAddress').value,
    facebook:document.getElementById('sFb').value, instagram:document.getElementById('sIg').value,
    youtube:document.getElementById('sYt').value, upiId:document.getElementById('sUpi').value,
  };
  toast('Settings saved');
}

/* ===================== MODALS ===================== */
function renderModal(){
  const {type,item} = state.modal;
  const renderers = {
    user:modalUser, member:modalMember, event:modalEvent, news:modalNews,
    album:modalAlbum, banner:modalBanner, cms:modalCms, sevamember:modalSevaMember,
  };
  return (renderers[type]||(()=>''))(item);
}
function modalUser(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit User':'Add User'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">First Name *</label><input type="text" class="ns-input" id="mFirst" value="${escapeHtml(it.first||'')}"></div>
      <div class="mb-3"><label class="form-label">Last Name *</label><input type="text" class="ns-input" id="mLast" value="${escapeHtml(it.last||'')}"></div>
      <div class="mb-3"><label class="form-label">Email *</label><input type="email" class="ns-input" id="mEmail" value="${escapeHtml(it.email||'')}"></div>
      ${!it.id?`<div class="mb-3"><label class="form-label">Password *</label><input type="password" class="ns-input" placeholder="Set a password"></div>`:''}
      <div class="mb-4"><label class="form-label">Role *</label>
        <select class="ns-input ns-select" id="mRole">${Object.entries(ROLES).map(([id,name])=>`<option value="${id}" ${String(it.role)===id?'selected':''}>${name}</option>`).join('')}</select>
      </div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveUser()">Save</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalMember(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Member':'Add Member'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Full Name *</label><input type="text" class="ns-input" id="mName" value="${escapeHtml(it.name||'')}"></div>
      <div class="mb-3"><label class="form-label">City</label><input type="text" class="ns-input" id="mCity" value="${escapeHtml(it.city||'')}"></div>
      <div class="mb-3"><label class="form-label">Occupation</label><input type="text" class="ns-input" id="mOcc" value="${escapeHtml(it.occ||'')}"></div>
      <div class="mb-3"><label class="form-label">Mobile</label><input type="tel" class="ns-input" id="mMobile" value="${escapeHtml(it.mobile||'')}"></div>
      <div class="mb-4"><label class="form-label">Email</label><input type="email" class="ns-input" id="mEmail2" value="${escapeHtml(it.email||'')}"></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveMember()">Save</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalEvent(it){
  const dt = it.date ? it.date.slice(0,16) : '';
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal admin-modal-lg" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Event':'Create Event'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad"><div class="row g-3">
      <div class="col-12"><label class="form-label">Title *</label><input type="text" class="ns-input" id="eTitle" value="${escapeHtml(it.title||'')}"></div>
      <div class="col-md-6"><label class="form-label">Event Type</label>
        <select class="ns-input ns-select" id="eType">${['Cultural','Religious','Sports','Educational','Social','Other'].map(t=>`<option ${it.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Status</label>
        <select class="ns-input ns-select" id="eStatus">${['Upcoming','Ongoing','Completed','Cancelled'].map(t=>`<option ${it.status===t?'selected':''}>${t}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Start Date/Time *</label><input type="datetime-local" class="ns-input" id="eDate" value="${dt}"></div>
      <div class="col-md-6"><label class="form-label">End Date/Time</label><input type="datetime-local" class="ns-input" id="eEndDate" value="${it.endDate||''}"></div>
      <div class="col-12"><label class="form-label">Location *</label><input type="text" class="ns-input" id="eLocation" value="${escapeHtml(it.location||'')}"></div>
      <div class="col-md-6"><label class="form-label">Max Attendees</label><input type="number" class="ns-input" id="eMaxReg" value="${it.maxReg||0}"></div>
      <div class="col-md-6"><label class="form-label">Registration Fee (₹)</label><input type="number" class="ns-input" id="eFee" value="${it.fee||0}"></div>
      <div class="col-md-6"><label class="form-label">Organizer Name</label><input type="text" class="ns-input" id="eOrganizer" value="${escapeHtml(it.organizer||'')}"></div>
      <div class="col-md-6"><label class="form-label">Organizer Contact</label><input type="text" class="ns-input" id="eOrgContact" value="${escapeHtml(it.organizerContact||'')}"></div>
      <div class="col-12"><label class="form-label">Description</label><textarea class="ns-input" rows="4" id="eDesc">${escapeHtml(it.desc||'')}</textarea></div>
      <div class="col-md-6 d-flex align-items-center gap-3 pt-2">
        <label class="d-flex align-items-center gap-2 cursor-pointer"><input type="checkbox" id="ePublished" ${it.published?'checked':''}> <span class="form-label mb-0">Published</span></label>
        <label class="d-flex align-items-center gap-2 cursor-pointer"><input type="checkbox" id="eRegOpen" ${it.regOpen?'checked':''}> <span class="form-label mb-0">Registration Open</span></label>
      </div>
      <div class="col-12 d-flex gap-3"><button class="btn-saffron" onclick="saveEvent()">Save Event</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div></div>
  </div></div>`;
}
function modalNews(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Article':'Add Article'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Title *</label><input type="text" class="ns-input" id="nTitle" value="${escapeHtml(it.title||'')}"></div>
      <div class="mb-3"><label class="form-label">Category</label>
        <select class="ns-input ns-select" id="nCategory">${['Community','Education','Welfare','Infrastructure','Announcement'].map(c=>`<option ${it.category===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="mb-4"><label class="form-label">Summary</label><textarea class="ns-input" rows="4" id="nSummary">${escapeHtml(it.summary||'')}</textarea></div>
      <div class="mb-4"><label class="d-flex align-items-center gap-2 cursor-pointer"><input type="checkbox" id="nPublished" ${it.published?'checked':''}> Published</label></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveNews()">Save</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalAlbum(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Album':'Add Album'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Album Name *</label><input type="text" class="ns-input" id="alName" value="${escapeHtml(it.name||'')}"></div>
      <div class="mb-3"><label class="form-label">Upload Photos</label><input type="file" class="ns-input" accept="image/*" multiple></div>
      <div class="mb-4"><label class="d-flex align-items-center gap-2 cursor-pointer"><input type="checkbox" id="alPublished" ${it.published?'checked':''}> Published</label></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveAlbum()">Save</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalBanner(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Banner':'Add Banner'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Title *</label><input type="text" class="ns-input" id="bTitle" value="${escapeHtml(it.title||'')}"></div>
      <div class="mb-3"><label class="form-label">Subtitle</label><input type="text" class="ns-input" id="bSubtitle" value="${escapeHtml(it.subtitle||'')}"></div>
      <div class="mb-3"><label class="form-label">Sort Order</label><input type="number" class="ns-input" id="bOrder" value="${it.order||1}"></div>
      <div class="mb-3"><label class="form-label">Banner Image ${it.id?'(leave empty to keep current)':'*'}</label><input type="file" class="ns-input" accept="image/*"></div>
      <div class="mb-4"><label class="d-flex align-items-center gap-2 cursor-pointer"><input type="checkbox" id="bActive" ${it.active?'checked':''}> Active</label></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveBanner()">Save Banner</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalCms(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal admin-modal-lg" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">Edit Page — ${escapeHtml(it.title)}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Page Title</label><input type="text" class="ns-input" id="cTitle" value="${escapeHtml(it.title||'')}"></div>
      <div class="mb-4"><label class="form-label">Content</label><textarea class="ns-input" rows="10" id="cContent">${escapeHtml(it.content||'')}</textarea></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveCms()">Save Page</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}
function modalSevaMember(it){
  return `<div class="modal-backdrop" onclick="closeModal()"><div class="admin-modal" onclick="event.stopPropagation()">
    <div class="modal-head"><h5 class="mb-0">${it.id?'Edit Member':'Add Member'}</h5><button class="modal-close" onclick="closeModal()"><i class="bi bi-x-lg"></i></button></div>
    <div class="modal-body-pad">
      <div class="mb-3"><label class="form-label">Full Name *</label><input type="text" class="ns-input" id="smName" value="${escapeHtml(it.name||'')}"></div>
      <div class="mb-3"><label class="form-label">Role</label>
        <select class="ns-input ns-select" id="smRole">${['president','secretary','treasurer','member'].map(r=>`<option value="${r}" ${it.role===r?'selected':''}>${r.charAt(0).toUpperCase()+r.slice(1)}</option>`).join('')}</select></div>
      <div class="mb-3"><label class="form-label">Designation</label><input type="text" class="ns-input" id="smDesig" value="${escapeHtml(it.desig||'')}"></div>
      <div class="mb-3"><label class="form-label">City</label><input type="text" class="ns-input" id="smCity" value="${escapeHtml(it.city||'')}"></div>
      <div class="mb-4"><label class="form-label">Mobile</label><input type="tel" class="ns-input" id="smMobile" value="${escapeHtml(it.mobile||'')}"></div>
      <div class="d-flex gap-3"><button class="btn-saffron" onclick="saveSevaMember()">Save</button><button class="btn-outline-saffron" onclick="closeModal()">Cancel</button></div>
    </div>
  </div></div>`;
}

/* ===================== INIT ===================== */
render();
