(function () {
    if (document.getElementById("mgiri-chat-launcher")) return;

    // 1. Training Departments Data
    const trainingDepartments = [
        { 
            id: "rce1", 
            name: "Rural Craft & Engineering Division", 
            trainings: [
                { name: "Terracotta Craft", duration: "45 Days", fee: "Rs 8000.00", eligibility: "Min. 8th Pass" },
                { name: "Ceramic Craft", duration: "45 Days", fee: "Rs 8000.00", eligibility: "Min. 10th Pass" },
                { name: "Turn wood Craft (Lacquer)", duration: "45 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" },
                { name: "Wood Craft", duration: "45 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" },
                { name: "Lacquer Bangle Craft", duration: "30 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" },
                { name: "Khadi Fashion Bags (Zardoji)", duration: "30 Days", fee: "Rs 5500.00", eligibility: "Min. 8th Pass" },
                { name: "Zari and Zardoji Craft", duration: "45 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" },
                { name: "Bamboo and Cane Craft", duration: "45 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" },
                { name: "Bell and Brass Metal Craft", duration: "45 Days", fee: "Rs 8500.00", eligibility: "Min. 8th Pass" }
            ]
        },
        { 
            id: "rie1", 
            name: "Rural Energy & Infrastructure Division", 
            trainings: [
                { name: "Basic LED Lighting & Solar System", duration: "1-2 Weeks", fee: "Rs 885 - 1770", contact: "Mr. Ganesh There (9623150254)" },
                { name: "Certificate Course on Renewable Energy", duration: "3 Months", fee: "Rs 11800.00", contact: "Mr. Deep Varma (9421956145)" },
                { name: "Biomass Charcoal & Briquette Manufacturing", duration: "2-3 Days", fee: "Rs 118 - 1180", contact: "Mr. Sachin Raut (9850271516)" },
                { name: "Biogas & Potter’s Kiln Construction", duration: "10 Days", fee: "Rs 1180.00", info: "As per KVIC requirements" }
            ]
        },
        { 
            id: "khadi1", 
            name: "Khadi & Textile Division", 
            trainings: [
                { name: "Charkha Spinning & Maintenance", duration: "Two Weeks", fee: "Rs 500/-", info: "Khadi Division Norms" },
                { name: "Ginning and Pre-spinning Technology", duration: "Two Weeks", fee: "Rs 1000/-", info: "Khadi Division Norms" },
                { name: "Advanced Weaving & Fabric Technology", duration: "Four Weeks", fee: "Rs 2000/-", info: "Khadi Division Norms" },
                { name: "Garment Manufacturing Technology", duration: "Two Weeks", fee: "Rs 1000/-", info: "Khadi Division Norms" }
            ]
        },
        { 
            id: "bio1", 
            name: "Bio-Processing & Herbal Division", 
            trainings: [
                { name: "Preparation of Amla Based Products", duration: "05 Days", fee: "Rs 2500/-", eligibility: "Min. 8th Pass" },
                { name: "Preparation of Tamarind & Ber Products", duration: "05 Days", fee: "Rs 2000/-", eligibility: "Min. 8th Pass" },
                { name: "Preparation of Orange Based Products", duration: "05 Days", fee: "Rs 2500/-", eligibility: "Min. 8th Pass" },
                { name: "Preparation of Various Masala", duration: "03 Days", fee: "Rs 2000/-", eligibility: "Min. 8th Pass" },
                { name: "Value Added Soybean Products", duration: "03 Days", fee: "Rs 2000/-", eligibility: "Min. 8th Pass" },
                { name: "Panchgavya Products (Dhoop, Coil, etc.)", duration: "03 Days", fee: "Rs 2000/-", eligibility: "Min. 8th Pass" },
                { name: "Panchgavya Products (Hand wash, Soap)", duration: "02 Days", fee: "Rs 2000/-", eligibility: "Min. 8th Pass" }
            ]
        },
        { 
            id: "rci1", 
            name: "Rural Chemical Industries Division", 
            trainings: [
                { name: "Extraction of Essential Oils", duration: "3-4 Days", fee: "As per norms", contact: "Dr. Prashant Tayade (7721976810)" },
                { name: "Manufacturing of Detergent Powder", duration: "3-4 Days", fee: "As per norms", contact: "Mr. Swanand Kalambe (9370291114)" },
                { name: "Shampoo, Soap, Cosmetics & Hand wash", duration: "4-5 Days", fee: "As per norms", contact: "Mrs. Uma There (9172157099)" },
                { name: "Multipurpose, Toilet & Glass Cleaners", duration: "2-3 Days", fee: "As per norms", info: "RCI Division" },
                { name: "White & Black Phenyl, Candles, Chalk", duration: "2 Days", fee: "As per norms", info: "RCI Division" }
            ]
        },
        { 
            id: "ms1", 
            name: "Management & Systems Division", 
            trainings: [
                { name: "Smart Phone Repairing", duration: "150 Hours", fee: "Rs 1750/-", eligibility: "Min. 8th Pass", contact: "Mr. Rahul Dhote (8007520272)" },
                { name: "Social Media & Digital Marketing", duration: "01 Day", fee: "Rs 100/-", info: "Business Training", contact: "Mr. Rahul Dhote (8007520272)" },
                { name: "Computer Hardware & Networking", duration: "01 Month", fee: "Rs 1500/-", eligibility: "Min. 10th Pass", contact: "Mr. Rahul Dhote (8007520272)" }
            ]
        }
    ];

    const techData = [
        { deptName: "Management & Systems Division", techName: "IoT Smart Honey Beehive Monitoring System", contactPerson: "M&S Division Expert" },
        { deptName: "Khadi & Textile Division", techName: "Solar-Powered Automatic Charkha & Looms", contactPerson: "Khadi Division Expert (07152-253512)" },
        { deptName: "Bio-Processing & Herbal Division", techName: "Advanced Panchgavya & Herbal Extraction Units", contactPerson: "Bio-Processing Division Expert" },
        { deptName: "Rural Chemical Industries Division", techName: "Eco-Friendly Natural Dyes & Detergent Plant", contactPerson: "Dr. Prashant Tayade (7721976810) / Mr. Swanand Kalambe (9370291114)" },
        { deptName: "Rural Craft & Engineering Division", techName: "Smart Pottery Equipment & Energy Efficient Kilns", contactPerson: "RC&E Division Coordinator (07152-253515)" },
        { deptName: "Rural Energy & Infrastructure Division", techName: "Smart IoT Solar Dryers & Biogas Technology", contactPerson: "Mr. Deep Varma, PSO (9421956145) / Mr. Ganesh There (9623150254)" }
    ];

    const enquiryContacts = [
        { title: "MGIRI Main Office / General Enquiry", contact: "07152-253512 / director.mgiri@gmail.com" },
        { title: "Management & Systems Division", contact: "Mr. Rahul Dhote (8007520272)" },
        { title: "Rural Chemical Industries Division", contact: "Mr. Swanand Kalambe (9370291114) / Dr. Prashant Tayade (7721976810)" },
        { title: "Rural Energy & Infrastructure Division", contact: "Mr. Deep Varma (9421956145) / Mr. Ganesh There (9623150254)" },
        { title: "Khadi & Textile Division", contact: "07152-253512" },
        { title: "Rural Craft & Engineering Division", contact: "07152-253515" },
        { title: "Bio-Processing & Herbal Division", contact: "Bio-Processing Division Coordinator" }
    ];

    const collabInterests = [
        "Technology Transfer & Commercialization",
        "Research & Development (R&D)",
        "Skill Development & Rural Training",
        "Incubation & Startup Support",
        "Other Business Partnership"
    ];

    // 2. CSS Styling
    const style = document.createElement("style");
    style.textContent = `
        @keyframes mgiriSlideUp {
            from { opacity: 0; transform: translateY(24px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }

        #mgiri-chat-launcher {
            position: fixed; right: 24px; bottom: 24px; z-index: 99999;
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
            color: #ffffff; border: 0; border-radius: 40px;
            padding: 14px 24px; font-size: 15px; font-weight: 700;
            cursor: pointer; box-shadow: 0 10px 30px rgba(37, 99, 235, 0.4);
            display: flex; align-items: center; gap: 10px;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            letter-spacing: 0.3px; border: 1px solid rgba(255, 255, 255, 0.2);
        }
        #mgiri-chat-launcher:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 16px 38px rgba(37, 99, 235, 0.55); }

        #mgiri-chat-panel {
            position: fixed; right: 24px; bottom: 95px; z-index: 99999;
            width: 430px; max-width: calc(100vw - 32px);
            height: 600px; max-height: calc(100vh - 120px);
            background: #ffffff; border-radius: 22px;
            box-shadow: 0 22px 55px rgba(30, 58, 138, 0.22);
            display: none; flex-direction: column; overflow: hidden;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            animation: mgiriSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            border: 1px solid rgba(37, 99, 235, 0.2);
        }

        #mgiri-chat-header {
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
            color: #ffffff; padding: 18px 22px; font-size: 17.5px; font-weight: 700;
            display: flex; align-items: center; justify-content: space-between;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); border-bottom: 2px solid #3b82f6;
        }
        .header-badge { 
            background: rgba(249, 115, 22, 0.25); color: #ffedd5; font-size: 11.5px; 
            padding: 4px 12px; border-radius: 20px; font-weight: 700; backdrop-filter: blur(4px);
            border: 1px solid rgba(249, 115, 22, 0.5);
        }

        #mgiri-tabs {
            display: none; background: #f8fafc; padding: 8px; gap: 6px;
            border-bottom: 1px solid #e2e8f0; overflow-x: auto;
        }
        .mgiri-tab {
            flex: 1; padding: 10px 8px; border: 0; border-radius: 10px;
            background: transparent; color: #475569; font-size: 13.5px; font-weight: 600;
            cursor: pointer; text-align: center; white-space: nowrap; transition: all 0.25s ease;
        }
        .mgiri-tab:hover { background: #eff6ff; color: #1d4ed8; }
        .mgiri-tab.active { background: #2563eb; color: #ffffff; font-weight: 700; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); }

        #mgiri-tab-content { flex: 1; min-height: 0; overflow-y: auto; padding: 20px; background: #fdfefe; color: #1e293b; font-size: 14.5px; }

        .bot-msg {
            background: #eff6ff; color: #1e3a8a; padding: 14px 18px;
            border-radius: 14px; margin-bottom: 14px; font-size: 14.5px; font-weight: 500;
            line-height: 1.55; border-left: 4px solid #2563eb;
            box-shadow: 0 3px 12px rgba(37, 99, 235, 0.08); width: fit-content; max-width: 90%;
        }

        .chat-input-box {
            background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 14px;
            padding: 14px 16px; margin-top: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04); max-width: 95%;
        }
        .chat-input-box label { font-weight: 700; color: #1e3a8a; display: block; margin-bottom: 6px; font-size: 13.5px; }
        .chat-input-box input, .chat-input-box textarea {
            width: 100%; padding: 10px 14px; margin-bottom: 12px; border: 1.5px solid #cbd5e1;
            border-radius: 8px; box-sizing: border-box; font-size: 14px; font-family: inherit; color: #0f172a;
            transition: all 0.2s ease; background: #f8fafc;
        }
        .chat-input-box button {
            background: linear-gradient(135deg, #1e3a8a, #2563eb); color: #ffffff; border: none; padding: 11px 16px;
            border-radius: 8px; cursor: pointer; font-weight: 700; width: 100%; font-size: 14.5px;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3); transition: all 0.2s ease;
        }

        .div-details-box {
            background: #ffffff; border: 1.5px solid #e2e8f0;
            border-radius: 14px; padding: 18px; margin-bottom: 14px; font-size: 14px; line-height: 1.6; color: #334155;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }
        .training-inner-item { border-bottom: 1px dashed #cbd5e1; padding-bottom: 12px; margin-bottom: 12px; }
        .training-inner-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

        .dept-pill-container { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; }
        .dept-pill-btn {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); color: #1e3a8a; border: 2px solid #3b82f6;
            padding: 10px 18px; border-radius: 30px; font-size: 13.5px; font-weight: 700;
            cursor: pointer; transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
            box-shadow: 0 3px 10px rgba(59, 130, 246, 0.12);
        }
        .dept-pill-btn:hover {
            background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: #ffffff; border-color: #1e3a8a;
            transform: translateY(-3px) scale(1.02); box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
        }

        .user-name-pill {
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            color: #ffffff; padding: 8px 18px; border-radius: 25px;
            font-size: 14px; font-weight: 600; display: inline-block;
            box-shadow: 0 3px 10px rgba(30, 58, 138, 0.25);
        }
    `;
    document.head.appendChild(style);

    // 3. DOM Elements Injection
    const launcher = document.createElement("button");
    launcher.id = "mgiri-chat-launcher";
    launcher.innerHTML = "💬 <span>MGIRI Assistant</span>";
    document.body.appendChild(launcher);

    const panel = document.createElement("div");
    panel.id = "mgiri-chat-panel";
    panel.innerHTML = `
        <div id="mgiri-chat-header">
            <span>✨ MGIRI Assistant</span>
            <span class="header-badge">● Active</span>
        </div>
        <div id="mgiri-tabs">
            <button class="mgiri-tab active" data-tab="training">📚 Training</button>
            <button class="mgiri-tab" data-tab="tech">🔬 New Tech</button>
            <button class="mgiri-tab" data-tab="collab">🤝 Collab</button>
            <button class="mgiri-tab" data-tab="enquiry">📞 Enquiry</button>
        </div>
        <div id="mgiri-tab-content"></div>
    `;
    document.body.appendChild(panel);

    const content = panel.querySelector("#mgiri-tab-content");
    const tabsBar = panel.querySelector("#mgiri-tabs");

    function setActiveTab(name) {
        panel.querySelectorAll(".mgiri-tab").forEach(function (tab) {
            tab.classList.toggle("active", tab.dataset.tab === name);
        });
    }

    let leadData = { name: "", phone: "" };

    // Initial Name & Phone Flow
    function startChatFlow() {
        tabsBar.style.display = "none";
        content.innerHTML = `
            <div class="bot-msg">👋 Hello! Welcome to <b>MGIRI Assistant</b>.</div>
            <div class="bot-msg">Before we proceed, could you please share your details? This will help us assist you better.</div>
            <div class="bot-msg">Please enter your Full Name:</div>
            <div class="chat-input-box">
                <form id="step-name-form">
                    <input type="text" id="chat-user-name" placeholder="Type your full name..." required autofocus />
                    <button type="submit">Next ➔</button>
                </form>
            </div>
        `;

        document.getElementById("step-name-form").onsubmit = function(e) {
            e.preventDefault();
            leadData.name = document.getElementById("chat-user-name").value.trim();
            if (leadData.name) askForPhone();
        };
    }

    function askForPhone() {
        content.innerHTML += `
            <div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${leadData.name}</span></div>
            <div class="bot-msg">Thank you, <b>${leadData.name}</b>!</div>
            <div class="bot-msg">Please enter your 10-digit Mobile Number:</div>
            <div class="chat-input-box">
                <form id="step-phone-form">
                    <input type="tel" id="chat-user-phone" placeholder="Type 10-digit mobile number..." maxlength="10" required autofocus />
                    <button type="submit">Submit & Proceed ➔</button>
                </form>
            </div>
        `;
        content.scrollTop = content.scrollHeight;

        document.getElementById("step-phone-form").onsubmit = function(e) {
            e.preventDefault();
            const phoneInput = document.getElementById("chat-user-phone").value.trim();
            if (!/^\d{10}$/.test(phoneInput)) {
                alert("Please enter a valid 10-digit mobile number!");
                return;
            }

            leadData.phone = phoneInput;

            // Save lead to backend
            fetch('/api/save-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: leadData.name, phone: leadData.phone, email: "Not Provided", interested_in: "Interactive Lead Flow" })
            }).catch(err => console.log(err));

            askForInitialDetailsPrompt();
        };
    }

    function askForInitialDetailsPrompt() {
        content.innerHTML += `
            <div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${leadData.phone}</span></div>
            <div class="bot-msg">Your details have been saved successfully! ✨</div>
            <div class="bot-msg"><b>Do you want any more details?</b></div>
            <div id="initial-yes-no-container" style="display: flex; gap: 10px; margin-top: 10px; max-width: 80%;">
                <button id="btn-yes-details" style="flex: 1; background: #2563eb; color: white; border: none; padding: 10px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 14.5px;">Yes</button>
                <button id="btn-no-details" style="flex: 1; background: #64748b; color: white; border: none; padding: 10px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 14.5px;">No</button>
            </div>
        `;
        content.scrollTop = content.scrollHeight;

        document.getElementById("btn-yes-details").onclick = function() {
            document.getElementById("initial-yes-no-container").remove();
            content.innerHTML += `<div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">Yes</span></div>`;
            tabsBar.style.display = "flex";
            setActiveTab("training");
            appendOvalPillButtons();
        };

        document.getElementById("btn-no-details").onclick = function() {
            document.getElementById("initial-yes-no-container").remove();
            content.innerHTML += `
                <div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">No</span></div>
                <div class="bot-msg">Thank you for connecting with MGIRI! Have a wonderful day ahead. 😊</div>
            `;
            content.scrollTop = content.scrollHeight;
        };
    }

    window.selectDepartmentDirectly = function(deptId) {
        const deptObj = trainingDepartments.find(d => d.id === deptId);
        if (!deptObj) return;

        content.innerHTML += `<div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${deptObj.name}</span></div>`;

        let detailsHtml = `
            <div class="div-details-box">
                <h4 style="margin: 0 0 12px 0; color: #1e3a8a; font-size: 15.5px; font-weight: 700;">🏢 ${deptObj.name}</h4>
        `;

        deptObj.trainings.forEach(function(t) {
            detailsHtml += `
                <div class="training-inner-item">
                    <p style="font-size:14.5px; margin: 3px 0; color:#1e3a8a; font-weight:700;">📚 Training: ${t.name}</p>
                    <p style="font-size:13.5px; margin: 4px 0; color:#334155;">⏱️ Duration: ${t.duration} | 💵 Fees: ${t.fee}</p>
                    ${t.eligibility ? `<p style="font-size:13.5px; margin: 4px 0; color:#334155;">🎓 Eligibility: ${t.eligibility}</p>` : ''}
                    ${t.contact ? `<p style="font-size:13.5px; margin: 4px 0; color:#334155;">📞 Contact: ${t.contact}</p>` : ''}
                    ${t.info ? `<p style="font-size:13.5px; margin: 4px 0; color:#334155;">ℹ️ Info: ${t.info}</p>` : ''}
                </div>
            `;
        });

        detailsHtml += `</div>`;
        content.innerHTML += detailsHtml;
        content.scrollTop = content.scrollHeight;
    };

    window.selectTechDeptDirectly = function(deptName) {
        const techObj = techData.find(t => t.deptName === deptName);
        if (!techObj) return;

        content.innerHTML += `<div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${techObj.deptName}</span></div>`;

        content.innerHTML += `
            <div class="div-details-box">
                <div style="font-size:12px; background:#eff6ff; color:#1e3a8a; padding:4px 12px; border-radius:12px; font-weight:700; display:inline-block; margin-bottom:8px;">🏢 ${techObj.deptName}</div>
                <div style="color:#1e3a8a; font-size:15.5px; font-weight:700; margin-bottom: 6px;">🔬 ${techObj.techName}</div>
                <div style="font-size:13.5px; color:#475569;">👤 Contact Person: ${techObj.contactPerson}</div>
            </div>
        `;
        content.scrollTop = content.scrollHeight;
    };

    window.selectEnquiryDeptDirectly = function(title) {
        const contactObj = enquiryContacts.find(c => c.title === title);
        if (!contactObj) return;

        content.innerHTML += `<div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${contactObj.title}</span></div>`;

        content.innerHTML += `
            <div class="div-details-box">
                <div style="color:#1e3a8a; font-size:15.5px; font-weight:700; margin-bottom: 6px;">🏢 ${contactObj.title}</div>
                <div style="font-size:14px; color:#475569;">📱 Contact: ${contactObj.contact}</div>
            </div>
        `;
        content.scrollTop = content.scrollHeight;
    };

    window.selectCollabInterest = function(interestText) {
        content.innerHTML += `<div style="text-align:right; margin: 8px 0;"><span class="user-name-pill">${interestText}</span></div>`;
        
        content.innerHTML += `
            <div class="bot-msg">Great! Please fill out your details below for: <b>${interestText}</b></div>
            <div class="chat-input-box">
                <form id="collab-form-element" onsubmit="window.handleCollabSubmit(event, '${interestText}')">
                    <label>Your Name *</label><input type="text" id="collab-name" value="${leadData.name || ''}" placeholder="Enter Full Name" required />
                    <label>Organization / Company Name *</label><input type="text" id="collab-org" placeholder="Enter Organization Name" required />
                    <label>Contact Number (10 digits) *</label><input type="tel" id="collab-contact" value="${leadData.phone || ''}" placeholder="Enter 10-digit number" maxlength="10" required />
                    <label>Email Address *</label><input type="email" id="collab-email" placeholder="Enter Email Address" required />
                    <button type="submit">Submit Request ➔</button>
                </form>
            </div>
        `;
        content.scrollTop = content.scrollHeight;
    };

    window.handleCollabSubmit = function(e, interestText) {
        e.preventDefault();
        const name = document.getElementById("collab-name").value.trim();
        const org = document.getElementById("collab-org").value.trim();
        const phone = document.getElementById("collab-contact").value.trim();
        const email = document.getElementById("collab-email").value.trim();

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit mobile number!");
            return;
        }

        fetch('/api/save-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: `${name} (${org})`, 
                phone: phone, 
                email: email, 
                interested_in: `Collab: ${interestText}` 
            })
        })
        .then(res => res.json())
        .then(() => {
            content.innerHTML += `
                <div class="bot-msg">✅ Thank you, <b>${name}</b>! Your collaboration request has been submitted successfully. We will contact you soon.</div>
            `;
            content.scrollTop = content.scrollHeight;
        })
        .catch(() => {
            alert("Failed to submit. Please try again.");
        });
    };

    function appendOvalPillButtons() {
        let pillsHtml = '<div class="dept-pill-container">';
        trainingDepartments.forEach(function(d) {
            pillsHtml += `<button class="dept-pill-btn" onclick="window.selectDepartmentDirectly('${d.id}')">${d.name}</button>`;
        });
        pillsHtml += '</div>';

        const pillsDiv = document.createElement("div");
        pillsDiv.style.cssText = "margin-bottom: 14px; padding: 16px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 16px;";
        pillsDiv.innerHTML = `
            <p style="font-weight: 700; color: #1e3a8a; margin-bottom: 10px; font-size: 14.5px;">Please select a Training Department:</p>
            ${pillsHtml}
        `;
        content.appendChild(pillsDiv);
        content.scrollTop = content.scrollHeight;
    }

    function appendTechOvalPillButtons() {
        let pillsHtml = '<div class="dept-pill-container">';
        techData.forEach(function(t) {
            pillsHtml += `<button class="dept-pill-btn" onclick="window.selectTechDeptDirectly('${t.deptName}')">${t.deptName}</button>`;
        });
        pillsHtml += '</div>';

        const pillsDiv = document.createElement("div");
        pillsDiv.style.cssText = "margin-bottom: 14px; padding: 16px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 16px;";
        pillsDiv.innerHTML = `
            <p style="font-weight: 700; color: #1e3a8a; margin-bottom: 10px; font-size: 14.5px;">Please select a Technology Division:</p>
            ${pillsHtml}
        `;
        content.appendChild(pillsDiv);
        content.scrollTop = content.scrollHeight;
    }

    function appendEnquiryOvalPillButtons() {
        let pillsHtml = '<div class="dept-pill-container">';
        enquiryContacts.forEach(function(c) {
            pillsHtml += `<button class="dept-pill-btn" onclick="window.selectEnquiryDeptDirectly('${c.title}')">${c.title}</button>`;
        });
        pillsHtml += '</div>';

        const pillsDiv = document.createElement("div");
        pillsDiv.style.cssText = "margin-bottom: 14px; padding: 16px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 16px;";
        pillsDiv.innerHTML = `
            <p style="font-weight: 700; color: #1e3a8a; margin-bottom: 10px; font-size: 14.5px;">Please select an Enquiry Contact:</p>
            ${pillsHtml}
        `;
        content.appendChild(pillsDiv);
        content.scrollTop = content.scrollHeight;
    }

    function appendCollabPillButtons() {
        let pillsHtml = '<div class="dept-pill-container">';
        collabInterests.forEach(function(ci) {
            pillsHtml += `<button class="dept-pill-btn" onclick="window.selectCollabInterest('${ci}')">${ci}</button>`;
        });
        pillsHtml += '</div>';

        const pillsDiv = document.createElement("div");
        pillsDiv.style.cssText = "margin-bottom: 14px; padding: 16px; background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 16px;";
        pillsDiv.innerHTML = `
            <p style="font-weight: 700; color: #1e3a8a; margin-bottom: 10px; font-size: 14.5px;">Select Collaboration Interest Area:</p>
            ${pillsHtml}
        `;
        content.appendChild(pillsDiv);
        content.scrollTop = content.scrollHeight;
    }

    // Tab Switching Logic
    panel.querySelectorAll(".mgiri-tab").forEach(function(tab) {
        tab.onclick = function() {
            const tabName = this.dataset.tab;
            setActiveTab(tabName);
            content.innerHTML = "";

            if (tabName === "training") {
                appendOvalPillButtons();
            } else if (tabName === "tech") {
                appendTechOvalPillButtons();
            } else if (tabName === "collab") {
                appendCollabPillButtons();
            } else if (tabName === "enquiry") {
                appendEnquiryOvalPillButtons();
            }
        };
    });

    // Toggle Panel Open/Close
    launcher.onclick = function() {
        const isVisible = panel.style.display === "flex";
        panel.style.display = isVisible ? "none" : "flex";
        if (!isVisible && !content.innerHTML.trim()) {
            startChatFlow();
        }
    };
})();