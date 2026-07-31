/* ===================== MOCK DATA (demo/sample only) ===================== */
const BANNERS = [
  {title:"Maha Shivratri Mahotsav 2026", subtitle:"Join thousands of devotees for our grandest annual celebration in Pune", linkText:"Register Now", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1600&auto=format&fit=crop"},
  {title:"5000+ Families, One Community", subtitle:"Connecting the Nath Sampradaya across India and beyond since 1952", linkText:"Explore Members", img:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1600&auto=format&fit=crop"},
  {title:"Support Our Welfare Initiatives", subtitle:"Your donation funds scholarships, health camps and community relief", linkText:"Donate Now", img:"https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1600&auto=format&fit=crop"},
];

const ANNOUNCEMENTS = [
  "🎉 Maha Shivratri Mahotsav registrations now open — limited seats!",
  "📢 Annual General Body Meeting on 15th August 2026 at Nath Samaj Bhavan",
  "🎓 Scholarship applications for 2026-27 academic year closing soon",
  "🩺 Free health check-up camp this Sunday — all members welcome",
];

const EVENTS = [
  {id:1,title:"Maha Shivratri Mahotsav",type:"Festival",status:"Upcoming",date:"2026-08-14T18:00:00",location:"Nath Samaj Bhavan, Pune",maxReg:500,reg:342,
   desc:"Our grandest annual celebration featuring traditional aarti, cultural performances, and community feast honoring Guru Gorakhnath.",
   img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"},
  {id:2,title:"Free Community Health Camp",type:"Community Service",status:"Upcoming",date:"2026-08-03T09:00:00",location:"Community Hall, Nashik",maxReg:300,reg:118,
   desc:"Free general check-ups, eye screening, and blood tests conducted by volunteer doctors for all community members and families.",
   img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"},
  {id:3,title:"Guru Gorakhnath Jayanti",type:"Festival",status:"Upcoming",date:"2026-09-05T17:30:00",location:"Nath Mandir, Mumbai",maxReg:null,reg:0,
   desc:"Special prayers, bhajan sandhya and prasad distribution to commemorate the birth anniversary of Mahayogi Gorakshanath.",
   img:"https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=800&auto=format&fit=crop"},
  {id:4,title:"Annual Cultural Program 2025",type:"Cultural",status:"Completed",date:"2025-12-20T18:30:00",location:"Shivaji Auditorium, Pune",maxReg:600,reg:600,
   desc:"An evening of classical dance, folk music and drama celebrating our rich cultural heritage, attended by over 600 members.",
   img:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"},
  {id:5,title:"Youth Sports Meet",type:"Sports",status:"Ongoing",date:"2026-07-28T08:00:00",location:"Community Sports Ground, Nagpur",maxReg:200,reg:176,
   desc:"A weekend of cricket, kabaddi and athletics for the community's youth, promoting fitness and friendly competition.",
   img:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"},
  {id:6,title:"Matrimonial Meet & Greet",type:"Social",status:"Upcoming",date:"2026-08-24T16:00:00",location:"Grand Hall, Nashik",maxReg:150,reg:64,
   desc:"An informal gathering for registered matrimony profiles and their families to meet in a comfortable, community-supervised setting.",
   img:"https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"},
];

const NEWS = [
  {id:1,slug:"scholarship-2026",category:"Education",title:"NathSamaj Launches New Scholarship Program for 2026-27",date:"2026-07-20",
   summary:"The community has announced an expanded scholarship scheme covering school, college and vocational courses for deserving students.",
   body:"The NathSamaj Education Trust today announced its most ambitious scholarship program yet, aiming to support over 200 students this academic year across schooling, undergraduate and vocational training. Applications open from 1st August and can be submitted through the community office or by post. Merit and need-based categories are both available, with special consideration for first-generation learners and children of community volunteers.",
   img:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"},
  {id:2,slug:"convention-2026-success",category:"Community",title:"Grand Success of Annual Convention 2026",date:"2026-07-10",
   summary:"Over 3,000 members gathered in Pune for the three-day annual convention featuring cultural events and the AGM.",
   body:"This year's Annual Convention drew a record turnout of over 3,000 members from across Maharashtra and beyond. The three-day event included the general body meeting, felicitation of achievers, cultural performances by community youth, and a grand community feast. The committee thanked all volunteers and sponsors for making the event a resounding success and announced plans for an even bigger gathering next year.",
   img:"https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"},
  {id:3,slug:"nashik-hall-inaugurated",category:"Infrastructure",title:"New Community Hall Inaugurated in Nashik",date:"2026-06-28",
   summary:"A new 5,000 sq. ft. community hall was inaugurated to host events, meetings and welfare activities for the Nashik chapter.",
   body:"The long-awaited Nashik community hall was formally inaugurated by senior committee members, marking a major milestone for the region's growing membership base. The facility includes a main hall for 400 guests, a smaller meeting room, and a dedicated kitchen for community feasts. Funding was made possible through member donations and a matching grant secured by the trust.",
   img:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"},
  {id:4,slug:"health-camp-500-families",category:"Welfare",title:"Health Camp Serves 500+ Families Across Two Cities",date:"2026-06-15",
   summary:"Free medical camps in Pune and Nashik provided check-ups, medicines and consultations to over 500 families this month.",
   body:"In partnership with volunteer doctors and a local hospital, NathSamaj organized free health camps that served more than 500 families across Pune and Nashik. Services included general check-ups, diabetes and blood pressure screening, eye tests and free medicine distribution for common ailments. The welfare committee plans to make these camps a quarterly fixture.",
   img:"https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"},
  {id:5,slug:"youth-skill-workshops",category:"Education",title:"Youth Wing Announces Skill Development Workshops",date:"2026-06-02",
   summary:"Free weekend workshops on digital marketing, resume building and interview skills for community youth aged 18-28.",
   body:"The NathSamaj Youth Wing has launched a series of free weekend workshops designed to boost employability among community youth. Topics include digital marketing basics, resume building, and mock interview practice, led by professionals who are themselves community members. Registration is open on a first-come basis with limited seats per batch.",
   img:"https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"},
  {id:6,slug:"digital-membership-cards",category:"Announcement",title:"Digital Membership Cards Now Live",date:"2026-05-20",
   summary:"Members can now access a digital membership card via their dashboard, simplifying event check-ins and identity verification.",
   body:"As part of ongoing digitization efforts, NathSamaj has rolled out digital membership cards accessible directly from each member's dashboard. The card includes a QR code for quick check-in at events and can be used as identity proof at community facilities. Physical cards remain available on request for members who prefer them.",
   img:"https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"},
];

const ALBUMS = [
  {id:1,name:"Maha Shivratri 2025",cover:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop",count:4},
  {id:2,name:"Annual Convention 2026",cover:"https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",count:4},
  {id:3,name:"Community Health Camp",cover:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",count:4},
  {id:4,name:"Youth Sports Meet", cover:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",count:4},
];
const ALBUM_PHOTOS = {
  1:["1601050690597-df0568f70950","1604881991720-f91add269bed","1524178232363-1fb2b075b655","1519741497674-611481863552"],
  2:["1511578314322-379afb476865","1583391733956-6c78276477e2","1593113646773-028c64a8f1b8","1497366216548-37526070297c"],
  3:["1576091160399-112ba8d25d1d","1584515933487-779824d29309","1523240795612-9a054b0db644","1531482615713-2afd69097998"],
  4:["1461896836934-ffe607ba8211","1517649763962-0c623066013b","1546519638-68e109498ffd","1552674605-db6ffd4facb5"],
};

const MATRIMONY = [
  {id:1,name:"Amit Nath",gender:"Male",age:29,height:"5'9\"",city:"Pune",edu:"B.Tech, Computer Science",occ:"Software Engineer",gotra:"Kashyap",manglik:"No",state:"Maharashtra",about:"Simple, family-oriented person working in IT. Looking for a caring life partner who values our traditions.",photo:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"},
  {id:2,name:"Priya Nathani",gender:"Female",age:26,height:"5'4\"",city:"Nashik",edu:"M.Com",occ:"Bank Officer",gotra:"Bharadwaj",manglik:"Yes",state:"Maharashtra",about:"Cheerful and career-driven, I enjoy classical dance and volunteering for community events.",photo:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop"},
  {id:3,name:"Rahul Nathayya",gender:"Male",age:31,height:"5'11\"",city:"Mumbai",edu:"MBA Finance",occ:"Bank Manager",gotra:"Vashishtha",manglik:"No",state:"Maharashtra",about:"Settled professional, love traveling and cricket. Seeking an understanding partner for a happy life together.",photo:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"},
  {id:4,name:"Sneha Nath",gender:"Female",age:24,height:"5'3\"",city:"Nagpur",edu:"B.Sc Nursing",occ:"Staff Nurse",gotra:"Kaushik",manglik:"No",state:"Maharashtra",about:"Compassionate healthcare professional who enjoys cooking and spending time with family.",photo:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=400&auto=format&fit=crop"},
  {id:5,name:"Vikas Nathrao",gender:"Male",age:28,height:"5'8\"",city:"Pune",edu:"CA",occ:"Chartered Accountant",gotra:"Kashyap",manglik:"No",state:"Maharashtra",about:"Practicing CA with own firm, spiritually inclined, enjoy trekking on weekends.",photo:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"},
  {id:6,name:"Kavita Nath",gender:"Female",age:27,height:"5'5\"",city:"Aurangabad",edu:"B.Ed",occ:"School Teacher",gotra:"Gautam",manglik:"Yes",state:"Maharashtra",about:"Passionate teacher who loves music and believes in balancing tradition with modern outlook.",photo:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop"},
  {id:7,name:"Suresh Nathwani",gender:"Male",age:33,height:"5'10\"",city:"Nashik",edu:"Diploma Mechanical",occ:"Business Owner",gotra:"Bharadwaj",manglik:"No",state:"Maharashtra",about:"Run a family manufacturing business, value-driven and family-oriented, love farming as a hobby.",photo:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"},
  {id:8,name:"Anjali Nathrani",gender:"Female",age:25,height:"5'2\"",city:"Mumbai",edu:"BDS",occ:"Dentist",gotra:"Vashishtha",manglik:"No",state:"Maharashtra",about:"Practicing dentist, enjoy painting and yoga, looking for a supportive and understanding partner.",photo:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=400&auto=format&fit=crop"},
];

const MANDALS = [
  {id:1,name:"Pune Central Seva Mandal",region:"Pune Region",year:"2026",desc:"Coordinating events, welfare drives and daily temple seva for the Pune chapter.",
    members:[
      {id:1,name:"Shri Ram Nath Ji",role:"president",desig:"President",city:"Pune",mobile:"+91 98765 11111",email:"ramnath@nathsamaj.org",about:"Leading the Pune chapter for over 8 years with a focus on youth engagement and welfare programs.",photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"},
      {id:2,name:"Smt. Meena Nath",role:"secretary",desig:"General Secretary",city:"Pune",mobile:"+91 98765 22222",email:"meenanath@nathsamaj.org",about:"Manages day-to-day administration and event coordination for the mandal.",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"},
      {id:3,name:"Shri Suresh Nath Ji",role:"treasurer",desig:"Treasurer",city:"Pune",mobile:"+91 98765 33333",email:"suresh@nathsamaj.org",about:"Oversees donations and financial planning for community programs.",photo:""},
      {id:4,name:"Shri Ganesh Nathrao",role:"member",desig:"Event Coordinator",city:"Pune",mobile:"+91 98765 44444",email:"",about:"",photo:""},
      {id:5,name:"Smt. Radha Nath",role:"member",desig:"Cultural Committee",city:"Pimpri-Chinchwad",mobile:"+91 98765 55555",email:"",about:"",photo:""},
      {id:6,name:"Shri Mahesh Nathani",role:"member",desig:"Welfare Volunteer",city:"Pune",mobile:"",email:"",about:"",photo:""},
    ]},
  {id:2,name:"Nashik Seva Mandal",region:"Nashik Region",year:"2026",desc:"Serving the growing Nashik community through the new community hall and regional programs.",
    members:[
      {id:7,name:"Shri Mohan Nath Ji",role:"president",desig:"President",city:"Nashik",mobile:"+91 98765 66666",email:"mohan@nathsamaj.org",about:"Spearheaded the new Nashik community hall project from planning to inauguration.",photo:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300&auto=format&fit=crop"},
      {id:8,name:"Smt. Kavita Nathrao",role:"secretary",desig:"Secretary",city:"Nashik",mobile:"+91 98765 77777",email:"",about:"",photo:""},
      {id:9,name:"Shri Dinesh Nath",role:"treasurer",desig:"Treasurer",city:"Nashik",mobile:"+91 98765 88888",email:"",about:"",photo:""},
      {id:10,name:"Shri Ashok Nathwani",role:"member",desig:"Health Camp Coordinator",city:"Nashik",mobile:"",email:"",about:"",photo:""},
    ]},
];

const BOARD_POSTS = [
  {id:1,type:"Job Opportunity",title:"Accountant Required — Mid-size Manufacturing Firm, Pune",
   content:"A community-owned manufacturing firm in Pune is looking for an experienced accountant with 3+ years of experience in Tally and GST filing. Immediate joining preferred. Competitive salary as per experience.",
   by:"Suresh Nathwani",deadline:"2026-08-15",contact:"+91 98765 12121",link:""},
  {id:2,type:"Matrimonial",title:"Match Sought for Nashik-based Groom, 30 yrs",
   content:"Seeking a well-educated, family-oriented bride for our son, 30 yrs, MBA, working as a Bank Manager in Nashik. Caste no bar within community. Please reach out with biodata.",
   by:"Ashok Nathwani",deadline:"",contact:"+91 98765 34343",link:""},
  {id:3,type:"Lost & Found",title:"Found: Gold Chain near Community Hall, Pune",
   content:"A gold chain was found near the entrance of Nath Samaj Bhavan after the Sunday satsang. Owner can identify and collect from the community office with proof.",
   by:"Radha Nath",deadline:"",contact:"+91 98765 56565",link:""},
  {id:4,type:"Accommodation",title:"2BHK Flat Available for Rent — Community Members Preferred",
   content:"Spacious 2BHK apartment available for rent close to the Pune community hall. Preference given to community members. Semi-furnished, available from next month.",
   by:"Ganesh Nathrao",deadline:"",contact:"+91 98765 78787",link:""},
  {id:5,type:"Business",title:"Community Directory of Businesses — Submissions Open",
   content:"We are compiling a directory of businesses run by community members to encourage mutual support. Submit your business name, category and contact details to be featured.",
   by:"Committee Office",deadline:"2026-09-01",contact:"info@nathsamaj.org",link:""},
  {id:6,type:"Announcement",title:"Blood Donation Drive — Volunteers Needed",
   content:"Organizing a blood donation camp alongside the upcoming health camp. We need volunteers for registration and logistics support on the day. Sign up at the community office.",
   by:"Welfare Committee",deadline:"2026-08-03",contact:"+91 98765 90909",link:""},
];

const TESTIMONIALS = [
  {id:1,name:"Rajesh Nathani",role:"Member since 2015",content:"The scholarship program helped my daughter complete her engineering degree. Forever grateful to this community.",photo:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"},
  {id:2,name:"Sunita Nath",role:"Matrimony Success Story",content:"Found my life partner through the matrimony portal. The process was simple, respectful and community-verified.",photo:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"},
  {id:3,name:"Deepak Nathrao",role:"Volunteer, Seva Mandal",content:"Being part of the Seva Mandal has given me a sense of purpose. Proud to serve our community every week.",photo:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop"},
];

const CAMPAIGNS = [
  {id:1,title:"Nashik Community Hall — Phase 2",desc:"Funding the interior finishing and furniture for the new Nashik community hall.",target:2500000,raised:1680000},
  {id:2,title:"Student Scholarship Fund 2026-27",desc:"Supporting 200+ students with school and college scholarships this academic year.",target:1500000,raised:940000},
  {id:3,title:"Flood Relief — Affected Families",desc:"Emergency relief kits and support for community families affected by recent flooding.",target:800000,raised:612000},
];

/* ===================== STATE ===================== */
let state = {
  page:'home',
  activeBanner:0,
  eventsFilter:'All',
  eventsSearch:'',
  newsSearch:'',
  newsPage:1,
  galleryAlbum:null,
  matrimonyFilters:{gender:'',minAge:'',maxAge:'',city:''},
  matrimonyPage:1,
  activeMandalId:1,
  boardTab:'All',
  selectedCampaign:CAMPAIGNS[0].id,
  donateAmount:'1000',
  loggedIn:false,
  userName:'',
  authTab:'login',
};

/* ===================== HELPERS ===================== */
function fmtDate(d){const dt=new Date(d);return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});}
function fmtTime(d){const dt=new Date(d);return dt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});}
function inr(n){return '₹'+Number(n).toLocaleString('en-IN');}
function initials(name){return name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toastT);window._toastT=setTimeout(()=>t.classList.remove('show'),2600);}
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

function go(page){
  state.page = page;
  window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('mobileMenu').classList.remove('open');
  render();
}
function toggleMobile(){document.getElementById('mobileMenu').classList.toggle('open');}
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

function logout(){state.loggedIn=false;state.userName='';toast('Logged out successfully');go('home');}

/* ===================== RENDER: PAGE ROUTER ===================== */
function render(){
  document.querySelectorAll('.nav-link[data-page]').forEach(a=>{
    a.classList.toggle('active', a.dataset.page===state.page);
  });
  document.getElementById('navAuthLoggedOut').style.display = state.loggedIn?'none':'';
  document.getElementById('navAuthLoggedIn').style.display = state.loggedIn?'':'none';
  document.getElementById('mobileAuthLoggedOut').style.display = state.loggedIn?'none':'';
  document.getElementById('mobileAuthLoggedIn').style.display = state.loggedIn?'':'none';
  document.getElementById('mobileLogoutBtn').style.display = state.loggedIn?'':'none';
  if(state.loggedIn) document.getElementById('navUserName').textContent = state.userName + ' ▾';

  const app = document.getElementById('app');
  const renderers = {
    home:renderHome, about:renderAbout, events:renderEvents, news:renderNews,
    gallery:renderGallery, matrimony:renderMatrimony, sevamandal:renderSevaMandal,
    board:renderBoard, donations:renderDonations, contact:renderContact,
    login:renderAuth, dashboard:renderDashboard,
  };
  app.innerHTML = (renderers[state.page]||renderHome)();
  attachPageScripts();
}

/* ===================== HOME ===================== */
function renderHome(){
  return `
  <section class="hero-section">
    <div class="banner-slider">
      ${BANNERS.map((b,i)=>`
        <div class="banner-slide ${i===state.activeBanner?'active':''}">
          <img src="${b.img}" alt="${escapeHtml(b.title)}" class="banner-img">
          <div class="banner-overlay"><div class="container">
            <span class="banner-tag">🕉️ NathSamaj</span>
            <h1 class="banner-title">${escapeHtml(b.title)}</h1>
            <p class="banner-subtitle">${escapeHtml(b.subtitle)}</p>
            <a href="#" onclick="return false;" class="btn-saffron">${b.linkText}</a>
          </div></div>
        </div>`).join('')}
      <button class="slider-btn prev" onclick="shiftBanner(-1)"><i class="bi bi-chevron-left"></i></button>
      <button class="slider-btn next" onclick="shiftBanner(1)"><i class="bi bi-chevron-right"></i></button>
      <div class="slider-dots">
        ${BANNERS.map((b,i)=>`<span class="dot ${i===state.activeBanner?'active':''}" onclick="setBanner(${i})"></span>`).join('')}
      </div>
    </div>
  </section>

  <div class="announcement-bar">
    <span class="ann-label"><i class="bi bi-megaphone-fill"></i> Announcements</span>
    <div class="ann-ticker">${ANNOUNCEMENTS.map(a=>`<span class="ann-item">${escapeHtml(a)}</span>`).join('')}</div>
  </div>

  <section class="section-pad bg-cream">
    <div class="container"><div class="row align-items-center g-5">
      <div class="col-lg-6">
        <span class="badge-saffron mb-3 d-inline-block">About NathSamaj</span>
        <h2 class="section-title text-start">Our Ancient Heritage &amp; Living Tradition</h2>
        <div class="section-divider" style="margin:12px 0 20px;"></div>
        <p class="text-muted-ns">NathSamaj is a vibrant community rooted in the ancient Nath tradition, celebrating our shared culture, spiritual values, and social bonds across generations.</p>
        <p class="text-muted-ns">We bring together families for festivals, cultural programs, matrimony services, and community welfare initiatives — keeping our heritage alive and thriving.</p>
        <a href="#" onclick="go('about');return false;" class="btn-saffron mt-3">Learn More</a>
      </div>
      <div class="col-lg-6">
        <div class="about-stats-grid">
          <div class="stat-box"><div class="stat-num">5000+</div><div class="stat-lbl">Registered Members</div></div>
          <div class="stat-box"><div class="stat-num">200+</div><div class="stat-lbl">Events Organized</div></div>
          <div class="stat-box"><div class="stat-num">50+</div><div class="stat-lbl">Successful Matches</div></div>
          <div class="stat-box"><div class="stat-num">₹25L+</div><div class="stat-lbl">Donations Collected</div></div>
        </div>
      </div>
    </div></div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="text-center mb-5"><span class="badge-saffron">Events</span><h2 class="section-title mt-2">Upcoming Events</h2><div class="section-divider mx-auto"></div></div>
      <div class="row g-4">
        ${EVENTS.filter(e=>e.status==='Upcoming').slice(0,3).map(ev=>`
          <div class="col-md-4"><div class="ns-card h-100">
            <img src="${ev.img}" alt="${escapeHtml(ev.title)}" class="card-img-top" style="height:180px;object-fit:cover;">
            <div class="p-4">
              <span class="badge-saffron mb-2 d-inline-block">${ev.type}</span>
              <h5 class="fw-bold text-brown mb-2">${escapeHtml(ev.title)}</h5>
              <div class="d-flex align-items-center gap-2 text-muted-ns small mb-1"><i class="bi bi-calendar3"></i><span>${fmtDate(ev.date)}</span></div>
              <div class="d-flex align-items-center gap-2 text-muted-ns small mb-3"><i class="bi bi-geo-alt"></i><span>${ev.location}</span></div>
              <a href="#" onclick="go('events');return false;" class="btn-outline-saffron w-100 text-center d-block">View Details</a>
            </div>
          </div></div>`).join('')}
      </div>
      <div class="text-center mt-5"><a href="#" onclick="go('events');return false;" class="btn-saffron">View All Events</a></div>
    </div>
  </section>

  <section class="section-pad bg-cream">
    <div class="container">
      <div class="text-center mb-5"><span class="badge-saffron">News</span><h2 class="section-title mt-2">Latest News</h2><div class="section-divider mx-auto"></div></div>
      <div class="row g-4">
        ${NEWS.slice(0,3).map(a=>`
          <div class="col-md-4"><div class="ns-card h-100">
            <img src="${a.img}" alt="${escapeHtml(a.title)}" class="card-img-top" style="height:160px;object-fit:cover;">
            <div class="p-4">
              <span class="badge-gold mb-2 d-inline-block">${a.category}</span>
              <h6 class="fw-bold text-brown mb-2">${escapeHtml(a.title)}</h6>
              <p class="small text-muted-ns mb-3" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(a.summary)}</p>
              <a href="#" onclick="openNews(${a.id});return false;" class="text-saffron small fw-600">Read More <i class="bi bi-arrow-right"></i></a>
            </div>
          </div></div>`).join('')}
      </div>
      <div class="text-center mt-5"><a href="#" onclick="go('news');return false;" class="btn-saffron">View All News</a></div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="text-center mb-5"><span class="badge-saffron">Our Services</span><h2 class="section-title mt-2">Everything Our Community Needs</h2><div class="section-divider mx-auto"></div></div>
      <div class="row g-4">
        ${[
          ['matrimony','💍','Matrimony','Trusted matrimonial profiles within community'],
          ['events','🎉','Events','Cultural programs, festivals & gatherings'],
          ['gallery','🖼️','Gallery','Photos & memories from our events'],
          ['donations','🙏','Donations','Support community welfare & initiatives'],
          ['sevamandal','🤝','Seva Mandal','Meet our dedicated committee members'],
          ['board','📋','Community Board','Notices, jobs & local opportunities'],
          ['news','📰','News','Latest community news & updates'],
          ['contact','📞','Contact','Reach out to our leadership team'],
        ].map(([p,icon,title,desc])=>`
          <div class="col-6 col-md-4 col-lg-3"><a href="#" onclick="go('${p}');return false;" class="service-card">
            <div class="svc-icon">${icon}</div><div class="svc-title">${title}</div><div class="svc-desc">${desc}</div>
          </a></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section-pad bg-brown">
    <div class="container">
      <div class="text-center mb-5"><span class="badge-gold">Testimonials</span><h2 class="section-title mt-2" style="color:#fff;">What Our Members Say</h2><div class="section-divider mx-auto"></div></div>
      <div class="row g-4 justify-content-center">
        ${TESTIMONIALS.map(t=>`
          <div class="col-md-4"><div class="testimonial-card">
            <p class="testimonial-text">"${escapeHtml(t.content)}"</p>
            <div class="testimonial-author"><img src="${t.photo}" alt="${escapeHtml(t.name)}" class="t-avatar">
              <div><div class="t-name">${escapeHtml(t.name)}</div><div class="t-role">${t.role}</div></div>
            </div>
          </div></div>`).join('')}
      </div>
    </div>
  </section>

  <section class="section-pad donation-cta">
    <div class="container text-center">
      <span class="badge-saffron mb-3 d-inline-block">Support Us</span>
      <h2 class="section-title">Help Us Serve the Community</h2><div class="section-divider mx-auto"></div>
      <p class="text-muted-ns mb-4">Your generous donation helps us organize events, support needy families, provide education aid, and preserve our culture for future generations.</p>
      <a href="#" onclick="go('donations');return false;" class="btn-saffron me-3">Donate Now</a>
      <a href="#" onclick="go('contact');return false;" class="btn-outline-saffron">Contact Us</a>
    </div>
  </section>`;
}
function shiftBanner(d){state.activeBanner=(state.activeBanner+d+BANNERS.length)%BANNERS.length;render();}
function setBanner(i){state.activeBanner=i;render();}
let bannerTimer=setInterval(()=>{if(state.page==='home'){state.activeBanner=(state.activeBanner+1)%BANNERS.length;render();}},6000);

/* ===================== ABOUT ===================== */
function renderAbout(){
  const missions=[
    ['bi-heart-fill','Cultural Preservation','Keeping alive the rich traditions, festivals, and spiritual practices of the Nath community.'],
    ['bi-people-fill','Community Unity','Bringing together families, fostering connections, and strengthening social bonds.'],
    ['bi-mortarboard-fill','Education Support','Providing scholarships and educational assistance to deserving youth in our community.'],
    ['bi-hand-thumbs-up-fill','Social Welfare','Supporting underprivileged members through donations, health camps, and welfare drives.'],
  ];
  return `
  <div class="page-hero"><div class="container"><h1>About NathSamaj</h1><p>Our heritage, our culture, our community</p></div></div>
  <section class="section-pad"><div class="container"><div class="row g-5">
    <div class="col-lg-8">
      <span class="badge-saffron">Our Story</span>
      <h2 class="section-title mt-2">Rich History &amp; Living Tradition</h2>
      <div class="section-divider" style="margin:12px 0 20px;"></div>
      <p class="text-muted-ns">The Nath Sampradaya, one of India's most ancient spiritual traditions, traces its origins to the great Mahayogi Gorakshanath. Our community has preserved this sacred lineage across centuries, carrying forward the wisdom of yoga, service, and devotion.</p>
      <p class="text-muted-ns">NathSamaj was established to unite all members of this great tradition — providing a platform for cultural exchange, social support, matrimonial services, and community welfare activities.</p>
      <p class="text-muted-ns">Today, we stand as a thriving community of thousands of families across India and the world, bound together by shared values, traditions, and a deep sense of belonging.</p>
      <h3 class="mt-5 mb-3 text-brown">Our Mission</h3>
      <div class="row g-3">
        ${missions.map(([icon,title,desc])=>`
        <div class="col-md-6"><div class="mission-item"><i class="bi ${icon} text-saffron"></i>
          <div><strong>${title}</strong><p>${desc}</p></div>
        </div></div>`).join('')}
      </div>
    </div>
    <div class="col-lg-4"><div class="about-sidebar">
      <div class="quick-links-card"><h5 class="fw-bold text-brown mb-3">Quick Links</h5>
        <a href="#" onclick="go('matrimony');return false;" class="ql-item"><i class="bi bi-arrow-right-circle text-saffron"></i> Matrimony Services</a>
        <a href="#" onclick="go('events');return false;" class="ql-item"><i class="bi bi-arrow-right-circle text-saffron"></i> Upcoming Events</a>
        <a href="#" onclick="go('sevamandal');return false;" class="ql-item"><i class="bi bi-arrow-right-circle text-saffron"></i> Seva Mandal</a>
        <a href="#" onclick="go('donations');return false;" class="ql-item"><i class="bi bi-arrow-right-circle text-saffron"></i> Make a Donation</a>
        <a href="#" onclick="go('contact');return false;" class="ql-item"><i class="bi bi-arrow-right-circle text-saffron"></i> Contact Us</a>
      </div>
      <div class="contact-card mt-4"><h5 class="fw-bold text-brown mb-3">Get in Touch</h5>
        <p class="small text-muted-ns mb-3">Have questions about membership, events, or services? We're here to help.</p>
        <a href="#" onclick="go('contact');return false;" class="btn-saffron w-100 d-block text-center">Contact Us</a>
      </div>
    </div></div>
  </div></div></section>
  <section class="section-pad bg-cream"><div class="container">
    <div class="text-center mb-5"><span class="badge-saffron">Leadership</span><h2 class="section-title mt-2">Our Guiding Committee</h2><div class="section-divider mx-auto"></div></div>
    <div class="row g-4 justify-content-center">
      ${[['Shri Ram Nath Ji','President'],['Shri Mohan Nath Ji','General Secretary'],['Shri Suresh Nath Ji','Treasurer']].map(([n,r])=>`
      <div class="col-md-4 col-lg-3"><div class="leader-card text-center">
        <div class="leader-avatar">🧑</div><h6 class="fw-bold text-brown mt-3">${n}</h6><p class="small text-muted-ns">${r}</p>
      </div></div>`).join('')}
    </div>
  </div></section>`;
}

/* ===================== EVENTS ===================== */
function renderEvents(){
  const filtered = EVENTS.filter(e=>{
    const matchTab = state.eventsFilter==='All'||e.status===state.eventsFilter;
    const matchSearch = !state.eventsSearch || e.title.toLowerCase().includes(state.eventsSearch.toLowerCase());
    return matchTab && matchSearch;
  });
  return `
  <div class="page-hero"><div class="container"><h1>Events</h1><p>Cultural programs, festivals, and community gatherings</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="events-toolbar mb-5">
      <div class="filter-tabs">
        ${['All','Upcoming','Ongoing','Completed'].map(t=>`<button class="filter-tab ${state.eventsFilter===t?'active':''}" onclick="setEventsFilter('${t}')">${t}</button>`).join('')}
      </div>
      <div class="search-box"><i class="bi bi-search"></i><input type="text" placeholder="Search events..." value="${escapeHtml(state.eventsSearch)}" oninput="state.eventsSearch=this.value;render();"></div>
    </div>
    ${filtered.length===0?`<div class="text-center py-5"><div style="font-size:3rem;">🎉</div><h5 class="text-brown mt-3">No events found</h5><p class="text-muted-ns">Try a different filter or search.</p></div>`:`
    <div class="row g-4">
      ${filtered.map(ev=>`
      <div class="col-md-6 col-lg-4"><div class="ns-card h-100">
        <div class="event-card-img"><img src="${ev.img}" alt="${escapeHtml(ev.title)}">
          <span class="event-status-badge event-status-${ev.status.toLowerCase()}">${ev.status}</span>
        </div>
        <div class="p-4">
          <span class="badge-saffron mb-2 d-inline-block">${ev.type}</span>
          <h5 class="fw-bold text-brown mb-3">${escapeHtml(ev.title)}</h5>
          <div class="event-meta">
            <span><i class="bi bi-calendar3 text-saffron"></i> ${fmtDate(ev.date)}</span>
            <span><i class="bi bi-clock text-saffron"></i> ${fmtTime(ev.date)}</span>
            <span><i class="bi bi-geo-alt text-saffron"></i> ${ev.location}</span>
            ${ev.maxReg?`<span><i class="bi bi-people text-saffron"></i> ${ev.reg}/${ev.maxReg} registered</span>`:''}
          </div>
          <p class="small text-muted-ns mt-3" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(ev.desc)}</p>
          <a href="#" onclick="openEvent(${ev.id});return false;" class="btn-saffron d-block text-center mt-3">View Details</a>
        </div>
      </div></div>`).join('')}
    </div>`}
  </div></section>
  ${state.openEvent?renderEventModal():''}`;
}
function setEventsFilter(t){state.eventsFilter=t;render();}
function openEvent(id){state.openEvent=EVENTS.find(e=>e.id===id);render();}
function closeEvent(){state.openEvent=null;render();}
function renderEventModal(){
  const ev=state.openEvent;
  return `<div class="modal-backdrop" onclick="closeEvent()"><div class="profile-modal" onclick="event.stopPropagation()">
    <button class="modal-close" onclick="closeEvent()"><i class="bi bi-x-lg"></i></button>
    <img src="${ev.img}" alt="${escapeHtml(ev.title)}" style="width:100%;height:220px;object-fit:cover;">
    <div class="profile-modal-body">
      <span class="badge-saffron mb-2 d-inline-block">${ev.type}</span>
      <span class="event-status-badge event-status-${ev.status.toLowerCase()}" style="position:static;margin-left:8px;">${ev.status}</span>
      <h4 class="text-brown fw-bold mt-3 mb-3">${escapeHtml(ev.title)}</h4>
      <div class="event-meta mb-3">
        <span><i class="bi bi-calendar3 text-saffron"></i> ${fmtDate(ev.date)} at ${fmtTime(ev.date)}</span>
        <span><i class="bi bi-geo-alt text-saffron"></i> ${ev.location}</span>
        ${ev.maxReg?`<span><i class="bi bi-people text-saffron"></i> ${ev.reg}/${ev.maxReg} registered</span>`:''}
      </div>
      <p class="text-muted-ns">${escapeHtml(ev.desc)}</p>
      <button class="btn-saffron w-100 mt-3" onclick="demoRegister('${escapeHtml(ev.title)}')">Register for this Event</button>
    </div>
  </div></div>`;
}
function demoRegister(name){toast('✅ Registered for "'+name+'" (demo action)');closeEvent();}

/* ===================== NEWS ===================== */
function renderNews(){
  const filtered = NEWS.filter(a=>!state.newsSearch || a.title.toLowerCase().includes(state.newsSearch.toLowerCase()));
  return `
  <div class="page-hero"><div class="container"><h1>News &amp; Updates</h1><p>Stay informed with the latest from our community</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="news-toolbar mb-5">
      <div class="search-box"><i class="bi bi-search"></i><input type="text" placeholder="Search news..." value="${escapeHtml(state.newsSearch)}" oninput="state.newsSearch=this.value;render();"></div>
    </div>
    ${filtered.length===0?`<div class="text-center py-5"><div style="font-size:3rem;">📰</div><h5 class="text-brown mt-3">No news articles found</h5></div>`:`
    <div class="row g-4">
      ${filtered.map(a=>`
      <div class="col-md-6 col-lg-4"><div class="ns-card h-100">
        <img src="${a.img}" alt="${escapeHtml(a.title)}" class="card-img-top" style="height:180px;object-fit:cover;">
        <div class="p-4">
          <div class="d-flex gap-2 mb-2 align-items-center justify-content-between">
            <span class="badge-gold">${a.category}</span><span class="text-muted-ns small">${fmtDate(a.date)}</span>
          </div>
          <h6 class="fw-bold text-brown mb-2">${escapeHtml(a.title)}</h6>
          <p class="small text-muted-ns mb-3" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(a.summary)}</p>
          <a href="#" onclick="openNews(${a.id});return false;" class="text-saffron small fw-bold d-flex align-items-center gap-1">Read More <i class="bi bi-arrow-right"></i></a>
        </div>
      </div></div>`).join('')}
    </div>`}
  </div></section>
  ${state.openNews?renderNewsModal():''}`;
}
function openNews(id){state.openNews=NEWS.find(a=>a.id===id);state.page='news';window.scrollTo({top:0});render();}
function closeNews(){state.openNews=null;render();}
function renderNewsModal(){
  const a=state.openNews;
  return `<div class="modal-backdrop" onclick="closeNews()"><div class="profile-modal" onclick="event.stopPropagation()" style="max-width:640px;">
    <button class="modal-close" onclick="closeNews()"><i class="bi bi-x-lg"></i></button>
    <img src="${a.img}" alt="${escapeHtml(a.title)}" style="width:100%;height:240px;object-fit:cover;">
    <div class="profile-modal-body">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <span class="badge-gold">${a.category}</span><span class="text-muted-ns small">${fmtDate(a.date)}</span>
      </div>
      <h4 class="text-brown fw-bold mb-3">${escapeHtml(a.title)}</h4>
      <p class="text-muted-ns">${escapeHtml(a.body)}</p>
    </div>
  </div></div>`;
}

/* ===================== GALLERY ===================== */
function renderGallery(){
  if(!state.galleryAlbum){
    return `
    <div class="page-hero"><div class="container"><h1>Gallery</h1><p>Memories from our community events and celebrations</p></div></div>
    <section class="section-pad"><div class="container">
      <div class="text-center mb-5"><span class="badge-saffron">Albums</span><h2 class="section-title mt-2">Photo Albums</h2><div class="section-divider mx-auto"></div></div>
      <div class="row g-4">
        ${ALBUMS.map(al=>`
        <div class="col-sm-6 col-md-4 col-lg-3"><div class="album-card" onclick="openAlbum(${al.id})">
          <div class="album-thumb"><img src="${al.cover}" alt="${escapeHtml(al.name)}">
            <div class="album-overlay"><i class="bi bi-eye-fill"></i><span>View Album</span></div>
          </div>
          <div class="album-info"><h6 class="fw-bold text-brown mb-1">${al.name}</h6><span class="small text-muted-ns">${al.count} photos</span></div>
        </div></div>`).join('')}
      </div>
    </div></section>`;
  }
  const album = ALBUMS.find(a=>a.id===state.galleryAlbum);
  const photos = ALBUM_PHOTOS[album.id];
  return `
  <div class="page-hero"><div class="container"><h1>Gallery</h1><p>Memories from our community events and celebrations</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="d-flex align-items-center gap-3 mb-5">
      <button class="btn-outline-saffron" onclick="closeAlbum()">← Albums</button>
      <div><h3 class="text-brown mb-0">${album.name}</h3><span class="small text-muted-ns">${album.count} photos</span></div>
    </div>
    <div class="gallery-grid">
      ${photos.map((p,i)=>`<div class="gallery-item" onclick="openLightbox('${p}')">
        <img src="https://images.unsplash.com/photo-${p}?q=80&w=500&auto=format&fit=crop" alt="Photo ${i+1}">
        <div class="gallery-item-overlay"><i class="bi bi-zoom-in"></i></div>
      </div>`).join('')}
    </div>
  </div></section>
  ${state.lightbox?`<div class="lightbox" onclick="closeLightbox()"><button class="lightbox-close" onclick="closeLightbox()"><i class="bi bi-x-lg"></i></button>
    <img src="https://images.unsplash.com/photo-${state.lightbox}?q=80&w=1200&auto=format&fit=crop" onclick="event.stopPropagation()"></div>`:''}`;
}
function openAlbum(id){state.galleryAlbum=id;render();}
function closeAlbum(){state.galleryAlbum=null;render();}
function openLightbox(p){state.lightbox=p;render();}
function closeLightbox(){state.lightbox=null;render();}

/* ===================== MATRIMONY ===================== */
function renderMatrimony(){
  const f=state.matrimonyFilters;
  const filtered = MATRIMONY.filter(p=>{
    if(f.gender && p.gender!==f.gender) return false;
    if(f.minAge && p.age < +f.minAge) return false;
    if(f.maxAge && p.age > +f.maxAge) return false;
    if(f.city && !p.city.toLowerCase().includes(f.city.toLowerCase())) return false;
    return true;
  });
  return `
  <div class="page-hero"><div class="container"><h1>Matrimony</h1><p>Find your life partner within the NathSamaj community</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="matrimony-filters mb-5"><div class="filter-row">
      <select class="ns-input ns-select" style="max-width:160px;" onchange="f_gender(this.value)">
        <option value="">All Genders</option>
        <option value="Male" ${f.gender==='Male'?'selected':''}>Groom</option>
        <option value="Female" ${f.gender==='Female'?'selected':''}>Bride</option>
      </select>
      <input type="number" class="ns-input" placeholder="Min Age" style="max-width:120px;" value="${f.minAge}" oninput="f_minage(this.value)">
      <input type="number" class="ns-input" placeholder="Max Age" style="max-width:120px;" value="${f.maxAge}" oninput="f_maxage(this.value)">
      <input type="text" class="ns-input" placeholder="City" style="max-width:200px;" value="${f.city}" oninput="f_city(this.value)">
      <button class="btn-saffron" onclick="render()">Search</button>
    </div></div>
    ${filtered.length===0?`<div class="text-center py-5"><div style="font-size:3rem;">💍</div><h5 class="text-brown mt-3">No profiles found</h5></div>`:`
    <div class="row g-4">
      ${filtered.map(p=>`
      <div class="col-sm-6 col-md-4 col-lg-3"><div class="matrimony-card" onclick="openProfile(${p.id})">
        <div class="m-photo-wrap"><img src="${p.photo}" alt="${escapeHtml(p.name)}">
          <span class="m-badge ${p.gender==='Female'?'bride':''}">${p.gender==='Male'?'Groom':'Bride'}</span>
        </div>
        <div class="m-info"><h6 class="fw-bold text-brown mb-1">${escapeHtml(p.name)}</h6>
          <div class="m-meta"><span>${p.age} yrs</span><span>${p.height}</span></div>
          <span class="small text-muted-ns"><i class="bi bi-geo-alt"></i> ${p.city}</span>
          <span class="small text-muted-ns d-block"><i class="bi bi-mortarboard"></i> ${p.edu}</span>
        </div>
      </div></div>`).join('')}
    </div>`}
  </div></section>
  ${state.openProfile?renderProfileModal():''}`;
}
function f_gender(v){state.matrimonyFilters.gender=v;}
function f_minage(v){state.matrimonyFilters.minAge=v;}
function f_maxage(v){state.matrimonyFilters.maxAge=v;}
function f_city(v){state.matrimonyFilters.city=v;}
function openProfile(id){state.openProfile=MATRIMONY.find(p=>p.id===id);state.composing=false;render();}
function closeProfile(){state.openProfile=null;render();}
function renderProfileModal(){
  const p=state.openProfile;
  return `<div class="modal-backdrop" onclick="closeProfile()"><div class="profile-modal" onclick="event.stopPropagation()">
    <button class="modal-close" onclick="closeProfile()"><i class="bi bi-x-lg"></i></button>
    <div class="profile-modal-header">
      <img src="${p.photo}" alt="${escapeHtml(p.name)}" class="modal-photo">
      <div><h4 class="text-brown fw-bold mb-1">${escapeHtml(p.name)}</h4><span class="badge-saffron">${p.gender==='Male'?'Groom':'Bride'}</span></div>
    </div>
    <div class="profile-modal-body">
      <div class="pd-grid">
        <div class="pd-item"><span class="pd-label">Age</span><span class="pd-val">${p.age} years</span></div>
        <div class="pd-item"><span class="pd-label">Height</span><span class="pd-val">${p.height}</span></div>
        <div class="pd-item"><span class="pd-label">Education</span><span class="pd-val">${p.edu}</span></div>
        <div class="pd-item"><span class="pd-label">Occupation</span><span class="pd-val">${p.occ}</span></div>
        <div class="pd-item"><span class="pd-label">City</span><span class="pd-val">${p.city}</span></div>
        <div class="pd-item"><span class="pd-label">State</span><span class="pd-val">${p.state}</span></div>
        <div class="pd-item"><span class="pd-label">Gotra</span><span class="pd-val">${p.gotra}</span></div>
        <div class="pd-item"><span class="pd-label">Manglik</span><span class="pd-val">${p.manglik}</span></div>
      </div>
      <div class="mt-4"><div class="pd-label mb-2">About</div><p class="text-muted-ns small">${escapeHtml(p.about)}</p></div>
    </div>
    <div class="profile-modal-footer">
      ${!state.loggedIn?`<a href="#" onclick="closeProfile();go('login');return false;" class="btn-saffron w-100 d-block text-center">Login to Connect</a>`:
      !state.composing?`<div class="d-flex gap-2">
        <button class="btn-saffron" style="flex:1;" onclick="demoInterest('${escapeHtml(p.name)}')">💍 Express Interest</button>
        <button class="btn-msg" onclick="state.composing=true;render();"><i class="bi bi-envelope"></i> Message</button>
      </div>`:`<div class="compose-box">
        <div class="compose-label">Message to ${escapeHtml(p.name)}</div>
        <textarea class="ns-input compose-textarea" rows="3" id="composeText" placeholder="Write your message..."></textarea>
        <div class="d-flex gap-2 mt-2 justify-content-end">
          <button class="btn-outline-cancel" onclick="state.composing=false;render();">Cancel</button>
          <button class="btn-saffron btn-sm" onclick="demoSendMessage('${escapeHtml(p.name)}')">Send Message</button>
        </div>
      </div>`}
    </div>
  </div></div>`;
}
function demoInterest(name){toast('💍 Interest sent to '+name+' (demo action)');closeProfile();}
function demoSendMessage(name){toast('✉️ Message sent to '+name+' (demo action)');closeProfile();}

/* ===================== SEVA MANDAL ===================== */
function renderSevaMandal(){
  const mandal = MANDALS.find(m=>m.id===state.activeMandalId);
  const officers = mandal.members.filter(m=>m.role!=='member');
  const regulars = mandal.members.filter(m=>m.role==='member');
  const roleLabel = r => r==='president'?'President':r==='secretary'?'Secretary':r==='treasurer'?'Treasurer':'Member';
  const memberCard = (m,isOfficer)=>`
    <div class="sm-member-card ${isOfficer && m.role==='president'?'sm-card-president':''}" onclick="openSmMember(${m.id})" style="cursor:pointer">
      <div class="sm-avatar-wrap">
        ${m.photo?`<img src="${m.photo}" alt="${escapeHtml(m.name)}" class="sm-avatar-img">`:`<div class="sm-avatar-ph">${initials(m.name)}</div>`}
        ${isOfficer?`<span class="sm-role-badge ${m.role==='president'?'sm-badge-president':''}">${roleLabel(m.role)}</span>`:''}
      </div>
      <div class="sm-member-info">
        <h4 class="sm-member-name">${escapeHtml(m.name)}</h4>
        ${m.desig?`<p class="sm-member-desig">${m.desig}</p>`:''}
        ${m.city?`<p class="sm-member-city"><i class="bi bi-geo-alt"></i> ${m.city}</p>`:''}
        ${(m.mobile||m.email)?`<div class="sm-contact-row">
          ${m.mobile?`<a href="tel:${m.mobile}" class="sm-contact-btn" onclick="event.stopPropagation()"><i class="bi bi-telephone"></i></a>`:''}
          ${m.email?`<a href="mailto:${m.email}" class="sm-contact-btn" onclick="event.stopPropagation()"><i class="bi bi-envelope"></i></a>`:''}
        </div>`:''}
      </div>
    </div>`;
  return `
  <div class="sm-hero"><div class="container text-center">
    <div class="sm-hero-tag">॥ सेवा मंडल ॥</div>
    <h1 class="sm-hero-title">Seva Mandal</h1>
    <p class="sm-hero-desc">Our dedicated committee members serving the NathSamaj community with devotion and commitment</p>
  </div></div>
  <div class="sm-tabs-bar"><div class="sm-tabs">
    ${MANDALS.map(m=>`<button class="sm-tab ${state.activeMandalId===m.id?'active':''}" onclick="state.activeMandalId=${m.id};render();">${m.name} <span class="sm-tab-year">${m.year}</span></button>`).join('')}
  </div></div>
  <section class="sm-content section-pad"><div class="container">
    <div class="sm-section-header mb-5">
      <div class="section-tag">${mandal.region}</div>
      <h2 class="section-title">${mandal.name}</h2>
      <div class="sm-year-badge">${mandal.year}</div>
      <p class="section-desc mt-3">${mandal.desc}</p>
    </div>
    <div class="sm-role-block">
      <div class="sm-role-label"><span class="sm-role-icon">⭐</span> Office Bearers</div>
      <div class="sm-officers-grid">${officers.map(m=>memberCard(m,true)).join('')}</div>
    </div>
    ${regulars.length?`<div class="sm-role-block">
      <div class="sm-role-label"><span class="sm-role-icon">👥</span> Members</div>
      <div class="sm-member-grid">${regulars.map(m=>memberCard(m,false)).join('')}</div>
    </div>`:''}
  </div></section>
  ${state.openSmMember?renderSmMemberModal():''}`;
}
function openSmMember(id){
  for(const m of MANDALS){const found=m.members.find(x=>x.id===id);if(found){state.openSmMember=found;break;}}
  render();
}
function closeSmMember(){state.openSmMember=null;render();}
function renderSmMemberModal(){
  const m=state.openSmMember;
  const roleLabel = r => r==='president'?'President':r==='secretary'?'Secretary':r==='treasurer'?'Treasurer':'Member';
  return `<div class="sm-modal-backdrop" onclick="closeSmMember()"><div class="sm-modal" onclick="event.stopPropagation()">
    <button class="sm-modal-close" onclick="closeSmMember()"><i class="bi bi-x-lg"></i></button>
    <div class="sm-modal-inner">
      <div class="sm-modal-photo-col">
        ${m.photo?`<img src="${m.photo}" alt="${escapeHtml(m.name)}" class="sm-modal-photo">`:`<div class="sm-modal-photo-ph">${initials(m.name)}</div>`}
        <span class="sm-modal-role-pill ${m.role==='president'?'sm-badge-president':''}">${roleLabel(m.role)}</span>
      </div>
      <div class="sm-modal-info-col">
        <h3 class="sm-modal-name">${escapeHtml(m.name)}</h3>
        ${m.desig?`<p class="sm-modal-desig">${m.desig}</p>`:''}
        <div class="sm-modal-details">
          ${m.city?`<div class="sm-detail-row"><span class="sm-detail-icon"><i class="bi bi-geo-alt"></i></span><div><span class="sm-detail-label">City</span><span class="sm-detail-val">${m.city}</span></div></div>`:''}
          ${m.mobile?`<div class="sm-detail-row"><span class="sm-detail-icon"><i class="bi bi-telephone"></i></span><div><span class="sm-detail-label">Mobile</span><a href="tel:${m.mobile}" class="sm-detail-link">${m.mobile}</a></div></div>`:''}
          ${m.email?`<div class="sm-detail-row"><span class="sm-detail-icon"><i class="bi bi-envelope"></i></span><div><span class="sm-detail-label">Email</span><a href="mailto:${m.email}" class="sm-detail-link">${m.email}</a></div></div>`:''}
        </div>
        ${m.about?`<div class="sm-modal-about"><div class="sm-about-label">About</div><p class="sm-about-text">${escapeHtml(m.about)}</p></div>`:''}
      </div>
    </div>
  </div></div>`;
}

/* ===================== COMMUNITY BOARD ===================== */
const BOARD_TABS = [['All','📋'],['Job Opportunity','💼'],['Matrimonial','💍'],['Lost & Found','🔍'],['Accommodation','🏠'],['Business','🏢'],['Announcement','📢']];
function boardIcon(type){const map={'Job Opportunity':'💼','Matrimonial':'💍','Lost & Found':'🔍','Accommodation':'🏠','Business':'🏢','Announcement':'📢'};return map[type]||'📋';}
function renderBoard(){
  const filtered = BOARD_POSTS.filter(p=>state.boardTab==='All'||p.type===state.boardTab);
  return `
  <div class="page-hero"><div class="container"><h1>Community Board</h1><p>Notices, opportunities and announcements from our community members</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="board-tabs mb-5">${BOARD_TABS.map(([t,icon])=>`<button class="board-tab ${state.boardTab===t?'active':''}" onclick="state.boardTab='${t}';render();">${icon} ${t}</button>`).join('')}</div>
    ${filtered.length===0?`<div class="text-center py-5"><div style="font-size:3rem;">📋</div><h5 class="text-brown mt-3">No posts found</h5></div>`:`
    <div class="row g-4">
      ${filtered.map(post=>`
      <div class="col-md-6 col-lg-4"><div class="ns-card board-card" onclick="openPost(${post.id})">
        <div class="board-card-body">
          <div class="d-flex gap-3 align-items-start mb-3">
            <div class="post-icon">${boardIcon(post.type)}</div>
            <div class="flex-1 min-w-0"><span class="badge-saffron mb-2 d-inline-block">${post.type}</span>
              <h6 class="fw-bold text-brown mb-2 post-title">${escapeHtml(post.title)}</h6></div>
          </div>
          <p class="small text-muted-ns post-content-preview mb-3">${escapeHtml(post.content)}</p>
          <div class="d-flex flex-wrap gap-2 small text-muted-ns mb-2">
            ${post.deadline?`<span><i class="bi bi-calendar3 text-saffron"></i> ${fmtDate(post.deadline)}</span>`:''}
            ${post.by?`<span><i class="bi bi-person text-saffron"></i> ${post.by}</span>`:''}
          </div>
        </div>
        <div class="board-card-footer"><span class="board-read-more">Read more <i class="bi bi-arrow-right-short"></i></span></div>
      </div></div>`).join('')}
    </div>`}
  </div></section>
  ${state.openPost?renderPostModal():''}`;
}
function openPost(id){state.openPost=BOARD_POSTS.find(p=>p.id===id);render();}
function closePost(){state.openPost=null;render();}
function renderPostModal(){
  const p=state.openPost;
  return `<div class="board-modal-backdrop" onclick="closePost()"><div class="board-modal" onclick="event.stopPropagation()">
    <div class="board-modal-head"><div class="d-flex align-items-center gap-2"><span class="post-icon-sm">${boardIcon(p.type)}</span><span class="badge-saffron">${p.type}</span></div>
      <button class="modal-close" onclick="closePost()"><i class="bi bi-x-lg"></i></button></div>
    <div class="board-modal-body">
      <h4 class="text-brown fw-bold mb-4">${escapeHtml(p.title)}</h4>
      <div class="board-modal-content">${escapeHtml(p.content)}</div>
      <div class="board-modal-meta mt-4">
        ${p.by?`<div class="meta-item"><i class="bi bi-person-fill text-saffron"></i><span><strong>Posted by:</strong> ${p.by}</span></div>`:''}
        ${p.deadline?`<div class="meta-item"><i class="bi bi-calendar3 text-saffron"></i><span><strong>Deadline:</strong> ${fmtDate(p.deadline)}</span></div>`:''}
        ${p.contact?`<div class="meta-item"><i class="bi bi-telephone-fill text-saffron"></i><span><strong>Contact:</strong> ${p.contact}</span></div>`:''}
      </div>
    </div>
  </div></div>`;
}

/* ===================== DONATIONS ===================== */
function renderDonations(){
  const selCamp = CAMPAIGNS.find(c=>c.id===state.selectedCampaign);
  return `
  <div class="page-hero"><div class="container"><h1>Donations</h1><p>Support our community — every contribution makes a difference</p></div></div>
  <section class="section-pad"><div class="container"><div class="row g-5">
    <div class="col-lg-7">
      <span class="badge-saffron">Active Campaigns</span><h2 class="section-title mt-2 mb-4">Support a Cause</h2>
      <div class="d-flex flex-column gap-4">
        ${CAMPAIGNS.map(c=>`
        <div class="campaign-card ${state.selectedCampaign===c.id?'selected':''}" onclick="state.selectedCampaign=${c.id};render();">
          <div class="campaign-header"><div><h5 class="fw-bold text-brown mb-1">${c.title}</h5><p class="small text-muted-ns mb-0">${c.desc}</p></div>
            ${state.selectedCampaign===c.id?`<span class="selected-check"><i class="bi bi-check-circle-fill text-saffron"></i></span>`:''}
          </div>
          <div class="campaign-progress mt-3">
            <div class="d-flex justify-content-between small text-muted-ns mb-1"><span>${inr(c.raised)} raised</span><span>Goal: ${inr(c.target)}</span></div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${Math.round(c.raised/c.target*100)}%"></div></div>
          </div>
        </div>`).join('')}
        <div class="campaign-card ${!state.selectedCampaign||state.selectedCampaign===0?'selected':''}" onclick="state.selectedCampaign=0;render();">
          <div class="campaign-header"><div><h5 class="fw-bold text-brown mb-1">🙏 General Donation</h5><p class="small text-muted-ns mb-0">Contribute to the overall welfare of NathSamaj community</p></div>
          ${state.selectedCampaign===0?`<span class="selected-check"><i class="bi bi-check-circle-fill text-saffron"></i></span>`:''}</div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="donation-form-card">
        <h4 class="text-brown fw-bold mb-4">🙏 Make a Donation</h4>
        ${state.selectedCampaign?`<div class="selected-campaign-info mb-4"><span class="badge-saffron">Donating to:</span><p class="fw-600 text-brown mt-1 mb-0">${selCamp?selCamp.title:''}</p></div>`:''}
        <div class="mb-4"><label class="form-label">Select Amount</label>
          <div class="amount-chips">${['500','1000','2000','5000','10000'].map(a=>`<button class="amount-chip ${state.donateAmount===a?'active':''}" onclick="state.donateAmount='${a}';render();">₹${Number(a).toLocaleString('en-IN')}</button>`).join('')}</div>
          <input type="number" class="ns-input mt-3" placeholder="Or enter custom amount (₹)" value="${state.donateAmount}" oninput="state.donateAmount=this.value;">
        </div>
        <div class="mb-3"><label class="form-label">Full Name *</label><input type="text" class="ns-input" id="donorName" placeholder="Your full name"></div>
        <div class="mb-3"><label class="form-label">Email *</label><input type="email" class="ns-input" id="donorEmail" placeholder="your@email.com"></div>
        <div class="mb-3"><label class="form-label">Phone</label><input type="tel" class="ns-input" id="donorMobile" placeholder="+91 XXXXX XXXXX"></div>
        <div class="mb-3"><label class="form-label">Payment Method</label>
          <select class="ns-input ns-select"><option>UPI</option><option>Bank Transfer</option><option>Cash</option><option>Cheque</option></select>
        </div>
        <div class="mb-4"><label class="form-label">Message (Optional)</label><textarea class="ns-input" rows="3" placeholder="Any message for the community..."></textarea></div>
        <button class="btn-saffron w-100 d-block" onclick="demoDonate()">🙏 Donate Now${state.donateAmount?' — ₹'+Number(state.donateAmount).toLocaleString('en-IN'):''}</button>
        <p class="text-center small text-muted-ns mt-3">Your donation helps sustain our community programs</p>
      </div>
      <div class="qr-card mt-4"><p class="qr-title">Or Pay via UPI</p>
        <div class="qr-image-wrap"><img class="qr-img" src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=nathsamaj@upi%26pn=NathSamaj" alt="UPI QR Code"></div>
        <p class="qr-hint">Scan using any UPI app — GPay, PhonePe, Paytm, BHIM</p>
      </div>
    </div>
  </div></div></section>`;
}
function demoDonate(){
  const name=document.getElementById('donorName').value;
  if(!name){toast('Please enter your name to continue');return;}
  toast('🙏 Thank you '+name+'! Donation of ₹'+Number(state.donateAmount||0).toLocaleString('en-IN')+' recorded (demo)');
}

/* ===================== CONTACT ===================== */
function renderContact(){
  return `
  <div class="page-hero"><div class="container"><h1>Contact Us</h1><p>Get in touch with our leadership and committee</p></div></div>
  <section class="section-pad"><div class="container"><div class="row g-5">
    <div class="col-lg-5">
      <span class="badge-saffron">Reach Us</span><h2 class="section-title mt-2">We'd Love to Hear From You</h2>
      <div class="section-divider" style="margin:12px 0 24px;"></div>
      <div class="contact-info-list">
        <div class="contact-info-item"><div class="ci-icon"><i class="bi bi-geo-alt-fill"></i></div><div><div class="ci-label">Address</div><div class="ci-val">NathSamaj Bhavan, Main Road, Pune – 411 001</div></div></div>
        <div class="contact-info-item"><div class="ci-icon"><i class="bi bi-telephone-fill"></i></div><div><div class="ci-label">Phone</div><div class="ci-val">+91 98765 43210</div></div></div>
        <div class="contact-info-item"><div class="ci-icon"><i class="bi bi-envelope-fill"></i></div><div><div class="ci-label">Email</div><div class="ci-val">info&#64;nathsamaj.org</div></div></div>
        <div class="contact-info-item"><div class="ci-icon"><i class="bi bi-clock-fill"></i></div><div><div class="ci-label">Office Hours</div><div class="ci-val">Monday – Saturday: 10 AM – 6 PM</div></div></div>
      </div>
      <div class="social-links mt-4">
        <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a><a href="#" class="social-btn"><i class="bi bi-instagram"></i></a>
        <a href="#" class="social-btn"><i class="bi bi-youtube"></i></a><a href="#" class="social-btn"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
    <div class="col-lg-7"><div class="contact-form-card">
      <h4 class="text-brown fw-bold mb-4">Send a Message</h4>
      <div class="row g-3">
        <div class="col-md-6"><label class="form-label">Full Name *</label><input type="text" class="ns-input" id="cName" placeholder="Your name"></div>
        <div class="col-md-6"><label class="form-label">Email *</label><input type="email" class="ns-input" id="cEmail" placeholder="your@email.com"></div>
        <div class="col-md-6"><label class="form-label">Phone</label><input type="tel" class="ns-input" placeholder="+91 XXXXX XXXXX"></div>
        <div class="col-md-6"><label class="form-label">Subject *</label><input type="text" class="ns-input" id="cSubject" placeholder="How can we help?"></div>
        <div class="col-12"><label class="form-label">Message *</label><textarea class="ns-input" rows="5" id="cMessage" placeholder="Write your message here..."></textarea></div>
        <div class="col-12"><button class="btn-saffron w-100" onclick="demoContactSend()">Send Message</button></div>
      </div>
    </div></div>
  </div></div></section>`;
}
function demoContactSend(){
  const name=document.getElementById('cName').value, email=document.getElementById('cEmail').value, subj=document.getElementById('cSubject').value;
  if(!name||!email||!subj){toast('Please fill in all required fields');return;}
  toast('✅ Message sent! We will get back to you soon (demo)');
  document.getElementById('cName').value='';document.getElementById('cEmail').value='';document.getElementById('cSubject').value='';document.getElementById('cMessage').value='';
}

/* ===================== AUTH / DASHBOARD ===================== */
function renderAuth(){
  return `
  <div class="page-hero"><div class="container"><h1>Welcome Back</h1><p>Login or register to access member services</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="auth-wrap">
      <div class="auth-tabs">
        <button class="auth-tab ${state.authTab==='login'?'active':''}" onclick="state.authTab='login';render();">Login</button>
        <button class="auth-tab ${state.authTab==='register'?'active':''}" onclick="state.authTab='register';render();">Register</button>
      </div>
      ${state.authTab==='login'?`
      <div class="mb-3"><label class="form-label">Email / Mobile</label><input type="text" class="ns-input" id="loginId" placeholder="you@email.com"></div>
      <div class="mb-4"><label class="form-label">Password</label><input type="password" class="ns-input" id="loginPw" placeholder="••••••••"></div>
      <button class="btn-saffron w-100" onclick="demoLogin()">Login</button>
      <p class="text-center small text-muted-ns mt-3">This is a demo — any email/password will log you in.</p>
      `:`
      <div class="mb-3"><label class="form-label">Full Name</label><input type="text" class="ns-input" id="regName" placeholder="Your full name"></div>
      <div class="mb-3"><label class="form-label">Email</label><input type="email" class="ns-input" placeholder="you@email.com"></div>
      <div class="mb-3"><label class="form-label">Mobile</label><input type="tel" class="ns-input" placeholder="+91 XXXXX XXXXX"></div>
      <div class="mb-4"><label class="form-label">Password</label><input type="password" class="ns-input" placeholder="Create a password"></div>
      <button class="btn-saffron w-100" onclick="demoRegisterUser()">Create Account</button>
      <p class="text-center small text-muted-ns mt-3">This is a demo registration form.</p>
      `}
    </div>
  </div></section>`;
}
function demoLogin(){
  const id=document.getElementById('loginId').value;
  state.loggedIn=true; state.userName = id ? id.split('@')[0] : 'Member';
  toast('Welcome back, '+state.userName+'!');
  go('dashboard');
}
function demoRegisterUser(){
  const name=document.getElementById('regName').value;
  state.loggedIn=true; state.userName = name || 'New Member';
  toast('Account created! Welcome, '+state.userName+'.');
  go('dashboard');
}
function renderDashboard(){
  if(!state.loggedIn) return renderAuth();
  return `
  <div class="page-hero"><div class="container"><h1>My Dashboard</h1><p>Welcome back, ${escapeHtml(state.userName)}</p></div></div>
  <section class="section-pad"><div class="container">
    <div class="row g-4">
      <div class="col-md-4"><div class="ns-card p-4 text-center"><div style="font-size:2rem;">👤</div><h6 class="fw-bold text-brown mt-2">My Profile</h6><p class="small text-muted-ns">View &amp; edit your member details</p></div></div>
      <div class="col-md-4"><div class="ns-card p-4 text-center cursor-pointer" onclick="go('events')"><div style="font-size:2rem;">🎟️</div><h6 class="fw-bold text-brown mt-2">My Registrations</h6><p class="small text-muted-ns">2 upcoming events registered</p></div></div>
      <div class="col-md-4"><div class="ns-card p-4 text-center cursor-pointer" onclick="go('matrimony')"><div style="font-size:2rem;">💍</div><h6 class="fw-bold text-brown mt-2">Matrimony Interests</h6><p class="small text-muted-ns">1 interest sent, 0 received</p></div></div>
      <div class="col-md-4"><div class="ns-card p-4 text-center cursor-pointer" onclick="go('donations')"><div style="font-size:2rem;">🙏</div><h6 class="fw-bold text-brown mt-2">My Donations</h6><p class="small text-muted-ns">Total contributed: ₹2,500</p></div></div>
      <div class="col-md-4"><div class="ns-card p-4 text-center"><div style="font-size:2rem;">🪪</div><h6 class="fw-bold text-brown mt-2">Digital Membership Card</h6><p class="small text-muted-ns">Member ID: NS-2026-00482</p></div></div>
      <div class="col-md-4"><div class="ns-card p-4 text-center cursor-pointer" onclick="go('board')"><div style="font-size:2rem;">📋</div><h6 class="fw-bold text-brown mt-2">My Community Posts</h6><p class="small text-muted-ns">0 posts submitted</p></div></div>
    </div>
  </div></section>`;
}

/* ===================== MISC ===================== */
function attachPageScripts(){ /* placeholder for future per-page JS hooks */ }

/* ===================== INIT ===================== */
render();
