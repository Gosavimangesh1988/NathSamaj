/* ===================== MOCK DATA (demo/sample only, resets on reload) ===================== */
const CURRENT_USER = { fullName:"Amit Nath", email:"amit.nath@gmail.com", role:"Member" };

let MEMBER = {
  dob:"1997-03-14", gender:"Male", phone:"+91 98765 11111", occupation:"Software Engineer",
  city:"Pune", state:"Maharashtra", address:"Flat 302, Saffron Residency, Kothrud, Pune",
  photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
};

let MATRI_PROFILE = {
  exists:true,
  displayName:"Amit Nath", gender:"Male", age:29, city:"Pune", status:"Active",
  photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  dob:"1997-03-14", height:"5'9\"", complexion:"Wheatish", bloodGroup:"O+", gotra:"Kashyap", manglik:"No",
  education:"B.Tech, Computer Science", occupation:"Software Engineer", annualIncome:"10-20 LPA", workLocation:"Pune",
  fatherName:"Ramesh Nath", fatherOccupation:"Retired Bank Officer", motherName:"Sunita Nath", motherOccupation:"Homemaker",
  brothers:1, sisters:1, nativePlace:"Nashik",
  aboutMe:"Simple, family-oriented person working in IT. Enjoy trekking and reading. Looking for a caring life partner who values our traditions.",
  partnerExpectations:"Someone family-oriented, well-educated, with a good sense of humor.",
  horoscope:"Rashi: Mesh, Nakshatra: Ashwini, Born 6:45 AM, Nashik",
};

let RECEIVED_INTERESTS = [
  {id:1,name:"Priya Nathani",gender:"Female",age:26,city:"Nashik",message:"Hi, I really liked your profile. Would love to connect if you're interested.",date:"2026-07-27",status:"Pending",photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"},
  {id:2,name:"Kavita Nath",gender:"Female",age:27,city:"Aurangabad",message:"Namaste! Our families know each other through the samaj. Would like to know more.",date:"2026-07-20",status:"Accepted",photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"},
  {id:3,name:"Anjali Nathrani",gender:"Female",age:25,city:"Mumbai",message:"",date:"2026-07-12",status:"Rejected",photo:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=200&auto=format&fit=crop"},
];
let SENT_INTERESTS = [
  {id:4,name:"Sneha Nath",gender:"Female",age:24,city:"Nagpur",message:"Hello, I came across your profile and would like to connect.",date:"2026-07-24",status:"Pending",photo:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=200&auto=format&fit=crop"},
  {id:5,name:"Kavita Nath",gender:"Female",age:27,city:"Aurangabad",message:"",date:"2026-07-20",status:"Accepted",photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",responded:"2026-07-22"},
];

let INBOX_MESSAGES = [
  {id:1,name:"Kavita Nath",gender:"Female",age:27,city:"Aurangabad",text:"Thank you for accepting! Would love to know more about your family and interests.",date:"2026-07-23",read:false,photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"},
  {id:2,name:"Priya Nathani",gender:"Female",age:26,city:"Nashik",text:"Hope you're doing well. Looking forward to hearing from you soon.",date:"2026-07-27",read:false,photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"},
  {id:3,name:"Anjali Nathrani",gender:"Female",age:25,city:"Mumbai",text:"Thanks for connecting, but I don't think we're a match. Wishing you the best.",date:"2026-07-14",read:true,photo:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=200&auto=format&fit=crop"},
];
let SENT_MESSAGES = [
  {id:4,name:"Kavita Nath",gender:"Female",city:"Aurangabad",text:"Sure! I work as a software engineer in Pune. I enjoy trekking and reading in my free time.",date:"2026-07-23",read:true,photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"},
];

let CONVERSATIONS = [
  {id:1,name:"Kavita Nath",gender:"Female",city:"Aurangabad",unread:2,lastMessage:"Thank you for accepting! Would love to know more.",lastMine:false,date:"2026-07-28",
   photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
   thread:[
    {mine:false,text:"Namaste! Thank you for accepting my interest 🙏",time:"2026-07-22T10:15"},
    {mine:true,text:"Namaste Kavita, thank you too! Nice to connect with you.",time:"2026-07-22T10:40"},
    {mine:false,text:"Thank you for accepting! Would love to know more about your family and interests.",time:"2026-07-28T09:05"},
   ]},
  {id:2,name:"Priya Nathani",gender:"Female",city:"Nashik",unread:1,lastMessage:"Hope you're doing well. Looking forward to hearing from you.",lastMine:false,date:"2026-07-27",
   photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
   thread:[
    {mine:false,text:"Hi Amit, I really liked your profile. Would love to connect if you're interested.",time:"2026-07-27T18:10"},
   ]},
];

let MY_POSTS = [
  {id:1,type:"Job Opportunity",title:"Looking for Junior Developer — Referrals Welcome",content:"My company is hiring junior developers for our Pune office. Freshers with good fundamentals in JavaScript are welcome to apply. Please reach out if interested or know someone who might be.",deadline:"2026-08-20",contact:"+91 98765 11111",link:"",status:"Approved",date:"2026-07-15",remark:""},
  {id:2,type:"Accommodation",title:"Looking for a Flatmate near Kothrud, Pune",content:"I have a spare room in my 2BHK near Kothrud and am looking for a community flatmate to share rent. Preference to working professionals.",deadline:"",contact:"+91 98765 11111",link:"",status:"Pending",date:"2026-07-26",remark:""},
  {id:3,type:"Business",title:"Freelance Web Development Services",content:"Offering freelance web development services for small businesses in the community. Portfolio available on request.",deadline:"",contact:"amit.nath@gmail.com",link:"",status:"ChangesRequested",date:"2026-07-10",remark:"Please add more details about your pricing and past projects before we can approve this listing."},
];
const POST_TYPES = ['Job Opportunity','Matrimonial','Lost & Found','Accommodation','Business','Announcement'];

/* ===================== STATE ===================== */
let idSeq = 2000;
let state = {
  loggedIn:false,
  activeTab:'profile',
  matriSubTab:'myprofile',
  interestTab:'received',
  msgTab:'inbox',
  activeConvId:null,
  expandedMsgId:null,
  showPostForm:false,
  editingPostId:null,
  viewingPostId:null,
  chatDraft:'',
};

/* ===================== HELPERS ===================== */
function fmtDate(d){if(!d)return '—';const dt=new Date(d);return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});}
function fmtTime(d){const dt=new Date(d);return dt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})+' · '+dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});}
function escapeHtml(s){const d=document.createElement('div');d.textContent=s==null?'':s;return d.innerHTML;}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toastT);window._toastT=setTimeout(()=>t.classList.remove('show'),2600);}
function initials(name){return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();}
function genderIcon(g){return g==='Male'?'👨':'👩';}
function nextId(){return ++idSeq;}

function setTab(t){state.activeTab=t;render();window.scrollTo({top:0,behavior:'smooth'});}
function setMatriSub(t){state.matriSubTab=t;render();}
function setInterestTab(t){state.interestTab=t;render();}
function setMsgTab(t){state.msgTab=t;state.activeConvId=null;render();}

function demoLogin(){
  const id = document.getElementById('loginId').value;
  state.loggedIn = true;
  toast('Welcome back, '+CURRENT_USER.fullName.split(' ')[0]+'!');
  render();
}
function logout(){state.loggedIn=false;toast('Logged out');render();}

/* ===================== ROOT RENDER ===================== */
function render(){
  const app = document.getElementById('app');
  if(!state.loggedIn){ app.innerHTML = renderLogin(); return; }
  app.innerHTML = `
  <div class="page-hero"><div class="container"><h1>My Dashboard</h1><p>Manage your profile and account settings</p></div></div>
  <section class="section-pad"><div class="container"><div class="row g-4">
    <div class="col-lg-3">
      <div class="dashboard-sidebar">
        <div class="user-summary">
          <div class="user-av">${initials(CURRENT_USER.fullName)}</div>
          <div>
            <div class="fw-bold text-brown">${escapeHtml(CURRENT_USER.fullName)}</div>
            <div class="small text-muted-ns">${CURRENT_USER.email}</div>
            <span class="badge-saffron mt-1 d-inline-block">${CURRENT_USER.role}</span>
          </div>
        </div>
        <div class="dash-nav">
          <button class="dash-nav-item ${state.activeTab==='profile'?'active':''}" onclick="setTab('profile')"><i class="bi bi-person-circle"></i> My Profile</button>
          <button class="dash-nav-item ${state.activeTab==='member'?'active':''}" onclick="setTab('member')"><i class="bi bi-card-list"></i> Member Details</button>
          <button class="dash-nav-item ${state.activeTab==='matrimony'?'active':''}" onclick="setTab('matrimony')"><i class="bi bi-heart-fill"></i> Matrimony</button>
          <button class="dash-nav-item ${state.activeTab==='posts'?'active':''}" onclick="setTab('posts')"><i class="bi bi-journal-text"></i> My Posts</button>
          <button class="dash-nav-item ${state.activeTab==='password'?'active':''}" onclick="setTab('password')"><i class="bi bi-lock"></i> Change Password</button>
          <button class="dash-nav-item text-danger" onclick="logout()"><i class="bi bi-box-arrow-right"></i> Logout</button>
        </div>
      </div>
    </div>
    <div class="col-lg-9" id="dashContent">${renderTab()}</div>
  </div></div></section>
  ${state.viewingPostId?renderPostViewModal():''}
  `;
  // scroll chat to bottom if chat window present
  const cm = document.querySelector('.chat-messages');
  if(cm) cm.scrollTop = cm.scrollHeight;
}

function renderLogin(){
  return `<div class="dash-login-wrap"><div class="dash-login-card">
    <div class="dash-login-icon">🕉️</div>
    <h4 class="text-brown fw-bold mb-1">Member Login</h4>
    <p class="text-muted-ns small mb-4">Sign in to access your NathSamaj dashboard</p>
    <div class="mb-3 text-start"><label class="form-label">Email</label><input type="text" class="ns-input" id="loginId" placeholder="amit.nath@gmail.com"></div>
    <div class="mb-4 text-start"><label class="form-label">Password</label><input type="password" class="ns-input" id="loginPw" placeholder="••••••••"></div>
    <button class="btn-saffron w-100 justify-content-center" onclick="demoLogin()">Login</button>
    <p class="text-muted-ns small mt-3 mb-0">Demo only — any email/password logs you in as <strong>Amit Nath</strong>.</p>
    <p class="mt-3"><a href="index.html" class="text-saffron small">← Back to main site</a></p>
  </div></div>`;
}

function renderTab(){
  const map = {profile:renderProfileTab, member:renderMemberTab, matrimony:renderMatrimonyTab, posts:renderPostsTab, password:renderPasswordTab};
  return (map[state.activeTab]||renderProfileTab)();
}

/* ===================== TAB: MY PROFILE ===================== */
function renderProfileTab(){
  return `
  <div class="admin-card">
    <h4 class="text-brown fw-bold mb-4">Account Information</h4>
    <div class="mb-3"><label class="form-label">Full Name</label><input type="text" class="ns-input" value="${escapeHtml(CURRENT_USER.fullName)}" readonly></div>
    <div class="mb-3"><label class="form-label">Email</label><input type="email" class="ns-input" value="${escapeHtml(CURRENT_USER.email)}" readonly></div>
    <div class="mb-3"><label class="form-label">Role</label><input type="text" class="ns-input" value="${CURRENT_USER.role}" readonly></div>
    <p class="small text-muted-ns mb-0">Contact admin to update your name or email.</p>
  </div>`;
}

/* ===================== TAB: MEMBER DETAILS ===================== */
function renderMemberTab(){
  const m = MEMBER;
  return `
  <div class="admin-card">
    <div class="d-flex align-items-center gap-4 mb-5 flex-wrap">
      <div class="member-photo-wrap">
        ${m.photo?`<img src="${m.photo}" alt="Profile Photo" class="member-photo">`:`<div class="member-photo-ph">${initials(CURRENT_USER.fullName)}</div>`}
        <label class="photo-upload-btn" title="Upload Photo" onclick="toast('Photo upload — demo only');event.preventDefault();"><i class="bi bi-camera-fill"></i></label>
      </div>
      <div><h5 class="text-brown fw-bold mb-1">${escapeHtml(CURRENT_USER.fullName)}</h5><p class="small text-muted-ns mb-0">Update your community profile</p></div>
    </div>
    <div class="row g-3">
      <div class="col-md-6"><label class="form-label">Date of Birth</label><input type="date" class="ns-input" id="memDob" value="${m.dob}"></div>
      <div class="col-md-6"><label class="form-label">Gender</label>
        <select class="ns-input ns-select" id="memGender">${['Male','Female','Other'].map(g=>`<option ${m.gender===g?'selected':''}>${g}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Phone</label><input type="tel" class="ns-input" id="memPhone" value="${escapeHtml(m.phone)}"></div>
      <div class="col-md-6"><label class="form-label">Occupation</label><input type="text" class="ns-input" id="memOcc" value="${escapeHtml(m.occupation)}"></div>
      <div class="col-md-6"><label class="form-label">Current City</label><input type="text" class="ns-input" id="memCity" value="${escapeHtml(m.city)}"></div>
      <div class="col-md-6"><label class="form-label">State</label><input type="text" class="ns-input" id="memState" value="${escapeHtml(m.state)}"></div>
      <div class="col-12"><label class="form-label">Address</label><textarea class="ns-input" rows="2" id="memAddress" style="resize:vertical;">${escapeHtml(m.address)}</textarea></div>
      <div class="col-12"><button class="btn-saffron" onclick="saveMemberProfile()">Save Changes</button></div>
    </div>
  </div>`;
}
function saveMemberProfile(){
  MEMBER = {...MEMBER,
    dob:document.getElementById('memDob').value, gender:document.getElementById('memGender').value,
    phone:document.getElementById('memPhone').value, occupation:document.getElementById('memOcc').value,
    city:document.getElementById('memCity').value, state:document.getElementById('memState').value,
    address:document.getElementById('memAddress').value,
  };
  toast('Profile updated successfully');
}

/* ===================== TAB: MATRIMONY ===================== */
function renderMatrimonyTab(){
  const pendingReceived = RECEIVED_INTERESTS.filter(i=>i.status==='Pending').length;
  const unreadMsgs = INBOX_MESSAGES.filter(m=>!m.read).length;
  const totalChatUnread = CONVERSATIONS.reduce((s,c)=>s+c.unread,0);
  return `
  <div class="matri-subnav">
    <button class="matri-nav-btn ${state.matriSubTab==='myprofile'?'active':''}" onclick="setMatriSub('myprofile')"><i class="bi bi-person-badge"></i> My Profile</button>
    <button class="matri-nav-btn ${state.matriSubTab==='interests'?'active':''}" onclick="setMatriSub('interests')"><i class="bi bi-heart"></i> Interests ${pendingReceived>0?`<span class="interest-badge">${pendingReceived}</span>`:''}</button>
    <button class="matri-nav-btn ${state.matriSubTab==='messages'?'active':''}" onclick="setMatriSub('messages')"><i class="bi bi-envelope"></i> Messages ${(unreadMsgs+totalChatUnread)>0?`<span class="interest-badge">${unreadMsgs+totalChatUnread}</span>`:''}</button>
  </div>
  ${state.matriSubTab==='myprofile'?renderMatriProfileSub():state.matriSubTab==='interests'?renderInterestsSub():renderMessagesSub()}`;
}

function renderMatriProfileSub(){
  const p = MATRI_PROFILE;
  const statusClass = p.status==='Pending'?'status-pending':p.status==='Active'?'status-active':'status-inactive';
  const pillClass = p.status==='Pending'?'pill-pending':p.status==='Active'?'pill-active':'pill-inactive';
  const statusText = p.status==='Pending'?'⏳ Pending Approval':p.status==='Active'?'✅ Active':'⛔ Inactive';
  return `
  ${p.exists?`
  <div class="matri-status-banner ${statusClass}">
    <div class="d-flex align-items-center gap-3 flex-wrap">
      <div class="matri-profile-photo-wrap me-2">
        ${p.photo?`<img src="${p.photo}" alt="Profile" class="matri-profile-photo">`:`<div class="matri-photo-ph">${initials(p.displayName)}</div>`}
      </div>
      <div><div class="fw-bold text-brown fs-5">${escapeHtml(p.displayName)}</div><div class="small text-muted-ns">${p.gender} · ${p.age} yrs · ${p.city}</div></div>
      <div class="ms-auto"><span class="status-pill ${pillClass}">${statusText}</span></div>
    </div>
  </div>`:`
  <div class="matri-new-banner">
    <i class="bi bi-heart-fill fs-3 text-saffron mb-2 d-block"></i>
    <h5 class="text-brown fw-bold mb-1">Register Your Matrimony Profile</h5>
    <p class="small text-muted-ns mb-0">Fill in the details below. Your profile will be reviewed by admin before becoming visible.</p>
  </div>`}

  <div class="admin-card">
    <h5 class="text-brown fw-bold mb-4">${p.exists?'Edit Profile':'Create Profile'}</h5>
    <div class="form-section-head">Personal Information</div>
    <div class="row g-3 mb-4">
      <div class="col-md-6"><label class="form-label">Profile For *</label>
        <select class="ns-input ns-select" id="mfGender">${['Male','Female'].map(g=>`<option value="${g}" ${p.gender===g?'selected':''}>${g==='Male'?'Groom (Male)':'Bride (Female)'}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Date of Birth *</label><input type="date" class="ns-input" id="mfDob" value="${p.dob||''}"></div>
      <div class="col-md-4"><label class="form-label">Height</label><input type="text" class="ns-input" id="mfHeight" value="${p.height||''}" placeholder="e.g. 5'9&quot;"></div>
      <div class="col-md-4"><label class="form-label">Complexion</label>
        <select class="ns-input ns-select" id="mfComplexion"><option value="">Select</option>${['Fair','Wheatish','Dusky','Dark'].map(c=>`<option ${p.complexion===c?'selected':''}>${c}</option>`).join('')}</select></div>
      <div class="col-md-4"><label class="form-label">Blood Group</label>
        <select class="ns-input ns-select" id="mfBlood"><option value="">Select</option>${['A+','A-','B+','B-','O+','O-','AB+','AB-'].map(b=>`<option ${p.bloodGroup===b?'selected':''}>${b}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Gotra</label><input type="text" class="ns-input" id="mfGotra" value="${p.gotra||''}" placeholder="e.g. Kashyap"></div>
      <div class="col-md-6"><label class="form-label">Manglik</label>
        <select class="ns-input ns-select" id="mfManglik"><option value="">Select</option>${['Yes','No','Partial'].map(v=>`<option ${p.manglik===v?'selected':''}>${v}</option>`).join('')}</select></div>
    </div>
    <div class="form-section-head">Professional Details</div>
    <div class="row g-3 mb-4">
      <div class="col-md-6"><label class="form-label">Education</label><input type="text" class="ns-input" id="mfEdu" value="${escapeHtml(p.education||'')}"></div>
      <div class="col-md-6"><label class="form-label">Occupation</label><input type="text" class="ns-input" id="mfOcc" value="${escapeHtml(p.occupation||'')}"></div>
      <div class="col-md-6"><label class="form-label">Annual Income</label>
        <select class="ns-input ns-select" id="mfIncome"><option value="">Select</option>${['Below 2 LPA','2-5 LPA','5-10 LPA','10-20 LPA','20-50 LPA','50+ LPA'].map(v=>`<option ${p.annualIncome===v?'selected':''}>${v}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Work Location</label><input type="text" class="ns-input" id="mfWorkLoc" value="${escapeHtml(p.workLocation||'')}"></div>
    </div>
    <div class="form-section-head">Family Background</div>
    <div class="row g-3 mb-4">
      <div class="col-md-6"><label class="form-label">Father's Name</label><input type="text" class="ns-input" id="mfFather" value="${escapeHtml(p.fatherName||'')}"></div>
      <div class="col-md-6"><label class="form-label">Father's Occupation</label><input type="text" class="ns-input" id="mfFatherOcc" value="${escapeHtml(p.fatherOccupation||'')}"></div>
      <div class="col-md-6"><label class="form-label">Mother's Name</label><input type="text" class="ns-input" id="mfMother" value="${escapeHtml(p.motherName||'')}"></div>
      <div class="col-md-6"><label class="form-label">Mother's Occupation</label><input type="text" class="ns-input" id="mfMotherOcc" value="${escapeHtml(p.motherOccupation||'')}"></div>
      <div class="col-md-3"><label class="form-label">Brothers</label><input type="number" class="ns-input" id="mfBrothers" value="${p.brothers??0}" min="0" max="10"></div>
      <div class="col-md-3"><label class="form-label">Sisters</label><input type="number" class="ns-input" id="mfSisters" value="${p.sisters??0}" min="0" max="10"></div>
    </div>
    <div class="form-section-head">Location</div>
    <div class="row g-3 mb-4">
      <div class="col-md-4"><label class="form-label">Current City</label><input type="text" class="ns-input" id="mfCity" value="${escapeHtml(p.city||'')}"></div>
      <div class="col-md-4"><label class="form-label">State</label><input type="text" class="ns-input" id="mfState" value="Maharashtra"></div>
      <div class="col-md-4"><label class="form-label">Native Place</label><input type="text" class="ns-input" id="mfNative" value="${escapeHtml(p.nativePlace||'')}"></div>
    </div>
    <div class="form-section-head">About &amp; Preferences</div>
    <div class="row g-3 mb-4">
      <div class="col-12"><label class="form-label">About Me</label><textarea class="ns-input" rows="3" id="mfAbout" style="resize:vertical;">${escapeHtml(p.aboutMe||'')}</textarea></div>
      <div class="col-12"><label class="form-label">Partner Expectations</label><textarea class="ns-input" rows="3" id="mfPartner" style="resize:vertical;">${escapeHtml(p.partnerExpectations||'')}</textarea></div>
      <div class="col-12"><label class="form-label">Horoscope / Kundali Details</label><textarea class="ns-input" rows="2" id="mfHoroscope" style="resize:vertical;">${escapeHtml(p.horoscope||'')}</textarea></div>
    </div>
    <div class="d-flex gap-3 align-items-center flex-wrap">
      <button class="btn-saffron" onclick="saveMatrimonyProfile()">${p.exists?'Update Profile':'Register Profile'}</button>
      ${!p.exists?`<span class="small text-muted-ns">Profile will be visible after admin approval.</span>`:''}
    </div>
  </div>`;
}
function saveMatrimonyProfile(){
  const wasNew = !MATRI_PROFILE.exists;
  MATRI_PROFILE = {...MATRI_PROFILE, exists:true,
    gender:document.getElementById('mfGender').value, dob:document.getElementById('mfDob').value,
    height:document.getElementById('mfHeight').value, complexion:document.getElementById('mfComplexion').value,
    bloodGroup:document.getElementById('mfBlood').value, gotra:document.getElementById('mfGotra').value,
    manglik:document.getElementById('mfManglik').value, education:document.getElementById('mfEdu').value,
    occupation:document.getElementById('mfOcc').value, annualIncome:document.getElementById('mfIncome').value,
    workLocation:document.getElementById('mfWorkLoc').value, fatherName:document.getElementById('mfFather').value,
    fatherOccupation:document.getElementById('mfFatherOcc').value, motherName:document.getElementById('mfMother').value,
    motherOccupation:document.getElementById('mfMotherOcc').value, brothers:+document.getElementById('mfBrothers').value,
    sisters:+document.getElementById('mfSisters').value, city:document.getElementById('mfCity').value,
    nativePlace:document.getElementById('mfNative').value, aboutMe:document.getElementById('mfAbout').value,
    partnerExpectations:document.getElementById('mfPartner').value, horoscope:document.getElementById('mfHoroscope').value,
    status: wasNew ? 'Pending' : MATRI_PROFILE.status,
    displayName: CURRENT_USER.fullName,
  };
  toast(wasNew ? 'Profile submitted for admin approval' : 'Matrimony profile updated');
  render();
}

function renderInterestsSub(){
  const pendingReceived = RECEIVED_INTERESTS.filter(i=>i.status==='Pending').length;
  const list = state.interestTab==='received'?RECEIVED_INTERESTS:SENT_INTERESTS;
  const statusColor = s=>s==='Accepted'?'#22c55e':s==='Rejected'?'#ef4444':'#94a3b8';
  return `
  <div class="interest-tabs">
    <button class="interest-tab-btn ${state.interestTab==='received'?'active':''}" onclick="setInterestTab('received')">Received ${pendingReceived>0?`<span class="interest-count">${pendingReceived}</span>`:''}</button>
    <button class="interest-tab-btn ${state.interestTab==='sent'?'active':''}" onclick="setInterestTab('sent')">Sent ${SENT_INTERESTS.length>0?`<span class="interest-count neutral">${SENT_INTERESTS.length}</span>`:''}</button>
  </div>
  ${list.length===0?`
  <div class="text-center py-5"><div style="font-size:3rem;">${state.interestTab==='received'?'💌':'💍'}</div>
    <h6 class="text-brown mt-3">No interests ${state.interestTab==='received'?'received':'sent'} yet</h6>
    <p class="small text-muted-ns">${state.interestTab==='received'?'When someone expresses interest in your profile, it will appear here.':'Browse profiles and express your interest!'}</p>
  </div>`:`
  <div class="d-flex flex-column gap-3">
    ${list.map(i=>`
    <div class="interest-card ${i.status==='Accepted'?'interest-accepted':i.status==='Rejected'?'interest-rejected':''}">
      <div class="interest-person">
        ${i.photo?`<img src="${i.photo}" alt="${escapeHtml(i.name)}" class="interest-photo">`:`<div class="interest-photo-ph">${genderIcon(i.gender)}</div>`}
        <div class="flex-grow-1 min-w-0">
          <div class="fw-bold text-brown">${escapeHtml(i.name)}</div>
          <div class="small text-muted-ns">${i.gender} · ${i.age} yrs · ${i.city}</div>
          ${i.message?`<p class="small text-muted-ns mt-1 mb-0 fst-italic">"${escapeHtml(i.message)}"</p>`:''}
          <div class="small text-muted-ns mt-1">${state.interestTab==='sent'?'Sent ':''}${fmtDate(i.date)}</div>
        </div>
        <div class="interest-actions">
          ${state.interestTab==='received' && i.status==='Pending'?`
            <button class="btn-accept" onclick="respondInterest(${i.id},'Accepted')"><i class="bi bi-check-lg"></i> Accept</button>
            <button class="btn-decline" onclick="respondInterest(${i.id},'Rejected')"><i class="bi bi-x-lg"></i> Decline</button>
          `:`<span class="status-pill-sm" style="background:${statusColor(i.status)}">${i.status}</span>`}
        </div>
      </div>
    </div>`).join('')}
  </div>`}`;
}
function respondInterest(id,status){
  const i = RECEIVED_INTERESTS.find(x=>x.id===id);
  i.status=status;
  toast(status==='Accepted'?'Interest accepted — you can now message '+i.name:'Interest declined');
  render();
}

function renderMessagesSub(){
  const unreadInbox = INBOX_MESSAGES.filter(m=>!m.read).length;
  const totalChatUnread = CONVERSATIONS.reduce((s,c)=>s+c.unread,0);
  return `
  <div class="interest-tabs">
    <button class="interest-tab-btn ${state.msgTab==='inbox'?'active':''}" onclick="setMsgTab('inbox')">Inbox ${unreadInbox>0?`<span class="interest-count">${unreadInbox}</span>`:''}</button>
    <button class="interest-tab-btn ${state.msgTab==='sent'?'active':''}" onclick="setMsgTab('sent')">Sent ${SENT_MESSAGES.length>0?`<span class="interest-count neutral">${SENT_MESSAGES.length}</span>`:''}</button>
    <button class="interest-tab-btn ${state.msgTab==='chat'?'active':''}" onclick="setMsgTab('chat')"><i class="bi bi-chat-dots-fill"></i> Chat View ${totalChatUnread>0?`<span class="interest-count">${totalChatUnread}</span>`:''}</button>
  </div>
  ${state.msgTab==='chat'?renderChatSub():state.msgTab==='inbox'?renderMsgList(INBOX_MESSAGES,true):renderMsgList(SENT_MESSAGES,false)}`;
}
function renderMsgList(list,isInbox){
  if(list.length===0){
    return `<div class="text-center py-5"><div style="font-size:3rem;">✉️</div><h6 class="text-brown mt-3">No messages yet</h6><p class="small text-muted-ns">Messages from other matrimony members will appear here.</p></div>`;
  }
  return `<div class="d-flex flex-column gap-3">
    ${list.map(m=>`
    <div class="msg-card ${!m.read&&isInbox?'msg-unread':''}" onclick="toggleMsg(${m.id},${isInbox})">
      <div class="msg-card-head">
        ${m.photo?`<img src="${m.photo}" alt="${escapeHtml(m.name)}" class="interest-photo">`:`<div class="interest-photo-ph">${genderIcon(m.gender)}</div>`}
        <div class="flex-grow-1 msg-head-text min-w-0">
          <div class="d-flex align-items-center gap-2">
            <span class="fw-bold text-brown">${escapeHtml(m.name)}</span>
            ${!m.read&&isInbox?`<span class="msg-unread-dot"></span>`:''}
          </div>
          <div class="small text-muted-ns">${m.gender}${m.city?' · '+m.city:''}${m.age?' · '+m.age+' yrs':''}</div>
          <div class="msg-preview small text-muted-ns">${escapeHtml(m.text)}</div>
        </div>
        <div class="d-flex align-items-center gap-2 flex-shrink-0">
          ${!isInbox?`<span class="status-pill-sm" style="background:${m.read?'#22c55e':'#94a3b8'}">${m.read?'Read':'Sent'}</span>`:''}
          <span class="small text-muted-ns">${fmtDate(m.date)}</span>
          <i class="bi ${state.expandedMsgId===m.id?'bi-chevron-up':'bi-chevron-down'}"></i>
        </div>
      </div>
      ${state.expandedMsgId===m.id?`<div class="msg-body" onclick="event.stopPropagation()"><p class="text-dark mb-0" style="white-space:pre-wrap;">${escapeHtml(m.text)}</p></div>`:''}
    </div>`).join('')}
  </div>`;
}
function toggleMsg(id,isInbox){
  if(isInbox){const m=INBOX_MESSAGES.find(x=>x.id===id);if(m)m.read=true;}
  state.expandedMsgId = state.expandedMsgId===id?null:id;
  render();
}
function renderChatSub(){
  if(state.activeConvId){
    const c = CONVERSATIONS.find(x=>x.id===state.activeConvId);
    return `
    <div class="chat-window">
      <div class="chat-header">
        <button class="chat-back-btn" onclick="state.activeConvId=null;render();"><i class="bi bi-arrow-left"></i></button>
        ${c.photo?`<img src="${c.photo}" alt="${escapeHtml(c.name)}" class="chat-avatar">`:`<div class="chat-avatar-ph">${genderIcon(c.gender)}</div>`}
        <div><div class="fw-bold text-brown">${escapeHtml(c.name)}</div>${c.city?`<div class="small text-muted-ns"><i class="bi bi-geo-alt"></i> ${c.city}</div>`:''}</div>
      </div>
      <div class="chat-messages">
        ${c.thread.length===0?`<div class="chat-empty"><i class="bi bi-chat-dots" style="font-size:2rem;color:#cbd5e1;"></i><p class="small text-muted-ns mt-2">No messages yet. Say hello!</p></div>`:
        c.thread.map(msg=>`
        <div class="chat-msg-row ${msg.mine?'chat-mine':''}">
          <div class="chat-bubble ${msg.mine?'bubble-mine':'bubble-theirs'}">${escapeHtml(msg.text)}</div>
          <div class="chat-time">${fmtTime(msg.time)}</div>
        </div>`).join('')}
      </div>
      <div class="chat-input-area">
        <textarea class="chat-input" id="chatInputBox" placeholder="Type a message... (Enter to send, Shift+Enter for new line)" rows="1" onkeydown="onChatKeydown(event)">${escapeHtml(state.chatDraft)}</textarea>
        <button class="chat-send-btn" onclick="sendChatMessage()"><i class="bi bi-send-fill"></i></button>
      </div>
    </div>`;
  }
  if(CONVERSATIONS.length===0){
    return `<div class="text-center py-5"><div style="font-size:3rem;">💬</div><h6 class="text-brown mt-3">No conversations yet</h6><p class="small text-muted-ns">Send a message to a matrimony profile to start a conversation.</p></div>`;
  }
  return `<div class="conv-list">
    ${CONVERSATIONS.map(c=>`
    <div class="conv-card ${c.unread>0?'conv-unread':''}" onclick="openConversation(${c.id})">
      <div class="conv-avatar-wrap">
        ${c.photo?`<img src="${c.photo}" alt="${escapeHtml(c.name)}" class="conv-avatar">`:`<div class="conv-avatar-ph">${genderIcon(c.gender)}</div>`}
        ${c.unread>0?`<span class="conv-badge">${c.unread}</span>`:''}
      </div>
      <div class="conv-info min-w-0">
        <div class="d-flex justify-content-between align-items-center"><span class="fw-bold text-brown">${escapeHtml(c.name)}</span><span class="conv-time">${fmtDate(c.date)}</span></div>
        <div class="conv-preview ${c.unread>0?'fw-semibold':''}">${c.lastMine?'<span class="text-muted-ns">You: </span>':''}${escapeHtml(c.lastMessage)}</div>
      </div>
    </div>`).join('')}
  </div>`;
}
function openConversation(id){
  const c = CONVERSATIONS.find(x=>x.id===id);
  c.unread = 0;
  state.activeConvId = id;
  state.chatDraft='';
  render();
}
function onChatKeydown(ev){
  state.chatDraft = ev.target.value;
  if(ev.key==='Enter' && !ev.shiftKey){ev.preventDefault();sendChatMessage();}
}
function sendChatMessage(){
  const box = document.getElementById('chatInputBox');
  const text = (box?box.value:state.chatDraft).trim();
  if(!text)return;
  const c = CONVERSATIONS.find(x=>x.id===state.activeConvId);
  c.thread.push({mine:true,text,time:new Date().toISOString()});
  c.lastMessage=text; c.lastMine=true; c.date=new Date().toISOString().slice(0,10);
  state.chatDraft='';
  render();
}

/* ===================== TAB: MY POSTS ===================== */
function renderPostsTab(){
  const statusMeta = {
    Approved:{label:'✅ Approved',color:'#22c55e'}, Pending:{label:'⏳ Pending Review',color:'#f59e0b'},
    ChangesRequested:{label:'✏️ Changes Requested',color:'#ef4444'}, Rejected:{label:'⛔ Rejected',color:'#ef4444'},
  };
  return `
  <div class="admin-card">
    <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
      <h4 class="text-brown fw-bold mb-0">My Community Posts</h4>
      ${!state.showPostForm?`<button class="btn-saffron" onclick="openNewPost()"><i class="bi bi-plus-lg"></i> Submit New Post</button>`:''}
    </div>
    ${state.showPostForm?renderPostForm():''}
    ${state.showPostForm?'<hr class="mb-4">':''}
    ${!state.showPostForm && MY_POSTS.length===0?`
    <div class="text-center py-5"><div style="font-size:3rem;">📋</div><h6 class="text-brown mt-3">No posts yet</h6>
      <p class="small text-muted-ns mb-4">Submit a post to share opportunities or announcements with the community.</p>
      <button class="btn-saffron" onclick="openNewPost()">Submit Your First Post</button>
    </div>`:''}
    ${MY_POSTS.length>0?`
    <div class="d-flex flex-column gap-3">
      ${MY_POSTS.map(post=>{const sm=statusMeta[post.status]||statusMeta.Pending;return `
      <div class="my-post-card" onclick="viewPost(${post.id})">
        <div class="d-flex align-items-start justify-content-between gap-3 flex-wrap">
          <div class="flex-grow-1 min-w-0">
            <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <span class="badge-saffron">${post.type}</span>
              <span class="post-status-pill-dash" style="background:${sm.color};color:#fff;">${sm.label}</span>
            </div>
            <div class="fw-bold text-brown mb-1">${escapeHtml(post.title)}</div>
            <p class="small text-muted-ns mb-2 post-preview-clamp">${escapeHtml(post.content)}</p>
            ${post.remark?`<div class="admin-remark-box mt-2"><div class="small fw-bold mb-1"><i class="bi bi-chat-left-text text-saffron"></i> Admin Remark</div><p class="small mb-0">${escapeHtml(post.remark)}</p></div>`:''}
          </div>
          <div class="d-flex flex-column gap-2 flex-shrink-0" onclick="event.stopPropagation()">
            ${post.status==='ChangesRequested'?`<button class="action-btn text-saffron" title="Edit & Resubmit" onclick="openEditPost(${post.id})" style="background:rgba(232,114,28,.1);border:none;border-radius:6px;padding:6px 10px;cursor:pointer;"><i class="bi bi-pencil-fill"></i></button>`:''}
            ${post.status==='Pending'?`<button class="action-btn text-danger" title="Delete" onclick="deleteMyPost(${post.id})" style="background:rgba(239,68,68,.08);border:none;border-radius:6px;padding:6px 10px;cursor:pointer;color:#ef4444;"><i class="bi bi-trash"></i></button>`:''}
          </div>
        </div>
      </div>`;}).join('')}
    </div>`:''}
  </div>`;
}
function openNewPost(){state.showPostForm=true;state.editingPostId=null;render();window.scrollTo({top:0,behavior:'smooth'});}
function openEditPost(id){state.showPostForm=true;state.editingPostId=id;render();window.scrollTo({top:0,behavior:'smooth'});}
function cancelPost(){state.showPostForm=false;state.editingPostId=null;render();}
function renderPostForm(){
  const it = state.editingPostId ? MY_POSTS.find(p=>p.id===state.editingPostId) : {};
  return `
  <div class="post-form-wrap mb-4">
    <h5 class="text-brown fw-bold mb-4">${it.id?'Edit Post':'Submit New Post'}</h5>
    <div class="row g-3">
      <div class="col-md-6"><label class="form-label">Post Type *</label>
        <select class="ns-input ns-select" id="pfType">${POST_TYPES.map(t=>`<option ${it.type===t?'selected':''}>${t}</option>`).join('')}</select></div>
      <div class="col-md-6"><label class="form-label">Deadline (optional)</label><input type="date" class="ns-input" id="pfDeadline" value="${it.deadline||''}"></div>
      <div class="col-12"><label class="form-label">Title *</label><input type="text" class="ns-input" id="pfTitle" value="${escapeHtml(it.title||'')}" placeholder="Short, clear title"></div>
      <div class="col-12"><label class="form-label">Description *</label><textarea class="ns-input" rows="5" id="pfContent" placeholder="Describe your post in detail...">${escapeHtml(it.content||'')}</textarea></div>
      <div class="col-md-6"><label class="form-label">Contact Info (optional)</label><input type="text" class="ns-input" id="pfContact" value="${escapeHtml(it.contact||'')}" placeholder="Phone or email"></div>
      <div class="col-md-6"><label class="form-label">Redirect Link (optional)</label><input type="url" class="ns-input" id="pfLink" value="${escapeHtml(it.link||'')}" placeholder="https://...">
        <div class="small text-muted-ns mt-1">Public visitors can click this to view full details.</div></div>
      <div class="col-12 d-flex gap-3 align-items-center flex-wrap">
        <button class="btn-saffron" onclick="savePost()">${it.id?'Update & Resubmit':'Submit for Approval'}</button>
        <button class="btn-outline-saffron" onclick="cancelPost()">Cancel</button>
        ${!it.id?`<span class="small text-muted-ns">Your post will be reviewed by admin before going live.</span>`:''}
      </div>
    </div>
  </div>`;
}
function savePost(){
  const title=document.getElementById('pfTitle').value, content=document.getElementById('pfContent').value;
  if(!title||!content){toast('Title and description are required');return;}
  const data = {
    type:document.getElementById('pfType').value, deadline:document.getElementById('pfDeadline').value,
    title, content, contact:document.getElementById('pfContact').value, link:document.getElementById('pfLink').value,
  };
  if(state.editingPostId){
    Object.assign(MY_POSTS.find(p=>p.id===state.editingPostId),data,{status:'Pending',remark:''});
    toast('Post updated and resubmitted for approval');
  } else {
    MY_POSTS.unshift({id:nextId(),...data,status:'Pending',date:new Date().toISOString().slice(0,10),remark:''});
    toast('Post submitted for admin approval');
  }
  state.showPostForm=false; state.editingPostId=null;
  render();
}
function deleteMyPost(id){
  if(!confirm('Delete this post?'))return;
  MY_POSTS = MY_POSTS.filter(p=>p.id!==id);
  toast('Post deleted');
  render();
}
function viewPost(id){state.viewingPostId=id;render();}
function closeViewPost(){state.viewingPostId=null;render();}
function renderPostViewModal(){
  const post = MY_POSTS.find(p=>p.id===state.viewingPostId);
  if(!post){return '';}
  const statusMeta = {
    Approved:{label:'✅ Approved',color:'#22c55e'}, Pending:{label:'⏳ Pending Review',color:'#f59e0b'},
    ChangesRequested:{label:'✏️ Changes Requested',color:'#ef4444'}, Rejected:{label:'⛔ Rejected',color:'#ef4444'},
  };
  const sm = statusMeta[post.status]||statusMeta.Pending;
  return `<div class="board-modal-backdrop" onclick="closeViewPost()"><div class="board-modal" onclick="event.stopPropagation()">
    <div class="board-modal-head">
      <div class="d-flex align-items-center gap-2 flex-wrap"><span class="badge-saffron">${post.type}</span><span class="post-status-pill-dash" style="background:${sm.color};color:#fff;">${sm.label}</span></div>
      <button class="modal-close" onclick="closeViewPost()"><i class="bi bi-x-lg"></i></button>
    </div>
    <div class="board-modal-body">
      <h5 class="text-brown fw-bold mb-4">${escapeHtml(post.title)}</h5>
      <div class="board-modal-content">${escapeHtml(post.content)}</div>
      <div class="board-modal-meta mt-4">
        ${post.deadline?`<div class="meta-item"><i class="bi bi-calendar3 text-saffron"></i><span><strong>Deadline:</strong> ${fmtDate(post.deadline)}</span></div>`:''}
        ${post.contact?`<div class="meta-item"><i class="bi bi-telephone-fill text-saffron"></i><span><strong>Contact:</strong> ${post.contact}</span></div>`:''}
        <div class="meta-item"><i class="bi bi-clock text-saffron"></i><span>Submitted: ${fmtDate(post.date)}</span></div>
      </div>
      ${post.remark?`<div class="admin-remark-box mt-3"><div class="small fw-bold mb-1"><i class="bi bi-chat-left-text text-saffron"></i> Admin Remark</div><p class="small mb-0" style="white-space:pre-wrap;">${escapeHtml(post.remark)}</p></div>`:''}
      ${post.link?`<div class="mt-3"><a href="${post.link}" target="_blank" rel="noopener noreferrer" class="text-saffron fw-bold small">View Link <i class="bi bi-box-arrow-up-right"></i></a></div>`:''}
      <div class="d-flex gap-2 mt-4 flex-wrap" onclick="event.stopPropagation()">
        ${post.status==='ChangesRequested'?`<button class="btn-saffron" onclick="openEditPost(${post.id});closeViewPost();"><i class="bi bi-pencil-fill"></i> Edit &amp; Resubmit</button>`:''}
        ${post.status==='Pending'?`<button class="btn-outline-saffron" style="color:#ef4444;border-color:#ef4444;" onclick="deleteMyPost(${post.id});closeViewPost();"><i class="bi bi-trash"></i> Delete</button>`:''}
        <button class="btn-outline-saffron" onclick="closeViewPost()">Close</button>
      </div>
    </div>
  </div></div>`;
}

/* ===================== TAB: CHANGE PASSWORD ===================== */
function renderPasswordTab(){
  return `
  <div class="admin-card">
    <h4 class="text-brown fw-bold mb-4">Change Password</h4>
    <div class="row g-3" style="max-width:400px;">
      <div class="col-12"><label class="form-label">Current Password</label><input type="password" class="ns-input" id="pwOld"></div>
      <div class="col-12"><label class="form-label">New Password</label><input type="password" class="ns-input" id="pwNew"></div>
      <div class="col-12"><label class="form-label">Confirm New Password</label><input type="password" class="ns-input" id="pwConfirm"></div>
      <div class="col-12"><button class="btn-saffron" onclick="changePassword()">Change Password</button></div>
    </div>
  </div>`;
}
function changePassword(){
  const o=document.getElementById('pwOld').value, n=document.getElementById('pwNew').value, c=document.getElementById('pwConfirm').value;
  if(!o||!n||!c){toast('Please fill in all fields');return;}
  if(n!==c){toast('New passwords do not match');return;}
  if(n.length<6){toast('New password should be at least 6 characters');return;}
  toast('Password changed successfully');
  document.getElementById('pwOld').value='';document.getElementById('pwNew').value='';document.getElementById('pwConfirm').value='';
}

/* ===================== INIT ===================== */
render();
