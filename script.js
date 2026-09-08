/* =========================================================
   TEDxIGDTUW — BOLLYWOOD CASTING EXPERIENCE
   SCRIPT.JS (UPDATED WITH FULL BACKEND INTEGRATION)
   ========================================================= */

// REPLACE THIS WITH YOUR BACKEND DEVELOPER'S GOOGLE APPS SCRIPT WEB APP URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx613pKHKn3KZvBk6ZR-IwKrouwyWV_Y1pbSz5GqBgV2KMwJ7ilVY6QvC_MypZiXZkh/exec";

const domainData = {
  "Community and Delegate Affairs": {
    icon: "🤝",
    character: "Geet",
    role: "The Crowd Commander",
    tagline: "Unshakable warmth, endless energy, and a natural ability to keep 100+ delegates calm when chaos hits.",
    quote: "\"Problem kitni bhi badi ho, solution hamesha smile ke saath milta hai!\"",
    scene: "Picture 100+ attendees hitting the registration desk at once while a delegate loses their badge. Your scene is all about quick crisis management, zero panic, and making everyone feel at home."
  },
  "Content and Writing": {
    icon: "✍️",
    character: "Bunny",
    role: "The Narrative Architect",
    tagline: "Part storyteller, part strategist — crafting captions that stop the scroll and speaker scripts that leave a mark.",
    quote: "\"Ek acchi kahani wahi hai jo dimaag mein nahi, seedha dil mein utar jaye.\"",
    scene: "Tight deadlines, blank pages, and high stakes. From 2-line viral captions to structuring high-impact TEDx talk scripts, you turn raw ideas into powerful narratives."
  },
  "Events, Brands, and People": {
    icon: "🎤",
    character: "Rancho",
    role: "The Mastermind Showrunner",
    tagline: "Calm inside the storm, obsessed with seamless execution, and quick to fix any backstage glitch.",
    quote: "\"Execution mein perfection aur situation mein patience — bas yahi chahiye.\"",
    scene: "The spotlight is on, the clock is ticking, and a technical glitch occurs mid-stage. You're the one managing the timeline, directing backstage crew, and guaranteeing a flawless audience experience."
  },
  "Media and Communication": {
    icon: "📹",
    character: "Ved",
    role: "The Visual Auteur",
    tagline: "Seeing extraordinary frames in ordinary moments, turning standard announcements into viral visual experiences.",
    quote: "\"Camera sirf recording nahi karta, feeling capture karta hai.\"",
    scene: "Your lens defines the event's legacy. Whether scripting an engaging Reel from a routine update or mediating creative shoot disputes, you capture moments that matter."
  },
  "PR (Public Relations)": {
    icon: "📣",
    character: "Kabir",
    role: "The Strategic Pitcher",
    tagline: "Persistent, highly persuasive, and capable of turning a flat 'no' into an event-changing partnership.",
    quote: "\"Har rejection bas agle bade deal ka pehla step hota hai.\"",
    scene: "Event week is around the corner and registration targets need a boost. You're on the front lines—drafting cold pitches, calling partners, and driving public reach."
  },
  "Creative, Strategy and Design": {
    icon: "🎨",
    character: "Poo",
    role: "The Design Perfectionist",
    tagline: "Uncompromising on brand aesthetic, master of design tools, and bold enough to create visual identities from scratch.",
    quote: "\"Design aisa hona chahiye ki dekhte hi kehna pade... 'Tell me how it looks!'\"",
    scene: "Blank Figma boards, strict guidelines, and last-minute feedback rounds. Your mission is turning conceptual theme briefs into iconic visual assets."
  },
  "Sponsorship and Strategic Alliances": {
    icon: "💼",
    character: "Munna Bhai",
    role: "The Deal Closer",
    tagline: "Charming negotiator, value-driven communicator, and master of closing high-value corporate sponsorships.",
    quote: "\"Deal wahi acchi jo dono taraf se dil jeet le!\"",
    scene: "A major sponsor threatens to walk out 3 days before the show. You step in, pitch unique brand deliverables beyond simple logo placements, and seal the partnership."
  }
};

const domainQuestions = {
  "Community and Delegate Affairs": [
    { id: "q1", label: "Tell us about one responsibility or project you have handled before. What was your specific contribution, and what was the outcome?", req: true },
    { id: "q2", label: "If you are assigned a task with a deadline but realise you may not be able to complete it on time, what would you do?", req: true },
    { id: "q3", label: "A delegate approaches you with a problem that you do not know how to solve. How would you handle the situation?", req: true },
    { id: "q4", label: "Imagine 100+ attendees arrive at once and the registration desk becomes chaotic. What would you do to manage the situation?", req: true },
    { id: "q5", label: "Why should we choose you as a Coordinator over someone with similar skills and experience?", req: true }
  ],

  "Content and Writing": [
    { id: "q1", label: "Write a 2-line catchy caption announcing our TEDx theme on Instagram.", req: true },
    { id: "q2", label: "What makes a TEDx speaker script impactful according to you?", req: true },
    { id: "q3", label: "How do you approach writing engaging content under tight deadlines?", req: true },
    { id: "q4", label: "Pitch a prospective theme idea for TEDxIGDTUW in 3 concise sentences.", req: true },
    { id: "q5", label: "Share a link to any written work, blog, or portfolio you are proud of (if available).", req: false }
  ],

  "Events, Brands, and People": [
    { id: "q1", label: "What elements, according to you, make an event feel memorable and well branded?", req: true },
    { id: "q2", label: "You have limited time and resources. Would you rather make one thing excellent or make three things reasonably good? Give an example.", req: true },
    { id: "q3", label: "If you had to choose between making the event visually impressive and making the attendee experience unforgettable, which would you prioritize and why?", req: true },
    { id: "q4", label: "What is one thing you would never compromise on while managing a team, even if it made your job harder?", req: true },
    { id: "q5", label: "How would you handle an unexpected delay or technical glitch during a live stage performance?", req: true }
  ],

  "Media and Communication": [
    { id: "q1", label: "Upload or share a link to your best media work (reel, video, post, or design) that you're proud of.", req: true },
    { id: "q2", label: "Which video editing or graphic design tools do you feel most comfortable using?", req: true },
    { id: "q3", label: "Give us ONE creative idea that you would implement in our society if selected.", req: true },
    { id: "q4", label: "Imagine we give you a boring announcement: 'Registrations for our event are now open.' How would you turn it into an engaging Instagram Reel?", req: true },
    { id: "q5", label: "If two team members have a creative conflict during a shoot, how would you handle it?", req: true }
  ],

  "PR (Public Relations)": [
    { id: "q1", label: "Why do you want to join the PR team of TEDxIGDTUW?", req: true },
    { id: "q2", label: "What is one key interpersonal or pitching skill you possess that will help the PR team?", req: true },
    { id: "q3", label: "PR involves rejection, follow-ups, and last-minute work. How would you stay motivated and handle such situations?", req: true },
    { id: "q4", label: "Suppose TEDxIGDTUW has an event next week, but registrations are very low. What immediate actions would you take to boost reach?", req: true },
    { id: "q5", label: "Draft a 2-line persuasive cold message inviting a guest or college society to collaborate.", req: true }
  ],

  "Creative, Strategy and Design": [
    { id: "q1", label: "What is your design philosophy? Mention the tools you use such as Figma, Illustrator, Photoshop, or Canva.", req: true },
    { id: "q2", label: "Share a link to your design portfolio, Behance, or Google Drive.", req: true },
    { id: "q3", label: "How do you approach designing a fresh brand visual identity from scratch?", req: true },
    { id: "q4", label: "How do you react to critical feedback or requests to completely redesign a piece of artwork?", req: true },
    { id: "q5", label: "Describe a recent brand campaign or visual banner design that inspired you and explain why.", req: true }
  ],

  "Sponsorship and Strategic Alliances": [
    { id: "q1", label: "How would you convince a corporate sponsor to invest in a student-led TEDx event?", req: true },
    { id: "q2", label: "Draft a cold email opening line to a prospective brand partner.", req: true },
    { id: "q3", label: "How would you handle a situation where a key sponsor pulls out 3 days before the event?", req: true },
    { id: "q4", label: "What unique deliverables can TEDx offer a sponsor beyond putting their logo on posters?", req: true },
    { id: "q5", label: "Share any previous experience you have in negotiating, pitching, or securing partnerships.", req: false }
  ]
};

/* ================= NAVIGATION ================= */

function goToPage(pageNumber) {
  const currentActivePage = getCurrentActivePageNumber();

  /* Validate current page before moving forward */
  if (pageNumber > currentActivePage) {
    if (!validatePage(currentActivePage)) {
      alert("Please fill in all required fields accurately before proceeding.");
      return;
    }
  }

  /* Page 2 requires a selected domain */
  if (pageNumber === 2 && !document.getElementById("domain").value) {
    alert("Please choose your audition role first.");
    return;
  }

  /* Toggle theme override for Page 1 */
  if (pageNumber === 1) {
    document.body.classList.add("page-1-active");
  } else {
    document.body.classList.remove("page-1-active");
  }

  /* Update page visibility */
  document.querySelectorAll(".form-page").forEach(page => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(`page-${pageNumber}`);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  /* Update progress bar indicators */
  for (let i = 1; i <= 3; i++) {
    const dot = document.getElementById(`step-dot-${i}`);
    if (!dot) continue;

    if (i <= pageNumber) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  }

  /* Render domain character info when Page 2 opens */
  if (pageNumber === 2) {
    renderCharacterExperience();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function getCurrentActivePageNumber() {
  const activePage = document.querySelector(".form-page.active");

  if (!activePage) return 1;

  switch (activePage.id) {
    case "page-1":
      return 1;
    case "page-2":
      return 2;
    case "page-3":
      return 3;
    default:
      return 1;
  }
}

/* ================= CHARACTER PREVIEWS ================= */

function updateCastingPreview() {
  const domain = document.getElementById("domain").value;
  const preview = document.getElementById("castingPreview");
  const character = document.getElementById("previewCharacter");
  const description = document.getElementById("previewDescription");

  if (!domain || !domainData[domain]) {
    preview.classList.remove("revealed");
    character.textContent = "Choose a domain to reveal your character.";
    description.textContent = "Your Bollywood alter ego will appear here.";
    return;
  }

  const data = domainData[domain];

  preview.classList.add("revealed");
  character.textContent = `${data.icon} ${data.character} — ${data.role}`;
  description.textContent = data.tagline;
}

function renderCharacterExperience() {
  const domain = document.getElementById("domain").value;

  if (!domain || !domainData[domain]) return;

  const data = domainData[domain];

  const characterIcon = document.getElementById("characterIcon");
  const characterName = document.getElementById("characterName");
  const characterTagline = document.getElementById("characterTagline");
  const characterQuote = document.getElementById("characterQuote");
  const domainDescription = document.getElementById("domain-title-desc");
  const characterCard = document.getElementById("characterCard");

  if (characterIcon) {
    characterIcon.textContent = data.icon;
  }

  if (characterName) {
    characterName.textContent = `${data.character} — ${data.role}`;
  }

  if (characterTagline) {
    characterTagline.textContent = data.tagline;
  }

  if (characterQuote) {
    characterQuote.textContent = data.quote;
  }

  if (domainDescription) {
    domainDescription.textContent =
      `You've been cast as ${data.character}. Now let's see how you handle your scene.`;
  }

  if (characterCard) {
    characterCard.classList.add("revealed");
  }
}

/* ================= DYNAMIC DOMAIN QUESTIONS ================= */

function renderDomainQuestions() {
  const selectedDomain = document.getElementById("domain").value;
  const container = document.getElementById("dynamic-domain-questions");

  if (!container) return;

  container.innerHTML = "";

  if (!selectedDomain || !domainQuestions[selectedDomain]) {
    return;
  }

  domainQuestions[selectedDomain].forEach((question) => {
    const group = document.createElement("div");
    group.className = "form-group";

    const label = document.createElement("label");
    label.setAttribute("for", question.id);
    label.innerHTML =
      `${question.label} ${question.req ? '<span class="req">*</span>' : ''}`;

    const textarea = document.createElement("textarea");
    textarea.id = question.id;
    textarea.placeholder = "Type your answer here...";

    if (question.req) {
      textarea.required = true;
    }

    const errorSpan = document.createElement("span");
    errorSpan.className = "error-msg";
    errorSpan.id = `err-${question.id}`;
    errorSpan.innerText = "This field is required.";

    group.appendChild(label);
    group.appendChild(textarea);
    group.appendChild(errorSpan);

    container.appendChild(group);
  });
}

/* ================= VALIDATION ================= */

function validatePage(page) {
  let isValid = true;

  const currentPageEl = document.getElementById(`page-${page}`);

  if (!currentPageEl) return false;

  const inputs = currentPageEl.querySelectorAll(
    "input[required], select[required], textarea[required]"
  );

  inputs.forEach(input => {
    const parent =
      input.closest(".form-group") || input.parentElement;

    parent.classList.remove("invalid");

    const val = input.value ? input.value.trim() : "";

    if (!val) {
      parent.classList.add("invalid");
      isValid = false;
    } else if (
      input.id === "phone" &&
      !/^\d{10}$/.test(val)
    ) {
      parent.classList.add("invalid");
      isValid = false;
    } else if (
      input.id === "personalEmail" &&
      !val.toLowerCase().endsWith("@gmail.com")
    ) {
      parent.classList.add("invalid");
      isValid = false;
    }
  });

  return isValid;
}

/* ================= SUCCESS PAGE DISPLAY ================= */

function showSuccessPage() {
  const selectedDomain = document.getElementById("domain").value;
  const selectedData = domainData[selectedDomain];

  document.body.classList.remove("page-1-active");

  document.querySelectorAll(".form-page").forEach(page => {
    page.classList.remove("active");
  });

  const successPage = document.getElementById("page-success");

  if (successPage) {
    successPage.classList.add("active");
  }

  const successRole = document.getElementById("successRole");

  if (successRole && selectedData) {
    successRole.textContent =
      `${selectedData.icon} ${selectedDomain}`;
  }

  document.querySelectorAll(".step-indicator").forEach(dot => {
    dot.classList.remove("active");
  });

  let seconds = 7;
  const countdownEl = document.getElementById("countdown");

  const timer = setInterval(() => {
    seconds--;

    if (countdownEl) {
      countdownEl.innerText = seconds;
    }

    if (seconds <= 0) {
      clearInterval(timer);
      window.location.href = "https://tedx-igdtuw.vercel.app/";
    }
  }, 1000);
}

/* ================= EVENT LISTENERS & FORM SUBMISSION ================= */

document.addEventListener("DOMContentLoaded", () => {
  /* Set initial theme override for Page 1 */
  document.body.classList.add("page-1-active");

  const domainSelect = document.getElementById("domain");

  if (domainSelect) {
    domainSelect.addEventListener("change", () => {
      renderDomainQuestions();
      updateCastingPreview();
    });
  }

  const form = document.getElementById("recruitmentForm");

  if (!form) return;

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    if (!validatePage(3)) {
      alert("Please complete all required fields on this page.");
      return;
    }

    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "🎬 ROLLING CREDITS...";
    }

    /* Collect all candidate details and domain answers */
    const selectedDomain = document.getElementById("domain").value;

    const formData = {
      fullName: document.getElementById("fullName").value.trim(),
      enrollmentNum: document.getElementById("enrollmentNum").value.trim(),
      year: document.getElementById("year").value,
      branch: document.getElementById("branch").value,
      phone: document.getElementById("phone").value.trim(),
      personalEmail: document.getElementById("personalEmail").value.trim(),
      collegeEmail:
        document.getElementById("collegeEmail").value.trim() || "N/A",

      domain: selectedDomain,

      /* Backend-required character persona */
      characterPersona: domainData[selectedDomain].character,

      q1: document.getElementById("q1")
        ? document.getElementById("q1").value.trim()
        : "",

      q2: document.getElementById("q2")
        ? document.getElementById("q2").value.trim()
        : "",

      q3: document.getElementById("q3")
        ? document.getElementById("q3").value.trim()
        : "",

      q4: document.getElementById("q4")
        ? document.getElementById("q4").value.trim()
        : "",

      q5: document.getElementById("q5")
        ? document.getElementById("q5").value.trim()
        : "",

      socialFollow: document.getElementById("socialFollow").value,
      socialHandle: document.getElementById("socialHandle").value.trim()
    };

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === "SUCCESS") {
        showSuccessPage();

      } else if (result.code === "DUPLICATE_ENTRY") {
        alert("This enrollment number has already been registered!");

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = "🎬 SUBMIT MY AUDITION";
        }

      } else {
        throw new Error(
          result.message || "Form submission failed."
        );
      }

    } catch (error) {
      console.error("Submission Error:", error);

      alert(
        "There was an issue submitting your audition. Please check your internet connection or try again."
      );

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "🎬 SUBMIT MY AUDITION";
      }
    }
  });
});
